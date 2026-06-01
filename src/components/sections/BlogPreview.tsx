"use client";

import { useEffect, useRef, useState } from "react";
import { BLOGS } from "@/lib/data";
import { ArrowRight, Clock, BookOpen, BarChart3, Lightbulb, Megaphone } from "lucide-react";
import { usePage } from "@/lib/page-context";

const INTENT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  educational: BookOpen,
  consulting: BarChart3,
  promotional: Megaphone,
};

export default function BlogPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { navigate } = usePage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="insights"
      ref={sectionRef}
      className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Badge */}
        <div
          className={`flex items-center gap-3 mb-6 sm:mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            7
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Insights & Research
          </span>
        </div>

        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <h2
              className={`text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Thinking that moves
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              industries forward.
            </h2>
          </div>
          <button
            onClick={() => navigate("blog")}
            className="group inline-flex items-center text-[13px] sm:text-[14px] font-medium text-gray-900 hover:text-black transition-colors duration-300 shrink-0"
          >
            View all insights
            <ArrowRight
              size={14}
              className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {BLOGS.map((blog, index) => {
            const IntentIcon = INTENT_ICONS[blog.intent] || BookOpen;
            return (
              <article
                key={blog.id}
                onClick={() => navigate("blog-detail", { id: blog.id })}
                className={`group bg-gray-50 hover:bg-white rounded-2xl p-6 sm:p-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 cursor-pointer ${
                  index === 0 ? "lg:col-span-2 lg:row-span-1" : ""
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {/* Intent Icon */}
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FFD400]/10 transition-colors duration-300">
                  <IntentIcon className="w-5 h-5 text-gray-400 group-hover:text-[#E6BE00] transition-colors duration-300" />
                </div>

                {/* Category & Read Time */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-[11px] sm:text-[12px] font-semibold rounded-full px-3 py-1 ${blog.categoryColor}`}
                  >
                    {blog.category}
                  </span>
                  <span className="flex items-center gap-1 text-[12px] text-gray-500">
                    <Clock size={12} />
                    {blog.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[16px] sm:text-[18px] font-semibold text-gray-900 mb-2 group-hover:text-black transition-colors duration-300 leading-snug">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed mb-4">
                  {blog.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-2 text-[13px] font-medium text-gray-900 group-hover:text-black transition-colors duration-300">
                  <span>Read insight</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
