"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  BookOpen,
  BarChart3,
  Megaphone,
  Lightbulb,
  AlertTriangle,
  Database,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Share2,
  Bookmark,
} from "lucide-react";
import { BRAND, BLOG_DETAIL_DATA, BLOGS, type BlogDetailArticle, type BlogSection } from "@/lib/data";
import { usePage } from "@/lib/page-context";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";
import { ScrollArea } from "@/components/ui/scroll-area";

/* ── Category styles ── */
const CATEGORY_STYLES: Record<string, string> = {
  Research: "bg-blue-100 text-blue-800",
  Consulting: "bg-green-100 text-green-800",
  Education: "bg-amber-100 text-amber-800",
  Promotional: "bg-purple-100 text-purple-800",
};

/* ── Callout config ── */
const CALLOUT_CONFIG: Record<
  string,
  { icon: React.ElementType; borderColor: string; bgColor: string; iconColor: string }
> = {
  "pro-tip": {
    icon: Lightbulb,
    borderColor: "border-l-[#FFD400]",
    bgColor: "bg-[#FFD400]/5",
    iconColor: "text-[#FFD400]",
  },
  "key-insight": {
    icon: Sparkles,
    borderColor: "border-l-blue-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  "data-point": {
    icon: Database,
    borderColor: "border-l-emerald-500",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
  warning: {
    icon: AlertTriangle,
    borderColor: "border-l-red-500",
    bgColor: "bg-red-50",
    iconColor: "text-red-500",
  },
};

/* ── Callout Box ── */
function CalloutBox({ callout }: { callout: BlogSection["callout"] }) {
  if (!callout) return null;
  const config = CALLOUT_CONFIG[callout.type] || CALLOUT_CONFIG["key-insight"];
  const Icon = config.icon;
  return (
    <div
      className={`rounded-xl border-l-4 ${config.borderColor} ${config.bgColor} p-5 sm:p-6 my-8`}
    >
      <div className="flex items-center gap-2.5 mb-3">
        <Icon size={18} className={config.iconColor} />
        <span className="text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-gray-900">
          {callout.title}
        </span>
      </div>
      <p className="text-[14px] sm:text-[15px] text-gray-700 leading-relaxed">
        {callout.text}
      </p>
    </div>
  );
}

/* ── Bento Stats Grid ── */
function BentoStats({ stats }: { stats: BlogSection["stats"] }) {
  if (!stats || stats.length === 0) return null;
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 my-8">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`rounded-xl border border-gray-100 bg-gray-50 p-4 sm:p-5 ${
            i === 0 ? "col-span-2 sm:col-span-1" : ""
          }`}
        >
          <p className="text-[28px] sm:text-[34px] font-bold text-gray-900 tracking-tight leading-none mb-1">
            {stat.value}
          </p>
          <p className="text-[12px] sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wide">
            {stat.label}
          </p>
          <p className="text-[13px] sm:text-[14px] text-gray-500 mt-1.5 leading-snug">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ── Pull Quote ── */
function PullQuote({ quote }: { quote: string }) {
  return (
    <blockquote className="relative my-10 pl-6 sm:pl-8 border-l-4 border-[#FFD400]">
      <span className="absolute -left-1 top-0 text-[40px] sm:text-[48px] font-serif text-[#FFD400]/30 leading-none select-none">
        &ldquo;
      </span>
      <p className="text-[17px] sm:text-[19px] font-medium leading-[1.5] text-gray-800 italic">
        {quote}
      </p>
    </blockquote>
  );
}

/* ── Main Component ── */
export default function BlogDetailPage() {
  const { pageParams, navigate } = usePage();
  const blogId = pageParams.id;
  const article: BlogDetailArticle | undefined = BLOG_DETAIL_DATA[blogId];

  const initialSection = article?.sections[0]?.id || "";
  const [activeSection, setActiveSection] = useState<string>(initialSection);

  /* ── Scroll spy for TOC ── */
  useEffect(() => {
    if (!article) return;
    const sections = article.sections.map((s) => s.id);

    const onScroll = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection(sections[0] || "");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [article]);

  /* ── 404 fallback ── */
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <section className="bg-black pt-32 pb-20 flex-1">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 text-center">
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold text-white mb-4">
              Article not found
            </h1>
            <p className="text-gray-400 mb-8">
              The article you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <button
              onClick={() => navigate("blog")}
              className="inline-flex items-center gap-2 bg-[#FFD400] hover:bg-[#E6BE00] text-gray-900 font-semibold rounded-full px-6 py-3 transition-colors duration-300"
            >
              <ArrowLeft size={16} />
              Back to Insights
            </button>
          </div>
        </section>
      </div>
    );
  }

  /* ── Related articles (exclude current) ── */
  const relatedArticles = BLOGS.filter((b) => b.id !== blogId).slice(0, 3);

  /* ── TOC headings ── */
  const tocItems = article.sections.map((s) => ({
    id: s.id,
    label: s.heading,
  }));

  const handleTocClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

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
              onClick={() => navigate("blog")}
              className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-medium text-gray-400 hover:text-white transition-colors duration-300 mb-8 sm:mb-10"
            >
              <ArrowLeft size={16} />
              Back to Insights
            </button>
          </AnimateOnScroll>

          {/* Category + Read Time */}
          <AnimateOnScroll delay={50}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className={`inline-block text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider px-3 py-1 rounded ${
                  CATEGORY_STYLES[article.category] || "bg-gray-100 text-gray-800"
                }`}
              >
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] text-gray-400">
                <Clock size={14} />
                {article.readTime} read
              </span>
              <span className="inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] text-gray-400">
                <Calendar size={14} />
                {article.publishedDate}
              </span>
            </div>
          </AnimateOnScroll>

          {/* Title */}
          <AnimateOnScroll delay={100}>
            <h1 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-white max-w-4xl mb-5 sm:mb-6">
              {article.title}
            </h1>
          </AnimateOnScroll>

          {/* Subtitle */}
          <AnimateOnScroll delay={150}>
            <p className="text-[16px] sm:text-[18px] text-gray-400 leading-relaxed max-w-3xl mb-8">
              {article.heroSubtitle}
            </p>
          </AnimateOnScroll>

          {/* Author + Actions */}
          <AnimateOnScroll delay={200}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#FFD400] flex items-center justify-center">
                  <span className="text-[14px] font-bold text-black">
                    {article.author.initials}
                  </span>
                </div>
                <div>
                  <p className="text-[14px] sm:text-[15px] font-semibold text-white">
                    {article.author.name}
                  </p>
                  <p className="text-[12px] sm:text-[13px] text-gray-500">
                    {article.author.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  aria-label="Share article"
                  onClick={() => { if (navigator.share) { navigator.share({ title: article.title, url: window.location.href }).catch(() => {}); } else { navigator.clipboard.writeText(window.location.href); } }}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 transition-all duration-300"
                >
                  <Share2 size={15} />
                </button>
                <button
                  aria-label="Bookmark article"
                  onClick={() => { const bookmarks = JSON.parse(localStorage.getItem("vcm-bookmarks") || "[]"); const exists = bookmarks.includes(article.id); if (exists) { localStorage.setItem("vcm-bookmarks", JSON.stringify(bookmarks.filter((b: string) => b !== article.id))); } else { localStorage.setItem("vcm-bookmarks", JSON.stringify([...bookmarks, article.id])); } }}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-[#FFD400] hover:border-[#FFD400]/40 transition-all duration-300"
                >
                  <Bookmark size={15} />
                </button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          ARTICLE BODY TWO COLUMN LAYOUT
      ════════════════════════════════════════════════ */}
      <section className="bg-white pt-12 sm:pt-16 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] gap-10 lg:gap-14 xl:gap-20">
            {/* ── LEFT COLUMN: Main Content ── */}
            <article className="min-w-0">
              {article.sections.map((section, sIndex) => (
                <AnimateOnScroll key={section.id} delay={sIndex * 50}>
                  <div id={section.id} className="scroll-mt-28">
                    {/* Section heading */}
                    <h2 className="text-[22px] sm:text-[26px] font-semibold leading-[1.2] tracking-[-0.02em] text-gray-900 mb-5 sm:mb-6 mt-10 first:mt-0">
                      {section.heading}
                    </h2>

                    {/* Paragraphs */}
                    {section.content.map((para, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-[15px] sm:text-[16px] text-gray-600 leading-[1.75] mb-4 last:mb-0"
                      >
                        {para}
                      </p>
                    ))}

                    {/* Callout */}
                    {section.callout && <CalloutBox callout={section.callout} />}

                    {/* Stats Bento Grid */}
                    {section.stats && <BentoStats stats={section.stats} />}

                    {/* Pull Quote */}
                    {section.pullQuote && <PullQuote quote={section.pullQuote} />}
                  </div>
                </AnimateOnScroll>
              ))}

              {/* ── Divider ── */}
              <div className="border-t border-gray-200 my-12 sm:my-16" />

              {/* ── Tags / Actions row ── */}
              <div className="flex flex-wrap items-center gap-3 mb-12">
                <span className="text-[13px] font-medium text-gray-500 uppercase tracking-wider">
                  Tags:
                </span>
                {[article.category, "Growth", "Strategy"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] font-medium bg-gray-100 text-gray-600 rounded-full px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            {/* ── RIGHT COLUMN: Sticky Sidebar ── */}
            <aside className="order-first lg:order-last">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Table of Contents */}
                <div className="rounded-2xl border border-gray-100 bg-gray-50/80 p-5 sm:p-6">
                  <h3 className="text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-gray-900 mb-4">
                    Table of Contents
                  </h3>
                  <ScrollArea className="max-h-[320px] lg:max-h-[400px]">
                    <nav aria-label="Table of contents">
                      <ul className="space-y-1">
                        {tocItems.map((item) => (
                          <li key={item.id}>
                            <button
                              onClick={() => handleTocClick(item.id)}
                              className={`w-full text-left text-[13px] sm:text-[14px] leading-[1.5] rounded-lg px-3 py-2 transition-all duration-200 flex items-start gap-2 ${
                                activeSection === item.id
                                  ? "bg-[#FFD400]/10 text-gray-900 font-semibold"
                                  : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                              }`}
                            >
                              <ChevronRight
                                size={14}
                                className={`mt-[3px] shrink-0 transition-transform duration-200 ${
                                  activeSection === item.id
                                    ? "text-[#FFD400]"
                                    : "text-gray-300"
                                }`}
                              />
                              {item.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </ScrollArea>
                </div>

                {/* Key Takeaways */}
                <div className="rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 border-l-4 border-l-[#FFD400]">
                  <h3 className="text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-gray-900 mb-4">
                    Key Takeaways
                  </h3>
                  <ul className="space-y-3">
                    {article.keyTakeaways.map((tk, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={16}
                          className="text-[#FFD400] mt-[3px] shrink-0"
                        />
                        <span className="text-[13px] sm:text-[14px] text-gray-600 leading-[1.6]">
                          {tk}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA mini-card */}
                <div className="rounded-2xl bg-gray-900 p-5 sm:p-6">
                  <p className="text-[15px] sm:text-[16px] font-semibold text-white mb-2">
                    Ready to grow?
                  </p>
                  <p className="text-[13px] sm:text-[14px] text-gray-400 leading-relaxed mb-5">
                    Turn these insights into outcomes with a team that&apos;s done it before.
                  </p>
                  <button
                    onClick={() => {
                      const event = new CustomEvent("openProjectDrawer");
                      window.dispatchEvent(event);
                    }}
                    className="group inline-flex items-center bg-[#FFD400] hover:bg-[#E6BE00] text-gray-900 text-[13px] sm:text-[14px] font-semibold rounded-full pl-5 pr-2 py-2 transition-colors duration-300"
                  >
                    <span>Start Your Project</span>
                    <span className="ml-2 w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                      <ArrowRight size={13} className="text-[#FFD400]" />
                    </span>
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          RELATED ARTICLES
      ════════════════════════════════════════════════ */}
      <section className="bg-gray-50 pt-16 sm:pt-20 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <div className="flex items-center justify-between mb-10 sm:mb-14">
              <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900">
                Related Insights
              </h2>
              <button
                onClick={() => navigate("blog")}
                className="hidden sm:inline-flex items-center gap-2 text-[14px] font-semibold text-gray-900 hover:text-[#FFD400] transition-colors duration-300"
              >
                View all
                <ArrowRight size={15} />
              </button>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {relatedArticles.map((blog, index) => (
              <AnimateOnScroll key={blog.id} delay={index * 100}>
                <button
                  onClick={() => navigate("blog-detail", { id: blog.id })}
                  className="group text-left h-full bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col"
                >
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

                  <h3 className="text-[16px] sm:text-[18px] font-semibold leading-[1.3] tracking-[-0.01em] text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                    {blog.title}
                  </h3>

                  <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed mb-6 flex-1">
                    {blog.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-semibold text-gray-900 group-hover:text-[#FFD400] transition-colors duration-300 mt-auto">
                    Read insight
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </button>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Mobile "View all" */}
          <div className="mt-8 text-center sm:hidden">
            <button
              onClick={() => navigate("blog")}
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-gray-900 hover:text-[#FFD400] transition-colors duration-300"
            >
              View all insights
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          CTA SECTION
      ════════════════════════════════════════════════ */}
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
                Reading is just the start.{" "}
                <br className="hidden sm:block" />
                Let&apos;s build outcomes.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] sm:text-[17px] text-gray-400 leading-relaxed max-w-xl mx-auto mb-10 sm:mb-14">
                Every insight in this article came from real campaigns and real
                data. Imagine what we could do with your business the same
                research-backed approach, tailored to your growth goals.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                <a
                  href={`${BRAND.whatsapp}?text=${encodeURIComponent(
                    "Hey Vibe Create Media 👋\n\nI just read your article and I'm interested in exploring how you could help us grow. Could we discuss?"
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
