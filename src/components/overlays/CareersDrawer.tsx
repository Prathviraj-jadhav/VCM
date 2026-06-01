"use client";

import { useEffect, useState, useCallback } from "react";
import {
  X, ArrowRight, ArrowLeft, Check, Briefcase, BookOpen, Target, Shield,
  Clock, User, Mail, Phone, Link2, MessageSquare, Zap,
  TrendingUp, Palette, Video, Share2, Globe, Film, PenTool
} from "lucide-react";

const POSITIONS = [
  { id: "growth-strategist", title: "Growth Strategist", icon: TrendingUp },
  { id: "content-writer", title: "Content Writer", icon: PenTool },
  { id: "video-editor", title: "Video Editor", icon: Film },
  { id: "social-media-executive", title: "Social Media Executive", icon: Share2 },
  { id: "ui-ux-designer", title: "UI/UX Designer", icon: Palette },
  { id: "other", title: "Other / General Application", icon: Briefcase },
];

const EXPERIENCE_LEVELS = [
  "0-1 years (Fresher)",
  "1-3 years (Junior)",
  "3-5 years (Mid-level)",
  "5-8 years (Senior)",
  "8+ years (Lead)",
];

const NOTICE_PERIODS = [
  "Immediate",
  "15 days",
  "1 month",
  "2 months",
  "3+ months",
];

interface CareersFormData {
  position: string;
  experience: string;
  currentRole: string;
  portfolio: string;
  noticePeriod: string;
  name: string;
  email: string;
  phone: string;
  coverNote: string;
}

const INITIAL_FORM: CareersFormData = {
  position: "",
  experience: "",
  currentRole: "",
  portfolio: "",
  noticePeriod: "",
  name: "",
  email: "",
  phone: "",
  coverNote: "",
};

const STEPS = [
  { label: "Position", icon: Briefcase },
  { label: "Experience", icon: Target },
  { label: "Contact", icon: User },
];

export default function CareersDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<CareersFormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      setIsOpen(true);
      setStep(0);
      setForm(INITIAL_FORM);
      setSubmitted(false);
      // Pre-select position if passed in event detail
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.position) {
        setForm((prev) => ({ ...prev, position: customEvent.detail.position }));
      }
    };
    window.addEventListener("openCareersDrawer", handleOpen);
    return () => window.removeEventListener("openCareersDrawer", handleOpen);
  }, []);

  const canProceed = useCallback(() => {
    switch (step) {
      case 0: return form.position;
      case 1: return form.experience && form.currentRole;
      case 2: return form.name && form.email && form.phone;
      default: return false;
    }
  }, [step, form]);

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
    
    const subject = encodeURIComponent(`Job Application: ${form.name} - ${form.position}`);
    const body = encodeURIComponent(
`Hi Vibe Create Media Team,

I'm applying for a role with Vibe Create Media. Here are my details:

--- ROLE DETAILS ---
* Position Applied For: ${form.position}
* Experience Level: ${form.experience}
* Current/Last Role: ${form.currentRole}
* Notice Period: ${form.noticePeriod}

--- CONTACT DETAILS ---
* Name: ${form.name}
* Email: ${form.email}
* Phone: ${form.phone}
* Portfolio/LinkedIn URL: ${form.portfolio || "N/A"}

--- COVER NOTE ---
${form.coverNote || "None"}

Thank you,
${form.name}`
    );
    
    window.location.href = `mailto:growth@vibecreatemedia.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => setIsOpen(false), 3000);
  }, [form]);

  return (
    <>
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] transition-opacity duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsOpen(false)} />

      <div className={`fixed right-0 top-0 bottom-0 w-full sm:w-[480px] bg-white z-[80] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-100">
          <div>
            <h3 className="text-[16px] sm:text-[18px] font-semibold text-gray-900">
              {submitted ? "Application Sent!" : "Join Vibe Create Media"}
            </h3>
            <p className="text-[13px] text-gray-500 mt-0.5">
              {submitted ? "We'll review and get back to you." : `${STEPS[step].label} Step ${step + 1} of 3`}
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
              <h3 className="text-[20px] font-semibold text-gray-900 mb-2">Application received.</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed max-w-sm">
                We review every application personally. If there&apos;s a fit, you&apos;ll hear from us within 48 hours.
              </p>
            </div>
          ) : (
            <>
              {/* Step 0: Position */}
              {step === 0 && (
                <div>
                  <p className="text-[15px] text-gray-600 mb-5">Which role are you applying for?</p>
                  <div className="grid grid-cols-1 gap-2.5">
                    {POSITIONS.map((pos) => {
                      const isSelected = form.position === pos.id;
                      const PosIcon = pos.icon;
                      return (
                        <button key={pos.id} onClick={() => setForm((prev) => ({ ...prev, position: pos.id }))} className={`flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-300 ${isSelected ? "bg-[#FFD400]/10 border-2 border-[#FFD400]" : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"}`}>
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${isSelected ? "bg-[#FFD400]" : "bg-gray-200"}`}>
                            <PosIcon size={16} className={isSelected ? "text-black" : "text-gray-500"} />
                          </div>
                          <span className={`text-[14px] font-medium flex-1 ${isSelected ? "text-black" : "text-gray-700"}`}>{pos.title}</span>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${isSelected ? "bg-[#FFD400] border-[#FFD400]" : "border-gray-300"}`}>
                            {isSelected && <Check size={12} className="text-black" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 1: Experience */}
              {step === 1 && (
                <div>
                  <p className="text-[15px] text-gray-600 mb-5">Tell us about your professional background.</p>
                  <div className="space-y-5">
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <BookOpen size={14} className="text-black" /> Years of experience
                      </label>
                      <div className="grid grid-cols-1 gap-2">
                        {EXPERIENCE_LEVELS.map((level) => (
                          <button key={level} onClick={() => setForm((prev) => ({ ...prev, experience: level }))} className={`p-3.5 rounded-xl text-left text-[14px] transition-all duration-200 ${form.experience === level ? "bg-[#FFD400]/10 border-2 border-[#FFD400] text-black font-medium" : "bg-gray-50 border-2 border-transparent hover:bg-gray-100 text-gray-700"}`}>
                            {level}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-1.5 flex items-center gap-2">
                        <Briefcase size={14} className="text-black" /> Current / Last Role *
                      </label>
                      <input type="text" value={form.currentRole} onChange={(e) => setForm((prev) => ({ ...prev, currentRole: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-[#FFD400] focus:bg-white outline-none text-[14px] text-gray-900 transition-all duration-200" placeholder="e.g. Social Media Manager at XYZ" />
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-1.5 flex items-center gap-2">
                        <Link2 size={14} className="text-black" /> Portfolio / LinkedIn URL
                      </label>
                      <input type="url" value={form.portfolio} onChange={(e) => setForm((prev) => ({ ...prev, portfolio: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-[#FFD400] focus:bg-white outline-none text-[14px] text-gray-900 transition-all duration-200" placeholder="https://linkedin.com/in/yourname" />
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Clock size={14} className="text-black" /> Notice period
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {NOTICE_PERIODS.map((period) => (
                          <button key={period} onClick={() => setForm((prev) => ({ ...prev, noticePeriod: period }))} className={`p-3.5 rounded-xl text-center text-[14px] transition-all duration-200 ${form.noticePeriod === period ? "bg-[#FFD400]/10 border-2 border-[#FFD400] text-black font-medium" : "bg-gray-50 border-2 border-transparent hover:bg-gray-100 text-gray-700"}`}>
                            {period}
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
                  <p className="text-[15px] text-gray-600 mb-5">Last step. Let us know how to reach you.</p>
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
                      <input type="email" value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-[#FFD400] focus:bg-white outline-none text-[14px] text-gray-900 transition-all duration-200" placeholder="you@email.com" />
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-1.5 flex items-center gap-2">
                        <Phone size={14} className="text-black" /> Phone *
                      </label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-[#FFD400] focus:bg-white outline-none text-[14px] text-gray-900 transition-all duration-200" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-1.5 flex items-center gap-2">
                        <MessageSquare size={14} className="text-black" /> Cover note
                      </label>
                      <textarea value={form.coverNote} onChange={(e) => setForm((prev) => ({ ...prev, coverNote: e.target.value }))} rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-[#FFD400] focus:bg-white outline-none text-[14px] text-gray-900 transition-all duration-200 resize-none" placeholder="Why Vibe Create Media? What makes you the right fit?" />
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
              <button onClick={() => { if (step === 2) handleSubmit(); else setStep((prev) => prev + 1); }} disabled={!canProceed()} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full text-[14px] font-semibold transition-all duration-300 ${canProceed() ? "bg-[#FFD400] hover:bg-[#E6BE00] text-black" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}>
                {step === 2 ? "Submit Application" : "Continue"}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
