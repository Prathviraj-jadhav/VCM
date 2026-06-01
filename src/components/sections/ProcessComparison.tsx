"use client";

import { useEffect, useRef, useState } from "react";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import { X, Check, ArrowRight } from "lucide-react";

const COMPARISONS = [
  {
    category: "Strategy",
    typical: "Template strategies copy-pasted from last client",
    vcm: "Custom growth blueprints built on behavioral research",
  },
  {
    category: "Reporting",
    typical: "Monthly PDF reports no one reads",
    vcm: "Real-time dashboards with revenue attribution",
  },
  {
    category: "Creative",
    typical: "Stock visuals and generic copy",
    vcm: "Performance-engineered creative with A/B testing",
  },
  {
    category: "Pricing",
    typical: "Fixed retainers regardless of results",
    vcm: "Outcome-linked pricing with skin in the game",
  },
  {
    category: "Onboarding",
    typical: "Weeks of setup before anything ships",
    vcm: "First campaigns live in 7 days or less",
  },
  {
    category: "Optimization",
    typical: "Quarterly reviews after damage is done",
    vcm: "Continuous iteration with weekly sprint cycles",
  },
  {
    category: "Accountability",
    typical: "Vanity metrics that look good in decks",
    vcm: "Revenue metrics that look good in your bank account",
  },
  {
    category: "Growth Model",
    typical: "Linear same effort, same results",
    vcm: "Compounding stems that scale exponentially",
  },
];

export default function ProcessComparison() {
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
            VS
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            The Difference
          </span>
        </div>

        {/* Heading */}
        <AnimateOnScroll delay={100}>
          <h2 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4 sm:mb-6 max-w-3xl">
            Not all agencies are
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            created equal.
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-xl mb-10 sm:mb-14">
            Here&apos;s the honest comparison. Most agencies won&apos;t show you
            this because the contrast isn&apos;t flattering r them.
          </p>
        </AnimateOnScroll>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-2xl border border-gray-200">
          {/* Header */}
          <div className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[140px_1fr_1fr] lg:grid-cols-[180px_1fr_1fr]">
            {/* Top Left */}
            <div className="bg-gray-50 p-4 sm:p-5 border-b border-r border-gray-200">
              <span className="text-[12px] sm:text-[13px] font-medium text-gray-400 uppercase tracking-wider">
                Category
              </span>
            </div>
            {/* Typical Agency Header */}
            <div className="bg-gray-50 p-4 sm:p-5 border-b border-r border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <X size={12} className="text-gray-400" />
                </div>
                <span className="text-[13px] sm:text-[14px] font-semibold text-gray-400">
                  Typical Agency
                </span>
              </div>
            </div>
            {/* VCM Header */}
            <div className="bg-[#FFD400]/5 p-4 sm:p-5 border-b border-[#FFD400]/20">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#FFD400] rounded-full flex items-center justify-center">
                  <Check size={12} className="text-gray-900" />
                </div>
                <span className="text-[13px] sm:text-[14px] font-semibold text-gray-900">
                  Vibe Create Media
                </span>
              </div>
            </div>
          </div>

          {/* Rows */}
          {COMPARISONS.map((row, index) => (
            <div
              key={row.category}
              className={`grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[140px_1fr_1fr] lg:grid-cols-[180px_1fr_1fr] transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${300 + index * 80}ms` }}
            >
              {/* Category */}
              <div className="bg-gray-50 p-4 sm:p-5 border-b border-r border-gray-200 flex items-center">
                <span className="text-[12px] sm:text-[13px] font-semibold text-gray-700">
                  {row.category}
                </span>
              </div>
              {/* Typical Agency */}
              <div className="bg-white p-4 sm:p-5 border-b border-r border-gray-200 flex items-center gap-2.5">
                <X
                  size={14}
                  className="text-gray-300 shrink-0 hidden sm:block"
                />
                <span className="text-[13px] sm:text-[14px] text-gray-400 leading-relaxed line-through decoration-gray-200">
                  {row.typical}
                </span>
              </div>
              {/* VCM */}
              <div className="bg-[#FFD400]/[0.03] p-4 sm:p-5 border-b border-[#FFD400]/10 flex items-center gap-2.5">
                <Check
                  size={14}
                  className="text-[#E6BE00] shrink-0 hidden sm:block"
                />
                <span className="text-[13px] sm:text-[14px] text-gray-900 font-medium leading-relaxed">
                  {row.vcm}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateOnScroll delay={800}>
          <div className="mt-8 sm:mt-10 text-center">
            <p className="text-[14px] sm:text-[15px] text-gray-500">
              Still want to go with the typical agency?{" "}
              <span className="text-gray-900 font-medium">
                We&apos;ll be here when you&apos;re ready for actual results.
              </span>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
