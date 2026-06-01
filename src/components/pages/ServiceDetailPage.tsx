"use client";

import {
  ArrowLeft,
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
  ChevronDown,
  Zap,
  Shield,
  BarChart3,
  IndianRupee,
} from "lucide-react";
import { BRAND, SERVICES, SERVICE_DETAIL_DATA } from "@/lib/data";
import { usePage } from "@/lib/page-context";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

/* ── Icon mapping ── */
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

/* ── Differentiator icons ── */
const DIFF_ICONS = [Zap, Shield, BarChart3];

/* ── CTA button (shared) ── */
function CTAButton({ className = "" }: { className?: string }) {
  return (
    <button
      onClick={() => {
        const event = new CustomEvent("openProjectDrawer");
        window.dispatchEvent(event);
      }}
      className={`group inline-flex items-center bg-[#FFD400] hover:bg-[#E6BE00] text-gray-900 text-[14px] sm:text-[15px] font-semibold rounded-full pl-6 sm:pl-7 pr-2 py-2.5 sm:py-3 transition-colors duration-300 ${className}`}
    >
      <span>Get Started</span>
      <span className="ml-2 w-8 h-8 sm:w-9 sm:h-9 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
        <ArrowRight size={16} className="text-[#FFD400]" />
      </span>
    </button>
  );
}

/* ── Main Component ── */
export default function ServiceDetailPage() {
  const { pageParams, navigate } = usePage();
  const serviceId = pageParams.id;
  const service = SERVICES.find((s) => s.id === serviceId);
  const detail = SERVICE_DETAIL_DATA[serviceId];

  /* ── 404 fallback ── */
  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <section className="bg-black pt-32 pb-20 flex-1">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 text-center">
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold text-white mb-4">
              Service not found
            </h1>
            <p className="text-gray-400 mb-8">
              The service you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <button
              onClick={() => navigate("services")}
              className="inline-flex items-center gap-2 bg-[#FFD400] hover:bg-[#E6BE00] text-gray-900 font-semibold rounded-full px-6 py-3 transition-colors duration-300"
            >
              <ArrowLeft size={16} />
              Back to Services
            </button>
          </div>
        </section>
      </div>
    );
  }

  const IconComponent = ICON_MAP[service.icon];

  /* ── Other services (for navigation) ── */
  const otherServices = SERVICES.filter((s) => s.id !== serviceId).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      {/* ════════════════════════════════════════════════
          SECTION 1 HERO
      ════════════════════════════════════════════════ */}
      <section className="bg-black pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          {/* Back link */}
          <AnimateOnScroll>
            <button
              onClick={() => navigate("services")}
              className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-medium text-gray-400 hover:text-white transition-colors duration-300 mb-8 sm:mb-10"
            >
              <ArrowLeft size={16} />
              Back to Services
            </button>
          </AnimateOnScroll>

          {/* Icon + Badge Row */}
          <AnimateOnScroll delay={50}>
            <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
              {IconComponent && (
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#FFD400]/20 flex items-center justify-center">
                  <IconComponent size={24} className="text-[#FFD400]" />
                </div>
              )}
              <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80">
                <Clock size={13} className="text-[#FFD400]" />
                {service.timeline}
              </span>
            </div>
          </AnimateOnScroll>

          {/* Title */}
          <AnimateOnScroll delay={100}>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white max-w-4xl mb-5 sm:mb-6">
              {service.title}
            </h1>
          </AnimateOnScroll>

          {/* Description */}
          <AnimateOnScroll delay={150}>
            <p className="text-[16px] sm:text-[18px] text-gray-400 leading-relaxed max-w-2xl mb-8 sm:mb-10">
              {service.description}
            </p>
          </AnimateOnScroll>

          {/* CTA */}
          <AnimateOnScroll delay={200}>
            <CTAButton />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 2 WHAT WE DO FOR YOU
      ════════════════════════════════════════════════ */}
      <section className="bg-white pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-6 sm:mb-8">
              What We Do For You
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 max-w-3xl mb-4 sm:mb-6">
              {service.shortDesc}
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-2xl">
              {service.description}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 3 WHAT'S INCLUDED (Bento Grid)
      ════════════════════════════════════════════════ */}
      <section className="bg-gray-50 pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-6 sm:mb-8">
              What&apos;s Included
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 max-w-3xl mb-10 sm:mb-14">
              Everything you get.{" "}
              <span className="text-gray-400">Nothing you don&apos;t.</span>
            </h2>
          </AnimateOnScroll>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {service.features.map((feature, index) => {
              const isFirst = index === 0;
              const isSecond = index === 1;
              return (
                <AnimateOnScroll
                  key={feature}
                  delay={index * 80}
                  direction={index % 2 === 0 ? "up" : "up"}
                >
                  <div
                    className={`group rounded-2xl border p-6 sm:p-7 transition-all duration-500 h-full ${
                      isFirst
                        ? "sm:col-span-2 lg:col-span-2 bg-gray-900 border-gray-800 hover:shadow-[0_8px_30px_rgba(255,212,0,0.08)]"
                        : isSecond
                        ? "sm:col-span-1 lg:row-span-1 bg-white border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                        : "bg-white border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          isFirst
                            ? "bg-[#FFD400]"
                            : "bg-[#FFD400]/10 group-hover:bg-[#FFD400]/20 transition-colors duration-300"
                        }`}
                      >
                        <Check
                          size={18}
                          className={isFirst ? "text-black" : "text-[#FFD400]"}
                        />
                      </div>
                      <div>
                        <h3
                          className={`text-[16px] sm:text-[18px] font-semibold mb-1.5 ${
                            isFirst ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {feature}
                        </h3>
                        <p
                          className={`text-[14px] leading-relaxed ${
                            isFirst ? "text-gray-200" : "text-gray-500"
                          }`}
                        >
                          {getFeatureDescription(feature)}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 4 EXPECTED RESULTS & TIMELINE
      ════════════════════════════════════════════════ */}
      {detail && (
        <section className="bg-white pt-20 sm:pt-28 pb-16 sm:pb-24">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-6 sm:mb-8">
                Expected Results & Timeline
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 max-w-3xl mb-4 sm:mb-6">
                When you&apos;ll see results.{" "}
                <span className="text-gray-400">No surprises.</span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-2xl mb-12 sm:mb-16">
                Every engagement follows a predictable growth curve. Here&apos;s what to expect and when so you can plan with confidence.
              </p>
            </AnimateOnScroll>

            {/* Visual Timeline */}
            <div className="relative">
              {/* Vertical line desktop only */}
              <div className="hidden lg:block absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FFD400] via-[#FFD400]/50 to-gray-200" />

              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                {detail.results.map((result, index) => (
                  <AnimateOnScroll key={index} delay={index * 120}>
                    <div className="flex gap-5 sm:gap-6 lg:gap-8">
                      {/* Timeline dot */}
                      <div className="shrink-0 flex flex-col items-center">
                        <div className="w-[14px] h-[14px] rounded-full bg-[#FFD400] border-4 border-[#FFD400]/20 relative z-10" />
                        {index < detail.results.length - 1 && (
                          <div className="lg:hidden w-[2px] flex-1 bg-gradient-to-b from-[#FFD400]/50 to-gray-200 mt-2" />
                        )}
                      </div>

                      {/* Content card */}
                      <div className="group bg-gray-50 hover:bg-gray-900 rounded-2xl p-6 sm:p-7 transition-all duration-500 flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider bg-[#FFD400] text-gray-900 rounded-full px-3 py-1">
                            <Clock size={11} />
                            {result.timeframe}
                          </span>
                        </div>
                        <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 group-hover:text-white transition-colors duration-300 mb-2">
                          {result.result}
                        </h3>
                        <p className="text-[14px] sm:text-[15px] text-gray-600 group-hover:text-gray-400 leading-relaxed transition-colors duration-300">
                          {result.description}
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════
          SECTION 5 OUR PROCESS
      ════════════════════════════════════════════════ */}
      {detail && (
        <section className="bg-gray-900 pt-20 sm:pt-28 pb-16 sm:pb-24">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-6 sm:mb-8">
                Our Process
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white max-w-2xl mb-4 sm:mb-6">
                How we deliver{" "}
                <br className="hidden sm:block" />
                {service.title.toLowerCase()}.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] sm:text-[16px] text-gray-400 leading-relaxed max-w-xl mb-12 sm:mb-16">
                A proven 4-step process refined across 200+ engagements. Each step builds on the last no shortcuts, no guesswork.
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {detail.process.map((step, index) => (
                <AnimateOnScroll key={step.step} delay={index * 120}>
                  <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 hover:bg-white/10 hover:border-[#FFD400]/30 transition-all duration-500 h-full">
                    {/* Step number */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[40px] sm:text-[48px] font-bold text-white/5 group-hover:text-[#FFD400]/10 leading-none transition-colors duration-500">
                        {String(step.step).padStart(2, "0")}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#FFD400] bg-[#FFD400]/10 rounded-full px-3 py-1">
                        <Clock size={11} />
                        {step.duration}
                      </span>
                    </div>

                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-white mb-2">
                      {step.title}
                    </h3>

                    <p className="text-[14px] sm:text-[15px] text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════
          SECTION 6 WHY CHOOSE US
      ════════════════════════════════════════════════ */}
      {detail && (
        <section className="bg-white pt-20 sm:pt-28 pb-16 sm:pb-24">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-6 sm:mb-8">
                Why Choose Us
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 max-w-3xl mb-4 sm:mb-6">
                What makes us different.{" "}
                <span className="text-gray-400">For real.</span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-2xl mb-12 sm:mb-16">
                Every agency says they&apos;re different. Here&apos;s how we actually are no buzzwords, just proof.
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {detail.differentiators.map((diff, index) => {
                const DiffIcon = DIFF_ICONS[index % DIFF_ICONS.length];
                return (
                  <AnimateOnScroll key={index} delay={index * 120}>
                    <div className="group bg-gray-50 hover:bg-gray-900 rounded-2xl p-6 sm:p-8 transition-all duration-500 h-full border border-gray-100 hover:border-gray-800">
                      <div className="w-12 h-12 rounded-xl bg-[#FFD400]/10 group-hover:bg-[#FFD400]/20 flex items-center justify-center mb-5 transition-colors duration-300">
                        <DiffIcon size={22} className="text-[#FFD400]" />
                      </div>
                      <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 group-hover:text-white transition-colors duration-300 mb-3">
                        {diff.title}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] text-gray-600 group-hover:text-gray-400 leading-relaxed transition-colors duration-300">
                        {diff.description}
                      </p>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════
          SECTION 7 PRICING / BUDGET GUIDANCE
      ════════════════════════════════════════════════ */}
      {detail && (
        <section className="bg-gray-50 pt-20 sm:pt-28 pb-16 sm:pb-24">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <AnimateOnScroll>
                <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-6 sm:mb-8">
                  Investment Guidance
                </span>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4 sm:mb-6">
                  What to budget.
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-xl mx-auto mb-10 sm:mb-14">
                  Every project is custom-scoped, but here&apos;s a typical range to help you plan. Final investment depends on your specific goals and scope.
                </p>
              </AnimateOnScroll>

              {/* Budget Range Card */}
              <AnimateOnScroll delay={300}>
                <div className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <IndianRupee size={20} className="text-[#FFD400]" />
                    <span className="text-[12px] sm:text-[13px] font-medium uppercase tracking-wider text-gray-500">
                      Typical Investment Range
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
                    <span className="text-[28px] sm:text-[36px] font-bold text-gray-900">
                      {detail.budgetRange.min}
                    </span>
                    <span className="text-[20px] sm:text-[24px] text-gray-300 font-light">
                       
                    </span>
                    <span className="text-[28px] sm:text-[36px] font-bold text-gray-900">
                      {detail.budgetRange.max}
                    </span>
                  </div>

                  <p className="text-[14px] sm:text-[15px] text-gray-500 mb-6">
                    {detail.budgetRange.unit}
                  </p>

                  {/* Range bar */}
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-6">
                    <div className="h-full bg-gradient-to-r from-[#FFD400] to-[#E6BE00] rounded-full w-3/4" />
                  </div>

                  <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed max-w-md mx-auto">
                    {detail.budgetNote}
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════
          SECTION 8 FAQ
      ════════════════════════════════════════════════ */}
      {detail && (
        <section className="bg-white pt-20 sm:pt-28 pb-16 sm:pb-24">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <AnimateOnScroll>
                <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-6 sm:mb-8">
                  FAQ
                </span>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4 sm:mb-6">
                  Questions?{" "}
                  <span className="text-gray-400">Honest answers.</span>
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-xl mb-10 sm:mb-14">
                  The things people actually ask us not the softball questions most agencies put in their FAQ.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={300}>
                <Accordion type="single" collapsible className="space-y-3">
                  {detail.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="bg-gray-50 hover:bg-gray-100 rounded-2xl border border-gray-100 px-6 sm:px-7 transition-colors duration-300 data-[state=open]:bg-gray-50"
                    >
                      <AccordionTrigger className="text-[15px] sm:text-[16px] font-semibold text-gray-900 hover:no-underline py-5 sm:py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed pb-5 sm:pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════
          SECTION 9 FINAL CTA
      ════════════════════════════════════════════════ */}
      <section className="bg-black pt-20 sm:pt-28 pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-8 sm:mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
                Ready to Start?
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-[clamp(1.75rem,5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white mb-6">
                Let&apos;s build your{" "}
                <br className="hidden sm:block" />
                {service.title.toLowerCase()} engine.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] sm:text-[17px] text-gray-400 leading-relaxed max-w-xl mx-auto mb-10 sm:mb-14">
                Every great result starts with a conversation. No pitch decks, no pressure just honest strategy talk about your growth goals.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton />
                <a
                  href={`${BRAND.whatsapp}?text=${encodeURIComponent(
                    `Hey Vibe Create Media 👋\n\nI'm interested in your ${service.title} service. Could we discuss how you could help us grow?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white text-[14px] sm:text-[15px] font-semibold rounded-full px-6 sm:px-7 py-2.5 sm:py-3 transition-all duration-300"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366] mr-2" />
                  Chat on WhatsApp
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          OTHER SERVICES
      ════════════════════════════════════════════════ */}
      <section className="bg-gray-50 pt-16 sm:pt-20 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <div className="flex items-center justify-between mb-10 sm:mb-14">
              <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900">
                Explore Other Services
              </h2>
              <button
                onClick={() => navigate("services")}
                className="hidden sm:inline-flex items-center gap-2 text-[14px] font-semibold text-gray-900 hover:text-[#FFD400] transition-colors duration-300"
              >
                View all
                <ArrowRight size={15} />
              </button>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {otherServices.map((s, index) => {
              const SIcon = ICON_MAP[s.icon];
              return (
                <AnimateOnScroll key={s.id} delay={index * 100}>
                  <button
                    onClick={() => {
                      navigate("service-detail", { id: s.id });
                    }}
                    className="group text-left h-full bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FFD400]/10 group-hover:bg-[#FFD400]/20 flex items-center justify-center mb-4 transition-colors duration-300">
                      {SIcon && <SIcon size={18} className="text-[#FFD400]" />}
                    </div>

                    <h3 className="text-[16px] sm:text-[18px] font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                      {s.title}
                    </h3>

                    <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed flex-1">
                      {s.shortDesc}
                    </p>

                    <span className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-semibold text-gray-900 group-hover:text-[#FFD400] transition-colors duration-300 mt-5">
                      Learn more
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </button>
                </AnimateOnScroll>
              );
            })}
          </div>

          {/* Mobile "View all" */}
          <div className="mt-8 text-center sm:hidden">
            <button
              onClick={() => navigate("services")}
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-gray-900 hover:text-[#FFD400] transition-colors duration-300"
            >
              View all services
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── Feature description helper ── */
function getFeatureDescription(feature: string): string {
  const descriptions: Record<string, string> = {
    "Meta & Google Ads Management": "Full-funnel campaign management across Meta and Google ecosystems. Daily optimization, not set-and-forget.",
    "Conversion Tracking & Attribution": "Server-side tracking, CAPI implementation, and multi-touch attribution. See every conversion the algorithm misses.",
    "A/B Testing Framework": "Systematic testing of creatives, audiences, and landing pages. Data-driven decisions, not gut feelings.",
    "Funnel Optimization": "Landing page to checkout every step optimized for conversion. We find the leaks and fix them.",
    "ROAS-focused Strategy": "Every campaign decision tied to return on ad spend. Impressions don't pay bills ROAS does.",
    "Custom Audience Engineering": "Lookalikes, retargeting pools, and custom segments built from your first-party data. Precision targeting.",
    "Brand Strategy & Positioning": "Define your brand's emotional shortcut the feeling that makes people choose you without thinking.",
    "Visual Identity Design": "Logo, color system, typography, and design language. Every pixel engineered for recognition and recall.",
    "Brand Voice & Messaging": "Tone, language patterns, and messaging frameworks. Sound like yourself, not everyone else.",
    "Brand Guidelines": "Complete usage rules, do's and don'ts, templates. Idiot-proof brand consistency.",
    "Logo & Identity System": "Primary logo, variations, responsive versions, and usage rules. Looks great everywhere even on a favicon.",
    "Brand Architecture": "How your brand extends across products, sub-brands, and touchpoints. Structure that scales.",
    "UGC Strategy & Scripting": "Hook architecture, content frameworks, and creator briefs. Science-backed scripts that feel natural.",
    "Creator Sourcing & Management": "Find, vet, contract, and manage creators who match your audience's trust signals.",
    "Video Production & Editing": "Professional production with authentic feel. Batch creation for testing velocity.",
    "A/B Variations": "Multiple hooks, angles, and CTAs per concept. Test to find what works, scale the winner.",
    "Platform-specific Optimization": "Native content for each platform. No resizing reimagining for each audience.",
    "Performance Analytics": "CTR, CPA, ROAS tracking per creative and platform. Data that drives decisions.",
    "SEO Content Strategy": "Keyword-driven content plan targeting search intent. Capture demand that's already searching for you.",
    "Blog & Article Writing": "Long-form content that ranks AND converts. Written by people who understand SEO and persuasion.",
    "Content Calendar Management": "Strategic publishing schedule aligned with search trends and business objectives.",
    "Lead Magnet Creation": "Downloadable assets that capture emails while you sleep. Value exchange that works 24/7.",
    "Content Distribution": "Multi-channel promotion strategy. Content without distribution is a tree in an empty forest.",
    "Performance Tracking": "Content analytics tied to business outcomes. Know exactly which articles drive revenue.",
    "Platform Strategy": "Which platforms to prioritize and why. We'll tell you where your audience lives and where it doesn't.",
    "Content Creation & Scheduling": "Platform-native content created and scheduled on autopilot. Every post has a purpose.",
    "Community Management": "Comments, DMs, mentions, and brand monitoring. We respond as your brand, not an agency.",
    "Social Listening": "Real-time monitoring of brand mentions, industry trends, and competitor activity.",
    "Influencer Partnerships": "Strategic influencer collaborations matched to audience trust signals, not follower counts.",
    "Analytics & Reporting": "Social performance tied to business outcomes. Revenue-linked, not vanity-linked.",
    "Conversion-optimized Design": "Every design decision backed by conversion data. Beautiful AND functional.",
    "Responsive Development": "Pixel-perfect on every device. Mobile-first because that's where your users are.",
    "SEO Architecture": "Technical SEO built into the foundation. Core Web Vitals green from day one.",
    "Speed Optimization": "Obsessive load time optimization because every 100ms costs you conversions.",
    "CMS Integration": "WordPress, Shopify, or headless we build on what works for your team.",
    "Analytics Setup": "GA4, GTM, and conversion tracking configured properly. See the real numbers.",
    "Growth Strategy": "Data-driven growth roadmap with clear milestones and accountability.",
    "Partnership Development": "Strategic alliances that create compounding value, not one-off transactions.",
    "Market Expansion": "New market identification and entry strategy. Growth beyond your current borders.",
    "Revenue Channel Identification": "Find revenue streams you're sitting on. Most companies have untapped channels.",
    "Sales Process Optimization": "Streamline your pipeline from lead to close. Shorter cycles, higher close rates.",
    "Competitive Analysis": "Deep-dive into competitor strategies, positioning, and vulnerabilities. Know your battlefield.",
    "Professional Video Editing": "Post-production that holds attention and drives action. Every second engineered for retention.",
    "Motion Graphics": "Animated elements that enhance storytelling without distracting from the message.",
    "Color Grading": "Cinematic color treatment that matches your brand mood and platform expectations.",
    "Sound Design": "Audio that complements visual storytelling. Music, SFX, and voiceover mixed for impact.",
    "Short-form Content": "Reels, TikToks, and Shorts optimized for the first 0.5 seconds. Scroll-stoppers.",
    "Long-form Production": "YouTube videos, brand documentaries, and webinar content that holds attention for minutes, not seconds.",
    "Creative Strategy": "Data-informed creative direction that aligns ad design with audience psychology.",
    "Ad Design & Copy": "Visual and copywriting designed to work together. Pretty ads that actually convert.",
    "A/B Testing": "Systematic testing of hooks, visuals, and copy. Find winners fast, kill losers faster.",
    "Dynamic Creative Optimization": "Algorithm-driven creative assembly that finds the best-performing combinations automatically.",
    "Retargeting Creatives": "Ad creatives designed specifically for warm audiences. Different message, different intent.",
    "Performance Reporting": "Creative-level performance data tied to business outcomes. Know which ads drive revenue.",
  };
  return descriptions[feature] || "Expert execution that drives measurable results for your business.";
}
