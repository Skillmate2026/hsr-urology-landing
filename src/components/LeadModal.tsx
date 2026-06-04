"use client";
import { useState, useEffect, FormEvent } from "react";
import { captureUtms, submitLead, type LeadMode } from "../lib/leads";

type LeadModalData = { mode: LeadMode; location: string } | null;

const COPY = {
  whatsapp: {
    title: "Chat with us on WhatsApp",
    subtitle: "Share your details and we'll continue the conversation on WhatsApp.",
    submit: "Continue to WhatsApp",
    submitting: "Opening WhatsApp…",
  },
  book: {
    title: "Book a Consultation",
    subtitle: "Tell us how to reach you and we'll take you to the booking page.",
    submit: "Request Appointment",
    submitting: "Submitting…",
  },
};

export default function LeadModal({ data, onClose }: { data: LeadModalData; onClose: () => void }) {
  const mode = data?.mode ?? null;
  const location = data?.location ?? "";
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [utms, setUtms] = useState({ utm_source: "", utm_medium: "", utm_campaign: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setUtms(captureUtms());
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!mode) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mode, onClose]);

  if (!mode) return null;

  const copy = COPY[mode];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    submitLead({ mode, location, ...formData, utms });
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white text-gray-900 p-6 md:p-8 rounded-xl shadow-2xl border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-2xl font-bold text-[#073d55] mb-1 pr-8">{copy.title}</h3>
        <p className="text-sm text-gray-500 mb-6">{copy.subtitle}</p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#073d55] focus:outline-none"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#073d55] focus:outline-none"
              placeholder="10-digit mobile number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <textarea
              rows={3}
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#073d55] focus:outline-none"
              placeholder="Describe your symptoms or query"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#8b0000] hover:bg-[#6b0000] text-white font-semibold py-3 rounded-md transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? copy.submitting : copy.submit}
          </button>
          <p className="text-xs text-gray-500 text-center mt-3">
            Your information is secure and confidential.
          </p>
        </form>
      </div>
    </div>
  );
}
