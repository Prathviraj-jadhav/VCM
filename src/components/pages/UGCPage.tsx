"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Play,
  Zap,
  TrendingUp,
  Users,
  Video,
  Award,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Camera,
  Mic,
  Clapperboard,
  Package,
  Heart,
  Utensils,
  Shirt,
  GraduationCap,
  Building2,
  Wrench,
  Megaphone,
  BarChart3,
} from "lucide-react";
import { UGC_CATEGORIES, BRAND } from "@/lib/data";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "product-reviews": Package,
  "beauty-skincare": Heart,
  "health-wellness": TrendingUp,
  "food-grocery": Utensils,
  "fashion-accessories": Shirt,
  "education-courses": GraduationCap,
  "real-estate-travel": Building2,
  "local-services": Wrench,
  "digital-marketing": Megaphone,
  "trading-finance": BarChart3,
};

export default function UGCPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroVisible] = useState(true);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const [categoriesVisible, setCategoriesVisible] = useState(false);
  const processRef = useRef<HTMLDivElement>(null);
  const [processVisible, setProcessVisible] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === categoriesRef.current) setCategoriesVisible(true);
            if (entry.target === processRef.current) setProcessVisible(true);
            if (entry.target === ctaRef.current) setCtaVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (categoriesRef.current) observer.observe(categoriesRef.current);
    if (processRef.current) observer.observe(processRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative bg-black pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div
            ref={heroRef}
            className={`max-w-4xl transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-[12px] sm:text-[13px] font-medium rounded-full px-4 py-1.5">
                <Video className="w-3.5 h-3.5" />
                UGC, Voiceover & Editing Portfolio
              </span>
            </div>

            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white mb-6">
              High-converting user-generated content,{" "}
              <span className="text-[#FFD400]">professional video edits</span>, expert
              voiceovers & digital marketing solutions for modern brands.
            </h1>

            <p className="text-[16px] sm:text-[18px] text-white/60 leading-relaxed max-w-2xl mb-10">
              We create UGC that doesn&apos;t just look good it sells. From product reviews to
              brand stories, every piece of content is engineered to convert.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  const event = new CustomEvent("openUGCDrawer");
                  window.dispatchEvent(event);
                }}
                className="group inline-flex items-center bg-[#FFD400] hover:bg-[#E6BE00] text-black text-[14px] sm:text-[15px] font-semibold rounded-full pl-6 pr-2 py-3 transition-colors duration-300 w-fit"
              >
                Get Started
                <span className="ml-3 w-8 h-8 bg-black rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                  <ArrowRight size={16} className="text-[#FFD400]" />
                </span>
              </button>
              <a
                href={`${BRAND.whatsapp}?text=${encodeURIComponent("Hi! I'm interested in your UGC video services. Can we discuss?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-[14px] sm:text-[15px] font-medium rounded-full px-6 py-3 transition-colors duration-300 w-fit border border-white/10"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div
            className={`mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { value: "200+", label: "UGC Videos Created", icon: Video },
              { value: "4x", label: "Higher CTR vs Branded", icon: TrendingUp },
              { value: "50+", label: "Brands Served", icon: Users },
              { value: "94%", label: "Client Retention", icon: Award },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <stat.icon className="w-4 h-4 text-[#FFD400]" />
                  <span className="text-[28px] sm:text-[32px] font-bold text-white">
                    {stat.value}
                  </span>
                </div>
                <p className="text-[13px] text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Categories Grid */}
      <section className="bg-white pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div ref={categoriesRef} className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div
            className={`max-w-2xl mb-12 sm:mb-16 transition-all duration-700 ${
              categoriesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 py-1.5 text-gray-600 mb-6 inline-block">
              Our UGC Portfolio
            </span>
            <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-black mb-4">
              We create UGC for every industry.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
              From product reviews to brand stories our UGC portfolio spans across
              industries, each video crafted to stop the scroll and start a conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {UGC_CATEGORIES.map((category, index) => {
              const CatIcon = CATEGORY_ICONS[category.id] || Package;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    const event = new CustomEvent("openUGCDrawer");
                    window.dispatchEvent(event);
                  }}
                  className={`group relative bg-gray-50 hover:bg-black rounded-2xl p-6 sm:p-7 cursor-pointer transition-all duration-300 overflow-hidden text-left w-full border-2 border-transparent hover:border-[#FFD400]/30 ${
                    categoriesVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }`}
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  <div className="relative z-10">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#FFD400]/10 group-hover:bg-[#FFD400] rounded-xl flex items-center justify-center transition-all duration-300 shrink-0">
                        <CatIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#FFD400] group-hover:text-black transition-colors duration-300" />
                      </div>
                      <h3 className="text-[16px] sm:text-[18px] font-semibold text-black group-hover:text-white transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[14px] sm:text-[15px] text-gray-500 group-hover:text-white/70 leading-relaxed mb-5 transition-colors duration-300">
                      {category.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 mb-6">
                      {category.features.slice(0, 4).map((feature) => (
                        <li
                          key={feature}
                          className="text-[13px] text-gray-400 group-hover:text-white/60 flex items-center gap-2 transition-colors duration-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400] shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-[13px] font-medium text-black group-hover:text-[#FFD400] transition-colors duration-300">
                      <span>Get Started</span>
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our UGC Process */}
      <section className="bg-[#FFD400] pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div ref={processRef} className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div
            className={`max-w-2xl mb-12 sm:mb-16 transition-all duration-700 ${
              processVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-[12px] sm:text-[13px] font-medium border border-black/20 rounded-full px-4 py-1.5 text-black mb-6 inline-block">
              How We Create UGC
            </span>
            <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-black mb-4">
              From brief to viral. Our UGC process.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-black/70 leading-relaxed">
              Every UGC video follows our proven 4-step framework designed to maximize
              engagement and drive conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                icon: Camera,
                title: "Discovery & Strategy",
                description: "We study your product, audience, and competitors to craft UGC scripts that convert.",
                timeline: "2-3 days",
              },
              {
                step: "02",
                icon: Video,
                title: "Creator Matching",
                description: "We source creators who match your brand voice and audience demographic perfectly.",
                timeline: "3-5 days",
              },
              {
                step: "03",
                icon: Clapperboard,
                title: "Production & Editing",
                description: "Professional shooting with expert editing, motion graphics, and sound design.",
                timeline: "5-7 days",
              },
              {
                step: "04",
                icon: TrendingUp,
                title: "Launch & Optimize",
                description: "We A/B test variations, track performance, and scale what works. Data-driven iteration.",
                timeline: "Ongoing",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className={`bg-white rounded-2xl p-6 sm:p-7 transition-all duration-700 ${
                  processVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <span className="text-[12px] font-bold text-[#FFD400] bg-black rounded-full w-7 h-7 flex items-center justify-center mb-4">
                  {item.step}
                </span>
                <item.icon className="w-6 h-6 text-black mb-3" />
                <h3 className="text-[16px] sm:text-[18px] font-semibold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-[14px] text-black/60 leading-relaxed mb-3">
                  {item.description}
                </p>
                <span className="text-[12px] font-medium text-black/40 bg-black/5 rounded-full px-3 py-1">
                  {item.timeline}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voiceover & Editing Section */}
      <section className="bg-black pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-[12px] sm:text-[13px] font-medium rounded-full px-4 py-1.5 mb-6">
                <Mic className="w-3.5 h-3.5" />
                Voiceover & Video Editing
              </span>
              <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white mb-6">
                Professional voiceovers & expert video editing that makes your content stand out.
              </h2>
              <p className="text-[15px] sm:text-[16px] text-white/60 leading-relaxed mb-8">
                Our editing suite combines professional tools with human creativity. Every cut,
                transition, and sound effect is placed with intention to keep viewers watching
                and clicking.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Sparkles, title: "Professional Editing", desc: "Smart cuts, auto-captions, and expert color grading" },
                  { icon: Mic, title: "Professional Voiceovers", desc: "Male/female voices in Hindi, English, Marathi & more" },
                  { icon: Clapperboard, title: "Motion Graphics", desc: "Custom animations, lower thirds, and branded elements" },
                  { icon: Zap, title: "Platform Optimization", desc: "Format-specific edits for Reels, Shorts, TikTok & Ads" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-[#FFD400]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#FFD400]/20 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-[#FFD400]" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-[14px] text-white/50">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#FFD400]/5 rounded-3xl blur-[60px] pointer-events-none" />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { label: "Videos Edited", value: "500+", accent: false },
                  { label: "Avg. Turnaround", value: "48hr", accent: true },
                  { label: "Voiceover Languages", value: "5+", accent: false },
                  { label: "Client Satisfaction", value: "98%", accent: true },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={`rounded-2xl p-6 text-center ${
                      stat.accent
                        ? "bg-[#FFD400] text-black"
                        : "bg-white/5 border border-white/10 text-white"
                    }`}
                  >
                    <span className={`text-[28px] sm:text-[36px] font-bold block mb-1`}>
                      {stat.value}
                    </span>
                    <span className={`text-[12px] sm:text-[13px] ${stat.accent ? "text-black/60" : "text-white/40"}`}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div ref={ctaRef} className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div
            className={`bg-black rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden transition-all duration-700 ${
              ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#FFD400]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <Sparkles className="w-8 h-8 text-[#FFD400] mx-auto mb-6" />
              <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white mb-4">
                Ready to create UGC that converts?
              </h2>
              <p className="text-[16px] sm:text-[18px] text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
                Tell us about your brand and we&apos;ll craft a UGC strategy that drives real results not just views.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const event = new CustomEvent("openUGCDrawer");
                    window.dispatchEvent(event);
                  }}
                  className="group inline-flex items-center bg-[#FFD400] hover:bg-[#E6BE00] text-black text-[14px] sm:text-[15px] font-semibold rounded-full pl-6 pr-2 py-3 transition-colors duration-300"
                >
                  Get Started
                  <span className="ml-3 w-8 h-8 bg-black rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                    <ArrowRight size={16} className="text-[#FFD400]" />
                  </span>
                </button>
                <a
                  href={`${BRAND.whatsapp}?text=${encodeURIComponent("Hi! I'm interested in your UGC services. Can we discuss a strategy for my brand?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:border-[#FFD400]/30 text-white text-[14px] sm:text-[15px] font-medium rounded-full px-6 py-3 transition-colors duration-300"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
