"use client";

import { useEffect, useRef, useState } from "react";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import { Shield, ArrowRight, Clock, ShieldCheck, Flame, BadgeCheck } from "lucide-react";
import Image from "next/image";

export default function Guarantee() {
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
      className="bg-black pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFD400]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFD400]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Animated dashed border guarantee container */}
        <div className="relative border-2 border-dashed border-[#FFD400]/20 rounded-3xl p-6 sm:p-10 lg:p-14">
          {/* Corner accent marks */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#FFD400] rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#FFD400] rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#FFD400] rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#FFD400] rounded-br-3xl" />

          {/* Badge */}
          <div
            className={`flex items-center justify-center gap-3 mb-8 sm:mb-10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-[12px] sm:text-[13px] font-medium border border-[#FFD400]/30 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-[#FFD400]/80 inline-flex items-center gap-2">
              <ShieldCheck size={14} />
              Our Growth Guarantee
            </span>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Main Layout: Icon left + Content right */}
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-center mb-12 sm:mb-16">
              {/* Left: Icon on black background circle */}
              <AnimateOnScroll delay={100}>
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    {/* Animated outer ring */}
                    <div className="absolute inset-0 -m-4 rounded-full border-2 border-dashed border-[#FFD400]/20 animate-[spin_20s_linear_infinite]" />
                    {/* Glow */}
                    <div className="absolute inset-0 -m-2 rounded-full bg-[#FFD400]/10 blur-xl" />
                    {/* Icon container BLACK background with yellow icon */}
                    <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-black rounded-3xl flex items-center justify-center border-2 border-[#FFD400]/30 shadow-[0_0_60px_rgba(255,212,0,0.1)]">
                      <Image
                        src="/images/icons/icon-black.png"
                        alt="VCM Guarantee"
                        width={56}
                        height={56}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                      />
                      {/* Checkmark badge */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-[#FFD400] rounded-full flex items-center justify-center shadow-lg shadow-[#FFD400]/30">
                        <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6L5 9L10 3" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Right: Content */}
              <div>
                <AnimateOnScroll delay={200}>
                  <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white mb-4 sm:mb-6">
                    If we don&apos;t deliver measurable
                    <br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>
                    results in 90 days,
                    <br />
                    <span className="text-[#FFD400]">we work for free until we do.</span>
                  </h2>
                </AnimateOnScroll>

                <AnimateOnScroll delay={300}>
                  <p className="text-[15px] sm:text-[17px] text-gray-400 leading-relaxed max-w-xl">
                    We&apos;re not here to collect retainers and send PDF reports. We put skin in the game because we know our methodology works. If your business doesn&apos;t see measurable growth within 90 days, we don&apos;t stop we work at no cost until the numbers prove what we already know.
                  </p>
                </AnimateOnScroll>
              </div>
            </div>

            {/* Guarantee Stamp Cards redesigned as "seals" */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-12">
              {[
                {
                  icon: Clock,
                  metric: "90 Days",
                  label: "Performance Window",
                  desc: "Measurable results or we eat the cost",
                  isAccent: false,
                },
                {
                  icon: Flame,
                  metric: "Zero",
                  label: "Risk To You",
                  desc: "We carry the downside so you don't have to",
                  isAccent: true,
                },
                {
                  icon: BadgeCheck,
                  metric: "100%",
                  label: "Accountability",
                  desc: "Real metrics, not vanity dashboards",
                  isAccent: false,
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`group relative rounded-2xl p-6 sm:p-8 transition-all duration-700 overflow-hidden ${
                      item.isAccent
                        ? "bg-[#FFD400] border-2 border-[#FFD400] hover:shadow-[0_0_60px_rgba(255,212,0,0.2)] scale-[1.02] sm:scale-105"
                        : "bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-[#FFD400]/20"
                    } ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    {/* Stamp seal decoration */}
                    <div className={`absolute top-3 right-3 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed flex items-center justify-center ${
                      item.isAccent ? "border-black/10" : "border-[#FFD400]/10"
                    }`}>
                      <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${
                        item.isAccent ? "text-black/30" : "text-[#FFD400]/30"
                      }`}>
                        GUARANTEED
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-5 ${
                      item.isAccent
                        ? "bg-black/10"
                        : "bg-[#FFD400]/10 group-hover:bg-[#FFD400]/20"
                    } transition-colors duration-300`}>
                      <Icon size={24} className={item.isAccent ? "text-black" : "text-[#FFD400]"} />
                    </div>

                    {/* Metric */}
                    <p className={`text-[clamp(2rem,4vw,3rem)] font-bold mb-1 leading-none ${
                      item.isAccent ? "text-black" : "text-[#FFD400]"
                    }`}>
                      {item.metric}
                    </p>

                    {/* Label */}
                    <p className={`text-[15px] sm:text-[16px] font-semibold mb-2 ${
                      item.isAccent ? "text-black/80" : "text-white"
                    }`}>
                      {item.label}
                    </p>

                    {/* Description */}
                    <p className={`text-[13px] sm:text-[14px] ${
                      item.isAccent ? "text-black/60" : "text-gray-500"
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div
              className={`text-center transition-all duration-700 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <button
                onClick={() => {
                  const event = new CustomEvent("openProjectDrawer");
                  window.dispatchEvent(event);
                }}
                className="group inline-flex items-center bg-[#FFD400] hover:bg-[#E6BE00] text-gray-900 text-[14px] sm:text-[15px] font-semibold rounded-full pl-6 sm:pl-7 pr-2 py-2.5 sm:py-3 transition-colors duration-300"
              >
                <span className="text-roll-container">
                  <span>Claim Your Guarantee</span>
                  <span>Claim Your Guarantee</span>
                </span>
                <span className="ml-2 w-8 h-8 sm:w-9 sm:h-9 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                  <ArrowRight size={16} className="text-[#FFD400]" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
