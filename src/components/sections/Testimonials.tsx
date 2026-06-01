"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Vibe Create Media didn't just run our ads they rebuilt our entire growth engine. 3x revenue in 90 days.",
    author: "Arjun M.",
    role: "Founder, D2C Brand",
    rating: 5,
  },
  {
    quote: "Their UGC videos outperformed every creative our in-house team made. By a lot. We've never looked back.",
    author: "Priya S.",
    role: "Marketing Head, SaaS Startup",
    rating: 5,
  },
  {
    quote: "Finally, an agency that talks in revenue, not impressions. The clarity alone was worth the investment.",
    author: "Rohan K.",
    role: "CEO, E-commerce Platform",
    rating: 5,
  },
  {
    quote: "They turned our brand from 'just another option' to 'the only logical choice' in our category. Powerful stuff.",
    author: "Meera T.",
    role: "Co-founder, Health Tech",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="testimonials"
      ref={sectionRef}
      className="bg-gray-50 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Badge */}
        <div
          className={`flex items-center gap-3 mb-6 sm:mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            ★
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            What They Say
          </span>
        </div>

        {/* Heading */}
        <h2
          className={`text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4 sm:mb-6 max-w-2xl transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Don&apos;t take our word for it.
          <br />
          <span className="text-gray-400">Take theirs.</span>
        </h2>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-10 sm:mt-14">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 sm:p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-[#FFD400] text-[#FFD400]"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote
                  size={24}
                  className="text-gray-200 mb-2"
                />
                <p className="text-[15px] sm:text-[16px] text-gray-900 leading-relaxed font-medium">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="mt-5 pt-5 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-[12px] font-bold text-white">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-[13px] text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
