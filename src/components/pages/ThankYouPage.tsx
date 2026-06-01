"use client";

import { useEffect, useState } from "react";
import { usePage } from "@/lib/page-context";
import { BRAND } from "@/lib/data";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";
import {
  Check,
  ArrowRight,
  Eye,
  Phone,
  Rocket,
  BookOpen,
  Briefcase,
  FolderOpen,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";

const NEXT_STEPS = [
  {
    step: "01",
    icon: Eye,
    title: "Review",
    description:
      "Our team reviews your project details, researches your market, and identifies the biggest growth levers for your business.",
    timeline: "Within 24 hours",
  },
  {
    step: "02",
    icon: Phone,
    title: "Strategy Call",
    description:
      "We schedule a 30-minute call to discuss your goals, challenges, and whether we're the right partner to get you there. No fluff just honest strategy.",
    timeline: "Within 48 hours",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Launch",
    description:
      "Once aligned, we build your custom growth roadmap and get to work. From strategy to execution, your growth engine starts here.",
    timeline: "Week 1",
  },
];

const STATS = [
  { icon: Users, value: "50+", label: "Brands Scaled" },
  { icon: TrendingUp, value: "4x", label: "Avg. ROAS" },
  { icon: Award, value: "94%", label: "Client Retention" },
];

const EXPLORE_LINKS = [
  {
    icon: BookOpen,
    label: "Blog & Insights",
    page: "blog",
    description: "Read up while you wait.",
  },
  {
    icon: Briefcase,
    label: "Our Services",
    page: "services",
    description: "See what we can do for you.",
  },
  {
    icon: FolderOpen,
    label: "Case Studies",
    page: "case-studies",
    description: "Proof we deliver results.",
  },
];

export default function ThankYouPage() {
  const { navigate } = usePage();
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCheck(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const WHATSAPP_THANKS = encodeURIComponent(
    "Hey Vibe Create Media! I just submitted a project inquiry and I'm excited to explore how we can work together. Looking forward to hearing from you!"
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Hero / Thank You Section ── */}
      <section className="bg-black pt-32 pb-16 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            {/* Animated Check Icon */}
            <AnimateOnScroll>
              <div className="mx-auto mb-8 sm:mb-10">
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FFD400] flex items-center justify-center mx-auto transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                    showCheck
                      ? "scale-100 opacity-100"
                      : "scale-50 opacity-0"
                  }`}
                >
                  <Check
                    size={40}
                    className={`text-gray-900 transition-all duration-500 delay-300 ${
                      showCheck ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                    strokeWidth={3}
                  />
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white mb-4 sm:mb-6">
                Message received.{" "}
                <span className="text-[#FFD400]">Game on.</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <p className="text-[16px] sm:text-[18px] text-gray-400 leading-relaxed max-w-lg mx-auto mb-3 sm:mb-4">
                Thanks for reaching out. We&apos;ll be in touch within{" "}
                <span className="text-white font-semibold">24 hours</span>  
                probably sooner, because sitting around isn&apos;t really our thing.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <p className="text-[14px] sm:text-[15px] text-gray-500">
                In the meantime, here&apos;s what happens next.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── What Happens Next ── */}
      <section className="bg-white pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-6 sm:mb-8">
              What Happens Next
            </span>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
            {NEXT_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimateOnScroll key={step.step} delay={index * 150}>
                  <div className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:bg-white transition-all duration-500 h-full relative">
                    {/* Step number */}
                    <span className="absolute top-6 right-6 text-[48px] sm:text-[56px] font-bold text-gray-100 leading-none select-none group-hover:text-[#FFD400]/10 transition-colors duration-500">
                      {step.step}
                    </span>

                    <div className="w-12 h-12 rounded-xl bg-[#FFD400]/10 flex items-center justify-center mb-5 group-hover:bg-[#FFD400]/20 transition-colors duration-300">
                      <Icon size={22} className="text-[#FFD400]" />
                    </div>

                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>

                    <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-semibold text-[#FFD400] bg-[#FFD400]/10 rounded-full px-3 py-1">
                      {step.timeline}
                    </span>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Social Proof / Stats ── */}
      <section className="bg-gray-900 pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-6 sm:mb-8">
                Why You Made the Right Choice
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white mb-4 sm:mb-6">
                You&apos;re in good company.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] sm:text-[17px] text-gray-400 leading-relaxed max-w-lg mx-auto mb-10 sm:mb-14">
                Every brand that works with us starts exactly where you are now  
                with a conversation. Here&apos;s what they found on the other side.
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {STATS.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <AnimateOnScroll key={stat.label} delay={index * 100}>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8 text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FFD400]/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <Icon size={18} className="text-[#FFD400] sm:hidden" />
                        <Icon size={22} className="text-[#FFD400] hidden sm:block" />
                      </div>
                      <p className="text-[28px] sm:text-[36px] font-bold text-white mb-1">
                        {stat.value}
                      </p>
                      <p className="text-[12px] sm:text-[14px] text-gray-400">
                        {stat.label}
                      </p>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>

            {/* Testimonial */}
            <AnimateOnScroll delay={400}>
              <div className="mt-8 sm:mt-12 bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-left">
                <blockquote className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.5] text-white mb-6">
                  &ldquo;We went from skeptical to scaling in under 90 days. The
                  Vibe team doesn&apos;t just understand marketing they
                  understand business. Best decision we made this year.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFD400] flex items-center justify-center">
                    <span className="text-[14px] font-bold text-gray-900">
                      SP
                    </span>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-white">
                      Satisfied Partner
                    </p>
                    <p className="text-[12px] text-gray-500">
                      E-commerce Brand, Mumbai
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Explore More ── */}
      <section className="bg-white pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-4 sm:mb-6">
              While You Wait
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 mb-2 sm:mb-3">
              Explore more of Vibe
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-xl mb-10 sm:mb-14">
              Your strategy call is coming. In the meantime, get to know us a
              little better.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {EXPLORE_LINKS.map((link, index) => {
              const Icon = link.icon;
              return (
                <AnimateOnScroll key={link.label} delay={index * 100}>
                  <button
                    onClick={() => navigate(link.page as never)}
                    className="group w-full text-left bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-7 hover:bg-gray-900 hover:border-gray-800 transition-all duration-500"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#FFD400]/10 group-hover:bg-[#FFD400]/20 flex items-center justify-center mb-4 transition-colors duration-300">
                      <Icon size={18} className="text-[#FFD400]" />
                    </div>
                    <h3 className="text-[15px] sm:text-[17px] font-semibold text-gray-900 group-hover:text-white mb-1 transition-colors duration-300">
                      {link.label}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                      {link.description}
                    </p>
                  </button>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WhatsApp CTA ── */}
      <section className="bg-[#FFD400] pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <AnimateOnScroll>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gray-900 flex items-center justify-center mx-auto mb-6 sm:mb-8">
                <WhatsAppIcon className="w-6 h-6 text-[#FFD400] sm:hidden" />
                <WhatsAppIcon className="w-7 h-7 text-[#FFD400] hidden sm:block" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 mb-3 sm:mb-4">
                Can&apos;t wait? Neither can we.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] sm:text-[17px] text-gray-900/70 leading-relaxed max-w-lg mx-auto mb-8 sm:mb-10">
                Skip the queue and ping us directly on WhatsApp. Tell us about
                your project, ask us anything, or just say hi we respond fast.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <a
                href={`${BRAND.whatsapp}?text=${WHATSAPP_THANKS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white text-[14px] sm:text-[15px] font-semibold rounded-full pl-6 sm:pl-7 pr-2 py-2.5 sm:py-3 transition-colors duration-300"
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
