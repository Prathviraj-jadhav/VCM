"use client";

import { useEffect, useState, useCallback } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { usePage } from "@/lib/page-context";
import { BRAND } from "@/lib/data";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Services", page: "services" },
  { label: "UGC", page: "ugc" },
  { label: "Case Studies", page: "case-studies" },
  { label: "Insights", page: "blog" },
  { label: "About", page: "about" },
  { label: "Contact", page: "contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { navigate, currentPage } = usePage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = useCallback(
    (page: string) => {
      setMobileOpen(false);
      navigate(page as never);
    },
    [navigate]
  );

  const isActive = useCallback(
    (page: string) => {
      if (page === "services" && currentPage === "service-detail") return true;
      if (page === "blog" && currentPage === "blog-detail") return true;
      if (page === "case-studies" && currentPage === "case-study-detail") return true;
      if (page === "ugc" && currentPage === "ugc") return true;
      return currentPage === page;
    },
    [currentPage]
  );

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "top-3" : "top-4 sm:top-5"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-3 sm:px-5">
          <div
            className={`bg-white/90 backdrop-blur-lg rounded-full flex items-center justify-between border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              scrolled
                ? "p-2 sm:p-[6px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-black/[0.06]"
                : "p-3 sm:p-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.03)] border-black/[0.02]"
            }`}
          >
            {/* Left */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                onClick={() => handleNav("home")}
                className={`rounded-full flex items-center justify-center shrink-0 bg-black hover:bg-gray-900 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden shadow-md shadow-black/10 ${
                  scrolled ? "w-10 h-10" : "w-11 h-11 sm:w-12 sm:h-12"
                }`}
                aria-label="Vibe Create Media Home"
              >
                <Image
                  src="/images/icons/navbar-icon.png"
                  alt="VCM"
                  width={48}
                  height={48}
                  className={`object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    scrolled ? "w-[26px] h-[26px]" : "w-[30px] h-[30px] sm:w-[34px] sm:h-[34px]"
                  }`}
                />
              </button>
              <div className="hidden lg:flex items-center gap-1.5">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNav(item.page)}
                    className={`text-[13px] transition-all duration-300 rounded-full px-3.5 py-1.5 font-medium ${
                      isActive(item.page)
                        ? "text-black font-semibold bg-[#FFD400] shadow-[0_2px_10px_rgba(255,212,0,0.25)]"
                        : "text-gray-600 hover:text-black hover:bg-gray-100/70"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  const event = new CustomEvent("openProjectDrawer");
                  window.dispatchEvent(event);
                }}
                className="hidden md:flex group items-center bg-[#FFD400] hover:bg-[#E6BE00] text-black text-[13px] font-semibold rounded-full pl-5 pr-2 py-2 transition-colors duration-300"
              >
                <span className="text-roll-container">
                  <span>Start a Project</span>
                  <span>Start a Project</span>
                </span>
                <span className="ml-2 w-6 h-6 bg-black rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                  <ArrowRight size={12} className="text-[#FFD400]" />
                </span>
              </button>
              <button
                className="lg:hidden bg-[#FFD400] rounded-full w-9 h-9 flex items-center justify-center text-black"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 mx-3 mb-3 bg-white rounded-2xl p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            mobileOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex flex-col gap-1">
            {[
              { label: "Home", page: "home" },
              ...NAV_ITEMS,
              { label: "Careers", page: "careers" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.page)}
                className={`text-[24px] font-medium leading-[36px] transition-colors text-left px-2 rounded-lg ${
                  isActive(item.page)
                    ? "text-black bg-[#FFD400]/10"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <button
              onClick={() => {
                setMobileOpen(false);
                const event = new CustomEvent("openProjectDrawer");
                window.dispatchEvent(event);
              }}
              className="flex items-center justify-between bg-[#FFD400] hover:bg-[#E6BE00] text-black text-[15px] font-semibold rounded-full px-5 py-3 transition-colors w-full"
            >
              Start a Project
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
