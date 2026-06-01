"use client";

import { useEffect, useRef, useState } from "react";

const BUYER_JOURNEY = [
  {
    stage: "Unaware",
    emoji: "01",
    title: "You don't know what you don't know",
    description:
      "Most businesses don't realize they're leaving money on the table. That campaign that's 'doing okay'? It could be doing 3x. That brand that 'looks fine'? It's invisible to your ideal customer.",
    color: "bg-gray-100",
    accentColor: "text-gray-400",
  },
  {
    stage: "Problem Aware",
    emoji: "02",
    title: "Something's not working, but you can't name it",
    description:
      "You feel it the plateau, the inconsistency, the growing suspicion that your competitors are outmaneuvering you digitally. You're right. But identifying the exact problem requires a diagnostic, not a guess.",
    color: "bg-gray-100",
    accentColor: "text-gray-500",
  },
  {
    stage: "Solution Aware",
    emoji: "03",
    title: "You know what you need, not who to trust",
    description:
      "You've read the case studies. You understand the strategies. But every agency claims the same things. The difference? We show you the framework before you sign anything. Transparency is our competitive advantage.",
    color: "bg-[#FFD400]/10",
    accentColor: "text-black",
  },
  {
    stage: "Decision Ready",
    emoji: "04",
    title: "You're ready. We're ready. Let's build.",
    description:
      "At this point, the only risk is inaction. Every day without a proper growth system is revenue your competitors are capturing. Book a call. We'll know within 15 minutes if we're a fit.",
    color: "bg-[#FFD400]",
    accentColor: "text-gray-900",
  },
];

export default function BuyerJourney() {
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
            ◈
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            The Growth Map
          </span>
        </div>

        {/* Heading */}
        <h2
          className={`text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4 sm:mb-6 max-w-3xl transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Wherever you are in your
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          growth journey, we meet you there.
        </h2>
        <p
          className={`text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-xl mb-10 sm:mb-14 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Every business is somewhere on this spectrum. The question is: where
          are you, and what&apos;s the fastest path to where you want to be?
        </p>

        {/* Journey Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {BUYER_JOURNEY.map((step, index) => (
            <div
              key={step.stage}
              className={`relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div
                className={`${step.color} rounded-2xl p-6 sm:p-7 h-full`}
              >
                <span
                  className={`text-[28px] sm:text-[32px] font-bold ${step.accentColor} block mb-3`}
                >
                  {step.emoji}
                </span>
                <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider text-gray-500 mb-2 block">
                  {step.stage}
                </span>
                <h3 className="text-[15px] sm:text-[17px] font-semibold text-gray-900 mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
