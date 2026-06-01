"use client";

import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  FileText,
  Rocket,
  TrendingUp,
  ChevronDown,
  Send,
  Instagram,
  Linkedin,
  Unlock,
  DollarSign,
  UserCheck,
  BarChart3,
  Facebook,
  Check,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import { BRAND, WHATSAPP_MESSAGE, SERVICES } from "@/lib/data";
import { usePage } from "@/lib/page-context";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";

const CONTACT_CARDS = [
  {
    icon: Mail,
    label: "Email",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
    description:
      "Drop us a line anytime. We respond within 24 hours usually much faster.",
  },
  {
    icon: Phone,
    label: "Phone",
    value: `+91 ${BRAND.phone}`,
    href: `tel:+91${BRAND.phone}`,
    description:
      "Prefer talking? Give us a call during business hours and get straight to the point.",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: `${BRAND.whatsapp}?text=${WHATSAPP_MESSAGE}`,
    description:
      "Quick questions? WhatsApp is the fastest way to reach us. Typically under 2 hours.",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Latur, Maharashtra",
    href: undefined,
    description:
      "SK Towers, Second Floor, Opposite Kayamkhane Petrol Pump, Ambajogai Road, Latur 413512",
  },
] as const;

const ThreadsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2a10 10 0 1 0 10 10V10a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 4 0v-2a6 6 0 1 0-8 5.66" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/vibecreatemedia/",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/vibecreatemedia/",
  },
  {
    icon: ThreadsIcon,
    label: "Threads",
    href: "https://www.threads.com/@vibecreatemedia",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/vibecreate-media/",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    href: `${BRAND.whatsapp}?text=${WHATSAPP_MESSAGE}`,
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    icon: Phone,
    title: "Discovery Call",
    description: "Free 30-min consultation to understand your business, goals, and challenges. No sales pitch just an honest conversation.",
  },
  {
    step: "02",
    icon: FileText,
    title: "Strategy Proposal",
    description: "Custom growth plan delivered within 48 hours. Tailored strategy, clear timelines, and transparent pricing.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Onboarding",
    description: "Kickoff within 1 week. We hit the ground running with a dedicated team, clear milestones, and zero ramp-up waste.",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Growth",
    description: "Weekly reporting & optimization. Data-driven iterations, transparent metrics, and compounding results.",
  },
] as const;

const FAQ_ITEMS = [
  {
    question: "How quickly do you respond to inquiries?",
    answer:
      "We respond to all inquiries within 24 hours usually much faster. If you reach out via WhatsApp, you'll typically hear back within a couple of hours during business days. We believe speed of response reflects speed of execution.",
  },
  {
    question: "What happens after I reach out?",
    answer:
      "We'll schedule a 30-minute discovery call to understand your business, goals, and challenges. No sales pitch just an honest conversation about whether we're the right fit for your growth. If we are, you'll receive a custom strategy proposal within 48 hours.",
  },
  {
    question: "Is the initial consultation free?",
    answer:
      "Absolutely. Our discovery call is completely free and zero-pressure. We believe the best partnerships start with genuine conversations, not sales tactics. If we're not the right fit, we'll tell you honestly and often recommend someone who is.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes and we love working with ambitious founders. Whether you're pre-launch, seed-stage, or scaling past Series A, we tailor our services and pricing to match your stage. Some of our most successful partnerships started when the brand was just an idea and a deck.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work across D2C, e-commerce, real estate, healthcare, education, food & beverage, fashion, fintech, and professional services. Our growth frameworks are industry-agnostic we adapt the strategy, not the principles. If you sell something, we can help you sell more of it.",
  },
] as const;

const WHY_WORK_WITH_US = [
  {
    icon: Unlock,
    title: "No Long-Term Lock-ins",
    description: "Month-to-month engagements. We earn your business every single month no prison sentences disguised as contracts.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Every rupee accounted for. No hidden fees, no surprise line items, no 'miscellaneous' charges. What you see is what you pay.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Account Manager",
    description: "One person who knows your brand inside out. No rotating interns, no 'the person handling your account left' excuses.",
  },
  {
    icon: BarChart3,
    title: "Weekly Reporting",
    description: "Real numbers, every week. No cherry-picked metrics, no vanity dashboards just honest data that drives decisions.",
  },
] as const;

export default function ContactPage() {
  const { navigate } = usePage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStartProject = () => {
    const event = new CustomEvent("openProjectDrawer");
    window.dispatchEvent(event);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const selectedService = SERVICES.find(s => s.id === formData.service)?.title || formData.service || "Other";
    
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact",
          data: {
            name: formData.name,
            email: formData.email,
            service: selectedService,
            message: formData.message,
          },
        }),
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        console.error("Failed to submit quick contact form:", await response.text());
        // Failsafe fallback
        setFormSubmitted(true);
      }
    } catch (err) {
      console.error("Quick contact form network error:", err);
      // Failsafe fallback
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", service: "", message: "" });
      setTimeout(() => {
        setFormSubmitted(false);
      }, 4000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Hero Section ── */}
      <section className="bg-black pt-32 pb-20 sm:pb-28 lg:pb-36 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-8 sm:mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
              Contact
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white max-w-4xl mb-6 sm:mb-8">
              Let&apos;s start a conversation{" "}
              <span className="text-[#FFD400]">that matters.</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[16px] sm:text-[18px] text-gray-400 leading-relaxed max-w-2xl mb-6 sm:mb-8">
              Whether you have a question, a project in mind, or just want to
              explore possibilities we&apos;re here. Real humans, real
              conversations, real outcomes. No gatekeepers, no runarounds.
            </p>
          </AnimateOnScroll>

          {/* Response Time Indicator */}
          <AnimateOnScroll delay={250}>
            <div className="inline-flex items-center gap-2.5 bg-[#FFD400]/10 border border-[#FFD400]/20 rounded-full px-4 sm:px-5 py-2 mb-8 sm:mb-10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD400] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFD400]" />
              </span>
              <span className="text-[13px] sm:text-[14px] font-medium text-[#FFD400]">
                Average response time: Under 2 hours
              </span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button
                onClick={handleStartProject}
                className="group inline-flex items-center bg-[#FFD400] hover:bg-[#E6BE00] text-gray-900 text-[14px] sm:text-[15px] font-semibold rounded-full pl-6 sm:pl-7 pr-2 py-2.5 sm:py-3 transition-colors duration-300"
              >
                <span className="whitespace-nowrap">Start Your Project</span>
                <span className="ml-2 w-8 h-8 sm:w-9 sm:h-9 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                  <ArrowRight size={16} className="text-[#FFD400]" />
                </span>
              </button>

              <a
                href={`${BRAND.whatsapp}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#FFD400]/30 text-white text-[14px] sm:text-[15px] font-semibold rounded-full pl-6 sm:pl-7 pr-2 py-2.5 sm:py-3 transition-all duration-300"
              >
                <span className="whitespace-nowrap">Chat on WhatsApp</span>
                <span className="ml-2 w-8 h-8 sm:w-9 sm:h-9 bg-[#FFD400] rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                </span>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Contact Cards ── */}
      <section className="bg-white pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-6 sm:mb-8">
              Get In Touch
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 max-w-3xl mb-4 sm:mb-6">
              Four ways to reach us.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-2xl mb-12 sm:mb-16">
              Pick the channel that works best for you. We&apos;re responsive on
              all of them because good partnerships don&apos;t make you wait.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {CONTACT_CARDS.map((card, index) => {
              const Icon = card.icon;
              const isOffice = card.label === "Office";
              const CardWrapper = isOffice ? "div" : "a";
              const wrapperProps = isOffice
                ? {}
                : {
                    href: card.href,
                    target:
                      card.label === "WhatsApp" ? "_blank" : undefined,
                    rel:
                      card.label === "WhatsApp"
                        ? "noopener noreferrer"
                        : undefined,
                  };

              return (
                <AnimateOnScroll key={card.label} delay={index * 120}>
                  <CardWrapper
                    {...wrapperProps}
                    className="group block bg-gray-50 hover:bg-gray-900 rounded-2xl p-6 sm:p-8 transition-all duration-500 h-full hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#FFD400]/10 group-hover:bg-[#FFD400]/20 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110">
                      <Icon size={22} className="text-[#FFD400]" />
                    </div>

                    <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider text-gray-500 group-hover:text-gray-500 mb-2 transition-colors duration-300">
                      {card.label}
                    </p>

                    <p className="text-[17px] sm:text-[19px] font-semibold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                      {card.value}
                    </p>

                    <p className="text-[14px] sm:text-[15px] text-gray-600 group-hover:text-gray-400 leading-relaxed transition-colors duration-300">
                      {card.description}
                    </p>

                    {/* Hover arrow indicator for clickable cards */}
                    {!isOffice && (
                      <div className="mt-4 flex items-center gap-1.5 text-[13px] font-medium text-[#FFD400] opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                        <span>Reach out</span>
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    )}
                  </CardWrapper>
                </AnimateOnScroll>
              );
            })}
          </div>

          {/* Social Media Links */}
          <AnimateOnScroll delay={400}>
            <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <p className="text-[14px] sm:text-[15px] text-gray-500 font-medium">
                Or find us on socials:
              </p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group/social w-10 h-10 rounded-full bg-gray-100 hover:bg-[#FFD400] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#FFD400]/20"
                    >
                      <SocialIcon className="w-4 h-4 text-gray-500 group-hover/social:text-gray-900 transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Quick Contact Form ── */}
      <section className="bg-gray-50 pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-6 sm:mb-8">
                <Send size={14} />
                Quick Contact
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4 sm:mb-6">
                Tell us about your project.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed mb-10 sm:mb-14">
                Fill out the form below and we&apos;ll get back to you faster than you can say &quot;growth strategy.&quot; No spam, no fluff just a real conversation.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <form onSubmit={handleFormSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-[13px] sm:text-[14px] font-semibold text-gray-900 mb-2">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-white border border-gray-200 focus:border-[#FFD400] focus:ring-2 focus:ring-[#FFD400]/20 rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 text-[14px] sm:text-[15px] text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-[13px] sm:text-[14px] font-semibold text-gray-900 mb-2">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full bg-white border border-gray-200 focus:border-[#FFD400] focus:ring-2 focus:ring-[#FFD400]/20 rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 text-[14px] sm:text-[15px] text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Service Interest */}
                <div>
                  <label htmlFor="contact-service" className="block text-[13px] sm:text-[14px] font-semibold text-gray-900 mb-2">
                    Service Interest
                  </label>
                  <div className="relative">
                    <select
                      id="contact-service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-white border border-gray-200 focus:border-[#FFD400] focus:ring-2 focus:ring-[#FFD400]/20 rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 text-[14px] sm:text-[15px] text-gray-900 outline-none transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICES.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title}
                        </option>
                      ))}
                      <option value="other">Other / Not Sure</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-[13px] sm:text-[14px] font-semibold text-gray-900 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project, goals, or just say hi..."
                    className="w-full bg-white border border-gray-200 focus:border-[#FFD400] focus:ring-2 focus:ring-[#FFD400]/20 rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 text-[14px] sm:text-[15px] text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || formSubmitted}
                    className="group inline-flex items-center bg-gray-900 hover:bg-black text-white text-[14px] sm:text-[15px] font-semibold rounded-full pl-6 sm:pl-7 pr-2 py-2.5 sm:py-3 transition-colors duration-300 disabled:opacity-80 cursor-pointer"
                  >
                    <span className="whitespace-nowrap">
                      {isSubmitting ? "Sending..." : formSubmitted ? "Message Sent!" : "Send Message"}
                    </span>
                    <span className="ml-2 w-8 h-8 sm:w-9 sm:h-9 bg-[#FFD400] rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                      {isSubmitting ? (
                        <Loader2 size={16} className="text-gray-900 animate-spin" />
                      ) : formSubmitted ? (
                        <Check size={16} className="text-gray-900" />
                      ) : (
                        <Send size={16} className="text-gray-900" />
                      )}
                    </span>
                  </button>

                  <p className="text-[13px] sm:text-[14px] text-gray-500">
                    We&apos;ll respond within 2 hours during business hours.
                  </p>
                </div>
              </form>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── How We Work With You ── */}
      <section className="bg-[#FFD400] pt-20 sm:pt-28 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-black/[0.03]" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-black/[0.03]" />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-black/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-black/70 mb-6 sm:mb-8">
              Our Process
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 max-w-3xl mb-4 sm:mb-6">
              How we work with you.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[15px] sm:text-[16px] text-black/60 leading-relaxed max-w-2xl mb-12 sm:mb-16">
              From first call to compounding growth here&apos;s exactly what
              working with us looks like. No surprises, no hidden steps, just a
              proven path forward.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimateOnScroll key={step.step} delay={index * 120}>
                  <div className="bg-black rounded-2xl p-6 sm:p-8 h-full relative group hover:bg-gray-900 transition-colors duration-500">
                    {/* Step number */}
                    <span className="absolute top-6 right-6 sm:top-8 sm:right-8 text-[48px] sm:text-[56px] font-bold text-white/[0.06] leading-none select-none">
                      {step.step}
                    </span>

                    <div className="w-12 h-12 rounded-xl bg-[#FFD400]/20 flex items-center justify-center mb-5 group-hover:bg-[#FFD400]/30 transition-colors duration-300">
                      <Icon size={22} className="text-[#FFD400]" />
                    </div>

                    <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider text-gray-500 mb-2">
                      Step {step.step}
                    </p>

                    <p className="text-[17px] sm:text-[19px] font-semibold text-white mb-3">
                      {step.title}
                    </p>

                    <p className="text-[14px] sm:text-[15px] text-gray-400 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Connector line on desktop (not on last item) */}
                    {index < PROCESS_STEPS.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-white/20" />
                    )}
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Office Location ── */}
      <section className="bg-black pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            {/* Left: Info */}
            <div>
              <AnimateOnScroll>
                <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-6 sm:mb-8">
                  <MapPin size={14} />
                  Office Location
                </span>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white mb-4 sm:mb-6">
                  Based in Latur, serving globally.
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <p className="text-[15px] sm:text-[16px] text-gray-400 leading-relaxed max-w-lg mb-8 sm:mb-10">
                  Our headquarters in Latur, Maharashtra is where strategy meets
                  execution. While we work with brands across India and beyond,
                  this is where the magic happens.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={300}>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FFD400]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={18} className="text-[#FFD400]" />
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-white mb-1">
                        Address
                      </p>
                      <p className="text-[14px] sm:text-[15px] text-gray-400 leading-relaxed">
                        SK Towers, Second Floor, Opposite Kayamkhane Petrol Pump, Ambajogai Road, Latur 413512, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FFD400]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={18} className="text-[#FFD400]" />
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-white mb-1">
                        Business Hours
                      </p>
                      <p className="text-[14px] sm:text-[15px] text-gray-400 leading-relaxed">
                        Mon – Sat: 10:00 AM – 7:00 PM IST
                      </p>
                      <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed">
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FFD400]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone size={18} className="text-[#FFD400]" />
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-white mb-1">
                        Direct Line
                      </p>
                      <a
                        href={`tel:+91${BRAND.phone}`}
                        className="text-[14px] sm:text-[15px] text-gray-400 hover:text-[#FFD400] transition-colors duration-200"
                      >
                        +91 {BRAND.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right: Google Maps Embed */}
            <AnimateOnScroll delay={200}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120476.78987939568!2d76.51!3d18.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83f5e5a2f5d1%3A0x6db0f9e0e5e5e5e5!2sLatur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vibe Create Media Office - Latur, Maharashtra"
                    className="w-full aspect-[4/3]"
                  />
                </div>

                {/* Decorative accent */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-[#FFD400]/10 rounded-2xl -z-10" />
                <div className="absolute -top-3 -left-3 w-16 h-16 bg-[#FFD400]/5 rounded-2xl -z-10" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── CTA Buttons ── */}
      <section className="bg-gray-900 pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white mb-4 sm:mb-6">
                Ready to make the first move?
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <p className="text-[15px] sm:text-[17px] text-gray-400 leading-relaxed max-w-xl mx-auto mb-10 sm:mb-12">
                Start your project with a detailed brief, or hop on WhatsApp for
                a quick chat. Either way, we&apos;re ready to help you grow no
                commitment until you&apos;re convinced.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleStartProject}
                  className="group inline-flex items-center bg-[#FFD400] hover:bg-[#E6BE00] text-gray-900 text-[14px] sm:text-[15px] font-semibold rounded-full pl-6 sm:pl-7 pr-2 py-2.5 sm:py-3 transition-colors duration-300"
                >
                  <span className="whitespace-nowrap">Start Your Project</span>
                  <span className="ml-2 w-8 h-8 sm:w-9 sm:h-9 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                    <ArrowRight size={16} className="text-[#FFD400]" />
                  </span>
                </button>

                <a
                  href={`${BRAND.whatsapp}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#FFD400]/30 text-white text-[14px] sm:text-[15px] font-semibold rounded-full pl-6 sm:pl-7 pr-2 py-2.5 sm:py-3 transition-all duration-300"
                >
                  <span className="whitespace-nowrap">Chat on WhatsApp</span>
                  <span className="ml-2 w-8 h-8 sm:w-9 sm:h-9 bg-[#FFD400] rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  </span>
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="bg-white pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-600 mb-6 sm:mb-8">
                Common Questions
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4 sm:mb-6">
                Quick answers before you reach out.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed mb-10 sm:mb-14">
                These are the questions we hear most. If yours isn&apos;t
                here, don&apos;t hesitate to reach out we&apos;re happy to
                help.
              </p>
            </AnimateOnScroll>

            <div className="space-y-3 sm:space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <AnimateOnScroll key={item.question} delay={index * 80}>
                  <div className="bg-gray-50 hover:bg-gray-100 rounded-2xl transition-colors duration-300 overflow-hidden">
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="w-full flex items-center justify-between p-6 sm:p-7 text-left"
                    >
                      <h3 className="text-[15px] sm:text-[17px] font-semibold text-gray-900 pr-4">
                        {item.question}
                      </h3>
                      <ChevronDown
                        size={20}
                        className={`text-gray-400 shrink-0 transition-transform duration-300 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === index
                          ? "max-h-60 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="px-6 sm:px-7 pb-6 sm:pb-7 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Work With Us ── */}
      <section className="bg-gray-900 pt-20 sm:pt-28 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,212,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,212,0,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-6 sm:mb-8">
              Why Us
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white max-w-3xl mb-4 sm:mb-6">
              Why brands choose to work with us.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-[15px] sm:text-[16px] text-gray-400 leading-relaxed max-w-2xl mb-12 sm:mb-16">
              We don&apos;t just talk a big game we back it up with commitments
              that actually protect your interests. Here&apos;s what you get when
              you work with Vibe Create Media.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {WHY_WORK_WITH_US.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimateOnScroll key={item.title} delay={index * 120}>
                  <div className="group bg-white/[0.05] hover:bg-[#FFD400] border border-white/10 hover:border-[#FFD400] rounded-2xl p-6 sm:p-8 transition-all duration-500 h-full hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFD400]/10">
                    <div className="w-12 h-12 rounded-xl bg-[#FFD400]/10 group-hover:bg-black/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110">
                      <Icon size={22} className="text-[#FFD400] group-hover:text-gray-900 transition-colors duration-300" />
                    </div>

                    <p className="text-[17px] sm:text-[19px] font-semibold text-white group-hover:text-gray-900 mb-3 transition-colors duration-300">
                      {item.title}
                    </p>

                    <p className="text-[14px] sm:text-[15px] text-gray-400 group-hover:text-gray-700 leading-relaxed transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA Section ── */}
      <section className="bg-black pt-20 sm:pt-28 pb-20 sm:pb-28 relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FFD400]/[0.04] blur-[120px]" />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 mb-6 sm:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
                Let&apos;s Talk
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-[clamp(1.75rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white mb-4 sm:mb-6">
                Ready to grow?
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] sm:text-[17px] text-gray-400 leading-relaxed max-w-xl mx-auto mb-10 sm:mb-12">
                Every great partnership starts with a single conversation. Tell
                us about your project, or just say hi we&apos;ll take it from
                there.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleStartProject}
                  className="group inline-flex items-center bg-[#FFD400] hover:bg-[#E6BE00] text-gray-900 text-[14px] sm:text-[15px] font-semibold rounded-full pl-6 sm:pl-7 pr-2 py-2.5 sm:py-3 transition-colors duration-300"
                >
                  <span className="whitespace-nowrap">Start a Project</span>
                  <span className="ml-2 w-8 h-8 sm:w-9 sm:h-9 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                    <ArrowRight size={16} className="text-[#FFD400]" />
                  </span>
                </button>

                <a
                  href={`${BRAND.whatsapp}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#FFD400]/30 text-white text-[14px] sm:text-[15px] font-semibold rounded-full pl-6 sm:pl-7 pr-2 py-2.5 sm:py-3 transition-all duration-300"
                >
                  <span className="whitespace-nowrap">WhatsApp Us</span>
                  <span className="ml-2 w-8 h-8 sm:w-9 sm:h-9 bg-[#FFD400] rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  </span>
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
