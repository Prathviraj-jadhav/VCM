"use client";

import { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { BRAND } from "@/lib/data";

const Shader = dynamic(() => import("shaders/react").then((m) => m.Shader), { ssr: false });
const Swirl = dynamic(() => import("shaders/react").then((m) => m.Swirl), { ssr: false });
const ChromaFlow = dynamic(() => import("shaders/react").then((m) => m.ChromaFlow), { ssr: false });
const FlutedGlass = dynamic(() => import("shaders/react").then((m) => m.FlutedGlass), { ssr: false });
const FilmGrain = dynamic(() => import("shaders/react").then((m) => m.FilmGrain), { ssr: false });

const StarburstIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
  </svg>
);

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mountTimer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(mountTimer);
  }, []);

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
    <section className="relative min-h-screen bg-[#EFEFEF] overflow-hidden">
      {/* Shader Background */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {mounted && (
          <Shader style={{ width: "100%", height: "100%" }}>
            <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
            <ChromaFlow
              baseColor="#ffffff"
              downColor="#FFD400"
              leftColor="#FFD400"
              rightColor="#FFD400"
              upColor="#FFD400"
              momentum={13}
              radius={3.5}
            />
            <FlutedGlass
              aberration={0.61}
              angle={31}
              frequency={8}
              highlight={0.12}
              highlightSoftness={0}
              lightAngle={-90}
              refraction={4}
              shape="rounded"
              softness={1}
              speed={0.15}
            />
            <FilmGrain strength={0.05} />
          </Shader>
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-end">
        <div className="mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
          {/* Label */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <Image
              src="/images/logo-full.png"
              alt="Vibe Create Media"
              width={420}
              height={93}
              className="h-16 sm:h-20 w-auto object-contain mb-6 sm:mb-10"
              priority
            />
          </div>

          {/* Headline */}
          <h1 className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="block text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900">
              Your brand deserves
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              more than average.
            </span>
          </h1>

          {/* CTA Row */}
          <div className={`mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="group inline-flex items-center bg-[#FFD400] hover:bg-[#E6BE00] text-black text-[13px] sm:text-[14px] font-semibold rounded-full pl-5 sm:pl-6 pr-2 py-2 transition-colors duration-300 w-fit"
            >
              <span className="text-roll-container">
                <span>Start Your Project</span>
                <span>Start Your Project</span>
              </span>
              <span className="ml-2 w-7 h-7 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                <ArrowRight size={16} className="text-[#FFD400]" />
              </span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={`${BRAND.whatsapp}?text=${encodeURIComponent("Hi! I'd like to discuss a project with Vibe Create Media.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white rounded-full px-5 sm:px-6 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300 w-fit group"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#25D366] mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="text-[13px] sm:text-[14px] font-medium text-gray-900">
                Chat on WhatsApp
              </span>
              <ArrowRight size={14} className="ml-2 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-0.5 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
