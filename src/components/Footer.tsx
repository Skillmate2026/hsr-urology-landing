import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#fcfcfc] py-8 md:py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
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

        <div className="text-center md:text-right flex flex-col gap-1.5">
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