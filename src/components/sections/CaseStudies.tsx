"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/data";
import { usePage } from "@/lib/page-context";

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { navigate } = usePage();

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
      id="case-studies"
      ref={sectionRef}
      className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Badge */}
        <div
          className={`flex items-center gap-3 mb-6 sm:mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            10
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Featured client work
          </span>
        </div>

        {/* Heading */}
        <h2
          className={`text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-10 sm:mb-14 lg:mb-16 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Our projects
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
          {CASE_STUDIES.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Video Container */}
              <div
                onClick={() => navigate("case-study-detail", { id: caseStudy.id })}
                className={`relative ${caseStudy.bgColor} rounded-2xl overflow-hidden group cursor-pointer aspect-square`}
              >
                <video
                  src={caseStudy.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Hover Button */}
                <div className="absolute bottom-4 left-4">
                  <div
                    className={`${
                      caseStudy.buttonType === "light"
                        ? "bg-white text-gray-900"
                        : "bg-gray-900 text-white"
                    } h-9 flex items-center rounded-full transition-all duration-300 ease-in-out w-9 group-hover:w-[148px] sm:group-hover:w-[168px] overflow-hidden`}
                  >
                    <span
                      className={`text-[13px] font-medium whitespace-nowrap px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 ${
                        caseStudy.buttonType === "light"
                          ? "text-gray-900"
                          : "text-white"
                      }`}
                    >
                      {caseStudy.buttonType === "light"
                        ? "Learn more"
                        : "View case study"}
                    </span>
                    <div
                      className={`flex items-center justify-center w-9 h-9 shrink-0 ${
                        caseStudy.buttonType === "light"
                          ? "text-gray-900"
                          : "text-white"
                      }`}
                    >
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:rotate-0 -rotate-45"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[13px]/[14px] text-gray-600 mt-4 leading-relaxed">
                {caseStudy.description}
              </p>
              <p className="text-[14px]/[15px] font-semibold text-gray-900 mt-1">
                {caseStudy.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
