import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#fcfcfc] py-10 md:py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

        {/* Brand */}
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
            <Image
              src="/clinic-logo.png"
              alt="HSR Urology Clinic Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col text-[#05445e]">
            <span className="font-extrabold text-lg md:text-xl tracking-wide uppercase leading-none mb-1">
              HSR Urology
            </span>
            <span className="text-xs font-bold text-gray-500 tracking-[0.2em] uppercase">
              Clinic
            </span>
          </div>
        </div>

        {/* Contact & Hours */}
        <div className="text-center md:text-left text-sm text-gray-600 leading-relaxed">
          <p className="font-bold text-[#05445e]">HSR Urology Clinic</p>
          <p>Ground Floor, #L-43, 5th Main, 15th Cross,<br />HSR Layout, Sector 6, Bangalore – 560102</p>
          <p className="mt-2">
            <a href="tel:+919054255425" className="font-semibold text-[#05445e] hover:text-[#7d0000] transition-colors">+91 90542 55425</a>
            {" · "}
            <a href="mailto:dr.caranj@hsrurologyclinic.com" className="font-semibold text-[#05445e] hover:text-[#7d0000] transition-colors break-all">dr.caranj@hsrurologyclinic.com</a>
          </p>
          <p className="mt-2">Hours: Mon–Sat, 5:30–9:30 PM · Sunday closed</p>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right flex flex-col gap-1.5 justify-center">
          <p className="text-sm text-gray-600 font-medium">
            &copy; {new Date().getFullYear()} HSR Urology Clinic. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Designed by <a href="#" className="font-bold text-[#05445e] hover:text-[#7d0000] transition-colors duration-300">Skillmate</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
