"use client";

import { useEffect, useRef, useState } from "react";
import { HOW_WE_WORK } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function HowWeWork() {
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
      id="how-we-work"
      ref={sectionRef}
      className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Badge */}
        <div
          className={`flex items-center gap-3 mb-6 sm:mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            5
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Our Process
          </span>
        </div>

        {/* Heading */}
        <h2
          className={`text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4 sm:mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          How we turn ambition
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          into momentum.
        </h2>
        <p
          className={`text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-xl mb-12 sm:mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          No mystery. No magic. Just a proven process that&apos;s been refined
          across dozens of successful brand launches and scaling stories.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {HOW_WE_WORK.map((step, index) => (
            <div
              key={step.step}
              className={`relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Connector Line */}
              {index < HOW_WE_WORK.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-[1px] bg-gray-200 z-0">
                  <ArrowRight
                    size={12}
                    className="absolute -right-1 top-1/2 -translate-y-1/2 text-gray-300"
                  />
                </div>
              )}

              {/* Step Number */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-5 relative z-10">
                <span className="text-[24px] sm:text-[28px] font-semibold text-gray-900">
                  {step.step}
                </span>
              </div>

              {/* Duration Badge */}
              <span className="inline-block text-[11px] sm:text-[12px] font-semibold text-black bg-[#FFD400] rounded-full px-3 py-1 mb-3">
                {step.duration}
              </span>

              {/* Title */}
              <h3 className="text-[16px] sm:text-[18px] font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
