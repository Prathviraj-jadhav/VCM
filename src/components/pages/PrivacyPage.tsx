"use client";

import { ArrowRight, Mail } from "lucide-react";
import { BRAND } from "@/lib/data";
import { usePage } from "@/lib/page-context";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

const SECTIONS = [
  {
    title: "Information We Collect",
    content: [
      "We collect information you provide directly to us, such as when you fill out a contact form, submit a project inquiry, subscribe to our newsletter, or communicate with us in any way. This may include your name, email address, phone number, company name, and any other information you choose to provide.",
      "We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits. This information helps us understand how visitors use our website and improve the user experience.",
    ],
  },
  {
    title: "How We Use Information",
    content: [
      "We use the information we collect to provide, maintain, and improve our services, communicate with you about projects, send you technical notices and updates, respond to your inquiries, and protect the rights and safety of Vibe Create Media and our clients.",
      "We may also use the information to send you marketing communications, such as newsletters and updates about our services, but only with your consent. You can opt out of these communications at any time by following the unsubscribe instructions in the email or contacting us directly.",
    ],
  },
  {
    title: "Information Sharing",
    content: [
      "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, but only to the extent necessary for them to perform their services.",
      "We may also disclose your information when we believe in good faith that disclosure is necessary to comply with applicable law, regulation, or legal process, or to protect the rights, property, or safety of Vibe Create Media, our clients, or others.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
      "We regularly review and update our security practices and use industry-standard technologies to safeguard your data. We also limit access to personal information to employees and contractors who need it to perform their duties.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "Our website uses cookies and similar tracking technologies to enhance your browsing experience and collect information about how you use our site. Cookies are small data files stored on your device that help us remember your preferences and understand site usage patterns.",
      "You can control cookies through your browser settings and may choose to disable certain types of cookies. However, disabling cookies may limit your ability to use some features of our website. We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device until they expire or you delete them).",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You have the right to access, update, or delete your personal information at any time. You may also request that we stop processing your information or that we correct any inaccuracies. To exercise any of these rights, please contact us using the information provided below.",
      "We will respond to your request within a reasonable timeframe and in accordance with applicable laws. Please note that we may need to retain certain information for legitimate business purposes or as required by law, even after you request deletion.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:",
    ],
  },
] as const;

export default function PrivacyPage() {
  const { navigate } = usePage();

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Hero Section ── */}
      <section className="bg-black pt-32 pb-20 sm:pb-28 lg:pb-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-8 sm:mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
              Privacy Policy
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white max-w-4xl mb-6 sm:mb-8">
              Privacy Policy
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
                At Vibe Create Media, we take your privacy seriously. This
                Privacy Policy describes how we collect, use, and protect your
                personal information when you visit our website and use our
                services. By accessing or using our website, you agree to the
                terms outlined in this policy.
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
                      {section.title === "Contact Us" && (
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
                Questions about our privacy practices?
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <p className="text-[15px] sm:text-[17px] text-gray-400 leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10">
                We&apos;re transparent about how we handle your data. If
                anything in this policy is unclear, reach out and we&apos;ll be
                happy to clarify.
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
