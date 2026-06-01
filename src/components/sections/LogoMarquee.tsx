"use client";

import { useEffect, useRef, useState } from "react";

const CLIENTS = [
  "All Works Immigration",
  "Andaman Bliss",
  "ThinklyGold",
  "Room Hug",
  "Story Buzz",
];

export default function LogoMarquee() {
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
      className="py-12 sm:py-16 bg-white border-y border-gray-100 overflow-hidden"
    >
      <div
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-center text-[12px] sm:text-[13px] font-medium text-gray-400 uppercase tracking-widest mb-8">
          Brands We've Worked With
        </p>

        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Marquee */}
          <div className="flex animate-marquee">
            {[...CLIENTS, ...CLIENTS].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex items-center justify-center min-w-[200px] sm:min-w-[240px] px-4 sm:px-6"
              >
                <span className="text-[18px] sm:text-[20px] font-semibold text-gray-300 hover:text-gray-400 transition-colors duration-300 whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
