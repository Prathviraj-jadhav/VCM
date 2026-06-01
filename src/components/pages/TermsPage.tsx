"use client";

import { ArrowRight, Mail } from "lucide-react";
import { BRAND } from "@/lib/data";
import { usePage } from "@/lib/page-context";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the website and services of Vibe Create Media, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our website or services. These terms apply to all visitors, users, clients, and others who access or use our services.",
      "We reserve the right to update or modify these terms at any time without prior notice. Your continued use of our website and services after any such changes constitutes your acceptance of the new terms. We encourage you to review these terms periodically for updates.",
    ],
  },
  {
    title: "Services",
    content: [
      "Vibe Create Media provides digital marketing, branding, content creation, website development, and related growth services. The specific scope, deliverables, timelines, and terms for each engagement will be outlined in a separate service agreement or proposal provided to the client before work begins.",
      "We strive to deliver high-quality work that meets the objectives outlined in each service agreement. However, results may vary based on market conditions, client cooperation, third-party platforms, and other factors beyond our control. We do not guarantee specific outcomes unless explicitly stated in a signed agreement.",
    ],
  },
  {
    title: "Payment Terms",
    content: [
      "Payment terms for each project will be specified in the service agreement or proposal. Unless otherwise agreed, payments are due as per the milestones outlined in the project scope. Late payments may incur interest charges and may result in a pause or suspension of services until the outstanding balance is settled.",
      "All fees are non-refundable once work has commenced, except as otherwise provided in the service agreement or required by applicable law. We reserve the right to adjust pricing for ongoing services with reasonable advance notice to the client.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "All content, designs, strategies, and materials created by Vibe Create Media for a client shall become the property of the client upon full payment of all applicable fees, unless otherwise specified in the service agreement. Until full payment is received, Vibe Create Media retains ownership of all deliverables.",
      "Vibe Create Media reserves the right to use anonymized or general examples of work completed for clients in our portfolio, case studies, and marketing materials, unless a confidentiality agreement is in place that explicitly prohibits such use.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "Vibe Create Media shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to the use of our services, even if we have been advised of the possibility of such damages. Our total liability for any claim arising from our services shall not exceed the total amount paid by the client for the specific service in question.",
      "We are not responsible for any losses resulting from changes to third-party platforms (such as social media networks, search engines, or advertising platforms), force majeure events, or any circumstances beyond our reasonable control.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These Terms & Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from or related to these terms or our services shall be subject to the exclusive jurisdiction of the courts in Latur, Maharashtra, India.",
    ],
  },
  {
    title: "Contact",
    content: [
      "If you have any questions or concerns about these Terms & Conditions, please contact us at:",
    ],
  },
] as const;

export default function TermsPage() {
  const { navigate } = usePage();

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Hero Section ── */}
      <section className="bg-black pt-32 pb-20 sm:pb-28 lg:pb-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-8 sm:mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
              Terms & Conditions
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white max-w-4xl mb-6 sm:mb-8">
              Terms & Conditions
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[16px] sm:text-[18px] text-gray-400 leading-relaxed max-w-2xl">
              Last updated: March 4, 2026
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Content Section ── */}
      <section className="bg-white pt-20 sm:pt-28 pb-16 sm:pb-24 flex-1">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll>
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed mb-12 sm:mb-16">
                Please read these Terms & Conditions carefully before using the
                services provided by Vibe Create Media. By engaging our services
                or accessing our website, you acknowledge that you have read,
                understood, and agree to be bound by these terms.
              </p>
            </AnimateOnScroll>

            <div className="space-y-10 sm:space-y-14">
              {SECTIONS.map((section, index) => (
                <AnimateOnScroll key={section.title} delay={index * 60}>
                  <div>
                    <h2 className="text-[18px] sm:text-[22px] font-semibold text-gray-900 mb-4 sm:mb-5">
                      {index + 1}. {section.title}
                    </h2>
                    <div className="space-y-4">
                      {section.content.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                      {section.title === "Contact" && (
                        <div className="mt-4 bg-gray-50 rounded-xl p-5 sm:p-6">
                          <div className="flex items-center gap-3 mb-2">
                            <Mail size={18} className="text-[#FFD400]" />
                            <span className="text-[15px] font-semibold text-gray-900">
                              Email
                            </span>
                          </div>
                          <a
                            href={`mailto:${BRAND.email}`}
                            className="text-[14px] sm:text-[15px] text-gray-600 hover:text-gray-900 transition-colors duration-300"
                          >
                            {BRAND.email}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-black pt-16 sm:pt-20 pb-16 sm:pb-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white mb-4">
                Questions about our terms?
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <p className="text-[15px] sm:text-[17px] text-gray-400 leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10">
                We believe in clarity and fairness. If anything in these terms
                needs further explanation, we&apos;re just an email away.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <a
                href={`mailto:${BRAND.email}`}
                className="group inline-flex items-center bg-[#FFD400] hover:bg-[#E6BE00] text-gray-900 text-[14px] sm:text-[15px] font-semibold rounded-full pl-6 sm:pl-7 pr-2 py-2.5 sm:py-3 transition-colors duration-300"
              >
                <span>Contact Us</span>
                <span className="ml-2 w-8 h-8 sm:w-9 sm:h-9 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                  <ArrowRight size={16} className="text-[#FFD400]" />
                </span>
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
