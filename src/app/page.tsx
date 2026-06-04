"use client";
import Image from "next/image";
import LeadModal from "../components/LeadModal";
import HeroLeadForm from "../components/HeroLeadForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function UrologyLandingPage() {
  const [modal, setModal] = useState<{ mode: "whatsapp" | "book"; location: string } | null>(null);

  const pushDataLayer = (data: Record<string, unknown>) => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push(data);
    }
  };

  const openWhatsApp = (location: string) => {
    pushDataLayer({ event: "whatsapp_click", cta_location: location });
    setModal({ mode: "whatsapp", location });
  };

  const openBook = (location: string) => {
    pushDataLayer({ event: "book_appointment_click", cta_location: location });
    setModal({ mode: "book", location });
  };

  const handleCallClick = (location: string) => {
    pushDataLayer({ event: "call_click", cta_location: location });
  };

 const testimonials = [
  {
    quote: "I noticed blood in my urine and had convinced myself it was the worst. I didn't sleep for two nights. Dr. Venugopal saw me the same week, stayed completely calm, ran the right tests, and it turned out to be a simple infection. He explained every step so I actually understood what was happening. I walked out feeling like a weight had lifted.",
    author: "Anil K."
  },
  {
    quote: "The kidney stone pain was the worst thing I've ever felt, and I was sure I'd need major surgery. Dr. Venugopal treated it with a minimally invasive procedure and I was back at work within days, no big cuts, no long recovery. Honest, skilled, and genuinely reassuring.",
    author: "Rajesh M."
  },
  {
    quote: "I'd had UTIs on and off for two years and kept being handed antibiotics that never really fixed it. Dr. Venugopal was the first to actually look for the cause. I've been clear for months now. I only wish I'd come in sooner.",
    author: "Priya S."
  }
];

  return (
    <main className="relative min-h-screen font-sans">
      <Header />

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <button
          type="button"
          onClick={() => openWhatsApp("floating_button")}
          aria-label="Chat on WhatsApp"
          className="bg-[#25D366] hover:bg-[#1ebd5a] text-white p-3.5 rounded-full shadow-xl hover:-translate-y-1 transition-transform"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </button>
        <a
          href="tel:+919054255425"
          onClick={() => handleCallClick("floating_button")}
          className="bg-[#073d55] hover:bg-[#052d40] text-white p-3.5 rounded-full shadow-xl hover:-translate-y-1 transition-transform"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        </a>
      </div>

      {/* Hero Section */}
<section className="relative text-white py-16 md:py-24 px-6 md:px-12 overflow-hidden">
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

  <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

    {/* Left Column: Locality-focused content */}
    <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">

      {/* Eyebrow */}
      <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-[#8b0000] rounded-full text-white text-[11px] md:text-xs font-bold tracking-wide uppercase shadow-md border border-white/10">
        <svg className="w-4 h-4 shrink-0 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="leading-snug text-left">Urology Clinic · HSR Layout, Bangalore</span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Worried about a urinary, kidney or prostate problem?
      </h1>

      {/* Sub-headline */}
      <p className="text-lg text-gray-200 leading-relaxed max-w-xl">
        See an experienced urologist in HSR Layout. Get a clear diagnosis, an honest answer, and a treatment plan made for you. Evening appointments, Monday to Saturday.
      </p>

      {/* Trust strip (reassurance-first) */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-4 border-t border-white/20 mt-2 w-full max-w-xl justify-center lg:justify-start text-sm font-medium text-gray-100">
        <span>17 years&apos; experience</span>
        <span className="text-white/40">·</span>
        <span>10,000+ patients treated</span>
        <span className="text-white/40">·</span>
        <span className="inline-flex items-center gap-1.5">
          Rated 5.0 on Google
          <svg className="w-4 h-4 text-[#FFBF23]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </span>
        <span className="text-white/40">·</span>
        <span>In HSR Layout, Sector 6</span>
      </div>
    </div>

    {/* Right Column: Lead Form */}
    <div id="book" className="w-full scroll-mt-24">
      <HeroLeadForm />
    </div>

  </div>
</section>

      {/* Is this you? - symptom recognition */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#05445e] mb-8 leading-tight">
              Come in if you&apos;ve noticed any of these
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Blood in your urine",
                "Burning or pain when you pee",
                "Going often, or waking at night to urinate",
                "Trouble passing urine, or a weak stream",
                "Urine infections (UTIs) that keep coming back",
                "Kidney or side pain that won't settle",
                "Leaking, or loss of bladder control",
                "A lump, swelling, or men's health concern",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] text-left">
                  <div className="flex-shrink-0 text-white bg-[#8b0000] rounded-full w-5 h-5 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="font-semibold text-[#05445e] text-[15px] leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-8 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Most of these have simple, effective treatments, and the earlier they&apos;re checked, the easier they are to fix.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative flex justify-center mt-8 lg:mt-0">
            <div className="absolute top-6 -right-6 lg:top-8 lg:-right-8 w-full max-w-md h-full bg-[#05445e]/10 rounded-[2.5rem] -z-10 hidden sm:block"></div>
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white z-10">
              <Image src="/cond.png" alt="Urology consultation in HSR Layout" fill className="object-cover object-center" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance - calm the fear */}
      <section className="py-16 px-6 md:px-12 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#073d55] mb-5 leading-tight">
            Most urinary problems are common and treatable
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            It&apos;s natural to worry, especially with something like blood in the urine. The honest truth is that most causes are not dangerous, and the few that are matter most when they&apos;re caught early. One consultation replaces the guessing and the late-night searching with a clear diagnosis and a plan. That alone is a relief.
          </p>
        </div>
      </section>

      {/* Doctors Section */}
<section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center lg:text-left mb-8 md:mb-10">
          <h2 className="text-xs sm:text-sm font-bold text-[#8b0000] mb-1 uppercase tracking-wider">
            Your Urologist
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#073d55]">
            You&apos;ll be seen by Dr. Caranj S. Venugopal, personally
          </h3>
          <p className="text-gray-600 font-medium mt-3 text-sm sm:text-base">
            Consultant Urologist &amp; Renal Transplant Surgeon · MBBS, MS, M.Ch · 17 years&apos; experience
          </p>
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
              Consultant Urologist & Renal Transplant Surgeon
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

            {/* Book Button - opens lead-capture modal */}
            <button
              type="button"
              onClick={() => openBook("doctor_card")}
              className="w-full mt-5 bg-[#8b0000] text-white font-bold py-3.5 px-6 rounded-xl shadow-[0_4px_14px_rgba(139,0,0,0.3)] hover:bg-[#660000] hover:shadow-[0_6px_20px_rgba(139,0,0,0.4)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book an Appointment
            </button>

          </div>

          {/* Right Column: Bio & Qualifications */}
          <div className="w-full lg:w-[65%] flex flex-col justify-center mt-4 lg:mt-0">
            
            {/* About Section */}
            <h4 className="text-xl sm:text-2xl font-bold text-[#073d55] mb-3 sm:mb-4 text-center lg:text-left">
              About Dr. Venugopal
            </h4>
            <div className="text-gray-700 space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed text-left">
              <p>
                Dr. Venugopal has cared for patients for 17 years across some of Bangalore&apos;s leading hospitals (Aster RV, Sakra World, and St. John&apos;s Medical College) and trained in advanced techniques at top transplant and robotic-surgery centres (IKDRC Ahmedabad; Kochi, Kerala). At HSR Urology Clinic he sees you himself. He listens, explains in plain language, and recommends the least invasive option that will actually solve your problem, not the biggest one.
              </p>
            </div>

            {/* Qualifications/Expertise List */}
            <h4 className="text-lg sm:text-xl font-bold text-[#073d55] mt-8 sm:mt-10 mb-3 sm:mb-4 text-center lg:text-left">
              Areas of Expertise
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {[
                "Kidney stones & endourology (HOLEP, RIRS)",
                "Prostate & BPH (enlarged prostate) care",
                "Recurring UTIs & bladder problems",
                "Men's health & andrology",
                "Kidney, bladder & prostate cancer",
                "Robotic & laparoscopic surgery · renal transplantation"
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
            Why patients choose HSR Urology
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "You see the specialist himself", body: "Every visit, never a junior." },
              { title: "Plain answers", body: "Your diagnosis and options, explained without jargon." },
              { title: "Least-invasive first", body: "Most stones and prostate problems treated without major surgery." },
              { title: "Close to home", body: "In HSR Layout, Sector 6, minutes from Sectors 1–7." },
              { title: "Evening hours", body: "Appointments after work, Mon–Sat, 5:30–9:30 PM." },
            ].map((reason, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="flex-shrink-0 text-white bg-[#8b0000] rounded-full w-7 h-7 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{reason.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{reason.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xs sm:text-sm font-bold text-[#8b0000] mb-2 uppercase tracking-wider">Simple &amp; Stress-Free</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#073d55]">What happens at your first consultation</h3>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-y-12 lg:gap-6">
            {/* Connector line (desktop only) */}
            <div className="hidden lg:block absolute top-[44px] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#e1eaf0] via-[#8b0000]/25 to-[#e1eaf0]" aria-hidden="true"></div>

            {[
              {
                title: "Book in a minute",
                body: "Online, on WhatsApp, or by phone.",
                icon: (
                  <svg className="w-11 h-11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="5" width="18" height="16" rx="2.5" stroke="#1C448E" strokeWidth="1.8" />
                    <path d="M3 9.5h18" stroke="#1C448E" strokeWidth="1.8" />
                    <path d="M8 3v3.5M16 3v3.5" stroke="#1C448E" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M8.5 15.5l2 2 4-4.5" stroke="#D72828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Tell us what's wrong",
                body: "Privately and without judgment.",
                icon: (
                  <svg className="w-11 h-11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4a2 2 0 00-2 2v9a2 2 0 002 2h2v3.5L11 17h9a2 2 0 002-2V6a2 2 0 00-2-2z" stroke="#1C448E" strokeWidth="1.8" strokeLinejoin="round" />
                    <circle cx="8.5" cy="10.5" r="1.05" fill="#D72828" />
                    <circle cx="12.5" cy="10.5" r="1.05" fill="#D72828" />
                    <circle cx="16.5" cy="10.5" r="1.05" fill="#D72828" />
                  </svg>
                ),
              },
              {
                title: "Get examined and understood",
                body: "Dr. Venugopal diagnoses you and arranges any tests needed.",
                icon: (
                  <svg className="w-11 h-11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="5.5" r="3" stroke="#1C448E" strokeWidth="1.8" />
                    <path d="M7.5 11C8.8 9.3 10.3 8.5 12 8.5C13.7 8.5 15.2 9.3 16.5 11" stroke="#1C448E" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M7.5 11V20" stroke="#1C448E" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M16.5 11V20" stroke="#1C448E" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M7.5 20C9 19.4 10.5 19 12 19C13.5 19 15 19.4 16.5 20" stroke="#1C448E" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M10.3 11L12 13.2L13.7 11" stroke="#1C448E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11 12C11 13.5 11.5 14.5 12.3 15" stroke="#D72828" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M12.3 15C13.8 15.4 14.5 16.5 14.5 18" stroke="#D72828" strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="14.5" cy="19" r="1.2" fill="#D72828" />
                  </svg>
                ),
              },
              {
                title: "Leave with a clear plan",
                body: "Your personalised next steps, explained.",
                icon: (
                  <svg className="w-11 h-11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="4.5" width="14" height="16.5" rx="2.5" stroke="#1C448E" strokeWidth="1.8" />
                    <path d="M9 4.5V4a3 3 0 016 0v.5" stroke="#1C448E" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M9 13l2 2 4-4.5" stroke="#D72828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center px-2 group">
                <div className="relative z-10 mb-5">
                  <div className="w-[88px] h-[88px] bg-[#FDF8F3] rounded-[1.75rem] flex items-center justify-center ring-1 ring-[#f1e7dd] shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                    {step.icon}
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-[#8b0000] text-white text-sm font-bold flex items-center justify-center ring-4 ring-white">
                    {i + 1}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#073d55] mb-2">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm max-w-[230px]">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 max-w-2xl mx-auto bg-slate-50 border border-gray-100 rounded-2xl px-6 py-5 text-center">
            <p className="text-gray-600">
              Bring any previous reports or scans if you have them. New to us? Just bring yourself.
            </p>
            <p className="text-sm font-bold text-[#073d55] mt-1">
              Consultation fee: ₹[insert amount]. No referral needed.
            </p>
          </div>
        </div>
      </section>

      {/* Prostate Health Package */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xs sm:text-sm font-bold text-[#8b0000] mb-1 uppercase tracking-wider">Special Offer</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#073d55]">Prostate Health Package</h3>
            <p className="text-gray-600 mt-3">A complete prostate check-up at half the price.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-[#e1eaf0] overflow-hidden">
            {/* Itemised list */}
            <ul className="divide-y divide-gray-100 px-6 md:px-8 py-2">
              {[
                { name: "Urologist Consultation", price: 900 },
                { name: "Uroflowmetry Test", price: 1000 },
                { name: "Kidney Function Test", price: 900 },
                { name: "Prostate Specific Antigen (PSA) Test", price: 1150 },
                { name: "Urine Routine & Microscopy", price: 290 },
              ].map((item, i) => (
                <li key={i} className="flex items-center justify-between gap-4 py-3.5">
                  <span className="flex items-start gap-3 text-gray-700 font-medium">
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-[#8b0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {item.name}
                  </span>
                  <span className="text-gray-500 font-semibold whitespace-nowrap">₹{item.price.toLocaleString("en-IN")}</span>
                </li>
              ))}
            </ul>

            {/* Total + Offer */}
            <div className="bg-[#073d55] text-white p-6 md:p-8">
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/15">
                <span className="text-gray-300">Total value</span>
                <span className="text-lg font-semibold text-gray-300 line-through">₹4,240</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-5">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-sm uppercase tracking-wider text-gray-300">Offer price</span>
                    <span className="inline-block bg-[#8b0000] text-white text-xs font-bold px-2.5 py-1 rounded-full">Save 50%</span>
                  </div>
                  <div className="text-4xl font-extrabold mt-1">₹2,120</div>
                </div>
                <button
                  type="button"
                  onClick={() => openBook("prostate_package")}
                  className="bg-[#8b0000] hover:bg-[#660000] text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
                >
                  Book This Package
                </button>
              </div>
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
          Patient Stories
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

        {/* Rating strip - link both to the live review pages before publishing */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-semibold text-[#073d55]">
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#FFBF23]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            Rated 5.0 on Google (<span className="text-gray-500">[X]</span> reviews)
          </span>
          <span className="text-gray-300">·</span>
          <span>4.7 on Practo (<span className="text-gray-500">[X]</span> reviews)</span>
        </div>
      </div>
    </section>



      {/* FAQ & Location Blocks Skipped for Brevity (Same as original) */}
            {/* 7. FAQ */}
      <section className="py-16 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#073d55] mb-8 uppercase tracking-wide">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
            {[
              {
                q: "When should I see a urologist?",
                a: "If you have blood in your urine, pain or burning when you pee, trouble passing urine, repeated infections, or kidney/side pain, it's worth getting checked. Early is always easier.",
              },
              {
                q: "Is blood in the urine serious?",
                a: "It always deserves a check, but it's often caused by something simple like an infection or a stone. A consultation tells you exactly what's going on so you're not left worrying.",
              },
              {
                q: "Will I need surgery for a kidney stone?",
                a: "Usually not. Many stones pass or are treated with minimally invasive methods. Surgery is only recommended when it's genuinely the best option, and we'll explain why.",
              },
              {
                q: "How much is a consultation, and do I need a referral?",
                a: "The consultation fee is ₹[insert]. No referral is needed, just book directly.",
              },
              {
                q: "What are your timings and how do I book?",
                a: "We see patients Monday to Saturday, 5:30–9:30 PM (closed Sunday). Book online, on WhatsApp, or call +91 90542 55425.",
              },
              {
                q: "Is my visit confidential?",
                a: "Completely. Everything you share is private and judgment-free.",
              },
            ].map((faq, i) => (
              <details key={i} className="group border-b border-[#073d55]/20 py-4 [&_summary::-webkit-details-marker]:hidden h-fit">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-[#073d55]">
                  <span>Q. {faq.q}</span>
                  <span className="transition group-open:rotate-180 text-[#8b0000] text-2xl leading-none shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  </span>
                </summary>
                <div className="mt-4 text-sm text-gray-700 leading-relaxed">
                  A. {faq.a}
                </div>
              </details>
            ))}
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

            {/* Clinic Name */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#073d55]">HSR Urology Clinic</h3>
              <p className="text-sm text-gray-500">Urology &amp; Renal Care · HSR Layout, Bangalore</p>
            </div>

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
                <a href="tel:+919054255425" onClick={() => handleCallClick("contact_section")} className="text-base md:text-lg font-bold text-[#073d55] hover:text-[#8b0000] transition-colors">
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
        Stop guessing. Get a clear answer.
      </h2>
      <p className="italic text-[#e3eef4] text-lg mb-3">
        Book your consultation with Dr. Venugopal at HSR Urology Clinic. Evenings, Monday to Saturday.
      </p>
      <p className="text-sm max-w-lg text-gray-300 mx-auto md:mx-0 leading-relaxed flex items-start gap-2 justify-center md:justify-start">
        <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#ffb4b4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M5.07 19h13.86a2 2 0 001.71-3l-6.93-12a2 2 0 00-3.42 0L3.36 16a2 2 0 001.71 3z" /></svg>
        <span>In severe pain right now? Call us and we&apos;ll guide you to the right care immediately.</span>
      </p>
    </div>

    {/* Action Buttons */}
    <div className="flex flex-col gap-3 w-full md:w-auto shrink-0">

      {/* Primary Button - opens lead-capture modal */}
      <button
        type="button"
        onClick={() => openBook("final_cta")}
        className="flex items-center gap-3 bg-[#8b0000] hover:bg-[#660000] rounded-full px-8 py-4 transition w-full sm:w-auto justify-center group shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300"
      >
        <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="font-bold tracking-wide">Book Consultation</span>
      </button>

      {/* Secondary - Call & WhatsApp */}
      <div className="flex gap-3">
        <a
          href="tel:+919054255425"
          onClick={() => handleCallClick("final_cta")}
          className="flex items-center gap-2 border border-white/40 hover:bg-white/10 rounded-full px-6 py-3 transition flex-1 justify-center font-bold"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Us
        </a>
        <button
          type="button"
          onClick={() => openWhatsApp("final_cta")}
          className="flex items-center gap-2 border border-white/40 hover:bg-white/10 rounded-full px-6 py-3 transition flex-1 justify-center font-bold"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" /></svg>
          WhatsApp
        </button>
      </div>

    </div>
  </div>
</section>
      <Footer />

      {/* Lead-capture modal (WhatsApp + Book flows) */}
      <LeadModal data={modal} onClose={() => setModal(null)} />
    </main>
  );
}