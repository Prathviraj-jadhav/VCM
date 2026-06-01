"use client";

import { usePage } from "@/lib/page-context";
import { ArrowRight, Target, TrendingUp, Lightbulb } from "lucide-react";
import Image from "next/image";
import { TEAM } from "@/lib/data";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

const VALUES = [
  {
    icon: Target,
    title: "Results > Reports",
    description:
      "We don't measure success in spreadsheets. We measure it in revenue, growth, and market position. Pretty dashboards mean nothing if the numbers don't move.",
  },
  {
    icon: TrendingUp,
    title: "Strategy > Tactics",
    description:
      "Tactics are temporary. Strategy is compounding. Every action we take is rooted in a larger plan designed to create sustainable, long-term growth for your business.",
  },
  {
    icon: Lightbulb,
    title: "Honesty > Comfort",
    description:
      "We'll tell you what you need to hear, not what you want to hear. Comfortable conversations don't create breakthroughs. Honest ones do.",
  },
  {
    icon: ArrowRight,
    title: "Speed > Perfection",
    description:
      "Perfect is the enemy of shipped. We move fast, learn faster, and iterate our way to excellence. Momentum beats perfection every single time.",
  },
  {
    icon: Target,
    title: "Data > Opinions",
    description:
      "Everyone has opinions. Data doesn't lie. Every decision we make is backed by evidence, tested through experiments, and validated by results.",
  },
  {
    icon: TrendingUp,
    title: "Partnership > Retainer",
    description:
      "We don't do client-vendor relationships. We build partnerships where your success is our success. Growth is a shared mission, not a monthly invoice.",
  },
] as const;

export default function AboutPage() {
  const { navigate } = usePage();

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Hero Section ── */}
      <section className="bg-black pt-32 pb-20 sm:pb-28 lg:pb-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-8 sm:mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
              About Us
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white max-w-4xl mb-6 sm:mb-8">
              We don&apos;t just build brands.{" "}
              <span className="text-[#FFD400]">
                We engineer market dominance.
              </span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[16px] sm:text-[18px] text-gray-400 leading-relaxed max-w-2xl">
              Vibe Create Media is a full-stack growth agency built for
              ambitious brands that refuse to settle. We combine strategy,
              creativity, and relentless execution to turn businesses into
              market leaders no fluff, no excuses, just results that compound.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Story Section ── */}
      <section className="bg-white pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <AnimateOnScroll>
                <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-6 sm:mb-8">
                  Our Story
                </span>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 mb-6">
                  Born from frustration.{" "}
                  <br className="hidden sm:block" />
                  Built for results.
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="space-y-5 text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                  <p>
                    Vibe Create Media didn&apos;t start as an agency. It started
                    as a problem one that{" "}
                    <span className="text-gray-900 font-semibold">
                      Dr. Aditya Fattepurkar
                    </span>{" "}
                    couldn&apos;t ignore. After years of watching brands pour
                    money into agencies that delivered vanity metrics instead of
                    revenue, he knew there had to be a better way.
                  </p>
                  <p>
                    The agency world was broken: oversized teams with
                    underwhelming results, strategies built on templates instead
                    of insights, and relationships measured in invoices instead
                    of impact. So he built the antithesis a lean, obsessed,
                    results-first team that treats every client&apos;s business
                    like their own.
                  </p>
                  <p>
                    What began as a one-person mission has grown into a
                    full-stack growth engine but the DNA hasn&apos;t changed.
                    Every strategy is custom. Every decision is data-backed.
                    Every result is measured in revenue, not reports.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:pt-16">
              <AnimateOnScroll delay={150} direction="right">
                <div className="bg-gray-900 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden">
                  {/* Decorative icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-black rounded-full flex items-center justify-center border border-[#FFD400]/20">
                    <Image
                      src="/images/icons/navbar-icon.png"
                      alt="VCM"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <blockquote className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium leading-[1.4] text-white mb-6">
                    &ldquo;I didn&apos;t start this agency to be another line
                    item on a client&apos;s expense report. I started it to be
                    the reason their revenue graph goes up.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#FFD400] flex items-center justify-center overflow-hidden relative">
                      <Image
                        src="/images/team/founder.png"
                        alt="Dr. Aditya Fattepurkar"
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-white">
                        Dr. Aditya Fattepurkar
                      </p>
                      <p className="text-[13px] text-gray-400">Founder</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={250} direction="right">
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-xl p-5 text-center">
                    <p className="text-[24px] sm:text-[28px] font-bold text-gray-900">
                      94%
                    </p>
                    <p className="text-[12px] sm:text-[13px] text-gray-500 mt-1">
                      Client Retention
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5 text-center">
                    <p className="text-[24px] sm:text-[28px] font-bold text-gray-900">
                      50+
                    </p>
                    <p className="text-[12px] sm:text-[13px] text-gray-500 mt-1">
                      Brands Scaled
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5 text-center">
                    <p className="text-[24px] sm:text-[28px] font-bold text-gray-900">
                      4x
                    </p>
                    <p className="text-[12px] sm:text-[13px] text-gray-500 mt-1">
                      Avg. ROAS Lift
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values Section ── */}
      <section className="bg-gray-900 pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-6 sm:mb-8">
              What We Stand For
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white max-w-2xl mb-4 sm:mb-6">
              Our values aren&apos;t posters on a wall.{" "}
              <br className="hidden sm:block" />
              They&apos;re decisions we make daily.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[15px] sm:text-[16px] text-gray-400 leading-relaxed max-w-xl mb-12 sm:mb-16">
              These aren&apos;t aspirational ideals they&apos;re operational
              principles. Every strategy, every hire, every client relationship
              is filtered through these six commitments.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {VALUES.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimateOnScroll key={value.title} delay={index * 100}>
                  <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 hover:bg-white/10 hover:border-[#FFD400]/30 transition-all duration-500">
                    <div className="w-11 h-11 rounded-xl bg-[#FFD400]/10 flex items-center justify-center mb-5 group-hover:bg-[#FFD400]/20 transition-colors duration-300">
                      <Icon
                        size={20}
                        className="text-[#FFD400]"
                      />
                    </div>
                    <h3 className="text-[17px] sm:text-[18px] font-semibold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Team Section ── */}
      <section className="bg-white pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-6 sm:mb-8">
              The People
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4 sm:mb-6">
              Small team.{" "}
              <br className="hidden sm:block" />
              Outsized impact.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-xl mb-12 sm:mb-16">
              Every person here was handpicked for their ability to think,
              execute, and care about outcomes not just outputs. No dead
              weight. No passenger seats.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {TEAM.map((member, index) => (
              <AnimateOnScroll key={member.name} delay={index * 100}>
                <div className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:bg-white transition-all duration-500">
                  {/* Team member image */}
                  <div className="relative w-full aspect-square bg-gray-200 overflow-hidden">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-900">
                        <span className="text-[32px] font-bold text-white">
                          {member.initials}
                        </span>
                      </div>
                    )}
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                    {/* Info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      <span className="inline-block text-[10px] sm:text-[11px] font-semibold text-black bg-[#FFD400] uppercase tracking-wider px-2 py-0.5 rounded mb-2">
                        {member.role}
                      </span>
                      <h3 className="text-[16px] sm:text-[18px] font-semibold text-white mb-1">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                  {/* Description below image */}
                  <div className="p-5 sm:p-6">
                    <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-black pt-20 sm:pt-28 pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-8 sm:mb-10">
                Ready to Scale?
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-[clamp(1.75rem,5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white mb-6">
                Your next growth chapter{" "}
                <br className="hidden sm:block" />
                starts with a conversation.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] sm:text-[17px] text-gray-400 leading-relaxed max-w-xl mx-auto mb-10 sm:mb-14">
                No pitch decks. No pressure. Just a genuine conversation about
                your business, your goals, and whether we&apos;re the right
                partner to get you there.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <button
                onClick={() => {
                  const event = new CustomEvent("openProjectDrawer");
                  window.dispatchEvent(event);
                }}
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
