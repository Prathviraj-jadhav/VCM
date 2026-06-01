"use client";

import { usePage } from "@/lib/page-context";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import {
  Home,
  Users,
  Briefcase,
  FolderOpen,
  BookOpen,
  GraduationCap,
  Phone,
  Shield,
  FileText,
  TrendingUp,
  Palette,
  Video,
  FileText as ContentIcon,
  Share2,
  Globe,
  Handshake,
  Film,
  Target,
  Map,
} from "lucide-react";

interface SitemapLink {
  label: string;
  page: string;
  description: string;
  icon: React.ElementType;
}

const SITEMAP_SECTIONS: { title: string; description: string; links: SitemapLink[] }[] = [
  {
    title: "Main Pages",
    description: "The core of who we are and what we do.",
    links: [
      { label: "Home", page: "home", description: "Start here. Everything we stand for, in one scroll.", icon: Home },
      { label: "About Us", page: "about", description: "The story, the team, the obsession with results.", icon: Users },
      { label: "Services", page: "services", description: "9 ways we help brands dominate their markets.", icon: Briefcase },
      { label: "Case Studies", page: "case-studies", description: "Proof that we don't just talk we deliver.", icon: FolderOpen },
      { label: "Blog & Insights", page: "blog", description: "Strategies and frameworks you can actually use.", icon: BookOpen },
      { label: "Careers", page: "careers", description: "Join a team that refuses to be average.", icon: GraduationCap },
      { label: "Contact", page: "contact", description: "Let's start a conversation that matters.", icon: Phone },
    ],
  },
  {
    title: "Services",
    description: "Every weapon in our growth arsenal.",
    links: [
      { label: "Performance Marketing", page: "service-detail", description: "ROI-positive campaigns that turn ad spend into revenue.", icon: TrendingUp },
      { label: "Branding & Identity", page: "service-detail", description: "Brands that command attention and refuse to be forgotten.", icon: Palette },
      { label: "UGC Video Creation", page: "service-detail", description: "Scroll-stopping content that sells without looking like an ad.", icon: Video },
      { label: "Content Marketing", page: "service-detail", description: "Content that ranks, converts, and compounds.", icon: ContentIcon },
      { label: "Social Media Marketing", page: "service-detail", description: "Social presence that builds communities.", icon: Share2 },
      { label: "Website Development", page: "service-detail", description: "Websites that convert visitors into customers.", icon: Globe },
      { label: "Business Development", page: "service-detail", description: "Strategic partnerships and untapped growth channels.", icon: Handshake },
      { label: "Video Editing & Production", page: "service-detail", description: "Professional content for a skip-happy world.", icon: Film },
      { label: "Meta Ads Creatives", page: "service-detail", description: "Ad creatives that break through the noise.", icon: Target },
    ],
  },
  {
    title: "Resources",
    description: "Read up. Level up. Show up differently.",
    links: [
      { label: "All Insights", page: "blog", description: "Articles, frameworks, and playbooks.", icon: BookOpen },
      { label: "Case Studies", page: "case-studies", description: "Real results from real brands.", icon: FolderOpen },
      { label: "Sitemap", page: "sitemap", description: "You're already here. But hey, meta is cool.", icon: Map },
    ],
  },
  {
    title: "Legal",
    description: "The stuff we have to say but we kept it readable.",
    links: [
      { label: "Privacy Policy", page: "privacy", description: "How we handle your data (spoiler: responsibly).", icon: Shield },
      { label: "Terms & Conditions", page: "terms", description: "The rules of engagement. No fine print tricks.", icon: FileText },
    ],
  },
];

export default function SitemapPage() {
  const { navigate } = usePage();

  const handleNavigate = (page: string, label: string) => {
    if (page === "service-detail") {
      navigate("service-detail", { id: label.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "") });
    } else {
      navigate(page as never);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Hero Section ── */}
      <section className="bg-black pt-32 pb-20 sm:pb-28 lg:pb-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-8 sm:mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
              Sitemap
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white max-w-4xl mb-6 sm:mb-8">
              Every page.{" "}
              <span className="text-[#FFD400]">One map.</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[16px] sm:text-[18px] text-gray-400 leading-relaxed max-w-2xl">
              Lost? We&apos;ve got you. Here&apos;s every corner of our digital
              universe, neatly organized so you can find exactly what you need  
              no scavenger hunt required.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Sitemap Sections ── */}
      {SITEMAP_SECTIONS.map((section, sectionIndex) => (
        <section
          key={section.title}
          className={`pt-16 sm:pt-24 pb-16 sm:pb-20 ${
            sectionIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-4 sm:mb-6">
                {section.title}
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 mb-2 sm:mb-3">
                {section.title}
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed mb-10 sm:mb-14">
                {section.description}
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {section.links.map((link, index) => {
                const Icon = link.icon;
                return (
                  <AnimateOnScroll key={link.label} delay={index * 80}>
                    <button
                      onClick={() => handleNavigate(link.page, link.label)}
                      className="group w-full text-left bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 hover:bg-gray-900 hover:border-gray-800 transition-all duration-500"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#FFD400]/10 group-hover:bg-[#FFD400]/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                          <Icon size={18} className="text-[#FFD400]" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-[15px] sm:text-[16px] font-semibold text-gray-900 group-hover:text-white transition-colors duration-300 mb-1">
                            {link.label}
                          </h3>
                          <p className="text-[13px] sm:text-[14px] text-gray-500 group-hover:text-gray-400 leading-relaxed transition-colors duration-300">
                            {link.description}
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
      ))}

      {/* ── CTA Section ── */}
      <section className="bg-black pt-20 sm:pt-28 pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white mb-4 sm:mb-6">
                Found what you were looking for?
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <p className="text-[15px] sm:text-[17px] text-gray-400 leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10">
                Great. Now let&apos;s turn that curiosity into a conversation.
                We promise it&apos;ll be worth your time.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <button
                onClick={() => navigate("contact")}
                className="group inline-flex items-center bg-[#FFD400] hover:bg-[#E6BE00] text-gray-900 text-[14px] sm:text-[15px] font-semibold rounded-full pl-6 sm:pl-7 pr-2 py-2.5 sm:py-3 transition-colors duration-300"
              >
                <span>Get In Touch</span>
                <span className="ml-2 w-8 h-8 sm:w-9 sm:h-9 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                  <Map size={16} className="text-[#FFD400]" />
                </span>
              </button>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
