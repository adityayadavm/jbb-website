"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

type Field = "name" | "phone" | "email" | "qualification" | "duration" | "message";

const DURATION_OPTIONS = [
  "2 Months",
  "3 Months",
  "4 Months",
  "6 Months",
  "Flexible / To be decided",
];

export default function TrainingForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", qualification: "", duration: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e: Partial<Record<Field, string>> = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!/^\+?[\d\s\-()]{8,15}$/.test(form.phone)) e.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.qualification.trim()) e.qualification = "Please enter your qualification.";
    if (!form.duration) e.duration = "Please select a preferred duration.";
    if (form.message.trim().length < 20) e.message = "Please add a brief message (min 20 characters).";
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as Field]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  }

  /* ── Success state ── */
  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.30)" }}>
          <CheckCircle2 size={32} style={{ color: "#10b981" }} />
        </div>
        <h3 className="font-semibold text-xl" style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-900)" }}>
          Application Received!
        </h3>
        <p className="text-sm leading-relaxed max-w-sm" style={{ color: "var(--color-grey-600)" }}>
          Thank you for your interest in JBB Training Programs. Our team will contact you within 1 business day to discuss next steps.
        </p>
      </div>
    );
  }

  const inputBase = "w-full px-4 py-3 text-sm rounded border outline-none transition-all duration-200 bg-white";
  const inputNormal = `${inputBase}` + " border-[var(--color-grey-200)] text-[var(--color-navy-900)] placeholder-[var(--color-grey-400)] focus:border-[var(--color-gold-500)] focus:ring-2 focus:ring-[var(--color-gold-500)]/10";
  const inputError  = `${inputBase}` + " border-red-400 focus:border-red-400";

  function field(key: Field) { return errors[key] ? inputError : inputNormal; }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Row: Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[10px] font-semibold uppercase tracking-[0.14em] mb-1.5" style={{ color: "var(--color-grey-700)" }}>
            Full Name <span style={{ color: "#dc2626" }}>*</span>
          </label>
          <input name="name" type="text" placeholder="e.g. Priya Sharma" value={form.name} onChange={handleChange} className={field("name")} />
          {errors.name && <p className="text-[10px] text-red-500 mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-[10px] font-semibold uppercase tracking-[0.14em] mb-1.5" style={{ color: "var(--color-grey-700)" }}>
            Phone Number <span style={{ color: "#dc2626" }}>*</span>
          </label>
          <input name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} className={field("phone")} />
          {errors.phone && <p className="text-[10px] text-red-500 mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-[10px] font-semibold uppercase tracking-[0.14em] mb-1.5" style={{ color: "var(--color-grey-700)" }}>
          Email Address <span style={{ color: "#dc2626" }}>*</span>
        </label>
        <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} className={field("email")} />
        {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email}</p>}
      </div>

      {/* Row: Qualification + Duration */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[10px] font-semibold uppercase tracking-[0.14em] mb-1.5" style={{ color: "var(--color-grey-700)" }}>
            Education / Qualification <span style={{ color: "#dc2626" }}>*</span>
          </label>
          <input name="qualification" type="text" placeholder="e.g. B.Com, CA Student, MBA" value={form.qualification} onChange={handleChange} className={field("qualification")} />
          {errors.qualification && <p className="text-[10px] text-red-500 mt-1">{errors.qualification}</p>}
        </div>
        <div>
          <label className="block text-[10px] font-semibold uppercase tracking-[0.14em] mb-1.5" style={{ color: "var(--color-grey-700)" }}>
            Preferred Duration <span style={{ color: "#dc2626" }}>*</span>
          </label>
          <select name="duration" value={form.duration} onChange={handleChange} className={field("duration")} style={{ color: form.duration ? "var(--color-navy-900)" : "var(--color-grey-400)" }}>
            <option value="" disabled>Select duration...</option>
            {DURATION_OPTIONS.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
          {errors.duration && <p className="text-[10px] text-red-500 mt-1">{errors.duration}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-[10px] font-semibold uppercase tracking-[0.14em] mb-1.5" style={{ color: "var(--color-grey-700)" }}>
          Message / Background <span style={{ color: "#dc2626" }}>*</span>
        </label>
        <textarea name="message" rows={4} placeholder="Tell us about your background, goals, and why you're interested in the training program..." value={form.message} onChange={handleChange} className={field("message")} style={{ resize: "vertical" }} />
        {errors.message && <p className="text-[10px] text-red-500 mt-1">{errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-4 rounded font-semibold text-sm uppercase tracking-widest transition-all duration-200"
        style={{
          background: loading ? "rgba(201,168,76,0.7)" : "var(--color-gold-500)",
          color: "var(--color-navy-900)",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={15} />}
        {loading ? "Submitting..." : "Submit Application"}
      </button>

      <p className="text-[10px] text-center" style={{ color: "var(--color-grey-400)" }}>
        Your information is kept strictly confidential and will only be used to process your training enquiry.
      </p>
    </form>
  );
}
