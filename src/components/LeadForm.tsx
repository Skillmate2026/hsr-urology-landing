"use client";
import { useState, useEffect, FormEvent } from "react";

export default function LeadForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [utms, setUtms] = useState({ source: "", medium: "", campaign: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtms({
      source: params.get("utm_source") || "",
      medium: params.get("utm_medium") || "",
      campaign: params.get("utm_campaign") || "",
    });
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = { ...formData, ...utms };

    try {
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "lead_form_has_been_filled",
          lead_type: "urology_consultation",
          form_data: payload
        });
      }

      await fetch("https://n8n.nomiris.com/webhook/hsrurology", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      alert("Thank you! Our clinic team will contact you shortly.");
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      console.error("Submission failed", error);
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Added text-gray-900 here to break the white text inheritance from the Hero section
    <div className="bg-white text-gray-900 p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-[#073d55] mb-6">Book a Consultation</h3>
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input 
            type="text" 
            required 
            // Added text-gray-900 and placeholder-gray-400 for visibility
            className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#073d55] focus:outline-none"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        {/* Mobile Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
          <input 
            type="tel" 
            required 
            pattern="[0-9]{10}"
            // Added text-gray-900 and placeholder-gray-400 for visibility
            className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#073d55] focus:outline-none"
            placeholder="Mobile number"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>

        {/* Concern/Message Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Concern *</label>
          <textarea 
            required
            rows={3}
            // Added text-gray-900 and placeholder-gray-400 for visibility
            className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#073d55] focus:outline-none"
            placeholder="Describe your symptoms or query"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-[#8b0000] hover:bg-[#6b0000] text-white font-semibold py-3 rounded-md transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Request Appointment"}
        </button>
        <p className="text-xs text-gray-500 text-center mt-3">Your information is secure and confidential.</p>
        
      </form>
    </div>
  );
}