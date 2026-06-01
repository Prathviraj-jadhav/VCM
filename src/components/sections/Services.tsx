"use client";

import { useEffect, useRef, useState } from "react";
import {
  TrendingUp,
  Palette,
  Video,
  FileText,
  Share2,
  Globe,
  Handshake,
  Film,
  Target,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/data";
import { usePage } from "@/lib/page-context";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Palette,
  Video,
  FileText,
  Share2,
  Globe,
  Handshake,
  Film,
  Target,
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);
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
      id="services"
      ref={sectionRef}
      className="bg-[#FFD400] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Badge */}
        <div
          className={`flex items-center gap-3 mb-6 sm:mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black text-[#FFD400] text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            2
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium border border-black/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-black">
            What We Build
          </span>
        </div>

        {/* Heading */}
        <h2
          className={`text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-black mb-4 sm:mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Services that move the needle.
        </h2>
        <p
          className={`text-[15px] sm:text-[16px] text-black/70 leading-relaxed max-w-2xl mb-12 sm:mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Every service is designed with one outcome in mind: growth. Not
          vanity metrics. Not best practices. Just results.
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES.map((service, index) => {
            const IconComponent = ICON_MAP[service.icon];
            const isActive = activeService === service.id;

            return (
              <div
                key={service.id}
                onClick={() => navigate("service-detail", { id: service.id })}
                className={`group relative bg-white hover:bg-black rounded-2xl p-6 sm:p-7 cursor-pointer transition-all duration-500 ${
                  index === 0 ? "lg:col-span-2 lg:row-span-1" : ""
                } ${isActive ? "ring-2 ring-black" : ""}`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <div
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${300 + index * 80}ms` }}
                >
                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFD400]/20 group-hover:bg-[#FFD400]/30 rounded-xl flex items-center justify-center mb-4 sm:mb-5 transition-colors duration-300">
                    {IconComponent && (
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:text-[#FFD400] transition-colors duration-300" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-[16px] sm:text-[18px] font-semibold text-black group-hover:text-white mb-2 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-[14px] sm:text-[15px] text-black/60 group-hover:text-white/70 leading-relaxed mb-4 transition-colors duration-300">
                    {service.shortDesc}
                  </p>

                  {/* Features on hover */}
                  <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-96">
                    <div className="pt-4 border-t border-black/10 group-hover:border-white/20 transition-colors duration-300">
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature) => (
                          <li
                            key={feature}
                            className="text-[13px] text-white/70 flex items-center gap-2"
                          >
                            <span className="w-1 h-1 bg-[#FFD400] rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <p className="text-[12px] text-[#FFD400] mt-3 font-medium">
                        {service.timeline}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="mt-4 flex items-center gap-2 text-[13px] font-medium text-black group-hover:text-[#FFD400] transition-colors duration-300">
                    <span>Explore</span>
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
