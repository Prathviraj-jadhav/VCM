"use client";

import { ArrowRight, Briefcase, MapPin, Clock, Zap, BookOpen, Target, Shield } from "lucide-react";
import { usePage } from "@/lib/page-context";
import { BRAND } from "@/lib/data";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

const POSITIONS = [
  {
    title: "Growth Strategist",
    location: "Latur, Maharashtra",
    type: "Full-time",
    department: "Marketing",
  },
  {
    title: "Content Writer",
    location: "Latur, Maharashtra",
    type: "Full-time",
    department: "Content",
  },
  {
    title: "Video Editor",
    location: "Latur, Maharashtra",
    type: "Full-time",
    department: "Production",
  },
  {
    title: "Social Media Executive",
    location: "Latur, Maharashtra",
    type: "Full-time",
    department: "Social",
  },
  {
    title: "UI/UX Designer",
    location: "Latur, Maharashtra",
    type: "Full-time",
    department: "Design",
  },
] as const;

const CULTURE_VALUES = [
  {
    icon: Zap,
    title: "Autonomy",
    description:
      "We trust you to own your work. No micromanagement, no unnecessary approvals just clear outcomes and the freedom to figure out how to get there.",
  },
  {
    icon: BookOpen,
    title: "Learning",
    description:
      "Growth isn't just what we deliver to clients it's what we expect from ourselves. Weekly learning sessions, experiment budgets, and a culture that celebrates curiosity.",
  },
  {
    icon: Target,
    title: "Impact",
    description:
      "Every task, every project, every decision is measured by the impact it creates. We don't do busywork. We do work that moves the needle for clients and for ourselves.",
  },
  {
    icon: Shield,
    title: "Ownership",
    description:
      "When you join Vibe Create Media, you don't get a job you get a seat at the table. Every team member owns their domain, their decisions, and their results.",
  },
] as const;

export default function CareersPage() {
  const { navigate } = usePage();

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Hero Section ── */}
      <section className="bg-black pt-32 pb-20 sm:pb-28 lg:pb-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-8 sm:mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
              Careers
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white max-w-4xl mb-6 sm:mb-8">
              Build your career where growth is{" "}
              <span className="text-[#FFD400]">the culture.</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[16px] sm:text-[18px] text-gray-400 leading-relaxed max-w-2xl">
              Join a team that thinks differently, moves fast, and measures
              success in real impact not hours logged. We&apos;re not looking
              for employees; we&apos;re looking for people who want to build
              something extraordinary.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section className="bg-white pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-6 sm:mb-8">
              Open Positions
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 max-w-3xl mb-4 sm:mb-6">
              Roles that need people who refuse to be average.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-2xl mb-12 sm:mb-16">
              Each open role is an opportunity to own your domain, make real
              impact, and grow alongside a team that challenges the status quo
              every single day.
            </p>
          </AnimateOnScroll>

          <div className="space-y-4 sm:space-y-5">
            {POSITIONS.map((position, index) => (
              <AnimateOnScroll key={position.title} delay={index * 80}>
                <div className="group bg-gray-50 hover:bg-gray-900 rounded-2xl p-5 sm:p-7 transition-all duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-[17px] sm:text-[20px] font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                          {position.title}
                        </h3>
                        <span className="inline-block text-[11px] sm:text-[12px] font-semibold text-black bg-[#FFD400] uppercase tracking-wider px-2.5 py-1 rounded">
                          {position.department}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                        <span className="inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                          <MapPin size={14} className="text-[#FFD400]" />
                          {position.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                          <Clock size={14} className="text-[#FFD400]" />
                          {position.type}
                        </span>
                      </div>
                    </div>

                    <button onClick={() => { const event = new CustomEvent("openCareersDrawer", { detail: { position: position.title } }); window.dispatchEvent(event); }} className="group/btn inline-flex items-center justify-center bg-[#FFD400] hover:bg-[#E6BE00] text-gray-900 text-[13px] sm:text-[14px] font-semibold rounded-full pl-6 pr-2 py-2.5 transition-colors duration-300 shrink-0 w-full sm:w-auto">
                      <span>Apply</span>
                      <span className="ml-2 w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/btn:-rotate-45">
                        <ArrowRight size={13} className="text-[#FFD400]" />
                      </span>
                    </button>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Culture Section ── */}
      <section className="bg-gray-900 pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-6 sm:mb-8">
              Our Culture
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white max-w-2xl mb-4 sm:mb-6">
              Culture isn&apos;t what we say.{" "}
              <br className="hidden sm:block" />
              It&apos;s what we do every day.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[15px] sm:text-[16px] text-gray-400 leading-relaxed max-w-xl mb-12 sm:mb-16">
              These four values shape every decision, every hire, and every
              project. They&apos;re not aspirations they&apos;re expectations.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {CULTURE_VALUES.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimateOnScroll key={value.title} delay={index * 100}>
                  <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 hover:bg-white/10 hover:border-[#FFD400]/30 transition-all duration-500 h-full">
                    <div className="w-11 h-11 rounded-xl bg-[#FFD400]/10 flex items-center justify-center mb-5 group-hover:bg-[#FFD400]/20 transition-colors duration-300">
                      <Icon size={20} className="text-[#FFD400]" />
                    </div>
                    <h3 className="text-[17px] sm:text-[18px] font-semibold text-white mb-3">
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

      {/* ── CTA Section ── */}
      <section className="bg-black pt-20 sm:pt-28 pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-8 sm:mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
                Always Hiring
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-[clamp(1.75rem,5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white mb-6">
                Don&apos;t see your role?{" "}
                <br className="hidden sm:block" />
                We&apos;re always looking.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] sm:text-[17px] text-gray-400 leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8">
                If you&apos;re exceptional at what you do and share our
                obsession with results, we want to hear from you. Send us your
                story role listings are just a starting point.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <button
                onClick={() => { const event = new CustomEvent("openCareersDrawer"); window.dispatchEvent(event); }}
                className="inline-flex items-center gap-2 text-[15px] sm:text-[17px] font-semibold text-[#FFD400] hover:text-[#E6BE00] transition-colors duration-300"
              >
                <Briefcase size={18} />
                Send Your Application
              </button>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
