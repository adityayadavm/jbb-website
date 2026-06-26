import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

/* ─── Types ──────────────────────────────────────────────────── */
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

/* ─── Constants ──────────────────────────────────────────────── */
const LEADS_FILE = path.join(process.cwd(), "data", "contact_leads.json");
const NOTIFY_TO = process.env.NOTIFY_TO ?? "info@jbbadvisors.com";
const SMTP_FROM = `"${process.env.SMTP_FROM_NAME ?? "JBB Website"}" <${process.env.SMTP_USER ?? "noreply@jbbadvisors.com"}>`;

/* ─── Validation helpers ─────────────────────────────────────── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Indian phone: optional +91/0, then 10 digits (starts with 6-9)
const PHONE_RE = /^(\+91|0)?[6-9]\d{9}$/;

function validateBody(body: Record<string, unknown>): string | null {
  const { name, email, phone, service, message } = body;
  if (!name || typeof name !== "string" || name.trim().length < 2)
    return "Name is required (minimum 2 characters).";
  if (!email || typeof email !== "string" || !EMAIL_RE.test(email.trim()))
    return "A valid email address is required.";
  const normalizedPhone = typeof phone === "string"
    ? phone.trim().replace(/[\s\-\(\)]/g, "")
    : "";
  if (!normalizedPhone || !PHONE_RE.test(normalizedPhone))
    return "A valid 10-digit Indian mobile number is required.";
  if (!service || typeof service !== "string" || service.trim().length === 0)
    return "Please select a service.";
  if (!message || typeof message !== "string" || message.trim().length < 20)
    return "Message must be at least 20 characters.";
  return null;
}

/* ─── Persistent storage (JSON file) ────────────────────────── */
async function saveLead(lead: ContactLead): Promise<void> {
  let leads: ContactLead[] = [];
  try {
    const raw = await fs.readFile(LEADS_FILE, "utf-8");
    leads = JSON.parse(raw);
  } catch {
    // File doesn't exist yet — start fresh
    leads = [];
  }
  leads.push(lead);
  await fs.mkdir(path.dirname(LEADS_FILE), { recursive: true });
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

/* ─── Email notification ─────────────────────────────────────── */
function buildEmailHtml(lead: ContactLead): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Consultation Request</title>
</head>
<body style="margin:0;padding:0;background:#f8f8fc;font-family:'Inter',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f8fc;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 24px rgba(10,22,40,0.10);">
          <!-- Header -->
          <tr>
            <td style="background:#0A1628;padding:28px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;color:#C9A84C;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">JBB Business Advisors</p>
                    <h1 style="margin:6px 0 0;color:#ffffff;font-size:20px;font-weight:700;">New Consultation Request</h1>
                  </td>
                  <td align="right">
                    <div style="background:#C9A84C;border-radius:50%;width:44px;height:44px;display:inline-flex;align-items:center;justify-content:center;">
                      <span style="color:#0A1628;font-size:18px;font-weight:900;">JBB</span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Gold accent line -->
          <tr>
            <td style="background:linear-gradient(90deg,#C9A84C,#d4b86a,#C9A84C);height:3px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px 36px;">
              <p style="margin:0 0 24px;color:#6b6b8a;font-size:14px;line-height:1.6;">
                A new consultation request was submitted via the JBB website contact form. Details are below.
              </p>
              <!-- Details table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                ${[
                  ["Full Name", lead.name],
                  ["Email Address", lead.email],
                  ["Phone Number", lead.phone],
                  ["Service Requested", lead.service],
                  ["Submission Time", new Date(lead.created_at).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "full", timeStyle: "short" })],
                ].map(([label, value], i) => `
                <tr style="background:${i % 2 === 0 ? "#f8f8fc" : "#ffffff"};">
                  <td style="padding:12px 16px;font-size:11px;font-weight:700;color:#a07d2e;text-transform:uppercase;letter-spacing:1px;width:36%;border-bottom:1px solid #f0f0f5;">${label}</td>
                  <td style="padding:12px 16px;font-size:13px;color:#0A1628;font-weight:500;border-bottom:1px solid #f0f0f5;">${value}</td>
                </tr>`).join("")}
              </table>
              <!-- Message -->
              <div style="margin-top:24px;background:#f0f4fb;border-left:3px solid #C9A84C;border-radius:0 6px 6px 0;padding:16px 20px;">
                <p style="margin:0 0 8px;font-size:11px;font-weight:700;color:#a07d2e;text-transform:uppercase;letter-spacing:1px;">Message</p>
                <p style="margin:0;font-size:13px;color:#3d3d5c;line-height:1.7;white-space:pre-wrap;">${lead.message}</p>
              </div>
              <!-- CTA -->
              <div style="margin-top:28px;text-align:center;">
                <a href="mailto:${lead.email}?subject=Re: Your consultation request with JBB Business Advisors" style="display:inline-block;background:#C9A84C;color:#0A1628;font-size:13px;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:4px;letter-spacing:0.5px;">
                  Reply to ${lead.name.split(" ")[0]} →
                </a>
              </div>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:20px 36px;background:#f0f0f5;border-top:1px solid #e8eef8;">
              <p style="margin:0;font-size:11px;color:#6b6b8a;text-align:center;">
                This email was automatically generated by the JBB website contact system. Lead ID: ${lead.id}
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

async function sendEmailNotification(lead: ContactLead): Promise<void> {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT ?? "587", 10);
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  // If SMTP credentials are not configured, log and skip silently
  if (!host || !user || !pass || user === "your-gmail@gmail.com") {
    console.warn(
      "[contact/api] ⚠️  SMTP not configured — skipping email notification. Lead saved to database."
    );
    return;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    tls: { rejectUnauthorized: false },
  });

  await transporter.sendMail({
    from: SMTP_FROM,
    to: NOTIFY_TO,
    replyTo: `"${lead.name}" <${lead.email}>`,
    subject: `New Consultation Request — ${lead.service}`,
    html: buildEmailHtml(lead),
    text: `
NEW CONSULTATION REQUEST — JBB Business Advisors
=================================================
Lead ID:    ${lead.id}
Submitted:  ${new Date(lead.created_at).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}

Name:       ${lead.name}
Email:      ${lead.email}
Phone:      ${lead.phone}
Service:    ${lead.service}

Message:
${lead.message}
`.trim(),
  });

  console.info(`[contact/api] ✉️  Email notification sent for lead ${lead.id}`);
}

/* ─── POST /api/contact ──────────────────────────────────────── */
export async function POST(req: NextRequest) {
  // ── 1. Parse body ────────────────────────────────────────────
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  // ── 2. Server-side validation ────────────────────────────────
  const validationError = validateBody(body);
  if (validationError) {
    console.warn(`[contact/api] Validation failed: ${validationError}`);
    return NextResponse.json(
      { success: false, error: validationError },
      { status: 422 }
    );
  }

  // ── 3. Build lead record ─────────────────────────────────────
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
    ip: req.headers.get("x-forwarded-for") ?? req.headers.get("x-real-ip") ?? "unknown",
  };

  console.info(
    `[contact/api] 📥 New lead received — ID: ${lead.id} | Name: ${lead.name} | Service: ${lead.service} | Email: ${lead.email}`
  );

  // ── 4. Persist to storage ────────────────────────────────────
  try {
    await saveLead(lead);
    console.info(`[contact/api] 💾 Lead ${lead.id} saved to database.`);
  } catch (err) {
    console.error("[contact/api] ❌ Failed to save lead:", err);
    return NextResponse.json(
      { success: false, error: "Database error. Please try again." },
      { status: 500 }
    );
  }

  // ── 5. Send email notification (non-blocking for UX) ─────────
  sendEmailNotification(lead).catch((err) => {
    console.error(`[contact/api] ❌ Email notification failed for ${lead.id}:`, err);
  });

  // ── 6. Return success ────────────────────────────────────────
  console.info(`[contact/api] ✅ Lead ${lead.id} processed successfully.`);
  return NextResponse.json(
    {
      success: true,
      message:
        "Thank you for contacting JBB Business Advisors. Our team will contact you shortly.",
      leadId: lead.id,
    },
    { status: 200 }
  );
}

/* ─── GET /api/contact — health check ───────────────────────── */
export async function GET() {
  return NextResponse.json({ status: "ok", endpoint: "POST /api/contact" });
}
