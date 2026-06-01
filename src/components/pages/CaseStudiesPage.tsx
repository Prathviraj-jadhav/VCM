"use client";

import {
  ArrowRight,
  Play,
  Search,
  Target,
  TrendingUp,
  Quote,
  MessageCircle,
  Star,
  ShoppingBag,
  HeartPulse,
  Building2,
  UtensilsCrossed,
  Shirt,
  GraduationCap,
  Landmark,
  Briefcase,
  Cpu,
  Clock,
  Zap,
  CheckCircle2,
  BarChart3,
  Users,
  Trophy,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { CASE_STUDIES, BRAND } from "@/lib/data";
import { usePage } from "@/lib/page-context";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";

/* ── Hero stats ── */
const HERO_STATS = [
  { value: "50+", label: "Brands Served" },
  { value: "3x", label: "Avg ROAS" },
  { value: "94%", label: "Client Retention" },
  { value: "200+", label: "Campaigns" },
] as const;

/* ── Case study card overlays ── */
const STUDY_META: Record<string, { industry: string; metric: string; metricLabel: string }> = {
  narrativ: {
    industry: "SaaS / Tech",
    metric: "3.8x",
    metricLabel: "ROAS Achieved",
  },
  luminar: {
    industry: "D2C / Lifestyle",
    metric: "62%",
    metricLabel: "CPA Reduction",
  },
  "aarvi-naturals": {
    industry: "D2C / Wellness",
    metric: "3.4x",
    metricLabel: "ROAS in 90 Days",
  },
  "kavya-living": {
    industry: "D2C / Home & Living",
    metric: "7x",
    metricLabel: "Order Growth",
  },
  "fitpro-nutrition": {
    industry: "Health / Nutrition",
    metric: "61%",
    metricLabel: "CPA Reduction",
  },
  "all-works-immigration": {
    industry: "Immigration & Visa Consultancy",
    metric: "608%",
    metricLabel: "Lead Growth",
  },
  "andaman-bliss": {
    industry: "Travel & Tourism",
    metric: "4.2x",
    metricLabel: "ROAS Achieved",
  },
  "thinklygold": {
    industry: "Finance & Investment",
    metric: "1,400%",
    metricLabel: "Signup Growth",
  },
  "room-hug": {
    industry: "Hospitality & Accommodation",
    metric: "738%",
    metricLabel: "Booking Growth",
  },
  "story-buzz": {
    industry: "Content Studio & Media",
    metric: "1,300%",
    metricLabel: "Lead Growth",
  },
};

/* ── Our Approach steps ── */
const APPROACH_STEPS = [
  {
    step: 1,
    title: "Discover",
    icon: Search,
    description:
      "We deep-dive into your market, audience psychology, and competitive gaps. No assumptions just data, conversations, and patterns others miss. Every insight becomes ammunition for the strategy that follows.",
    detail: "Insight before action",
  },
  {
    step: 2,
    title: "Strategize",
    icon: Target,
    description:
      "We craft a precision growth blueprint with clear KPIs, channel strategy, and creative direction. Every rupee of budget is mapped to a measurable outcome. No fluff, no filler just a plan that compounds.",
    detail: "Blueprint for measurable growth",
  },
  {
    step: 3,
    title: "Scale",
    icon: TrendingUp,
    description:
      "What works gets amplified. What doesn't gets pivoted fast. We optimize aggressively using real-time data, compounding wins, and eliminating waste until growth becomes systematic, not accidental.",
    detail: "Systematic, compounding growth",
  },
] as const;

/* ── Client Results cards ── */
const CLIENT_RESULTS = [
  {
    metric: "3x",
    title: "ROAS",
    description: "Average return on ad spend across our portfolio. Every rupee works three times harder with our framework.",
  },
  {
    metric: "62%",
    title: "Lower CPA",
    description: "Cost-per-acquisition reduction achieved through creative testing velocity and funnel optimization.",
  },
  {
    metric: "4.6x",
    title: "Traffic Growth",
    description: "Organic and paid traffic multiplier for brands that commit to a full-stack growth strategy with us.",
  },
  {
    metric: "94%",
    title: "Retention Rate",
    description: "Clients stay because the results compound. Our retention rate speaks louder than any pitch ever could.",
  },
] as const;

/* ── Trusted By Industries ── */
const INDUSTRIES: { label: string; icon: LucideIcon }[] = [
  { label: "D2C & E-commerce", icon: ShoppingBag },
  { label: "Healthcare & Wellness", icon: HeartPulse },
  { label: "Real Estate", icon: Building2 },
  { label: "Food & Beverage", icon: UtensilsCrossed },
  { label: "Fashion & Lifestyle", icon: Shirt },
  { label: "Education & EdTech", icon: GraduationCap },
  { label: "Fintech", icon: Landmark },
  { label: "Professional Services", icon: Briefcase },
  { label: "SaaS & Technology", icon: Cpu },
];

/* ── Enhanced Testimonials ── */
const TESTIMONIALS = [
  {
    quote:
      "We were burning ₹5L a month on ads with zero attribution. Vibe Create Media rebuilt our entire performance system CAPI, creative testing, the works. Within 90 days, our ROAS went from 0.8x to 3.4x. The data doesn't lie.",
    name: "Rohan Mehta",
    role: "Founder, Aarvi Naturals",
    initials: "RM",
    stars: 5,
    resultTag: "0.8x → 3.4x ROAS",
    resultLabel: "in 90 days",
  },
  {
    quote:
      "Most agencies show you vanity dashboards. These folks showed us revenue. Our D2C store went from 200 orders a month to 1,400 and they didn't just run ads, they engineered the entire growth stack. Absolute game-changers.",
    name: "Priya Sharma",
    role: "CEO, Kavya Living",
    initials: "PS",
    stars: 5,
    resultTag: "200 → 1,400 orders/mo",
    resultLabel: "7x growth",
  },
  {
    quote:
      "We'd worked with three agencies before. None could crack our CPA below ₹800. Vibe Create Media got us to ₹310 in 60 days with a UGC-first creative strategy. They don't just execute they think two steps ahead.",
    name: "Arjun Desai",
    role: "Marketing Head, FitPro Nutrition",
    initials: "AD",
    stars: 5,
    resultTag: "₹800 → ₹310 CPA",
    resultLabel: "61% reduction",
  },
];

/* ── Process in Action Timeline ── */
const TIMELINE_STEPS = [
  {
    week: "Week 1–2",
    phase: "Deep Dive",
    icon: Search,
    description: "Audited existing ad accounts, set up server-side tracking (CAPI), mapped the full customer journey. Found 43% of conversions were untracked.",
    metric: "43%",
    metricLabel: "conversions recovered",
  },
  {
    week: "Week 3–4",
    phase: "Creative Sprint",
    icon: Zap,
    description: "Produced 18 UGC variations across 5 creative angles. Launched structured A/B tests with automated kill-switches for underperformers.",
    metric: "18",
    metricLabel: "creatives tested",
  },
  {
    week: "Week 5–8",
    phase: "Optimize & Scale",
    icon: BarChart3,
    description: "Scaled winning creatives to 70% budget. Killed 12 underperformers within 48hrs. Implemented dynamic audience expansion.",
    metric: "3.2x",
    metricLabel: "ROAS achieved",
  },
  {
    week: "Week 9–12",
    phase: "Compound Growth",
    icon: TrendingUp,
    description: "Launched retargeting sequences, expanded to Google Ads, built lookalike audiences from verified buyers. Growth became systematic.",
    metric: "₹8.4L",
    metricLabel: "monthly revenue generated",
  },
];

/* ── Enhanced Metrics ── */
const METRICS = [
  {
    value: "3x",
    label: "Avg ROAS",
    description: "Average return on ad spend every rupee invested generates three in return. Not luck. Framework.",
    icon: TrendingUp,
  },
  {
    value: "94%",
    label: "Client Retention",
    description: "Clients don't leave because results keep compounding. Our retention rate is the ultimate proof point.",
    icon: Users,
  },
  {
    value: "200+",
    label: "Campaigns Delivered",
    description: "From launch brands to enterprise accounts. Each campaign sharpened our methodology and expanded our playbooks.",
    icon: Trophy,
  },
];

/* ── Social Proof / Trust Bar ── */
const TRUST_ITEMS = [
  "Google Partner",
  "Meta Business Partner",
  "Featured in Inc42",
  "Clutch Top Agency",
  "50+ Brands Trust Us",
  "4.9★ on Google",
];

export default function CaseStudiesPage() {
  const { navigate } = usePage();

  const handleStartProject = () => {
    const event = new CustomEvent("openProjectDrawer");
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ════════════════════════════════════════════
          Section 1 Hero (Enhanced)
          ════════════════════════════════════════════ */}
      <section className="bg-black pt-32 pb-20 sm:pb-28 lg:pb-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-8 sm:mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
              Case Studies
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white max-w-4xl mb-6 sm:mb-8">
              Results that speak louder than{" "}
              <span className="text-[#FFD400]">promises.</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[16px] sm:text-[18px] text-gray-400 leading-relaxed max-w-2xl mb-12 sm:mb-16">
              Every case study below represents a real brand, a real challenge,
              and a real outcome. No vanity metrics just measurable growth that
              moved the needle for businesses that refused to settle.
            </p>
          </AnimateOnScroll>

          {/* Hero Stats */}
          <AnimateOnScroll delay={300}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-center hover:border-[#FFD400]/30 transition-all duration-500"
                >
                  <p className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-[#FFD400] leading-none mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[13px] sm:text-[14px] text-gray-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Section 2 Case Studies Grid (Enhanced)
          ════════════════════════════════════════════ */}
      <section className="bg-white pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-6 sm:mb-8">
              Our Work
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 max-w-3xl mb-4 sm:mb-6">
              Real brands. Real results.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-2xl mb-12 sm:mb-16">
              We let the work speak for itself. Each project below showcases our
              approach to solving complex growth challenges with strategy,
              creativity, and relentless execution.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {CASE_STUDIES.map((study, index) => {
              const meta = STUDY_META[study.id] ?? {
                industry: "Growth",
                metric: "3x",
                metricLabel: "ROAS",
              };

              return (
                <AnimateOnScroll key={study.id} delay={index * 120}>
                  <button
                    onClick={() => navigate("case-study-detail", { id: study.id })}
                    className="group relative rounded-2xl sm:rounded-3xl overflow-hidden w-full text-left"
                  >
                    {/* Video Preview */}
                    <div
                      className={`relative ${study.bgColor} aspect-[16/10] flex items-center justify-center`}
                    >
                      <video
                        src={study.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Industry tag top left */}
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                        <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-3.5 py-1 sm:py-1.5 text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
                          {meta.industry}
                        </span>
                      </div>

                      {/* Key metric overlay top right */}
                      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
                        <div className="bg-[#FFD400] rounded-xl sm:rounded-2xl px-3.5 sm:px-5 py-2 sm:py-3 text-center shadow-lg">
                          <p className="text-[20px] sm:text-[26px] lg:text-[30px] font-bold text-gray-900 leading-none">
                            {meta.metric}
                          </p>
                          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-700 mt-0.5">
                            {meta.metricLabel}
                          </p>
                        </div>
                      </div>

                      {/* Play overlay */}
                      <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-[#FFD400]/20 group-hover:border-[#FFD400]/40 transition-all duration-500">
                        <Play
                          size={28}
                          className="text-white ml-1 group-hover:text-[#FFD400] transition-colors duration-300"
                        />
                      </div>

                      {/* Title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10">
                        <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-semibold text-white leading-tight mb-2">
                          {study.title}
                        </h3>
                        <p className="text-[14px] sm:text-[15px] text-gray-300 leading-relaxed max-w-md">
                          {study.description}
                        </p>
                      </div>
                    </div>
                  </button>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Section 3 Our Approach
          ════════════════════════════════════════════ */}
      <section className="bg-black pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-6 sm:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
              Our Approach
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white max-w-3xl mb-4 sm:mb-6">
              A method behind{" "}
              <span className="text-[#FFD400]">every win.</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[15px] sm:text-[16px] text-gray-400 leading-relaxed max-w-2xl mb-12 sm:mb-16">
              Great results don&apos;t come from guesswork. Our three-step
              methodology ensures every campaign is rooted in insight, guided by
              strategy, and built to scale consistently.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {APPROACH_STEPS.map((step, index) => {
              const IconComp = step.icon;
              return (
                <AnimateOnScroll key={step.step} delay={index * 120}>
                  <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 hover:border-[#FFD400]/30 transition-all duration-500 h-full">
                    {/* Step number + icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#FFD400]/10 group-hover:bg-[#FFD400]/20 flex items-center justify-center transition-colors duration-300">
                        <IconComp size={24} className="text-[#FFD400]" />
                      </div>
                      <span className="text-[40px] sm:text-[48px] font-bold text-white/5 group-hover:text-[#FFD400]/10 leading-none transition-colors duration-500">
                        {String(step.step).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-[20px] sm:text-[24px] font-semibold text-white mb-3">
                      {step.title}
                    </h3>

                    <p className="text-[14px] sm:text-[15px] text-gray-400 leading-relaxed mb-5">
                      {step.description}
                    </p>

                    <p className="text-[12px] sm:text-[13px] font-medium text-[#FFD400]">
                      {step.detail}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Section 4 Client Results
          ════════════════════════════════════════════ */}
      <section className="bg-[#FFD400] pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-900/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-900/70 mb-6 sm:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
              Client Results
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 max-w-3xl mb-4 sm:mb-6">
              The numbers speak for themselves.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[15px] sm:text-[16px] text-gray-800/70 leading-relaxed max-w-2xl mb-12 sm:mb-16">
              These aren&apos;t cherry-picked highlights they represent the
              average impact across our entire client portfolio. Consistent,
              compounding, and repeatable.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {CLIENT_RESULTS.map((result, index) => (
              <AnimateOnScroll key={result.title} delay={index * 100}>
                <div className="group bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-7 hover:bg-black transition-all duration-500 h-full">
                  <p className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-[#FFD400] leading-none mb-2">
                    {result.metric}
                  </p>
                  <p className="text-[16px] sm:text-[18px] font-semibold text-white mb-3">
                    {result.title}
                  </p>
                  <p className="text-[13px] sm:text-[14px] text-gray-400 leading-relaxed">
                    {result.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Section 4.5 Trusted By Industries (NEW)
          ════════════════════════════════════════════ */}
      <section className="bg-white pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-6 sm:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
                Industries We Serve
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 max-w-2xl mx-auto mb-4">
                Trusted across{" "}
                <span className="text-gray-900">industries.</span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-xl mx-auto">
                From bootstrapped D2C brands to enterprise SaaS the same
                growth methodology, tailored to each industry&apos;s unique
                dynamics and customer psychology.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {INDUSTRIES.map((industry, index) => {
              const IconComp = industry.icon;
              return (
                <AnimateOnScroll key={industry.label} delay={index * 60}>
                  <div className="group flex items-center gap-2.5 bg-gray-50 border border-gray-200 hover:border-[#FFD400] hover:bg-[#FFD400]/5 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 transition-all duration-300 cursor-default">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gray-900 group-hover:bg-[#FFD400]/20 flex items-center justify-center transition-colors duration-300">
                      <IconComp size={14} className="text-[#FFD400] sm:w-[16px] sm:h-[16px]" />
                    </div>
                    <span className="text-[13px] sm:text-[14px] font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300 whitespace-nowrap">
                      {industry.label}
                    </span>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Section 5 Enhanced Testimonials
          ════════════════════════════════════════════ */}
      <section className="bg-black pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-6 sm:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
                Testimonials
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white max-w-2xl mx-auto">
                What our clients say.
              </h2>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <AnimateOnScroll key={testimonial.name} delay={index * 120}>
                <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 hover:border-[#FFD400]/30 transition-all duration-500 h-full flex flex-col">
                  {/* Quote icon + Stars */}
                  <div className="flex items-start justify-between mb-5">
                    <Quote size={32} className="text-[#FFD400]/40 group-hover:text-[#FFD400]/60 transition-colors duration-300" />
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: testimonial.stars }).map((_, i) => (
                        <Star key={i} size={14} className="fill-[#FFD400] text-[#FFD400]" />
                      ))}
                    </div>
                  </div>

                  {/* Quote text */}
                  <p className="text-[14px] sm:text-[15px] text-gray-300 leading-relaxed flex-1 mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Results Delivered tag */}
                  <div className="mb-5">
                    <div className="inline-flex items-center gap-2 bg-[#FFD400]/10 border border-[#FFD400]/20 rounded-lg px-3 py-2">
                      <CheckCircle2 size={14} className="text-[#FFD400] shrink-0" />
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[13px] sm:text-[14px] font-bold text-[#FFD400]">
                          {testimonial.resultTag}
                        </span>
                        <span className="text-[11px] sm:text-[12px] text-[#FFD400]/70 font-medium">
                          {testimonial.resultLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FFD400]/20 flex items-center justify-center shrink-0">
                      <span className="text-[13px] sm:text-[14px] font-bold text-[#FFD400]">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <p className="text-[14px] sm:text-[15px] font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-[12px] sm:text-[13px] text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Section 5.5 Process in Action (NEW)
          ════════════════════════════════════════════ */}
      <section className="bg-gray-50 pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-6 sm:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
                Process in Action
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 max-w-2xl mx-auto mb-4">
                From zero to{" "}
                <span className="text-gray-900">₹8.4L/month.</span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-xl mx-auto">
                A real breakdown of how we took a D2C wellness brand from
                burning budget to printing revenue in 12 weeks. Same
                methodology, same framework your brand could be next.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line desktop only */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

            <div className="space-y-6 sm:space-y-8">
              {TIMELINE_STEPS.map((step, index) => {
                const IconComp = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <AnimateOnScroll key={step.week} delay={index * 120}>
                    <div className={`relative flex flex-col md:flex-row items-stretch gap-4 sm:gap-6 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                      {/* Content card */}
                      <div className="flex-1 md:max-w-[calc(50%-24px)]">
                        <div className="group bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 hover:border-[#FFD400]/50 hover:shadow-lg hover:shadow-[#FFD400]/5 transition-all duration-500 h-full">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gray-900 flex items-center justify-center shrink-0">
                              <IconComp size={18} className="text-[#FFD400]" />
                            </div>
                            <div>
                              <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider text-gray-500">
                                {step.week}
                              </p>
                              <p className="text-[16px] sm:text-[18px] font-semibold text-gray-900">
                                {step.phase}
                              </p>
                            </div>
                          </div>

                          <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mb-4">
                            {step.description}
                          </p>

                          {/* Metric pill */}
                          <div className="inline-flex items-center gap-2 bg-[#FFD400]/10 border border-[#FFD400]/20 rounded-lg px-3 py-1.5">
                            <ArrowUpRight size={14} className="text-[#FFD400]" />
                            <span className="text-[14px] sm:text-[15px] font-bold text-gray-900">
                              {step.metric}
                            </span>
                            <span className="text-[11px] sm:text-[12px] text-gray-600 font-medium">
                              {step.metricLabel}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Center dot desktop only */}
                      <div className="hidden md:flex items-center justify-center w-12 shrink-0 relative z-10">
                        <div className="w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-[#FFD400] group-hover:bg-[#FFD400]/20 transition-colors duration-300" />
                      </div>

                      {/* Spacer for the other side */}
                      <div className="hidden md:block flex-1 md:max-w-[calc(50%-24px)]" />
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Section 6 Enhanced By The Numbers
          ════════════════════════════════════════════ */}
      <section className="bg-gray-900 pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-6 sm:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
                By The Numbers
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white max-w-2xl mx-auto mb-4">
                Numbers don&apos;t lie.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] sm:text-[16px] text-gray-400 leading-relaxed max-w-xl mx-auto">
                These metrics represent our entire portfolio not hand-picked
                outliers. Consistency at scale is what separates real growth
                partners from one-hit wonders.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {METRICS.map((metric, index) => {
              const IconComp = metric.icon;
              return (
                <AnimateOnScroll key={metric.label} delay={index * 120}>
                  <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 text-center hover:bg-white/10 hover:border-[#FFD400]/30 transition-all duration-500 overflow-hidden">
                    {/* Decorative background number */}
                    <span className="absolute -top-4 -right-2 text-[100px] sm:text-[120px] font-bold text-white/[0.02] group-hover:text-[#FFD400]/[0.04] leading-none select-none transition-colors duration-700">
                      {metric.value}
                    </span>

                    {/* Icon */}
                    <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#FFD400]/10 group-hover:bg-[#FFD400]/20 flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                      <IconComp size={22} className="text-[#FFD400]" />
                    </div>

                    {/* Value */}
                    <p className="relative z-10 text-[40px] sm:text-[52px] lg:text-[60px] font-bold text-[#FFD400] leading-none mb-3">
                      {metric.value}
                    </p>

                    {/* Label */}
                    <p className="relative z-10 text-[15px] sm:text-[16px] text-white font-semibold mb-3">
                      {metric.label}
                    </p>

                    {/* Description */}
                    <p className="relative z-10 text-[13px] sm:text-[14px] text-gray-400 leading-relaxed max-w-[260px] mx-auto">
                      {metric.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Section 6.5 Social Proof / Trust Bar (NEW)
          ════════════════════════════════════════════ */}
      <section className="bg-black py-12 sm:py-16 border-t border-b border-white/5">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <p className="text-center text-[12px] sm:text-[13px] font-medium uppercase tracking-wider text-gray-500 mb-8 sm:mb-10">
              Recognized & Trusted
            </p>
          </AnimateOnScroll>

          {/* Scrolling trust badges */}
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="flex items-center justify-center flex-wrap gap-x-8 sm:gap-x-12 gap-y-4 sm:gap-y-6">
              {TRUST_ITEMS.map((item, index) => (
                <AnimateOnScroll key={item} delay={index * 80}>
                  <div className="group flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-white/10 hover:border-[#FFD400]/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 cursor-default">
                    <Trophy size={14} className="text-[#FFD400]/60 group-hover:text-[#FFD400] transition-colors duration-300" />
                    <span className="text-[13px] sm:text-[14px] font-medium text-gray-400 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                      {item}
                    </span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Section 7 Enhanced CTA
          ════════════════════════════════════════════ */}
      <section className="bg-black pt-20 sm:pt-28 pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-8 sm:mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
                Ready to Scale?
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-[clamp(1.75rem,5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white mb-6">
                Ready to be our next{" "}
                <span className="text-[#FFD400]">success story?</span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] sm:text-[17px] text-gray-400 leading-relaxed max-w-xl mx-auto mb-10 sm:mb-14">
                Every result you see above started with a single conversation.
                Let&apos;s talk about how we can create the same or better  
                outcomes for your business.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
                {/* Start a Project Button */}
                <button
                  onClick={handleStartProject}
                  className="group inline-flex items-center bg-[#FFD400] hover:bg-[#E6BE00] text-gray-900 text-[14px] sm:text-[15px] font-semibold rounded-full pl-6 sm:pl-7 pr-2 py-2.5 sm:py-3 transition-colors duration-300 whitespace-nowrap"
                >
                  <span>Start a Project</span>
                  <span className="ml-2 w-8 h-8 sm:w-9 sm:h-9 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                    <ArrowRight size={16} className="text-[#FFD400]" />
                  </span>
                </button>

                {/* WhatsApp Button */}
                <a
                  href={`${BRAND.whatsapp}?text=${encodeURIComponent("Hi! I'd like to discuss a potential project with Vibe Create Media.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#25D366]/40 text-white text-[14px] sm:text-[15px] font-semibold rounded-full px-5 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366] mr-2.5" />
                  <span>Chat on WhatsApp</span>
                  <MessageCircle size={14} className="ml-2 opacity-50" />
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
