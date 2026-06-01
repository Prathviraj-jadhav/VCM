"use client";

import { useEffect, useRef, useState } from "react";
import { FAQS } from "@/lib/data";
import { ChevronDown, Sparkles } from "lucide-react";

function FAQItem({
  faq,
  index,
  isVisible,
}: {
  faq: (typeof FAQS)[number];
  index: number;
  isVisible: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border-b border-gray-100 last:border-0 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${300 + index * 80}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between py-5 sm:py-6 text-left group"
        aria-expanded={isOpen}
      >
        <h3 className="text-[15px] sm:text-[16px] font-medium text-gray-900 pr-4 group-hover:text-black transition-colors duration-300 leading-snug">
          {faq.question}
        </h3>
        <ChevronDown
          size={18}
          className={`shrink-0 text-gray-400 group-hover:text-black transition-all duration-300 mt-1 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 pb-5 sm:pb-6" : "max-h-0"
        }`}
      >
        <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
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
      id="faq"
      ref={sectionRef}
      className="bg-gray-50 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
          {/* Left Column */}
          <div>
            <div
              className={`flex items-center gap-3 mb-6 sm:mb-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FFD400] text-gray-900 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
                <Sparkles size={12} />
              </span>
              <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
                Questions? Good.
              </span>
            </div>

            <h2
              className={`text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Things people
              <br />
              ask before they
              <br />
              <span className="text-gray-400">work with us.</span>
            </h2>
            <p
              className={`text-[15px] sm:text-[16px] text-gray-600 leading-relaxed transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              We&apos;d be skeptical too. Here are the questions worth asking
              and answers worth reading.
            </p>
          </div>

          {/* Right Column - FAQs */}
          <div>
            {FAQS.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
