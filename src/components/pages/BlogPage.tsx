"use client";

import { ArrowRight, Clock, BookOpen, BarChart3, Megaphone, Search } from "lucide-react";
import { BLOGS } from "@/lib/data";
import { usePage } from "@/lib/page-context";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

const CATEGORY_STYLES: Record<string, string> = {
  Research: "bg-blue-100 text-blue-800",
  Consulting: "bg-green-100 text-green-800",
  Education: "bg-amber-100 text-amber-800",
  Promotional: "bg-purple-100 text-purple-800",
};

const INTENT_ICONS: Record<string, React.ElementType> = {
  educational: BookOpen,
  consulting: BarChart3,
  promotional: Megaphone,
};

export default function BlogPage() {
  const { navigate } = usePage();
  const [featured, ...rest] = BLOGS;

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Hero Section ── */}
      <section className="bg-black pt-32 pb-20 sm:pb-28 lg:pb-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-8 sm:mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
              Insights
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white max-w-4xl mb-6 sm:mb-8">
              Thinking that moves{" "}
              <span className="text-[#FFD400]">industries forward.</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[16px] sm:text-[18px] text-gray-400 leading-relaxed max-w-2xl">
              Content that educates, consults, and converts. Our insights are
              built from real campaigns, real data, and real results not
              theory, not fluff. Every article is engineered to give you an
              actionable edge.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Featured Article ── */}
      <section className="bg-white pt-16 sm:pt-24 pb-16 sm:pb-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <div className="group relative bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Featured image placeholder */}
                <div className="relative bg-gray-900 flex items-center justify-center min-h-[280px] sm:min-h-[360px] lg:min-h-[440px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#FFD400]/10 flex items-center justify-center">
                      {(() => {
                        const Icon = INTENT_ICONS[featured.intent] || BookOpen;
                        return <Icon size={28} className="text-[#FFD400]" />;
                      })()}
                    </div>
                    <span className="text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 py-1.5 text-white/60">
                      Featured Insight
                    </span>
                  </div>
                </div>

                {/* Featured content */}
                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span
                      className={`inline-block text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider px-3 py-1 rounded ${
                        CATEGORY_STYLES[featured.category] || "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {featured.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] text-gray-500">
                      <Clock size={14} />
                      {featured.readTime}
                    </span>
                  </div>

                  <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-semibold leading-[1.2] tracking-[-0.02em] text-gray-900 mb-4">
                    {featured.title}
                  </h2>

                  <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed mb-8">
                    {featured.excerpt}
                  </p>

                  <button
                    onClick={() =>
                      navigate("blog-detail", { id: featured.id })
                    }
                    className="group/btn inline-flex items-center gap-2 text-[14px] sm:text-[15px] font-semibold text-gray-900 hover:text-[#FFD400] transition-colors duration-300"
                  >
                    Read insight
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="bg-white pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <div className="flex items-center justify-between mb-10 sm:mb-14">
              <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900">
                All Insights
              </h2>
              <div className="hidden sm:flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2.5">
                <Search size={16} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="bg-transparent text-[14px] text-gray-700 placeholder:text-gray-400 outline-none w-48"
                />
              </div>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {rest.map((blog, index) => {
              const IntentIcon = INTENT_ICONS[blog.intent] || BookOpen;
              return (
                <AnimateOnScroll key={blog.id} delay={index * 100}>
                  <div className="group h-full bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:bg-white transition-all duration-500 flex flex-col">
                    {/* Category & read time */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className={`inline-block text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider px-3 py-1 rounded ${
                          CATEGORY_STYLES[blog.category] || "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {blog.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] text-gray-500">
                        <Clock size={13} />
                        {blog.readTime}
                      </span>
                    </div>

                    {/* Intent icon */}
                    <div className="w-10 h-10 rounded-xl bg-gray-900/5 flex items-center justify-center mb-4 group-hover:bg-[#FFD400]/10 transition-colors duration-300">
                      <IntentIcon
                        size={18}
                        className="text-gray-600 group-hover:text-[#FFD400] transition-colors duration-300"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-[16px] sm:text-[18px] font-semibold leading-[1.3] tracking-[-0.01em] text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed mb-6 flex-1">
                      {blog.excerpt}
                    </p>

                    {/* Read link */}
                    <button
                      onClick={() =>
                        navigate("blog-detail", { id: blog.id })
                      }
                      className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-semibold text-gray-900 hover:text-[#FFD400] transition-colors duration-300 mt-auto"
                    >
                      Read insight
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA Section ── */}
      <section className="bg-gray-900 pt-20 sm:pt-28 pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-8 sm:mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
                Newsletter
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white mb-4 sm:mb-6">
                Get insights delivered.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] sm:text-[17px] text-gray-400 leading-relaxed max-w-lg mx-auto mb-8 sm:mb-10">
                Join founders and marketers who get our weekly breakdown of
                what&apos;s actually working in growth. No spam. No fluff. Just
                strategies you can use.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
                <div className="relative w-full">
                  <Search
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-white/10 border border-white/20 rounded-full pl-11 pr-4 py-3 sm:py-3.5 text-[14px] sm:text-[15px] text-white placeholder:text-gray-500 outline-none focus:border-[#FFD400]/50 focus:ring-1 focus:ring-[#FFD400]/30 transition-all duration-300"
                  />
                </div>
                <button onClick={() => { const event = new CustomEvent("openProjectDrawer"); window.dispatchEvent(event); }} className="w-full sm:w-auto bg-[#FFD400] hover:bg-[#E6BE00] text-gray-900 text-[14px] sm:text-[15px] font-semibold rounded-full px-7 py-3 sm:py-3.5 transition-colors duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </AnimateOnScroll>
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
                Ready to turn insights{" "}
                <br className="hidden sm:block" />
                into outcomes?
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] sm:text-[17px] text-gray-400 leading-relaxed max-w-xl mx-auto mb-10 sm:mb-14">
                Reading is just the start. Let&apos;s build a growth engine
                that&apos;s tailored to your business with the same
                research-backed approach behind every article we publish.
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
