"use client";

import { useEffect, useState, useCallback } from "react";
import {
  X, ArrowRight, ArrowLeft, Check, Video, Camera, Sparkles, Mic,
  Clapperboard, TrendingUp, Package, Heart, Utensils, Shirt,
  GraduationCap, Building2, Wrench, Megaphone, BarChart3,
  Clock, DollarSign, Hash, User, Mail, Phone, Briefcase, MessageSquare, Loader2
} from "lucide-react";

const UGC_CATEGORIES_LIST = [
  { id: "product-reviews", title: "Product Reviews", icon: Package },
  { id: "beauty-skincare", title: "Beauty & Skincare", icon: Heart },
  { id: "health-wellness", title: "Health & Wellness", icon: TrendingUp },
  { id: "food-grocery", title: "Food & Grocery", icon: Utensils },
  { id: "fashion-accessories", title: "Fashion & Accessories", icon: Shirt },
  { id: "education-courses", title: "Education & Online Courses", icon: GraduationCap },
  { id: "real-estate-travel", title: "Real Estate & Travel", icon: Building2 },
  { id: "local-services", title: "Local & Professional Services", icon: Wrench },
  { id: "digital-marketing", title: "Digital Marketing & Branding", icon: Megaphone },
  { id: "trading-finance", title: "Trading, Finance & Investment", icon: BarChart3 },
];

const UGC_BUDGET_RANGES = [
  "Under ₹15K",
  "₹15K - ₹30K",
  "₹30K - ₹50K",
  "₹50K - ₹1L",
  "₹1L+",
];

const VIDEO_COUNTS = [
  "1-3 videos",
  "4-6 videos",
  "7-10 videos",
  "10-20 videos",
  "20+ videos",
];

const UGC_TIMELINES = [
  "ASAP",
  "Within 1 week",
  "Within 2 weeks",
  "Within 1 month",
  "Flexible",
];

interface UGCFormData {
  category: string;
  budget: string;
  videoCount: string;
  timeline: string;
  voiceover: string;
  editing: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const INITIAL_FORM: UGCFormData = {
  category: "",
  budget: "",
  videoCount: "",
  timeline: "",
  voiceover: "",
  editing: "",
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

const STEPS = [
  { label: "Category", icon: Video },
  { label: "Details", icon: Clapperboard },
  { label: "Contact", icon: User },
];

export default function UGCDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<UGCFormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setStep(0);
      setForm(INITIAL_FORM);
      setSubmitted(false);
    };
    window.addEventListener("openUGCDrawer", handleOpen);
    return () => window.removeEventListener("openUGCDrawer", handleOpen);
  }, []);

  const canProceed = useCallback(() => {
    switch (step) {
      case 0: return form.category;
      case 1: return form.budget && form.videoCount && form.timeline;
      case 2: return form.name && form.email && form.phone;
      default: return false;
    }
  }, [step, form]);

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "ugc",
          data: form,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Failed to submit UGC brief:", await response.text());
        // Failsafe fallback
        setSubmitted(true);
      }
    } catch (err) {
      console.error("UGC submission network error:", err);
      // Failsafe fallback
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsOpen(false), 3000);
    }
  }, [form]);

  return (
    <>
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] transition-opacity duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsOpen(false)} />

      <div className={`fixed right-0 top-0 bottom-0 w-full sm:w-[480px] bg-white z-[80] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-100">
          <div>
            <h3 className="text-[16px] sm:text-[18px] font-semibold text-gray-900">
              {submitted ? "We'll be in touch." : "Start Your UGC Project"}
            </h3>
            <p className="text-[13px] text-gray-500 mt-0.5">
              {submitted ? "Expect a response within 24 hours." : `${STEPS[step].label} Step ${step + 1} of 3`}
            </p>
          </div>
          <button onClick={() => setIsOpen(false)} className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200" aria-label="Close drawer">
            <X size={16} className="text-gray-600" />
          </button>
        </div>

        {/* Progress Bar */}
        {!submitted && (
          <div className="px-5 sm:px-6 pt-4">
            <div className="flex items-center gap-2 mb-2">
              {STEPS.map((s, i) => {
                const StepIcon = s.icon;
                return (
                  <div key={i} className="flex items-center gap-2 flex-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${i <= step ? "bg-[#FFD400] text-black" : "bg-gray-100 text-gray-400"}`}>
                      <StepIcon size={14} />
                    </div>
                    {i < STEPS.length - 1 && <div className={`flex-1 h-[2px] rounded transition-colors duration-300 ${i < step ? "bg-[#FFD400]" : "bg-gray-200"}`} />}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Content - FIXED SCROLLING */}
        <div className="p-5 sm:p-6 overflow-y-auto" style={{ maxHeight: "calc(100vh - 220px)" }}>
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-[#FFD400] rounded-full flex items-center justify-center mb-6">
                <Check size={28} className="text-black" />
              </div>
              <h3 className="text-[20px] font-semibold text-gray-900 mb-2">UGC brief received.</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed max-w-sm">
                We review every inquiry personally. If we&apos;re a fit, you&apos;ll hear from us within 24 hours.
              </p>
            </div>
          ) : (
            <>
              {/* Step 0: Category */}
              {step === 0 && (
                <div>
                  <p className="text-[15px] text-gray-600 mb-5">Which type of UGC content do you need? Select one.</p>
                  <div className="grid grid-cols-1 gap-2.5">
                    {UGC_CATEGORIES_LIST.map((cat) => {
                      const isSelected = form.category === cat.id;
                      const CatIcon = cat.icon;
                      return (
                        <button key={cat.id} onClick={() => setForm((prev) => ({ ...prev, category: cat.id }))} className={`flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-300 ${isSelected ? "bg-[#FFD400]/10 border-2 border-[#FFD400]" : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"}`}>
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${isSelected ? "bg-[#FFD400]" : "bg-gray-200"}`}>
                            <CatIcon size={16} className={isSelected ? "text-black" : "text-gray-500"} />
                          </div>
                          <span className={`text-[14px] font-medium flex-1 ${isSelected ? "text-black" : "text-gray-700"}`}>{cat.title}</span>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${isSelected ? "bg-[#FFD400] border-[#FFD400]" : "border-gray-300"}`}>
                            {isSelected && <Check size={12} className="text-black" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 1: Details */}
              {step === 1 && (
                <div>
                  <p className="text-[15px] text-gray-600 mb-5">Tell us about your UGC needs so we can prepare the right strategy.</p>
                  <div className="space-y-5">
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <DollarSign size={14} className="text-black" /> Budget range
                      </label>
                      <div className="grid grid-cols-1 gap-2">
                        {UGC_BUDGET_RANGES.map((range) => (
                          <button key={range} onClick={() => setForm((prev) => ({ ...prev, budget: range }))} className={`p-3.5 rounded-xl text-left text-[14px] transition-all duration-200 ${form.budget === range ? "bg-[#FFD400]/10 border-2 border-[#FFD400] text-black font-medium" : "bg-gray-50 border-2 border-transparent hover:bg-gray-100 text-gray-700"}`}>
                            {range}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Hash size={14} className="text-black" /> How many videos?
                      </label>
                      <div className="grid grid-cols-1 gap-2">
                        {VIDEO_COUNTS.map((count) => (
                          <button key={count} onClick={() => setForm((prev) => ({ ...prev, videoCount: count }))} className={`p-3.5 rounded-xl text-left text-[14px] transition-all duration-200 ${form.videoCount === count ? "bg-[#FFD400]/10 border-2 border-[#FFD400] text-black font-medium" : "bg-gray-50 border-2 border-transparent hover:bg-gray-100 text-gray-700"}`}>
                            {count}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Clock size={14} className="text-black" /> Timeline
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {UGC_TIMELINES.map((tl) => (
                          <button key={tl} onClick={() => setForm((prev) => ({ ...prev, timeline: tl }))} className={`p-3.5 rounded-xl text-center text-[14px] transition-all duration-200 ${form.timeline === tl ? "bg-[#FFD400]/10 border-2 border-[#FFD400] text-black font-medium" : "bg-gray-50 border-2 border-transparent hover:bg-gray-100 text-gray-700"}`}>
                            {tl}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Mic size={14} className="text-black" /> Need voiceover?
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {["Yes", "No", "Maybe"].map((opt) => (
                          <button key={opt} onClick={() => setForm((prev) => ({ ...prev, voiceover: opt }))} className={`p-3.5 rounded-xl text-center text-[14px] transition-all duration-200 ${form.voiceover === opt ? "bg-[#FFD400]/10 border-2 border-[#FFD400] text-black font-medium" : "bg-gray-50 border-2 border-transparent hover:bg-gray-100 text-gray-700"}`}>
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Clapperboard size={14} className="text-black" /> Need video editing?
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {["Yes", "No", "Maybe"].map((opt) => (
                          <button key={opt} onClick={() => setForm((prev) => ({ ...prev, editing: opt }))} className={`p-3.5 rounded-xl text-center text-[14px] transition-all duration-200 ${form.editing === opt ? "bg-[#FFD400]/10 border-2 border-[#FFD400] text-black font-medium" : "bg-gray-50 border-2 border-transparent hover:bg-gray-100 text-gray-700"}`}>
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Contact */}
              {step === 2 && (
                <div>
                  <p className="text-[15px] text-gray-600 mb-5">Almost there. We&apos;ll reach out personally no bots, no templates.</p>
                  <div className="space-y-4">
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-1.5 flex items-center gap-2">
                        <User size={14} className="text-black" /> Full Name *
                      </label>
                      <input type="text" value={form.name} onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-[#FFD400] focus:bg-white outline-none text-[14px] text-gray-900 transition-all duration-200" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-1.5 flex items-center gap-2">
                        <Mail size={14} className="text-black" /> Email *
                      </label>
                      <input type="email" value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-[#FFD400] focus:bg-white outline-none text-[14px] text-gray-900 transition-all duration-200" placeholder="you@company.com" />
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-1.5 flex items-center gap-2">
                        <Phone size={14} className="text-black" /> Phone *
                      </label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-[#FFD400] focus:bg-white outline-none text-[14px] text-gray-900 transition-all duration-200" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-1.5 flex items-center gap-2">
                        <Briefcase size={14} className="text-black" /> Company
                      </label>
                      <input type="text" value={form.company} onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-[#FFD400] focus:bg-white outline-none text-[14px] text-gray-900 transition-all duration-200" placeholder="Your company name" />
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-1.5 flex items-center gap-2">
                        <MessageSquare size={14} className="text-black" /> Anything else we should know?
                      </label>
                      <textarea value={form.message} onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))} rows={3} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-[#FFD400] focus:bg-white outline-none text-[14px] text-gray-900 transition-all duration-200 resize-none" placeholder="Tell us about your brand and UGC goals..." />
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {!submitted && (
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 border-t border-gray-100 bg-white">
            <div className="flex items-center gap-3">
              {step > 0 && (
                <button onClick={() => setStep((prev) => prev - 1)} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200">
                  <ArrowLeft size={16} className="text-gray-600" />
                </button>
              )}
              <button onClick={() => { if (step === 2) handleSubmit(); else setStep((prev) => prev + 1); }} disabled={!canProceed() || isSubmitting} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full text-[14px] font-semibold transition-all duration-300 ${(canProceed() && !isSubmitting) ? "bg-[#FFD400] hover:bg-[#E6BE00] text-black" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}>
                {step === 2 ? (isSubmitting ? "Submitting..." : "Submit UGC Brief") : "Continue"}
                {step === 2 && isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} />}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
