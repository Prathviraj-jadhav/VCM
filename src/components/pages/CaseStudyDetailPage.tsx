"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Target,
  Zap,
  CheckCircle2,
  Quote,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { BRAND, CASE_STUDY_DETAIL_DATA, CASE_STUDIES, type CaseStudyDetail } from "@/lib/data";
import { usePage } from "@/lib/page-context";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";

/* ── Animated Result Bar ── */
function ResultBar({
  result,
  index,
  isVisible,
}: {
  result: CaseStudyDetail["results"][number];
  index: number;
  isVisible: boolean;
}) {
  /* Parse numeric values for bar width calculation */
  const parseNumeric = (val: string) => {
    const num = parseFloat(val.replace(/[^0-9.]/g, ""));
    return isNaN(num) ? 0 : num;
  };

  const beforeNum = parseNumeric(result.before);
  const afterNum = parseNumeric(result.after);
  const maxVal = Math.max(beforeNum, afterNum, 1);
  const beforePct = Math.round((beforeNum / maxVal) * 100);
  const afterPct = Math.round((afterNum / maxVal) * 100);

  const isPositive = result.improvement.startsWith("+");

  return (
    <div
      className={`group rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Metric name + improvement badge */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-[15px] sm:text-[16px] font-semibold text-gray-900">
          {result.metric}
        </h4>
        <span
          className={`inline-flex items-center gap-1 text-[12px] sm:text-[13px] font-bold rounded-full px-3 py-1 ${
            isPositive
              ? "bg-emerald-50 text-emerald-700"
              : "bg-emerald-50 text-emerald-700"
          }`}
        >
          {isPositive ? (
            <TrendingUp size={13} />
          ) : (
            <TrendingUp size={13} className="rotate-180" />
          )}
          {result.improvement}
        </span>
      </div>

      {/* Before / After bars */}
      <div className="space-y-2.5">
        {/* Before bar */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] sm:text-[12px] font-medium text-gray-400 uppercase tracking-wider">
              Before
            </span>
            <span className="text-[13px] sm:text-[14px] font-semibold text-gray-400">
              {result.before}
            </span>
          </div>
          <div className="h-2.5 sm:h-3 rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-gray-300 transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              style={{
                width: isVisible ? `${beforePct}%` : "0%",
                transitionDelay: `${index * 100 + 300}ms`,
              }}
            />
          </div>
        </div>

        {/* After bar */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] sm:text-[12px] font-medium text-gray-900 uppercase tracking-wider">
              After
            </span>
            <span className="text-[13px] sm:text-[14px] font-bold text-gray-900">
              {result.after}
            </span>
          </div>
          <div className="h-2.5 sm:h-3 rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#FFD400] transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              style={{
                width: isVisible ? `${afterPct}%` : "0%",
                transitionDelay: `${index * 100 + 500}ms`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function CaseStudyDetailPage() {
  const { pageParams, navigate } = usePage();
  const studyId = pageParams.id;
  const study: CaseStudyDetail | undefined = CASE_STUDY_DETAIL_DATA[studyId];

  const [resultsVisible, setResultsVisible] = useState(false);

  useEffect(() => {
    if (!study) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setResultsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    const el = document.getElementById("results-section");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [study]);

  const handleStartProject = () => {
    const event = new CustomEvent("openProjectDrawer");
    window.dispatchEvent(event);
  };

  /* ── 404 fallback ── */
  if (!study) {
    return (
      <div className="min-h-screen flex flex-col">
        <section className="bg-black pt-32 pb-20 flex-1">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 text-center">
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold text-white mb-4">
              Case study not found
            </h1>
            <p className="text-gray-400 mb-8">
              The case study you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <button
              onClick={() => navigate("case-studies")}
              className="inline-flex items-center gap-2 bg-[#FFD400] hover:bg-[#E6BE00] text-gray-900 font-semibold rounded-full px-6 py-3 transition-colors duration-300"
            >
              <ArrowLeft size={16} />
              Back to Case Studies
            </button>
          </div>
        </section>
      </div>
    );
  }

  /* Find the matching CASE_STUDIES entry for the video */
  const caseStudyEntry = CASE_STUDIES.find((cs) => cs.id === studyId);

  /* Other case studies */
  const otherStudies = CASE_STUDIES.filter((cs) => cs.id !== studyId);

  return (
    <div className="min-h-screen flex flex-col">
      {/* ════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════ */}
      <section className="bg-black pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          {/* Back link */}
          <AnimateOnScroll>
            <button
              onClick={() => navigate("case-studies")}
              className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-medium text-gray-400 hover:text-white transition-colors duration-300 mb-8 sm:mb-10"
            >
              <ArrowLeft size={16} />
              Back to Case Studies
            </button>
          </AnimateOnScroll>

          {/* Industry badge */}
          <AnimateOnScroll delay={50}>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-6 sm:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
              {study.industry}
            </span>
          </AnimateOnScroll>

          {/* Client name */}
          <AnimateOnScroll delay={100}>
            <h1 className="text-[clamp(2rem,5.5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white max-w-4xl mb-4 sm:mb-5">
              {study.client}
            </h1>
          </AnimateOnScroll>

          {/* Duration */}
          <AnimateOnScroll delay={150}>
            <div className="flex items-center gap-2 text-[14px] sm:text-[15px] text-gray-400 mb-6 sm:mb-8">
              <Clock size={15} className="text-[#FFD400]" />
              <span>{study.duration}</span>
            </div>
          </AnimateOnScroll>

          {/* Services used */}
          <AnimateOnScroll delay={200}>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {study.services.map((service) => (
                <span
                  key={service}
                  className="text-[12px] sm:text-[13px] font-medium bg-white/10 border border-white/10 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 text-white/70"
                >
                  {service}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          VIDEO PREVIEW (if available)
      ════════════════════════════════════════════════ */}
      {caseStudyEntry && (
        <section className="bg-black pb-12 sm:pb-16">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <AnimateOnScroll>
              <div
                className={`relative ${caseStudyEntry.bgColor} rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9]`}
              >
                <video
                  src={caseStudyEntry.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════
          CHALLENGE SECTION
      ════════════════════════════════════════════════ */}
      <section className="bg-white pt-16 sm:pt-24 pb-16 sm:pb-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
            <AnimateOnScroll>
              <div>
                <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-4 sm:mb-6">
                  The Challenge
                </span>
                <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900">
                  What they were{" "}
                  <span className="text-gray-400">up against.</span>
                </h2>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <p className="text-[16px] sm:text-[18px] text-gray-600 leading-[1.75] lg:pt-10">
                {study.challenge}
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          STRATEGY SECTION
      ════════════════════════════════════════════════ */}
      <section className="bg-gray-50 pt-16 sm:pt-24 pb-16 sm:pb-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-4 sm:mb-6">
              <Target size={13} />
              Our Strategy
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={50}>
            <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 max-w-3xl mb-10 sm:mb-14">
              How we turned it{" "}
              <span className="text-gray-400">around.</span>
            </h2>
          </AnimateOnScroll>

          <div className="space-y-4 sm:space-y-5">
            {study.strategy.map((step, index) => (
              <AnimateOnScroll key={index} delay={index * 80}>
                <div className="group flex gap-4 sm:gap-6 bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500">
                  {/* Step number */}
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FFD400]/10 flex items-center justify-center group-hover:bg-[#FFD400]/20 transition-colors duration-300">
                    <span className="text-[14px] sm:text-[16px] font-bold text-gray-900">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Step content */}
                  <p className="text-[14px] sm:text-[16px] text-gray-600 leading-[1.7] pt-1 sm:pt-2">
                    {step}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          RESULTS SECTION
      ════════════════════════════════════════════════ */}
      <section id="results-section" className="bg-black pt-16 sm:pt-24 pb-16 sm:pb-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-10 sm:mb-14">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-4 sm:mb-6">
                <Zap size={13} className="text-[#FFD400]" />
                The Results
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={50}>
              <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white max-w-2xl mx-auto">
                Numbers don&apos;t lie.
              </h2>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {study.results.map((result, index) => (
              <ResultBar
                key={result.metric}
                result={result}
                index={index}
                isVisible={resultsVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          KEY HIGHLIGHTS SECTION
      ════════════════════════════════════════════════ */}
      <section className="bg-white pt-16 sm:pt-24 pb-16 sm:pb-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-4 sm:mb-6">
              Key Highlights
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={50}>
            <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 max-w-3xl mb-10 sm:mb-14">
              The wins that{" "}
              <span className="text-gray-400">mattered most.</span>
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {study.highlights.map((highlight, index) => (
              <AnimateOnScroll key={highlight.title} delay={index * 100}>
                <div className="group relative bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8 hover:bg-[#FFD400]/5 hover:border-[#FFD400]/20 transition-all duration-500 h-full">
                  {/* Yellow accent line */}
                  <div className="w-8 sm:w-10 h-1 bg-[#FFD400] rounded-full mb-5 sm:mb-6 group-hover:w-12 sm:group-hover:w-14 transition-all duration-500" />

                  <h3 className="text-[17px] sm:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-gray-900 mb-3 sm:mb-4">
                    {highlight.title}
                  </h3>

                  <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.7]">
                    {highlight.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          TESTIMONIAL SECTION
      ════════════════════════════════════════════════ */}
      <section className="bg-gray-900 pt-16 sm:pt-24 pb-16 sm:pb-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFD400]/10 flex items-center justify-center mx-auto mb-8 sm:mb-10">
                <Quote size={22} className="text-[#FFD400]" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <blockquote className="text-[18px] sm:text-[22px] lg:text-[24px] font-medium leading-[1.5] text-white/90 mb-8 sm:mb-10">
                &ldquo;{study.testimonial.quote}&rdquo;
              </blockquote>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FFD400] flex items-center justify-center">
                  <span className="text-[13px] sm:text-[14px] font-bold text-black">
                    {study.testimonial.author
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-[14px] sm:text-[15px] font-semibold text-white">
                    {study.testimonial.author}
                  </p>
                  <p className="text-[12px] sm:text-[13px] text-gray-400">
                    {study.testimonial.role}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          OTHER CASE STUDIES
      ════════════════════════════════════════════════ */}
      {otherStudies.length > 0 && (
        <section className="bg-gray-50 pt-16 sm:pt-20 pb-16 sm:pb-24">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <AnimateOnScroll>
              <div className="flex items-center justify-between mb-10 sm:mb-14">
                <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900">
                  More Case Studies
                </h2>
                <button
                  onClick={() => navigate("case-studies")}
                  className="hidden sm:inline-flex items-center gap-2 text-[14px] font-semibold text-gray-900 hover:text-[#FFD400] transition-colors duration-300"
                >
                  View all
                  <ArrowRight size={15} />
                </button>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {otherStudies.map((cs, index) => (
                <AnimateOnScroll key={cs.id} delay={index * 100}>
                  <button
                    onClick={() => navigate("case-study-detail", { id: cs.id })}
                    className="group text-left w-full"
                  >
                    <div
                      className={`relative ${cs.bgColor} rounded-2xl overflow-hidden aspect-[16/10]`}
                    >
                      <video
                        src={cs.videoUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                        <h3 className="text-[18px] sm:text-[22px] font-semibold text-white leading-tight mb-1">
                          {cs.title}
                        </h3>
                        <p className="text-[13px] sm:text-[14px] text-gray-300 leading-relaxed line-clamp-2">
                          {cs.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-[13px] sm:text-[14px] font-semibold text-gray-900 group-hover:text-[#FFD400] transition-colors duration-300">
                      View case study
                      <ChevronRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </button>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Mobile "View all" */}
            <div className="mt-8 text-center sm:hidden">
              <button
                onClick={() => navigate("case-studies")}
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-gray-900 hover:text-[#FFD400] transition-colors duration-300"
              >
                View all case studies
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════
          CTA SECTION "Ready for similar results?"
      ════════════════════════════════════════════════ */}
      <section className="bg-black pt-20 sm:pt-28 pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-8 sm:mb-10">
                <CheckCircle2 size={13} className="text-[#FFD400]" />
                Ready for similar results?
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-[clamp(1.75rem,5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white mb-6">
                Your brand could be{" "}
                <br className="hidden sm:block" />
                the next success story.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] sm:text-[17px] text-gray-400 leading-relaxed max-w-xl mx-auto mb-10 sm:mb-14">
                Every result you see above started with a conversation.
                Let&apos;s talk about how we can create the same or better  
                outcomes for your business.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleStartProject}
                  className="group inline-flex items-center bg-[#FFD400] hover:bg-[#E6BE00] text-gray-900 text-[14px] sm:text-[15px] font-semibold rounded-full pl-6 sm:pl-7 pr-2 py-2.5 sm:py-3 transition-colors duration-300"
                >
                  <span>Start Your Project</span>
                  <span className="ml-2 w-8 h-8 sm:w-9 sm:h-9 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                    <ArrowRight size={16} className="text-[#FFD400]" />
                  </span>
                </button>
                <a
                  href={`${BRAND.whatsapp}?text=${encodeURIComponent(
                    `Hey Vibe Create Media 👋\n\nI just read the ${study.client} case study and I'm interested in similar results. Could we discuss?`
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
    </div>
  );
}
