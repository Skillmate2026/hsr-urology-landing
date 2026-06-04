// Shared lead-capture logic used by the hero inline form and the LeadModal.

export type LeadMode = "whatsapp" | "book";

export const WEBHOOK_URL = "https://n8n.nomiris.com/webhook/hsrurology";
export const WHATSAPP_NUMBER = "919054255425";
export const BOOKING_URL = "https://irohealth.com/c/hsr-urology-clinic";

export type Utms = { utm_source: string; utm_medium: string; utm_campaign: string };

export function captureUtms(): Utms {
  if (typeof window === "undefined") {
    return { utm_source: "", utm_medium: "", utm_campaign: "" };
  }
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
  };
}

/**
 * Pushes the conversion event to GTM, posts the lead to the webhook (keepalive so
 * it survives the redirect), then redirects to WhatsApp or the booking page.
 */
export function submitLead(args: {
  mode: LeadMode;
  location: string;
  name: string;
  phone: string;
  message: string;
  utms: Utms;
}) {
  const { mode, location, name, phone, message, utms } = args;

  // Normalize to E.164 (+91) for Google Ads enhanced conversions
  const phone10 = phone.replace(/\D/g, "").slice(-10);
  const phoneE164 = phone10 ? `+91${phone10}` : phone;

  const payload = { name, phone, message, lead_type: mode, cta_location: location, ...utms };

  // 1. GTM conversion custom event (pushed synchronously before the redirect)
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: mode === "whatsapp" ? "whatsapp_lead" : "book_appointment_lead",
      lead_type: mode,
      cta_location: location,
      form_name: name,
      form_phone: phoneE164,
      ...utms,
    });
  }

  // 2. Push to webhook - keepalive lets it survive the immediate redirect
  fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});

  // 3. Redirect to the destination
  if (mode === "whatsapp") {
    const text = `Hi, I'm ${name} (${phone}).${message ? " " + message : ""}`;
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  } else {
    window.location.href = BOOKING_URL;
  }
}
