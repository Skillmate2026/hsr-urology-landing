import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm py-4 px-6 md:py-5 md:px-12 flex justify-center md:justify-start items-center shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] sticky top-0 z-50">
      <div className="relative w-40 sm:w-48 md:w-56 h-12 sm:h-14 md:h-16 flex-shrink-0">
        <Image 
          src="/clinic-logo.png" 
          alt="HSR Urology Clinic Logo" 
          fill
          className="object-contain object-center md:object-left"
          priority
        />
      </div>
    </header>
  );
}