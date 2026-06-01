"use client";

import Image from "next/image";
import { BRAND, SERVICES } from "@/lib/data";
import { usePage } from "@/lib/page-context";
import { ArrowRight, Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { navigate } = usePage();

  const footerNav = [
    { label: "Home", page: "home" as const },
    { label: "Services", page: "services" as const },
    { label: "Case Studies", page: "case-studies" as const },
    { label: "Insights", page: "blog" as const },
    { label: "About", page: "about" as const },
    { label: "Careers", page: "careers" as const },
    { label: "Contact", page: "contact" as const },
  ];

  const legalNav = [
    { label: "Privacy Policy", page: "privacy" as const },
    { label: "Terms & Conditions", page: "terms" as const },
    { label: "Sitemap", page: "sitemap" as const },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center overflow-hidden border border-[#FFD400]/30">
                <Image
                  src="/images/icons/navbar-icon.png"
                  alt="VCM"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-[16px] font-semibold">Vibe Create Media</span>
            </div>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-6">
              We build brands, content, campaigns, and growth systems for
              businesses ready to dominate their market.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/917020906559"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD400] hover:text-black transition-all duration-300"
                aria-label="WhatsApp"
              >
                <Phone size={16} />
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD400] hover:text-black transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://www.instagram.com/vibecreatemedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD400] hover:text-black transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/vibecreatemedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD400] hover:text-black transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.threads.com/@vibecreatemedia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD400] hover:text-black transition-all duration-300"
                aria-label="Threads"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10V10a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 4 0v-2a6 6 0 1 0-8 5.66" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/vibecreate-media/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD400] hover:text-black transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-wider text-gray-400 mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => navigate(item.page)}
                    className="text-[15px] text-gray-300 hover:text-[#FFD400] transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-wider text-gray-400 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => navigate("service-detail" as never, { id: service.id })}
                    className="text-[15px] text-gray-300 hover:text-[#FFD400] transition-colors duration-300"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-wider text-gray-400 mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#FFD400] mt-0.5 shrink-0" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-[15px] text-gray-300 hover:text-[#FFD400] transition-colors duration-300"
                >
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#FFD400] mt-0.5 shrink-0" />
                <a
                  href={`tel:+91${BRAND.phone}`}
                  className="text-[15px] text-gray-300 hover:text-[#FFD400] transition-colors duration-300"
                >
                  +91 {BRAND.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#FFD400] mt-0.5 shrink-0" />
                <span className="text-[15px] text-gray-300">
                  SK Towers, Second Floor, Opposite Kayamkhane Petrol Pump, Ambajogai Road, Latur
                </span>
              </li>
            </ul>
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent("openProjectDrawer"));
              }}
              className="inline-flex items-center gap-2 mt-5 bg-[#FFD400] text-black text-[13px] font-semibold rounded-full pl-5 pr-2 py-2 hover:bg-[#E6BE00] transition-colors duration-300 group"
            >
              <span className="text-roll-container">
                <span>Start Your Project</span>
                <span>Start Your Project</span>
              </span>
              <span className="w-7 h-7 bg-black rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                <ArrowRight size={14} className="text-[#FFD400]" />
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-[13px] text-gray-500">
            © {currentYear} Vibe Create Media. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalNav.map((item) => (
              <button
                key={item.page}
                onClick={() => navigate(item.page)}
                className="text-[13px] text-gray-500 hover:text-gray-300 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
