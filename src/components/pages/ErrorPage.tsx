"use client";

import { usePage } from "@/lib/page-context";
import { BRAND } from "@/lib/data";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";
import {
  ArrowRight,
  Home,
  Briefcase,
  BookOpen,
  FolderOpen,
  Phone,
  Search,
  Ghost,
  Compass,
  MessageCircle,
} from "lucide-react";

const POPULAR_PAGES = [
  {
    icon: Briefcase,
    label: "Services",
    page: "services",
    description: "Discover how we help brands dominate.",
  },
  {
    icon: FolderOpen,
    label: "Case Studies",
    page: "case-studies",
    description: "Proof that we don't just talk we deliver.",
  },
  {
    icon: BookOpen,
    label: "Insights",
    page: "blog",
    description: "Strategies you can actually use today.",
  },
  {
    icon: Phone,
    label: "Contact",
    page: "contact",
    description: "Start a conversation that matters.",
  },
];

export default function ErrorPage() {
  const { navigate, goHome } = usePage();

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Hero / 404 Section ── */}
      <section className="bg-black pt-32 pb-16 sm:pb-24 lg:pb-32 flex-1 flex flex-col">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 flex-1 flex flex-col items-center justify-center">
          <AnimateOnScroll>
            <div className="relative mb-8 sm:mb-10">
              <span className="text-[clamp(7rem,20vw,14rem)] font-bold leading-none tracking-[-0.05em] text-[#FFD400] select-none">
                404
              </span>
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6">
                <Ghost size={48} className="text-[#FFD400]/30 sm:hidden" />
                <Ghost size={64} className="text-[#FFD400]/30 hidden sm:block" />
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white text-center max-w-2xl mb-4 sm:mb-6">
              This page pulled a Houdini.
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[16px] sm:text-[18px] text-gray-400 leading-relaxed max-w-xl text-center mb-6 sm:mb-8">
              Looks like this page went on vacation without telling us. Maybe it&apos;s
              scaling a brand somewhere who knows. Either way, it&apos;s not here.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <button
                onClick={goHome}
                className="group inline-flex items-center bg-[#FFD400] hover:bg-[#E6BE00] text-gray-900 text-[14px] sm:text-[15px] font-semibold rounded-full pl-6 sm:pl-7 pr-2 py-2.5 sm:py-3 transition-colors duration-300"
              >
                <Home size={16} className="mr-2" />
                <span>Take me home</span>
                <span className="ml-2 w-8 h-8 sm:w-9 sm:h-9 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                  <ArrowRight size={16} className="text-[#FFD400]" />
                </span>
              </button>

              <button
                onClick={() => navigate("contact")}
                className="group inline-flex items-center bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#FFD400]/30 text-white text-[14px] sm:text-[15px] font-semibold rounded-full pl-6 sm:pl-7 pr-2 py-2.5 sm:py-3 transition-all duration-300"
              >
                <MessageCircle size={16} className="mr-2 text-[#FFD400]" />
                <span>Get help</span>
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Popular Pages ── */}
      <section className="bg-white pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <Compass size={20} className="text-[#FFD400]" />
              <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600">
                Lost? Try these instead.
              </span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 mb-2 sm:mb-3">
              Popular pages
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-xl mb-10 sm:mb-14">
              While we figure out where that page went, here are the spots our
              visitors actually want to be.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {POPULAR_PAGES.map((page, index) => {
              const Icon = page.icon;
              return (
                <AnimateOnScroll key={page.label} delay={index * 100}>
                  <button
                    onClick={() => navigate(page.page as never)}
                    className="group w-full text-left bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-7 hover:bg-gray-900 hover:border-gray-800 transition-all duration-500 h-full"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#FFD400]/10 group-hover:bg-[#FFD400]/20 flex items-center justify-center mb-5 transition-colors duration-300">
                      <Icon size={20} className="text-[#FFD400]" />
                    </div>
                    <h3 className="text-[16px] sm:text-[17px] font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                      {page.label}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-gray-500 group-hover:text-gray-400 leading-relaxed transition-colors duration-300">
                      {page.description}
                    </p>
                  </button>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Search Suggestion ── */}
      <section className="bg-gray-900 pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <AnimateOnScroll>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FFD400]/10 flex items-center justify-center mx-auto mb-6 sm:mb-8">
                <Search size={24} className="text-[#FFD400] sm:hidden" />
                <Search size={28} className="text-[#FFD400] hidden sm:block" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white mb-3 sm:mb-4">
                Still can&apos;t find what you need?
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] sm:text-[17px] text-gray-400 leading-relaxed max-w-lg mx-auto mb-8 sm:mb-10">
                Don&apos;t wander aimlessly. Hit us up on WhatsApp and
                we&apos;ll point you in the right direction usually within
                a couple of hours.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <a
                href={`${BRAND.whatsapp}?text=${encodeURIComponent("Hey Vibe Create Media, I got lost on your website. Can you help me find what I'm looking for?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#FFD400]/30 text-white text-[14px] sm:text-[15px] font-semibold rounded-full pl-6 sm:pl-7 pr-2 py-2.5 sm:py-3 transition-all duration-300"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] mr-2" />
                <span>Chat on WhatsApp</span>
                <span className="ml-2 w-8 h-8 sm:w-9 sm:h-9 bg-[#FFD400] rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                  <ArrowRight size={16} className="text-gray-900" />
                </span>
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
