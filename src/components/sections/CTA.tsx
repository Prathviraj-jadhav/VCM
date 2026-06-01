"use client";

import { useEffect, useRef, useState } from "react";
import { BRAND, WHATSAPP_MESSAGE } from "@/lib/data";
import { ArrowRight, Mail, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";

export default function CTA() {
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
      id="contact"
      ref={sectionRef}
      className="bg-gray-900 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`flex items-center justify-center gap-3 mb-8 sm:mb-10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80">
              Ready to Scale?
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Your next growth chapter
            <br />
            <span className="text-white">starts with a conversation.</span>
          </h2>

          {/* Subtext */}
          <p
            className={`text-[15px] sm:text-[17px] text-gray-400 leading-relaxed max-w-xl mx-auto mb-10 sm:mb-14 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            No pitch decks. No pressure. Just a genuine conversation about your
            business, your goals, and whether we&apos;re the right partner to get
            you there.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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
                <span>Start Your Project</span>
                <span>Start Your Project</span>
              </span>
              <span className="ml-2 w-8 h-8 sm:w-9 sm:h-9 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                <ArrowRight size={16} className="text-[#FFD400]" />
              </span>
            </button>

            <a
              href={`https://wa.me/917020906559?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-white/10 hover:bg-white/20 text-white text-[14px] sm:text-[15px] font-medium rounded-full px-6 sm:px-7 py-2.5 sm:py-3 transition-all duration-300 border border-white/10"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] mr-2" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Info */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mt-10 sm:mt-14 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href={`mailto:${BRAND.email}`}
              className="flex items-center gap-2 text-[14px] text-gray-400 hover:text-[#FFD400] transition-colors duration-300"
            >
              <Mail size={16} />
              {BRAND.email}
            </a>
            <a
              href={`tel:+91${BRAND.phone}`}
              className="flex items-center gap-2 text-[14px] text-gray-400 hover:text-[#FFD400] transition-colors duration-300"
            >
              <Phone size={16} />
              +91 {BRAND.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
