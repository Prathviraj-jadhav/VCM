"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TEAM } from "@/lib/data";

export default function Team() {
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
      id="team"
      ref={sectionRef}
      className="bg-gray-50 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Badge */}
        <div
          className={`flex items-center gap-3 mb-6 sm:mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            6
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            The People
          </span>
        </div>

        {/* Heading */}
        <h2
          className={`text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4 sm:mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          The minds behind
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          the momentum.
        </h2>
        <p
          className={`text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-xl mb-12 sm:mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Small team. Outsized impact. Every person here was handpicked for
          their ability to think, execute, and care about outcomes not just
          outputs.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TEAM.map((member, index) => (
            <div
              key={member.name}
              className={`group bg-white rounded-2xl p-6 sm:p-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Avatar */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#FFD400] transition-colors duration-300 overflow-hidden relative">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="80px"
                  />
                ) : (
                  <span className="text-[20px] sm:text-[24px] font-bold text-white group-hover:text-gray-900 transition-colors duration-300">
                    {member.initials}
                  </span>
                )}
              </div>

              {/* Role */}
              <span className="text-[11px] sm:text-[12px] font-semibold text-black bg-[#FFD400] uppercase tracking-wider px-2 py-0.5 rounded">
                {member.role}
              </span>

              {/* Name */}
              <h3 className="text-[16px] sm:text-[18px] font-semibold text-gray-900 mt-1 mb-2">
                {member.name}
              </h3>

              {/* Description */}
              <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
