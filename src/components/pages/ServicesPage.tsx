"use client";

import { usePage } from "@/lib/page-context";
import {
  ArrowRight,
  TrendingUp,
  Palette,
  Video,
  FileText,
  Share2,
  Globe,
  Handshake,
  Film,
  Target,
  Check,
  Clock,
} from "lucide-react";
import { SERVICES } from "@/lib/data";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

/* ── Icon mapping: service.icon string → Lucide component ── */
const ICON_MAP: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
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

/* ── Process steps data ── */
const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We deep-dive into your business, audience, and competitive landscape. No assumptions just questions, data, and honest conversations about where you are and where you want to go.",
    detail: "Understanding before action",
  },
  {
    step: 2,
    title: "Strategy",
    description:
      "We build a custom growth blueprint with clear KPIs, timelines, and milestones. Every tactic is tied to a strategic objective nothing is arbitrary, everything is intentional.",
    detail: "Blueprint for measurable growth",
  },
  {
    step: 3,
    title: "Execute",
    description:
      "We launch fast and iterate faster. Campaigns go live, content ships, systems activate. You see momentum in weeks, not months. Speed is our competitive advantage.",
    detail: "Launch, learn, optimize",
  },
  {
    step: 4,
    title: "Scale",
    description:
      "What works gets scaled. What doesn't gets pivoted. We optimize aggressively using real-time data, compounding wins, and eliminating waste. Growth becomes systematic, not accidental.",
    detail: "Systematic, compounding growth",
  },
] as const;

export default function ServicesPage() {
  const { navigate } = usePage();

  const handleGetStarted = () => {
    const event = new CustomEvent("openProjectDrawer");
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ════════════════════════════════════════════
          Section 1 Hero
          ════════════════════════════════════════════ */}
      <section className="bg-black pt-32 pb-20 sm:pb-28 lg:pb-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-8 sm:mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
              Services
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white max-w-4xl mb-6 sm:mb-8">
              Every service designed with one outcome:{" "}
              <span className="text-[#FFD400]">growth.</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[16px] sm:text-[18px] text-gray-400 leading-relaxed max-w-2xl">
              We don&apos;t sell hours or deliverables we engineer growth
              systems. Each service is a precision tool, built to solve a
              specific business problem and measured by the only metric that
              matters: revenue impact.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Section 2 Services List
          ════════════════════════════════════════════ */}
      <section className="bg-white pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-6 sm:mb-8">
              What We Build
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 max-w-3xl mb-4 sm:mb-6">
              Nine services. One mission.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-2xl mb-12 sm:mb-16">
              Each service can stand alone or combine into a full-stack growth
              engine. No fluff, no filler just capabilities that move revenue.
            </p>
          </AnimateOnScroll>

          <div className="space-y-6 sm:space-y-8">
            {SERVICES.map((service, index) => {
              const IconComponent = ICON_MAP[service.icon];

              return (
                <AnimateOnScroll key={service.id} delay={index * 80}>
                  <div className="group relative bg-gray-50 hover:bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-6 lg:gap-12">
                      {/* Left column Icon, title, description */}
                      <div>
                        <div className="flex items-start gap-4 sm:gap-5 mb-5 sm:mb-6">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#FFD400]/10 group-hover:bg-[#FFD400]/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                            {IconComponent && (
                              <IconComponent
                                size={24}
                                className="text-[#FFD400]"
                              />
                            )}
                          </div>
                          <div>
                            <h3 className="text-[18px] sm:text-[22px] lg:text-[24px] font-semibold text-gray-900 group-hover:text-white transition-colors duration-300 leading-tight">
                              {service.title}
                            </h3>
                            <p className="text-[13px] sm:text-[14px] text-gray-500 group-hover:text-gray-500 mt-1 transition-colors duration-300">
                              {service.shortDesc}
                            </p>
                          </div>
                        </div>

                        <p className="text-[14px] sm:text-[15px] text-gray-600 group-hover:text-gray-400 leading-relaxed transition-colors duration-300">
                          {service.description}
                        </p>

                        {/* Timeline badge mobile only */}
                        <div className="mt-5 lg:hidden">
                          <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium text-gray-500 group-hover:text-gray-500 bg-gray-100 group-hover:bg-white/10 rounded-full px-3.5 py-1.5 transition-colors duration-300">
                            <Clock size={13} className="text-[#FFD400]" />
                            {service.timeline}
                          </span>
                        </div>

                        {/* Buttons mobile */}
                        <div className="mt-5 lg:hidden flex items-center gap-3">
                          <button
                            onClick={(e) => { e.stopPropagation(); navigate("service-detail", { id: service.id }); }}
                            className="text-[13px] sm:text-[14px] font-semibold text-gray-900 group-hover:text-[#FFD400] transition-colors duration-300 inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
                          >
                            Learn more
                            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                          </button>
                          <button
                            onClick={handleGetStarted}
                            className="group/btn inline-flex items-center bg-[#FFD400] hover:bg-[#E6BE00] text-gray-900 text-[12px] sm:text-[13px] font-semibold rounded-full pl-4 pr-2 py-1.5 transition-colors duration-300 whitespace-nowrap shrink-0"
                          >
                            Get Started
                            <span className="ml-1.5 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/btn:-rotate-45">
                              <ArrowRight size={11} className="text-[#FFD400]" />
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Right column Features, timeline, CTA */}
                      <div className="flex flex-col justify-between">
                        <div>
                          <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
                            What&apos;s included
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                            {service.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-2.5 text-[14px] sm:text-[15px] text-gray-600 group-hover:text-gray-400 transition-colors duration-300"
                              >
                                <Check
                                  size={16}
                                  className="text-[#FFD400] shrink-0 mt-0.5"
                                />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Timeline + CTA desktop */}
                        <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-200 group-hover:border-white/10 transition-colors duration-300 hidden lg:flex items-center justify-between">
                          <span className="inline-flex items-center gap-2 text-[13px] font-medium text-gray-500 group-hover:text-gray-500 bg-gray-100 group-hover:bg-white/10 rounded-full px-3.5 py-1.5 transition-colors duration-300 shrink-0">
                            <Clock size={13} className="text-[#FFD400]" />
                            {service.timeline}
                          </span>

                          <div className="flex items-center gap-3 shrink-0 ml-4">
                            <button
                              onClick={() => navigate("service-detail", { id: service.id })}
                              className="text-[14px] font-semibold text-gray-900 group-hover:text-[#FFD400] transition-colors duration-300 inline-flex items-center gap-1.5 whitespace-nowrap"
                            >
                              Learn more
                              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                            <button
                            onClick={handleGetStarted}
                            className="group/btn inline-flex items-center bg-[#FFD400] hover:bg-[#E6BE00] text-gray-900 text-[14px] font-semibold rounded-full pl-5 pr-2 py-2 transition-colors duration-300 whitespace-nowrap shrink-0"
                          >
                            <span>Get Started</span>
                            <span className="ml-1.5 w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/btn:-rotate-45">
                              <ArrowRight size={13} className="text-[#FFD400]" />
                            </span>
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Section 3 Process
          ════════════════════════════════════════════ */}
      <section className="bg-gray-900 pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-6 sm:mb-8">
              Our Process
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white max-w-2xl mb-4 sm:mb-6">
              How we approach{" "}
              <br className="hidden sm:block" />
              every engagement.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[15px] sm:text-[16px] text-gray-400 leading-relaxed max-w-xl mb-12 sm:mb-16">
              No matter the service, our process is the same: understand deeply,
              plan precisely, execute relentlessly, and scale systematically.
              Rinse. Repeat. Compound.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <AnimateOnScroll key={step.step} delay={index * 120}>
                <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 hover:bg-white/10 hover:border-[#FFD400]/30 transition-all duration-500 h-full">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[40px] sm:text-[48px] font-bold text-white/5 group-hover:text-[#FFD400]/10 leading-none transition-colors duration-500">
                      {String(step.step).padStart(2, "0")}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-[#FFD400]/10 group-hover:bg-[#FFD400]/20 flex items-center justify-center transition-colors duration-300">
                      <ArrowRight
                        size={16}
                        className="text-[#FFD400] -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                      />
                    </span>
                  </div>

                  <h3 className="text-[18px] sm:text-[20px] font-semibold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-[14px] sm:text-[15px] text-gray-400 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <p className="text-[12px] sm:text-[13px] font-medium text-[#FFD400]">
                    {step.detail}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Section 4 CTA
          ════════════════════════════════════════════ */}
      <section className="bg-black pt-20 sm:pt-28 pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-8 sm:mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
                Let&apos;s Talk Growth
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-[clamp(1.75rem,5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white mb-6">
                Pick a service.{" "}
                <br className="hidden sm:block" />
                Or let us build the full stack.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] sm:text-[17px] text-gray-400 leading-relaxed max-w-xl mx-auto mb-10 sm:mb-14">
                Whether you need one precision tool or an entire growth engine,
                we&apos;re ready. Every engagement starts with a conversation
                no pitch decks, no pressure, just honest strategy talk.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <button
                onClick={handleGetStarted}
                className="group inline-flex items-center bg-[#FFD400] hover:bg-[#E6BE00] text-gray-900 text-[14px] sm:text-[15px] font-semibold rounded-full pl-6 sm:pl-7 pr-2 py-2.5 sm:py-3 transition-colors duration-300"
              >
                <span>Start Your Project</span>
                <span className="ml-2 w-8 h-8 sm:w-9 sm:h-9 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                  <ArrowRight size={16} className="text-[#FFD400]" />
                </span>
              </button>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
