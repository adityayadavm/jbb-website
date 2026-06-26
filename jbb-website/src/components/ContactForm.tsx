"use client";

import { useState, useCallback } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

/* ─── Constants ──────────────────────────────────────────────── */
const SERVICES = [
  "Business Formation & Advisory",
  "Accounting, Reporting & Assurance",
  "Direct Taxes & Compliance",
  "GST Advisory & Compliance",
  "Business Support Services",
  "Transaction Advisory Services",
  "FEMA & RBI Compliance",
  "Company Law & Secretarial Services",
  "Audit & Assurance",
  "Virtual CFO Services",
  "Other / General Enquiry",
];

/* ─── Types ──────────────────────────────────────────────────── */
interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

type Status = "idle" | "sending" | "success" | "error";

const EMPTY: FormState = { name: "", phone: "", email: "", service: "", message: "" };

/* ─── Validation ─────────────────────────────────────────────── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Indian phone: optional +91/0, 10 digits starting 6-9; spaces/dashes allowed
const PHONE_RE = /^(\+91|0)?[6-9]\d{9}$/;

function validate(form: FormState): Partial<FormState> {
  const e: Partial<FormState> = {};
  if (!form.name.trim() || form.name.trim().length < 2)
    e.name = "Full name is required.";
  if (!form.email.trim() || !EMAIL_RE.test(form.email.trim()))
    e.email = "Please enter a valid email address.";
  const phone = form.phone.trim().replace(/[\s\-\(\)]/g, "");
  if (!phone || !PHONE_RE.test(phone))
    e.phone = "Enter a valid 10-digit Indian mobile number.";
  if (!form.service)
    e.service = "Please select a service.";
  if (!form.message.trim() || form.message.trim().length < 20)
    e.message = "Please describe your requirement (minimum 20 characters).";
  return e;
}

/* ─── Styles ─────────────────────────────────────────────────── */
const INPUT_BASE =
  "w-full border rounded-sm px-4 py-3 text-sm text-[var(--color-navy-900)] bg-white " +
  "placeholder:text-[var(--color-grey-300)] focus:outline-none focus:ring-2 " +
  "focus:ring-[var(--color-gold-400)]/40 focus:border-[var(--color-gold-500)] " +
  "transition-all duration-200";
const INPUT_OK  = "border-[var(--color-grey-100)] hover:border-[var(--color-grey-300)]";
const INPUT_ERR = "border-red-400 bg-red-50/30 focus:ring-red-300/40 focus:border-red-400";

/* ─── Sub-components ─────────────────────────────────────────── */
function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="flex items-center gap-1.5 text-red-500 text-[11px] mt-1.5 font-medium" role="alert">
      <AlertCircle size={11} className="shrink-0" />
      {msg}
    </p>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[10px] font-bold text-[var(--color-navy-800)] mb-1.5 tracking-[0.12em] uppercase">
      {children}
    </label>
  );
}

/* ─── Success View ───────────────────────────────────────────── */
function SuccessView({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-8 min-h-[420px]">
      {/* Animated checkmark */}
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
          <CheckCircle2 size={38} className="text-green-500" />
        </div>
        <div className="absolute inset-0 rounded-full animate-ping bg-green-100 opacity-30" />
      </div>

      <h3
        className="text-2xl font-semibold mb-3"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}
      >
        Request Submitted!
      </h3>

      <p className="text-[var(--color-grey-600)] text-sm leading-relaxed max-w-xs mb-2">
        Thank you. Your consultation request has been submitted successfully.
      </p>
      <p className="text-[var(--color-grey-600)] text-sm leading-relaxed max-w-xs mb-7">
        Our team will contact you within{" "}
        <strong className="text-[var(--color-navy-900)]">24 business hours</strong>.
      </p>

      <div className="flex items-center gap-2 mb-8 px-4 py-2.5 rounded-full bg-[var(--color-gold-100)] border border-[var(--color-gold-300)]">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[var(--color-gold-700)] text-[11px] font-semibold uppercase tracking-wider">
          Lead Registered Successfully
        </span>
      </div>

      <button
        onClick={onReset}
        className="text-[var(--color-gold-600)] text-sm font-semibold hover:text-[var(--color-gold-500)] hover:underline transition-colors duration-200"
      >
        Send another message →
      </button>
    </div>
  );
}

/* ─── Toast Banner ───────────────────────────────────────────── */
function ErrorBanner({ msg, onDismiss }: { msg: string; onDismiss: () => void }) {
  return (
    <div
      className="flex items-start gap-3 p-4 mb-5 rounded border border-red-200 bg-red-50"
      role="alert"
      aria-live="assertive"
    >
      <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
      <div className="flex-1">
        <p className="text-red-700 text-sm font-semibold">Submission Failed</p>
        <p className="text-red-600 text-xs mt-0.5">{msg}</p>
      </div>
      <button
        onClick={onDismiss}
        className="text-red-400 hover:text-red-600 text-lg leading-none shrink-0"
        aria-label="Dismiss error"
      >
        ×
      </button>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */
export default function ContactForm() {
  const [form, setForm]     = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setForm((f) => ({ ...f, [name]: value }));
      // Clear field-level error on change
      setErrors((err) => ({ ...err, [name]: undefined }));
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Client-side validation gate
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      // Scroll to first error
      const firstErrField = Object.keys(fieldErrors)[0];
      document.getElementById(`field-${firstErrField}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:    form.name.trim(),
          email:   form.email.trim().toLowerCase(),
          phone:   form.phone.trim().replace(/[\s\-\(\)]/g, ""),
          service: form.service,
          message: form.message.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error ?? "Submission failed. Please try again.");
      }

      // Success
      setStatus("success");
      setForm(EMPTY);
      setErrors({});
    } catch (err: unknown) {
      // Show the server's user-friendly message if available,
      // otherwise fall back to a generic prompt.
      const msg =
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please try again or contact us at info@jbbadvisors.com.";
      setErrorMsg(msg);
      setStatus("error");
      console.error("[ContactForm] Submission error:", err);
    }
  };

  // ── Success screen ────────────────────────────────────────────
  if (status === "success") {
    return <SuccessView onReset={() => setStatus("idle")} />;
  }

  const isSending = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
      aria-label="Contact consultation form"
    >
      {/* Error banner */}
      {status === "error" && errorMsg && (
        <ErrorBanner
          msg={errorMsg}
          onDismiss={() => { setStatus("idle"); setErrorMsg(""); }}
        />
      )}

      {/* ── Row 1: Name + Phone ─────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div id="field-name">
          <Label>Full Name <span className="text-[var(--color-gold-600)]">*</span></Label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Rajesh Kumar"
            disabled={isSending}
            autoComplete="name"
            className={`${INPUT_BASE} ${errors.name ? INPUT_ERR : INPUT_OK} disabled:opacity-60 disabled:cursor-not-allowed`}
            aria-describedby={errors.name ? "err-name" : undefined}
            aria-invalid={!!errors.name}
          />
          <FieldError msg={errors.name} />
        </div>

        {/* Phone */}
        <div id="field-phone">
          <Label>Phone Number <span className="text-[var(--color-gold-600)]">*</span></Label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            disabled={isSending}
            autoComplete="tel"
            inputMode="tel"
            className={`${INPUT_BASE} ${errors.phone ? INPUT_ERR : INPUT_OK} disabled:opacity-60 disabled:cursor-not-allowed`}
            aria-invalid={!!errors.phone}
          />
          <FieldError msg={errors.phone} />
        </div>
      </div>

      {/* ── Email ───────────────────────────────────────────── */}
      <div id="field-email">
        <Label>Email Address <span className="text-[var(--color-gold-600)]">*</span></Label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@company.com"
          disabled={isSending}
          autoComplete="email"
          className={`${INPUT_BASE} ${errors.email ? INPUT_ERR : INPUT_OK} disabled:opacity-60 disabled:cursor-not-allowed`}
          aria-invalid={!!errors.email}
        />
        <FieldError msg={errors.email} />
      </div>

      {/* ── Service ─────────────────────────────────────────── */}
      <div id="field-service">
        <Label>Service Required <span className="text-[var(--color-gold-600)]">*</span></Label>
        <div className="relative">
          <select
            id="contact-service"
            name="service"
            value={form.service}
            onChange={handleChange}
            disabled={isSending}
            className={`${INPUT_BASE} ${errors.service ? INPUT_ERR : INPUT_OK} appearance-none cursor-pointer pr-10 disabled:opacity-60 disabled:cursor-not-allowed`}
            aria-invalid={!!errors.service}
          >
            <option value="" disabled>Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {/* Custom chevron */}
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[var(--color-gold-500)]">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
        <FieldError msg={errors.service} />
      </div>

      {/* ── Message ─────────────────────────────────────────── */}
      <div id="field-message">
        <Label>
          Message <span className="text-[var(--color-gold-600)]">*</span>
          <span className="ml-1.5 text-[var(--color-grey-400)] font-normal lowercase tracking-normal">
            ({form.message.trim().length}/20 min)
          </span>
        </Label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          disabled={isSending}
          placeholder="Briefly describe your requirement, business type, and any specific concerns…"
          className={`${INPUT_BASE} resize-none ${errors.message ? INPUT_ERR : INPUT_OK} disabled:opacity-60 disabled:cursor-not-allowed`}
          aria-invalid={!!errors.message}
        />
        <FieldError msg={errors.message} />
      </div>

      {/* ── Submit ──────────────────────────────────────────── */}
      <button
        id="contact-submit"
        type="submit"
        disabled={isSending}
        aria-busy={isSending}
        className={[
          "w-full flex items-center justify-center gap-2.5",
          "px-6 py-4 rounded-sm text-sm font-bold tracking-wide uppercase",
          "transition-all duration-300",
          isSending
            ? "bg-[var(--color-navy-700)] text-white/70 cursor-not-allowed"
            : "bg-[var(--color-navy-900)] text-white hover:bg-[var(--color-gold-500)] hover:text-[var(--color-navy-900)] hover:shadow-[0_4px_20px_rgba(201,168,76,0.45)] active:scale-[0.98]",
        ].join(" ")}
      >
        {isSending ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            <span>Submitting…</span>
          </>
        ) : (
          <>
            <Send size={15} />
            <span>Send Enquiry</span>
          </>
        )}
      </button>

      {/* Disclaimer */}
      <p className="text-[var(--color-grey-400)] text-[11px] text-center leading-relaxed">
        🔒 Your information is kept strictly confidential and will never be shared with third parties.
      </p>
    </form>
  );
}
