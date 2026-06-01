"use client";

import { useEffect, useState, useCallback } from "react";
import { X, ArrowRight, ArrowLeft, Check, Clock, User, Briefcase, Target, TrendingUp, Palette, Video, FileText, Share2, Globe, Handshake, Film, Zap, Building, DollarSign, Calendar, Phone, Mail, MessageSquare } from "lucide-react";
import { FORM_SERVICES, FORM_BUDGET_RANGES, FORM_TIMELINES, FORM_CALL_TIMES } from "@/lib/data";

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  "Performance Marketing": TrendingUp,
  "Branding & Identity": Palette,
  "UGC Video Creation": Video,
  "Content Marketing": FileText,
  "Social Media Marketing": Share2,
  "Website Development": Globe,
  "Business Development": Handshake,
  "Video Editing & Production": Film,
  "Meta Ads Creatives": Target,
};

interface FormData {
  services: string[];
  businessStage: string;
  biggestChallenge: string;
  budget: string;
  timeline: string;
  callTime: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  services: [],
  businessStage: "",
  biggestChallenge: "",
  budget: "",
  timeline: "",
  callTime: "",
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

const STEPS = [
  { label: "Services", icon: Briefcase },
  { label: "Qualify", icon: Zap },
  { label: "Schedule", icon: Clock },
  { label: "Details", icon: User },
];

export default function ProjectDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setStep(0);
      setForm(INITIAL_FORM);
      setSubmitted(false);
    };
    window.addEventListener("openProjectDrawer", handleOpen);
    return () => window.removeEventListener("openProjectDrawer", handleOpen);
  }, []);

  const toggleService = useCallback((service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  }, []);

  const canProceed = useCallback(() => {
    switch (step) {
      case 0: return form.services.length > 0;
      case 1: return form.businessStage && form.biggestChallenge;
      case 2: return form.budget && form.timeline && form.callTime;
      case 3: return form.name && form.email && form.phone;
      default: return false;
    }
  }, [step, form]);

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
    
    const subject = encodeURIComponent(`New Project Inquiry: ${form.name} (${form.company || "N/A"})`);
    const body = encodeURIComponent(
`Hi Vibe Create Media Team,

I've submitted a project inquiry through the website drawer. Here are my details:

--- PROJECT SUMMARY ---
* Services Needed: ${form.services.join(", ")}
* Business Stage: ${form.businessStage}
* Biggest Challenge: ${form.biggestChallenge}
* Monthly Budget: ${form.budget}
* Timeline: ${form.timeline}
* Preferred Call Time: ${form.callTime}

--- CONTACT DETAILS ---
* Name: ${form.name}
* Email: ${form.email}
* Phone: ${form.phone}
* Company: ${form.company || "N/A"}

--- ADDITIONAL NOTES ---
${form.message || "None"}

Please get back to me. Thank you!`
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
              {submitted ? "We'll be in touch." : "Start Your Project"}
            </h3>
            <p className="text-[13px] text-gray-500 mt-0.5">
              {submitted ? "Expect a response within 24 hours." : `${STEPS[step].label} Step ${step + 1} of 4`}
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

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto" style={{ maxHeight: "calc(100vh - 220px)" }}>
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-[#FFD400] rounded-full flex items-center justify-center mb-6">
                <Check size={28} className="text-black" />
              </div>
              <h3 className="text-[20px] font-semibold text-gray-900 mb-2">Project brief received.</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed max-w-sm">
                We review every inquiry personally. If we&apos;re a fit, you&apos;ll hear from us within 24 hours.
              </p>
            </div>
          ) : (
            <>
              {/* Step 0: Services */}
              {step === 0 && (
                <div>
                  <p className="text-[15px] text-gray-600 mb-5">What do you need help with? Select all that apply.</p>
                  <div className="grid grid-cols-1 gap-2.5">
                    {FORM_SERVICES.map((service) => {
                      const isSelected = form.services.includes(service);
                      const SvcIcon = SERVICE_ICONS[service] || Zap;
                      return (
                        <button key={service} onClick={() => toggleService(service)} className={`flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-300 ${isSelected ? "bg-[#FFD400]/10 border-2 border-[#FFD400]" : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"}`}>
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${isSelected ? "bg-[#FFD400]" : "bg-gray-200"}`}>
                            <SvcIcon size={16} className={isSelected ? "text-black" : "text-gray-500"} />
                          </div>
                          <span className={`text-[14px] font-medium flex-1 ${isSelected ? "text-black" : "text-gray-700"}`}>{service}</span>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${isSelected ? "bg-[#FFD400] border-[#FFD400]" : "border-gray-300"}`}>
                            {isSelected && <Check size={12} className="text-black" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 1: Qualify */}
              {step === 1 && (
                <div>
                  <p className="text-[15px] text-gray-600 mb-5">Help us understand where you are so we can meet you there.</p>
                  <div className="space-y-5">
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Building size={14} className="text-black" /> What stage is your business at?
                      </label>
                      <div className="grid grid-cols-1 gap-2">
                        {["Pre-launch Still building", "Early stage Just launched", "Growing Need to scale faster", "Established Optimizing for dominance"].map((option) => (
                          <button key={option} onClick={() => setForm((prev) => ({ ...prev, businessStage: option }))} className={`p-3.5 rounded-xl text-left text-[14px] transition-all duration-200 ${form.businessStage === option ? "bg-[#FFD400]/10 border-2 border-[#FFD400] text-black font-medium" : "bg-gray-50 border-2 border-transparent hover:bg-gray-100 text-gray-700"}`}>
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Target size={14} className="text-black" /> What&apos;s your biggest challenge right now?
                      </label>
                      <div className="grid grid-cols-1 gap-2">
                        {["Getting more qualified leads", "Building brand awareness & trust", "Converting traffic into customers", "Scaling existing campaigns profitably", "Something else entirely"].map((option) => (
                          <button key={option} onClick={() => setForm((prev) => ({ ...prev, biggestChallenge: option }))} className={`p-3.5 rounded-xl text-left text-[14px] transition-all duration-200 ${form.biggestChallenge === option ? "bg-[#FFD400]/10 border-2 border-[#FFD400] text-black font-medium" : "bg-gray-50 border-2 border-transparent hover:bg-gray-100 text-gray-700"}`}>
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Schedule & Budget */}
              {step === 2 && (
                <div>
                  <p className="text-[15px] text-gray-600 mb-5">Let&apos;s align on expectations for a productive conversation.</p>
                  <div className="space-y-5">
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <DollarSign size={14} className="text-black" /> Monthly budget range
                      </label>
                      <div className="grid grid-cols-1 gap-2">
                        {FORM_BUDGET_RANGES.map((range) => (
                          <button key={range} onClick={() => setForm((prev) => ({ ...prev, budget: range }))} className={`p-3.5 rounded-xl text-left text-[14px] transition-all duration-200 ${form.budget === range ? "bg-[#FFD400]/10 border-2 border-[#FFD400] text-black font-medium" : "bg-gray-50 border-2 border-transparent hover:bg-gray-100 text-gray-700"}`}>
                            {range}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Calendar size={14} className="text-black" /> When do you want to start?
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {FORM_TIMELINES.map((tl) => (
                          <button key={tl} onClick={() => setForm((prev) => ({ ...prev, timeline: tl }))} className={`p-3.5 rounded-xl text-center text-[14px] transition-all duration-200 ${form.timeline === tl ? "bg-[#FFD400]/10 border-2 border-[#FFD400] text-black font-medium" : "bg-gray-50 border-2 border-transparent hover:bg-gray-100 text-gray-700"}`}>
                            {tl}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Phone size={14} className="text-black" /> Preferred call time (IST)
                      </label>
                      <div className="grid grid-cols-1 gap-2">
                        {FORM_CALL_TIMES.map((time) => (
                          <button key={time} onClick={() => setForm((prev) => ({ ...prev, callTime: time }))} className={`p-3.5 rounded-xl text-left text-[14px] transition-all duration-200 ${form.callTime === time ? "bg-[#FFD400]/10 border-2 border-[#FFD400] text-black font-medium" : "bg-gray-50 border-2 border-transparent hover:bg-gray-100 text-gray-700"}`}>
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Details */}
              {step === 3 && (
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
                        <Building size={14} className="text-black" /> Company
                      </label>
                      <input type="text" value={form.company} onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-[#FFD400] focus:bg-white outline-none text-[14px] text-gray-900 transition-all duration-200" placeholder="Your company name" />
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-gray-900 mb-1.5 flex items-center gap-2">
                        <MessageSquare size={14} className="text-black" /> Anything else we should know?
                      </label>
                      <textarea value={form.message} onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))} rows={3} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-[#FFD400] focus:bg-white outline-none text-[14px] text-gray-900 transition-all duration-200 resize-none" placeholder="Tell us about your project, goals, or anything on your mind..." />
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
              <button onClick={() => { if (step === 3) handleSubmit(); else setStep((prev) => prev + 1); }} disabled={!canProceed()} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full text-[14px] font-semibold transition-all duration-300 ${canProceed() ? "bg-[#FFD400] hover:bg-[#E6BE00] text-black" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}>
                {step === 3 ? "Submit Project Brief" : "Continue"}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
