"use client";

import { useEffect, useRef, useState } from "react";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import { Search, Zap, Target } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Research",
    subtitle: "Decode Before You Deploy",
    icon: Search,
    description:
      "We don't start with assumptions we start with behavioral audits, competitive teardowns, and audience psychographic mapping. Before a single pixel moves, we've already decoded why your market buys, hesitates, and churns.",
    detail: "Behavioral audits • Competitive teardowns • Psychographic mapping",
  },
  {
    number: "02",
    title: "Strategy",
    subtitle: "Engineer the Growth Path",
    icon: Zap,
    description:
      "Research without strategy is just expensive curiosity. We engineer growth blueprints built on behavioral science t best practices recycled from LinkedIn threads. Every tactic is tied to a metric, every metric to revenue.",
    detail: "Growth blueprints • Revenue-linked KPIs • Behavioral frameworks",
  },
  {
    number: "03",
    title: "Execution",
    subtitle: "Ship, Measure, Compound",
    icon: Target,
    description:
      "Execution is where most agencies fold. We ship fast, measure relentlessly, and compound results through systematic iteration. No 'set it and forget it' st continuous optimization that makes yesterday's results look like a warm-up.",
    detail: "Rapid shipping • Continuous optimization • Compounding results",
  },
];

export default function Methodology() {
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
      className="bg-black pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Badge */}
        <div
          className={`flex items-center gap-3 mb-6 sm:mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FFD400] text-gray-900 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            M
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-white/80">
            The Vibe Create Media Method
          </span>
        </div>

        {/* Heading */}
        <AnimateOnScroll>
          <h2 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-white mb-4 sm:mb-6 max-w-3xl">
            We don&apos;t guess.
            <br />
            <span className="text-white">We decode.</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <p className="text-[15px] sm:text-[16px] text-gray-400 leading-relaxed max-w-xl mb-12 sm:mb-16">
            Every decision is backed by behavioral science, not best practices.
            Our 3-step methodology turns ambition into predictable, measurable
            growth.
          </p>
        </AnimateOnScroll>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <AnimateOnScroll key={step.number} delay={200 + index * 150}>
                <div className="group relative bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#FFD400]/30 rounded-2xl p-7 sm:p-8 transition-all duration-500 h-full">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-[#FFD400]/20 group-hover:text-[#FFD400]/40 leading-none transition-colors duration-500">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#FFD400]/10 group-hover:bg-[#FFD400]/20 flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#FFD400]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] sm:text-[24px] font-semibold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-[#FFD400] font-medium mb-4">
                    {step.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-[14px] sm:text-[15px] text-gray-400 leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {/* Detail Tags */}
                  <div className="flex flex-wrap gap-2">
                    {step.detail.split(" • ").map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] sm:text-[12px] font-medium text-white/50 border border-white/10 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Connector Arrow (desktop only) */}
                  {index < STEPS.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 sm:-right-3.5 -translate-y-1/2 z-10">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#FFD400] rounded-full flex items-center justify-center">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          className="text-gray-900"
                        >
                          <path
                            d="M4.5 2.5L8 6L4.5 9.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Bottom Line */}
        <AnimateOnScroll delay={600}>
          <div className="mt-10 sm:mt-14 text-center">
            <p className="text-[14px] sm:text-[15px] text-gray-500 italic">
              &ldquo;Best practices are just average practices with a marketing
              budget.&rdquo;
            </p>
            <p className="text-[13px] text-gray-600 mt-2">
              e VCM philosophy
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
