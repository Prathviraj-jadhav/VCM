"use client";

import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

const PRESS_LOGOS = [
  { name: "YourStory", style: "font-serif italic" },
  { name: "Inc42", style: "font-bold tracking-tight" },
  { name: "Business Insider", style: "font-semibold tracking-wide" },
  { name: "Entrepreneur", style: "font-serif italic" },
  { name: "Forbes India", style: "font-bold tracking-tight" },
  { name: "Social Samosa", style: "font-semibold" },
  { name: "Afaqs!", style: "font-bold italic" },
  { name: "TechCrunch", style: "font-bold tracking-tight" },
];

export default function PressLogos() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 border-t border-gray-100">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <AnimateOnScroll>
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-[12px] sm:text-[13px] font-medium text-gray-400 uppercase tracking-[0.15em] mb-1">
              As Seen On
            </p>
            <p className="text-[14px] sm:text-[15px] text-gray-500">
              Recognized by the publications that matter
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-10 lg:gap-x-14 gap-y-5 sm:gap-y-6">
            {PRESS_LOGOS.map((logo) => (
              <span
                key={logo.name}
                className={`text-[18px] sm:text-[20px] lg:text-[22px] text-gray-300 hover:text-gray-600 ${logo.style} transition-colors duration-500 cursor-default select-none`}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
