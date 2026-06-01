"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { usePage } from "@/lib/page-context";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { navigate } = usePage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Badge */}
        <div
          className={`flex items-center gap-3 mb-6 sm:mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            1
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Meet Vibe Create Media
          </span>
        </div>

        {/* Heading */}
        <h2
          className={`text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-12 sm:mb-16 lg:mb-28 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Strategy-led growth, delivering
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          results in digital and beyond.
        </h2>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden">
          <p className="text-[15px] sm:text-[16px] leading-[1.6] font-medium text-gray-900 mb-6">
            Through research, creative thinking, and relentless iteration, we
            help ambitious brands realize their digital full potential. No
            fluff. No generic agency playbooks. Just strategies that work.
          </p>
          <button
            onClick={() => navigate("about")}
            className="group inline-flex items-center bg-[#FFD400] hover:bg-[#E6BE00] text-gray-900 text-[13px] sm:text-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 transition-colors duration-300 mb-8 sm:mb-10"
          >
            <span className="text-roll-container">
              <span>About Vibe Create Media</span>
              <span>About Vibe Create Media</span>
            </span>
            <span className="ml-2 w-7 h-7 sm:w-8 sm:h-8 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
              <ArrowRight size={14} className="text-[#FFD400]" />
            </span>
          </button>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <div className="sm:w-[45%] aspect-[438/346] rounded-xl sm:rounded-2xl bg-gray-100 overflow-hidden">
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85"
                alt="Vibe Create Media workspace"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="sm:w-[55%] aspect-[900/600] rounded-xl sm:rounded-2xl bg-gray-100 overflow-hidden">
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85"
                alt="Vibe Create Media team at work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8">
          <div className="self-end">
            <div className="aspect-[438/346] rounded-2xl bg-gray-100 overflow-hidden">
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85"
                alt="Vibe Create Media workspace"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="self-start flex justify-end pt-8">
            <div>
              <p className="text-[16px]/[18px] leading-[1.65] text-gray-900 font-medium whitespace-nowrap">
                Through research, creative thinking, and
                <br />
                relentless iteration, we help ambitious
                <br />
                brands realize their digital full potential.
                <br />
                No fluff. No generic agency playbooks.
                <br />
                Just strategies that work.
              </p>
              <button
                onClick={() => navigate("about")}
                className="group inline-flex items-center bg-[#FFD400] hover:bg-[#E6BE00] text-gray-900 text-[13px]/[14px] font-medium rounded-full pl-5 pr-2 py-2 transition-colors duration-300 mt-6"
              >
                <span className="text-roll-container">
                  <span>About Vibe Create Media</span>
                  <span>About Vibe Create Media</span>
                </span>
                <span className="ml-2 w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                  <ArrowRight size={14} className="text-[#FFD400]" />
                </span>
              </button>
            </div>
          </div>
          <div className="self-end">
            <div className="aspect-[3/2] rounded-2xl bg-gray-100 overflow-hidden">
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85"
                alt="Vibe Create Media team at work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
