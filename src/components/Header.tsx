"use client";
import Image from 'next/image';

export default function Header() {
  const handleCallClick = () => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: "call_click", cta_location: "header" });
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm py-4 px-6 md:py-5 md:px-12 flex justify-between items-center shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] sticky top-0 z-50">
      <div className="relative w-40 sm:w-48 md:w-56 h-12 sm:h-14 md:h-16 flex-shrink-0">
        <Image
          src="/clinic-logo.png"
          alt="HSR Urology Clinic Logo"
          fill
          className="object-contain object-left"
          priority
        />
      </div>

      {/* Top-bar actions (no nav menu) */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Click-to-call */}
        <a
          href="tel:+919054255425"
          onClick={handleCallClick}
          className="flex items-center gap-2 text-[#073d55] font-bold rounded-full px-3 py-2.5 md:px-4 md:py-2.5 border border-[#073d55]/20 hover:bg-[#073d55]/5 transition-all duration-300"
        >
          <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="hidden md:inline">+91 90542 55425</span>
        </a>

        {/* Book Consultation - scrolls to the hero form */}
        <a
          href="#book"
          className="bg-[#8b0000] text-white font-bold rounded-full px-4 py-2.5 md:px-6 md:py-3 shadow-[0_4px_14px_rgba(139,0,0,0.25)] hover:bg-[#660000] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
        >
          Book Consultation
        </a>
      </div>
    </header>
  );
}
