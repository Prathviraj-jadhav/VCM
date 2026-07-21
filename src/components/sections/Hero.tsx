"use client";

import { useEffect, useState, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { BRAND } from "@/lib/data";
import TexturedHoverBackground from "./TexturedHoverBackground";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <TexturedHoverBackground>
        {/* Content Overlay */}
        <div className="mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20 pointer-events-none">
          {/* Label / Logo */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <Image
              src="/images/logo-full.png"
              alt="Vibe Create Media"
              width={420}
              height={93}
              className="h-16 sm:h-20 w-auto object-contain mb-6 sm:mb-10 pointer-events-auto"
              priority
            />
          </div>

          {/* Headline */}
          <h1 className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="block text-[clamp(2.25rem,7vw,4.6rem)] sm:text-[clamp(2.75rem,5.5vw,4.6rem)] font-bold leading-[1.06] tracking-[-0.03em] text-slate-900 pointer-events-auto">
              Your brand deserves
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="relative inline-block mt-1 sm:mt-2">
                <span className="relative z-10 px-2 sm:px-3 py-0.5 rounded-xl bg-[#FFD400] text-black">
                  more than average.
                </span>
              </span>
            </span>
          </h1>

          {/* Subtitle prompt for interactive pop-outs */}
          <p className={`mt-4 text-base sm:text-lg font-semibold text-slate-700 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} pointer-events-auto flex items-center gap-2`}>
            Make Your Brand Go Viral!
          </p>

          {/* CTA Row */}
          <div className={`mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} pointer-events-auto`}>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="group inline-flex items-center bg-[#FFD400] hover:bg-black hover:text-[#FFD400] text-black text-[13px] sm:text-[14px] font-bold rounded-full pl-6 pr-2.5 py-3 transition-all duration-300 w-fit shadow-[0_6px_25px_rgba(255,212,0,0.5)] hover:shadow-xl"
            >
              <span className="text-roll-container">
                <span>Start Your Project</span>
                <span>Start Your Project</span>
              </span>
              <span className="ml-3 w-8 h-8 bg-black group-hover:bg-[#FFD400] rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                <ArrowRight size={16} className="text-[#FFD400] group-hover:text-black" />
              </span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={`${BRAND.whatsapp}?text=${encodeURIComponent("Hi! I'd like to discuss a project with Vibe Create Media.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white hover:bg-slate-50 border border-slate-200/90 rounded-full px-6 py-3 text-slate-900 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-md transition-all duration-300 w-fit group"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#25D366] mr-2.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="text-[13px] sm:text-[14px] font-semibold text-slate-900">
                Chat on WhatsApp
              </span>
              <ArrowRight size={14} className="ml-2 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all duration-300" />
            </a>
          </div>
        </div>
      </TexturedHoverBackground>
    </section>
  );
}
