import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import crypto from "crypto";

/**
 * ─── Contact Form API Route ───────────────────────────────────────────────────
 *
 * VERCEL DEPLOYMENT — REQUIRED ENVIRONMENT VARIABLES:
 * ----------------------------------------------------
 * Set these in your Vercel project → Settings → Environment Variables:
 *
 *   SMTP_HOST          SMTP server hostname        e.g. smtp.gmail.com
 *   SMTP_PORT          SMTP port                   e.g. 587  (TLS) or 465 (SSL)
 *   SMTP_SECURE        Use SSL (true/false)        e.g. false  (for port 587)
 *   SMTP_USER          SMTP login / sender email   e.g. yourname@gmail.com
 *   SMTP_PASS          SMTP password or App Pass   e.g. xxxx xxxx xxxx xxxx
 *   CONTACT_TO_EMAIL   Recipient for leads         e.g. info@jbbadvisors.com
 *
 * Gmail tip: Enable 2-Step Verification → generate a 16-char App Password at
 *   https://myaccount.google.com/apppasswords — use that as SMTP_PASS.
 *
 * NOTE: This route intentionally has NO filesystem writes. Vercel serverless
 *       functions run on a read-only filesystem; writing JSON files will always
 *       fail in production. Email is the sole submission channel.
 */

/* ─── Types ──────────────────────────────────────────────────────────────── */
interface ContactLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  created_at: string;
  ip?: string;
}

/* ─── Constants ──────────────────────────────────────────────────────────── */
// Supports BOTH env var names: CONTACT_TO_EMAIL (new) or NOTIFY_TO (legacy).
// Set either one in Vercel → Settings → Environment Variables.
const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL ??
  process.env.NOTIFY_TO ??
  "info@jbbadvisors.com";

const SMTP_FROM_NAME = process.env.SMTP_FROM_NAME ?? "JBB Website Contact Form";

/* ─── Validation ─────────────────────────────────────────────────────────── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^(\+91|0)?[6-9]\d{9}$/;

function validateBody(body: Record<string, unknown>): string | null {
  const { name, email, phone, service, message } = body;
  if (!name || typeof name !== "string" || name.trim().length < 2)
    return "Name is required (minimum 2 characters).";
  if (!email || typeof email !== "string" || !EMAIL_RE.test(email.trim()))
    return "A valid email address is required.";
  const normalizedPhone =
    typeof phone === "string" ? phone.trim().replace(/[\s\-\(\)]/g, "") : "";
  if (!normalizedPhone || !PHONE_RE.test(normalizedPhone))
    return "A valid 10-digit Indian mobile number is required.";
  if (!service || typeof service !== "string" || service.trim().length === 0)
    return "Please select a service.";
  if (!message || typeof message !== "string" || message.trim().length < 20)
    return "Message must be at least 20 characters.";
  return null;
}

/* ─── Email HTML builder ─────────────────────────────────────────────────── */
function buildEmailHtml(lead: ContactLead): string {
  const submittedAt = new Date(lead.created_at).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  const rows = [
    ["Full Name", lead.name],
    ["Email Address", lead.email],
    ["Phone Number", lead.phone],
    ["Service Requested", lead.service],
    ["Submission Time (IST)", submittedAt],
  ];

  const rowsHtml = rows
    .map(
      ([label, value], i) => `
      <tr style="background:${i % 2 === 0 ? "#f8f8fc" : "#ffffff"};">
        <td style="padding:12px 16px;font-size:11px;font-weight:700;color:#a07d2e;
                   text-transform:uppercase;letter-spacing:1px;width:36%;
                   border-bottom:1px solid #f0f0f5;">${label}</td>
        <td style="padding:12px 16px;font-size:13px;color:#0A1628;font-weight:500;
                   border-bottom:1px solid #f0f0f5;">${value}</td>
      </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Consultation Request — JBB Business Advisors</title>
</head>
<body style="margin:0;padding:0;background:#f8f8fc;font-family:'Inter',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f8fc;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0"
               style="background:#ffffff;border-radius:8px;overflow:hidden;
                      box-shadow:0 4px 24px rgba(10,22,40,0.10);">
          <!-- Header -->
          <tr>
            <td style="background:#0A1628;padding:28px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;color:#C9A84C;font-size:11px;font-weight:600;
                              letter-spacing:2px;text-transform:uppercase;">
                      JBB Business Advisors
                    </p>
                    <h1 style="margin:6px 0 0;color:#ffffff;font-size:20px;font-weight:700;">
                      New Consultation Request
                    </h1>
                  </td>
                  <td align="right">
                    <div style="background:#C9A84C;border-radius:50%;width:44px;height:44px;
                                display:inline-flex;align-items:center;justify-content:center;">
                      <span style="color:#0A1628;font-size:16px;font-weight:900;">JBB</span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Gold accent line -->
          <tr>
            <td style="background:linear-gradient(90deg,#C9A84C,#d4b86a,#C9A84C);
                       height:3px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px 36px;">
              <p style="margin:0 0 24px;color:#6b6b8a;font-size:14px;line-height:1.6;">
                A new consultation request was submitted via the JBB website contact form.
                Details are below.
              </p>
              <!-- Details table -->
              <table width="100%" cellpadding="0" cellspacing="0"
                     style="border-collapse:collapse;">
                ${rowsHtml}
              </table>
              <!-- Message -->
              <div style="margin-top:24px;background:#f0f4fb;border-left:3px solid #C9A84C;
                          border-radius:0 6px 6px 0;padding:16px 20px;">
                <p style="margin:0 0 8px;font-size:11px;font-weight:700;color:#a07d2e;
                           text-transform:uppercase;letter-spacing:1px;">Message</p>
                <p style="margin:0;font-size:13px;color:#3d3d5c;line-height:1.7;
                           white-space:pre-wrap;">${lead.message}</p>
              </div>
              <!-- CTA -->
              <div style="margin-top:28px;text-align:center;">
                <a href="mailto:${lead.email}?subject=Re: Your consultation request with JBB Business Advisors"
                   style="display:inline-block;background:#C9A84C;color:#0A1628;font-size:13px;
                          font-weight:700;text-decoration:none;padding:12px 28px;border-radius:4px;
                          letter-spacing:0.5px;">
                  Reply to ${lead.name.split(" ")[0]} →
                </a>
              </div>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:20px 36px;background:#f0f0f5;border-top:1px solid #e8eef8;">
              <p style="margin:0;font-size:11px;color:#6b6b8a;text-align:center;">
                This email was automatically generated by the JBB website contact system.
                Lead ID: ${lead.id}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/* ─── Email sender ───────────────────────────────────────────────────────── */
async function sendEmailNotification(lead: ContactLead): Promise<void> {
  // Read SMTP config from environment
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  // Supports CONTACT_TO_EMAIL or NOTIFY_TO — resolved at module level
  const recipient = CONTACT_TO_EMAIL;

  // ── Diagnostic: log resolved config (no password) ──────────────────────────
  console.info("[contact/api] 📧 SMTP config:", {
    host: host ?? "(not set)",
    port,
    secure,
    user: user ?? "(not set)",
    passSet: !!pass,
    recipient,
    fromName: SMTP_FROM_NAME,
    envVarUsed:
      process.env.CONTACT_TO_EMAIL
        ? "CONTACT_TO_EMAIL"
        : process.env.NOTIFY_TO
        ? "NOTIFY_TO"
        : "(hardcoded fallback)",
  });

  // Guard: all SMTP credentials must be present
  if (!host || !user || !pass) {
    const missing = [
      !host && "SMTP_HOST",
      !user && "SMTP_USER",
      !pass && "SMTP_PASS",
    ]
      .filter(Boolean)
      .join(", ");
    throw new Error(
      `SMTP credentials are not configured — missing: ${missing}. ` +
        "Set them in Vercel → Settings → Environment Variables."
    );
  }

  const smtpFrom = `"${SMTP_FROM_NAME}" <${user}>`;

  const submittedAt = new Date(lead.created_at).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    tls: { rejectUnauthorized: false },
  });

  // Verify SMTP connection before sending (surfaces auth errors immediately)
  try {
    await transporter.verify();
    console.info("[contact/api] ✅ SMTP connection verified.");
  } catch (verifyErr: unknown) {
    const e = verifyErr as NodeJS.ErrnoException & {
      code?: string;
      responseCode?: number;
      response?: string;
      command?: string;
    };
    // ── DETAILED diagnostic log — visible in Vercel Function Logs ──────────
    console.error("[contact/api] ❌ SMTP verify failed:", {
      message:      e?.message,
      code:         e?.code,          // e.g. ECONNREFUSED, ETIMEDOUT, EAUTH
      responseCode: e?.responseCode,  // e.g. 535 (auth failed), 534, 530
      response:     e?.response,      // raw SMTP server response string
      command:      e?.command,       // SMTP command that triggered the error
      stack:        e?.stack,
    });
    throw new Error(
      `SMTP connection failed (${e?.code ?? "unknown"} — ${e?.message}). ` +
        "Check SMTP credentials and Vercel env vars."
    );
  }

  await transporter.sendMail({
    from: smtpFrom,
    to: recipient,
    replyTo: `"${lead.name}" <${lead.email}>`,
    subject: `New Consultation Request — ${lead.service}`,
    html: buildEmailHtml(lead),
    text: `
NEW CONSULTATION REQUEST — JBB Business Advisors
=================================================
Lead ID:    ${lead.id}
Submitted:  ${submittedAt} (IST)

Name:       ${lead.name}
Email:      ${lead.email}
Phone:      ${lead.phone}
Service:    ${lead.service}

Message:
${lead.message}
    `.trim(),
  });

  console.info(
    `[contact/api] ✉️  Email sent for lead ${lead.id} → ${recipient}`
  );
}

/* ─── POST /api/contact ──────────────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  // ── 1. Parse body ──────────────────────────────────────────────────────────
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  // ── 2. Server-side validation ──────────────────────────────────────────────
  const validationError = validateBody(body);
  if (validationError) {
    console.warn(`[contact/api] Validation failed: ${validationError}`);
    return NextResponse.json(
      { success: false, error: validationError },
      { status: 422 }
    );
  }

  // ── 3. Build lead record ───────────────────────────────────────────────────
  const normalizedPhone = (body.phone as string)
    .trim()
    .replace(/[\s\-\(\)]/g, "");

  const lead: ContactLead = {
    id: `LEAD-${Date.now()}-${crypto.randomBytes(4).toString("hex").toUpperCase()}`,
    name: (body.name as string).trim(),
    email: (body.email as string).trim().toLowerCase(),
    phone: normalizedPhone,
    service: (body.service as string).trim(),
    message: (body.message as string).trim(),
    created_at: new Date().toISOString(),
    ip:
      req.headers.get("x-forwarded-for") ??
      req.headers.get("x-real-ip") ??
      "unknown",
  };

  console.info(
    `[contact/api] 📥 New lead — ID: ${lead.id} | Name: ${lead.name} | ` +
      `Service: ${lead.service} | Email: ${lead.email}`
  );

  // ── 4. Send email (primary & only storage on Vercel) ──────────────────────
  //
  //  ⚠️  We do NOT write to the local filesystem here.
  //  Vercel serverless functions have a read-only filesystem in production;
  //  any attempt to write files will throw and cause a 500 error.
  //  Email is the sole submission channel — ensure SMTP env vars are set.
  //
  try {
    await sendEmailNotification(lead);
  } catch (err: unknown) {
    // ── Full diagnostic dump — check Vercel Function Logs for this ────────────
    const e = err as NodeJS.ErrnoException & {
      code?: string;
      responseCode?: number;
      response?: string;
      command?: string;
    };
    console.error("[contact/api] ❌ Email send failed — full diagnostic:", {
      leadId:       lead.id,
      message:      e?.message,
      code:         e?.code,          // ECONNREFUSED / EAUTH / ETIMEDOUT etc.
      responseCode: e?.responseCode,  // SMTP numeric response (535 = auth error)
      response:     e?.response,      // Raw SMTP server message
      command:      e?.command,       // Which SMTP command failed
      smtpHost:     process.env.SMTP_HOST ?? "(not set)",
      smtpPort:     process.env.SMTP_PORT ?? "(not set)",
      smtpUser:     process.env.SMTP_USER ?? "(not set)",
      smtpPassSet:  !!process.env.SMTP_PASS,
      recipientEnv: process.env.CONTACT_TO_EMAIL ?? process.env.NOTIFY_TO ?? "(fallback)",
      stack:        e?.stack,
    });
    // Return a user-friendly error without exposing SMTP internals to the browser
    return NextResponse.json(
      {
        success: false,
        error:
          "We could not process your submission at this time. " +
          "Please try again or contact us directly at info@jbbadvisors.com.",
      },
      { status: 500 }
    );
  }

  // ── 5. Success ─────────────────────────────────────────────────────────────
  console.info(`[contact/api] ✅ Lead ${lead.id} processed successfully.`);
  return NextResponse.json(
    {
      success: true,
      message:
        "Thank you. Your consultation request has been submitted successfully.",
      leadId: lead.id,
    },
    { status: 200 }
  );
}

/* ─── GET /api/contact — health check ───────────────────────────────────── */
export async function GET() {
  return NextResponse.json({
    status: "ok",
    endpoint: "POST /api/contact",
    storage: "email-only (Vercel-compatible)",
  });
}
