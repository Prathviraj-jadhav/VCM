"use client";

import { useEffect, useRef, useState } from "react";
import { WHY_CHOOSE_US } from "@/lib/data";

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="bg-gray-900 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Badge */}
        <div
          className={`flex items-center gap-3 mb-6 sm:mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FFD400] text-gray-900 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            4
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-white/80">
            Why Vibe Create Media
          </span>
        </div>

        {/* Heading */}
        <h2
          className={`text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-white mb-4 sm:mb-6 max-w-3xl transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Not another agency.
          <br />
          <span className="text-white">
            A growth system with skin in the game.
          </span>
        </h2>
        <p
          className={`text-[15px] sm:text-[16px] text-gray-400 leading-relaxed max-w-xl mb-12 sm:mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          We don&apos;t compete on promises. We compete on frameworks, data, and
          the kind of results that make other agencies uncomfortable.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.number}
              className={`group bg-white/5 hover:bg-[#FFD400]/10 rounded-2xl p-6 sm:p-7 border border-white/5 hover:border-[#FFD400]/30 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <span className="text-[12px] sm:text-[13px] bg-[#FFD400] text-black font-semibold mb-3 block w-7 h-7 rounded-full flex items-center justify-center">
                {item.number}
              </span>
              <h3 className="text-[16px] sm:text-[18px] font-semibold text-white mb-3 group-hover:text-white transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[14px] sm:text-[15px] text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
