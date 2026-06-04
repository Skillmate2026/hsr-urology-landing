"use client";
import { useState, FormEvent } from "react";
import { submitLead } from "../lib/leads";

export default function HeroLeadForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    submitLead({ mode: "book", location: "hero_form", ...formData });
  };

  return (
    <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100 w-full max-w-md mx-auto lg:mx-0">
      <h3 className="text-2xl font-bold text-[#073d55]">Book a Consultation</h3>
      <p className="text-sm text-gray-500 mt-1 mb-6">
        Share your details and our team will reach out to confirm your appointment.
      </p>
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
          className="w-full bg-[#8b0000] hover:bg-[#6b0000] text-white font-semibold py-3.5 rounded-md transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting…" : "Book Consultation"}
        </button>
        <p className="text-xs text-gray-500 text-center mt-3">
          Your information is secure and confidential.
        </p>
      </form>
    </div>
  );
}
