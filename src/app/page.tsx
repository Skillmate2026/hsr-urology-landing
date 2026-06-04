"use client";
import Image from "next/image";
import LeadForm from "../components/LeadForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect, FormEvent } from "react";

export default function UrologyLandingPage() {
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

  const handleStickySubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const payload = { ...formData, ...utms };

    try {
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "lead_form_has_been_filled",
          lead_type: "sticky_widget_consultation",
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
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: "whatsapp_click" });
    }
  };

  const handleCallClick = () => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: "call_click" });
    }
  };

  // --- High-Quality Dual-Tone Icons ---


const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    // Removed the border, increased size slightly, and made the rounding softer (squircle)
    <div className="w-16 h-16 bg-[#FDF8F3] rounded-[1.25rem] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
      {children}
    </div>
  );

  // 1. Time & Check (Matches Image 1)
  const TimeIcon = () => (
    <IconWrapper>
      <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10.5" cy="10.5" r="7.5" stroke="#1C448E" strokeWidth="1.8" />
        <path d="M10.5 7v3.5l2.5 1.5" stroke="#1C448E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 15.5l2 2 4.5-4.5" stroke="#D72828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </IconWrapper>
  );

  // 2. Doctor & Stethoscope (Matches Image 2)
const DoctorIcon = () => (
  <IconWrapper>
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head - slightly bigger */}
      <circle
        cx="12"
        cy="5.5"
        r="3"
        stroke="#1C448E"
        strokeWidth="1.8"
      />

      {/* Wider shoulders */}
      <path
        d="M7.5 11
           C8.8 9.3 10.3 8.5 12 8.5
           C13.7 8.5 15.2 9.3 16.5 11"
        stroke="#1C448E"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Body sides - taller */}
      <path
        d="M7.5 11V20"
        stroke="#1C448E"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M16.5 11V20"
        stroke="#1C448E"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Bottom coat curve */}
      <path
        d="M7.5 20C9 19.4 10.5 19 12 19C13.5 19 15 19.4 16.5 20"
        stroke="#1C448E"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Collar */}
      <path
        d="M10.3 11L12 13.2L13.7 11"
        stroke="#1C448E"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Stethoscope - unchanged size */}
      <path
        d="M11 12
           C11 13.5 11.5 14.5 12.3 15"
        stroke="#D72828"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M12.3 15
           C13.8 15.4 14.5 16.5 14.5 18"
        stroke="#D72828"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <circle
        cx="14.5"
        cy="19"
        r="1.2"
        fill="#D72828"
      />
    </svg>
  </IconWrapper>
);

  // 3. Shield & Heart (Matches Image 3)
  const ShieldIcon = () => (
    <IconWrapper>
      <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.5c-4.5-2.5-8-6.5-8-12V4.5l8-3 8 3v5c0 5.5-3.5 9.5-8 12z" stroke="#1C448E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        {/* Red Heart Detail */}
        <path d="M12 16l-1.2-1C8.2 12.7 6.5 11.2 6.5 9.5A2.5 2.5 0 0 1 9 7c1.4 0 2.3.8 3 1.7.7-.9 1.6-1.7 3-1.7A2.5 2.5 0 0 1 17.5 9.5c0 1.7-1.7 3.2-4.3 5.5L12 16z" stroke="#D72828" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </IconWrapper>
  );

  // 4. Kidney (Adapted to the exact same premium style)
  const KidneyIcon = () => (
    <IconWrapper>
      <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 4.5c3.5 0 5.5 3 4.5 7 -1 4 -3 7 -7.5 6 -4.5-1 -4-5.5 -2-6.5 1.5-.7 2-2 1.5-3.5C10 5.5 11.5 4.5 14 4.5z" stroke="#1C448E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.5 12.5v5.5" stroke="#D72828" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="11.5" cy="19.5" r="1.2" fill="#D72828" />
      </svg>
    </IconWrapper>
  );

  // 5. Warning / UTI (Adapted to the exact same premium style)
  const WarningIcon = () => (
    <IconWrapper>
      <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3a2 2 0 0 1 1.7 1l7 13A2 2 0 0 1 19 20H5a2 2 0 0 1-1.7-3l7-13A2 2 0 0 1 12 3z" stroke="#1C448E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 9v5" stroke="#D72828" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="17.5" r="1.2" fill="#D72828" />
      </svg>
    </IconWrapper>
  );

  const conditionsList = [
    { id: 1, title: 'Kidney stones', icon: <WarningIcon /> },
    { id: 2, title: 'Urinary tract infections (UTIs)', icon: <DoctorIcon /> },
    { id: 3, title: 'Bladder cancer', icon: <ShieldIcon /> },
    { id: 4, title: 'Kidney cancer', icon: <TimeIcon/> },
    { id: 5, title: 'Prostate cancer', icon: <DoctorIcon /> },
    { id: 6, title: 'Erectile dysfunction', icon: <WarningIcon /> },
  ];

 const testimonials = [
  {
    quote: "My kidney stone treatment was smooth and recovery was quick.",
    author: "- Anil K."
  },
  {
    quote: "The BPH procedure was stress-free, and I felt better within days.",
    author: "- Rajesh M."
  },
  {
    quote: "Excellent care, professional staff, and great support throughout.",
    author: "- Vikram S."
  }
];

  return (
    <main className="relative min-h-screen font-sans">
      <Header />

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <a 
          href="https://wa.me/919054255425" 
          onClick={handleWhatsAppClick}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#1ebd5a] text-white p-3.5 rounded-full shadow-xl hover:-translate-y-1 transition-transform"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
        <a 
          href="tel:+919054255425" 
          onClick={handleCallClick}
          className="bg-[#073d55] hover:bg-[#052d40] text-white p-3.5 rounded-full shadow-xl hover:-translate-y-1 transition-transform"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        </a>
      </div>

      {/* Hero Section */}
<section className="relative text-white py-16 md:py-24 px-6 md:px-12 overflow-hidden text-center">
  <div className="absolute inset-0 z-0">
    <Image 
      src="/hero.avif" 
      alt="Urology Treatment" 
      fill 
      className="object-cover" 
      priority 
    />
    <div className="absolute inset-0 bg-[#073d55]/85"></div>
  </div>

  <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
    <div className="space-y-6 flex flex-col items-center">
      
      {/* Badge */}
      <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 md:px-7 md:py-3 bg-[#8b0000] rounded-full text-white text-xs md:text-sm font-bold tracking-wider uppercase shadow-md border border-white/10">
        <svg className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="leading-snug">Urology Clinic In HSR Layout</span>
      </div>
      
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
        Expert Urologic Care for Men, Women & Children
      </h1>
      
      {/* Subheading */}
      <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
        Trusted urology consultation close to home in HSR Layout, Sectors 1 to 7, and nearby areas within 5 km.
      </p>
      
      {/* Features List */}
      <div className="flex flex-wrap justify-center gap-y-4 gap-x-6 text-[15px] font-medium pt-4 max-w-3xl">
        {[
          "16+ Yrs Experienced Doctors",
          "10000+ Urological Surgeries",
          "Advanced Technology",
          "200+ Kidney Transplant"
        ].map((text, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex-shrink-0 text-white border-2 border-white rounded-full w-5 h-5 flex items-center justify-center">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span>{text}</span>
          </div>
        ))}
      </div>

      {/* Ratings Block */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 pt-8 border-t border-white/20 mt-6 w-full max-w-2xl">
        <div className="flex items-center gap-3">
          <div className="text-xl font-bold tracking-tighter">Google</div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-5 h-5 text-[#FFBF23]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="font-semibold ml-1 text-lg">5.0</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-xl font-bold tracking-tighter text-[#0fb0c2]">practo</div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-5 h-5 text-[#FFBF23]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="font-semibold ml-1 text-lg">4.7</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Doctors Section */}
<section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center lg:text-left mb-8 md:mb-10">
          <h2 className="text-xs sm:text-sm font-bold text-[#8b0000] mb-1 uppercase tracking-wider">
            Urology & Renal Experts
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#073d55]">
            Meet Our Renowned Urologist
          </h3>
        </div>
        
        {/* Doctor Profile Card */}
        <div className="bg-[#f8fbfd] rounded-2xl sm:rounded-[32px] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-14 items-center lg:items-start shadow-sm border border-[#e1eaf0]">
          
          {/* Left Column: Image, Titles, Info & CTA */}
          <div className="w-full lg:w-[35%] flex flex-col items-center shrink-0">
            
            {/* Image */}
            <div className="relative w-48 h-56 sm:w-56 sm:h-64 lg:w-64 lg:h-72 rounded-[20px] sm:rounded-[24px] bg-[#e3eef4] overflow-hidden mb-4 lg:mb-5 shadow-inner">
              <Image 
                src="/doctor.png" 
                alt="Dr. Caranj S. Venugopal" 
                fill
                className="object-cover object-top"
              />
            </div>
            
            {/* Name & Speciality */}
            <h4 className="text-xl sm:text-2xl font-bold text-[#073d55] text-center">
              Dr. Caranj S. Venugopal
            </h4>
            <p className="text-[#8b0000] font-bold text-xs sm:text-sm mt-1 sm:mt-2 text-center tracking-wide uppercase">
              MBBS, MS, M.Ch
            </p>
            <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2 text-center font-medium px-2 sm:px-4">
              Consultant - Urology & Renal Transplantation
            </p>

            {/* NEW: Experience & Timings Card */}
            <div className="w-full mt-6 bg-white p-4 sm:p-5 rounded-xl border border-gray-200 shadow-sm space-y-4">
              
              {/* Experience */}
              <div className="flex items-start gap-3">
                <div className="bg-[#e3eef4] p-2 rounded-lg text-[#073d55] shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Experience</p>
                  <p className="font-bold text-[#073d55] text-sm sm:text-base">17 Years</p>
                </div>
              </div>

              <div className="w-full h-px bg-gray-100"></div>

              {/* Timings */}
              <div className="flex items-start gap-3">
                <div className="bg-[#8b0000]/10 p-2 rounded-lg text-[#8b0000] shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Consultation Timings</p>
                  <p className="font-bold text-[#073d55] text-sm sm:text-base">Mon - Sat</p>
                  <p className="text-sm text-gray-600">5:30 PM – 9:30 PM</p>
                </div>
              </div>
            </div>

            {/* NEW: Book Button */}
            {/* NEW: Book Button (Updated to functional link) */}
            <a 
              href="https://irohealth.com/c/hsr-urology-clinic" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-5 bg-[#8b0000] text-white font-bold py-3.5 px-6 rounded-xl shadow-[0_4px_14px_rgba(139,0,0,0.3)] hover:bg-[#660000] hover:shadow-[0_6px_20px_rgba(139,0,0,0.4)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Appointment
            </a>

          </div>

          {/* Right Column: Bio & Qualifications */}
          <div className="w-full lg:w-[65%] flex flex-col justify-center mt-4 lg:mt-0">
            
            {/* About Section */}
            <h4 className="text-xl sm:text-2xl font-bold text-[#073d55] mb-3 sm:mb-4 text-center lg:text-left">
              About Dr. Venugopal
            </h4>
            <div className="text-gray-700 space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed text-left">
              <p>
                Dr Caranj S. Venugopal is a Consultant - Urology & Renal Transplantation at Aster RV Hospital. He holds an MBBS and MS from Dr. NTR University of Health Sciences, and an M.Ch from MAHER. His expertise lies in Urology, Andrology, and Renal Transplantation, with proficiency in various Urological surgeries including Endourology (HOLEP, RIRS), Robotic Urological Surgery.
              </p>
              <p>
                He has undergone specialized training in Renal Transplant at the renowned Institute of Kidney diseases & Research center (IKDRC) Ahmedabad. He has also undergone training in robotic surgery and laparoscopic surgeries at Kochi, Kerala. Dr. Caranj has served at reputable Institutions such as Sakra World Hospital as consultant, Bellandur, Bangalore, and St. John's Medical College and Hospital associate professor, Bangalore.
              </p>
            </div>

            {/* Qualifications/Expertise List */}
            <h4 className="text-lg sm:text-xl font-bold text-[#073d55] mt-8 sm:mt-10 mb-3 sm:mb-4 text-center lg:text-left">
              Areas of Expertise & Training
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Urology, Andrology & Renal Transplantation",
                "Endourology (HOLEP, RIRS)",
                "Robotic & Laparoscopic Urological Surgery",
                "Specialized Renal Transplant Training (IKDRC, Ahmedabad)"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#8b0000] mt-1.5 shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
          </div>
        </div>
        
      </div>
    </section>

      {/* Why Choose Us - Simplified & Cleaned up */}
      <section className="py-16 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#073d55] mb-10 uppercase tracking-wide text-center">
            Why Choose HSR Urology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
              <DoctorIcon />
              <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Expertise</h4>
              <p className="text-gray-600 leading-relaxed">
                Our specialists utilize FDA-approved technologies and evidence based practices for safe and precise outcomes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
              <TimeIcon />
              <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Personalised Care</h4>
              <p className="text-gray-600 leading-relaxed">
                Customised treatment plans focusing on clear communication, individual comfort, and optimized recovery.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
              <ShieldIcon />
              <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Leading-Edge Tech</h4>
              <p className="text-gray-600 leading-relaxed">
                Minimally invasive tools and robotic surgeries designed to improve clinical precision and reduce recovery time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated - 2 Column Layout */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-extrabold text-[#05445e] mb-5 uppercase tracking-wide leading-tight">
              Expert Urologist Consultation <span className="block text-[#7d0000] mt-2">For Your Health</span>
            </h2>
            <p className="text-gray-600 mb-10 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Are you looking for expert urologic care near you? Our team provides comprehensive, compassionate care tailored for men, women, and children. We offer targeted solutions for:
            </p>
            
            {/* 2-Column Grid Applied Here */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {conditionsList.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-md transition-all duration-300"
                >
                  {item.icon}
                  <span className="font-bold text-[#05445e] text-[15px] leading-tight text-left">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative flex justify-center mt-8 lg:mt-0">
            <div className="absolute top-6 -right-6 lg:top-8 lg:-right-8 w-full max-w-md h-full bg-[#05445e]/10 rounded-[2.5rem] -z-10 hidden sm:block"></div>
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white z-10">
              <Image 
                src="/cond.png" 
                alt="Expert Urologist Consultation" 
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
<section className="py-12 px-4 md:py-16 md:px-12 bg-white relative">
      {/* Subtle red background accent line at the bottom of the section */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-[#8b0000]/10"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Base text sizes and alignments are for mobile, md: handles desktop */}
        <h2 className="text-2xl font-bold text-[#073d55] mb-8 uppercase tracking-wide text-center md:text-left md:text-3xl">
          Patient Testimonials
        </h2>
        
        {/* Mobile-first grid: 1 column on mobile, expands to 3 columns on desktop */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="bg-[#f2f2f2] text-black p-6 rounded-xl relative shadow-sm border-b-4 border-[#8b0000] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 md:p-8"
            >
              {/* Brand Red Quotation Marks - scales up on md: */}
              <svg 
                className="absolute top-4 right-4 w-8 h-8 text-[#8b0000] opacity-90 md:top-6 md:right-6 md:w-10 md:h-10" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              {/* Text adjusts padding and size for larger screens */}
              <p className="mb-6 text-sm relative z-10 leading-relaxed pr-6 font-medium md:mb-8 md:text-[15px] md:pr-8">
                "{t.quote}"
              </p>
              <p className="font-bold text-sm relative z-10 text-black md:text-base">
                {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>



      {/* FAQ & Location Blocks Skipped for Brevity (Same as original) */}
            {/* 7. FAQ */}
      <section className="py-16 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#073d55] mb-8 uppercase tracking-wide">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
            
            {/* Left Column */}
            <div className="space-y-2">
              <details className="group border-b border-[#073d55]/20 py-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-bold text-[#073d55]">
                  <span>Q. When should I see a urologist?</span>
                  <span className="transition group-open:rotate-180 text-[#8b0000] text-2xl leading-none">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  </span>
                </summary>
                <div className="mt-4 text-sm text-gray-700 leading-relaxed">
                  A. You should consult a specialist if you experience symptoms like blood in your urine, frequent or painful urination, severe lower back or side pain, difficulty emptying your bladder, or persistent incontinence.
                </div>
              </details>
              <details className="group border-b border-[#073d55]/20 py-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-bold text-[#073d55]">
                  <span>Q. What are the treatment options for kidney stones?</span>
                  <span className="transition group-open:rotate-180 text-[#8b0000] text-2xl leading-none">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  </span>
                </summary>
                <div className="mt-4 text-sm text-gray-700 leading-relaxed">
                  A. Small stones often pass naturally with increased fluid intake and medication. For larger stones, we offer minimally invasive procedures like shock wave lithotripsy, ureteroscopy, or laser stone fragmentation.
                </div>
              </details>
            </div>

            {/* Right Column */}
            <div className="space-y-2">
              <details className="group border-b border-[#073d55]/20 py-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-bold text-[#073d55]">
                  <span>Q. At what age should men get a prostate exam?</span>
                  <span className="transition group-open:rotate-180 text-[#8b0000] text-2xl leading-none">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  </span>
                </summary>
                <div className="mt-4 text-sm text-gray-700 leading-relaxed">
                  A. Men should generally begin discussing prostate cancer screening with their doctor at age 50. However, those at higher risk, such as individuals with a family history, may need to start screenings at age 40 or 45.
                </div>
              </details>
              <details className="group border-b border-[#073d55]/20 py-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-bold text-[#073d55]">
                  <span>Q. How long is the recovery after a vasectomy?</span>
                  <span className="transition group-open:rotate-180 text-[#8b0000] text-2xl leading-none">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  </span>
                </summary>
                <div className="mt-4 text-sm text-gray-700 leading-relaxed">
                  A. Most patients can return to work and light activities within two to three days. It is strongly recommended to avoid strenuous exercise, heavy lifting, or intense physical labor for about a week to ensure proper healing.
                </div>
              </details>
            </div>

          </div>
        </div>
      </section>
            {/* 8. Contact Information */}
    <section className="py-12 px-4 md:py-16 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-2xl font-bold text-[#073d55] mb-8 uppercase tracking-wide text-center md:text-left md:text-3xl">
          About The Clinic
        </h2>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* Contact Information Card */}
          <div className="flex flex-col space-y-6 bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#fff8f0] rounded-2xl flex items-center justify-center shrink-0 border border-[#f2e5d5]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Phone Receiver */}
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#073d55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Outgoing Arrow */}
                  <path d="M14 2h6v6M20 2l-6 6" stroke="#8b0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Phone</h4>
                <a href="tel:+919054255425" className="text-base md:text-lg font-bold text-[#073d55] hover:text-[#8b0000] transition-colors">
                  +91 90542 55425
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#fff8f0] rounded-2xl flex items-center justify-center shrink-0 border border-[#f2e5d5]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Envelope Base */}
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#073d55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Envelope Flap */}
                  <path d="M22 6l-10 7L2 6" stroke="#8b0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Email</h4>
                <a href="mailto:dr.caranj@hsrurologyclinic.com" className="text-base md:text-lg font-bold text-[#073d55] hover:text-[#8b0000] transition-colors break-all">
                  dr.caranj@hsrurologyclinic.com
                </a>
              </div>
            </div>

            {/* Timings */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#fff8f0] rounded-2xl flex items-center justify-center shrink-0 border border-[#f2e5d5]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Clock Face */}
                  <circle cx="12" cy="12" r="10" stroke="#073d55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Hands */}
                  <path d="M12 6v6l4 2" stroke="#8b0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Clinic Timings</h4>
                <p className="text-base md:text-lg font-bold text-[#073d55]">Mon–Sat | 5:30 PM – 9:30 PM</p>
                <p className="text-sm font-medium text-red-500 mt-1">Sunday: Closed</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#fff8f0] rounded-2xl flex items-center justify-center shrink-0 border border-[#f2e5d5]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Map Pin Outline */}
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#073d55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Inner Dot */}
                  <circle cx="12" cy="10" r="3" stroke="#8b0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Location</h4>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Ground Floor, # L-43,<br />
                  5th Main, 15th Cross,<br />
                  HSR Layout, Sector 6,<br />
                  Bangalore - 560102
                </p>
              </div>
            </div>

          </div>

          {/* Map Container */}
          <div className="w-full h-64 md:h-80 lg:h-auto min-h-[300px] rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.902274445065!2d77.62873909999999!3d12.914002199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d347762cc1%3A0xf3570aa53e5cb8ce!2sHSR%20Urology%20Clinic!5e0!3m2!1sen!2sin!4v1779902003928!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location Map"
              className="w-full h-full object-cover"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
      {/* 9. Final CTA Band */}
      <section className="bg-[#073d55] text-white py-12 px-6 md:px-12 border-t-4 border-[#8b0000]">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
    
    {/* Text Content */}
    <div className="text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
        Take control of your urological health.
      </h2>
      <p className="italic text-[#e3eef4] text-lg mb-2">
        Consult our Expert Urologist in HSR Layout.
      </p>
      <p className="text-sm max-w-lg text-gray-300 mx-auto md:mx-0 leading-relaxed">
        Book an appointment online or call our clinic directly. Our dedicated team will help you find the right, personalized treatment path for kidney, prostate, or men's health concerns.
      </p>
    </div>
    
    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
      
      {/* Secondary Button (External Booking Link) */}
      <a 
        href="https://irohealth.com/c/hsr-urology-clinic" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 border border-white/40 hover:bg-white/10 rounded-full px-8 py-4 transition w-full sm:w-auto justify-center group"
      >
        <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <div className="text-left">
          <div className="text-xs text-gray-300">Schedule Online</div>
          <div className="font-bold tracking-wide">Book Consult</div>
        </div>
      </a>

      {/* Primary Brand Button (Triggers Phone Call) */}
      <a 
        href="tel:+919054255425" 
        className="flex items-center gap-4 border border-transparent hover:bg-[#660000] rounded-full px-8 py-4 transition w-full sm:w-auto justify-center group bg-[#8b0000] shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300"
      >
        <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <div className="text-left">
          <div className="text-xs text-white/80">Need Guidance?</div>
          <div className="font-bold tracking-wide">Call Now</div>
        </div>
      </a>

    </div>
  </div>
</section>
      <Footer />

      {/* Sticky Booking Tab */}
<a 
  href="https://irohealth.com/c/hsr-urology-clinic"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center justify-center gap-4 bg-[#8b0000] text-white py-5 px-3 rounded-l-xl shadow-[-4px_0_15px_rgba(139,0,0,0.25)] hover:bg-[#660000] hover:-translate-x-1.5 hover:shadow-[-8px_0_25px_rgba(139,0,0,0.4)] transition-all duration-300 group border-y border-l border-white/20 cursor-pointer"
>
  <div className="bg-white/20 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
    <svg 
      className="w-5 h-5 text-white" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  </div>
  
  <span 
    className="font-bold tracking-widest uppercase text-sm drop-shadow-md" 
    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
  >
    Book Consultation
  </span>
</a>
    </main>
  );
}