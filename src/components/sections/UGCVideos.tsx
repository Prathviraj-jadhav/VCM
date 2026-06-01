"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Play, Volume2, VolumeX, ArrowRight, Star, CheckCircle2, Package, Heart, TrendingUp, Utensils, Shirt } from "lucide-react";
import { UGC_VIDEOS, BRAND } from "@/lib/data";
import { usePage } from "@/lib/page-context";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";

function VideoCard({
  video,
  index,
  isVisible,
}: {
  video: (typeof UGC_VIDEOS)[number];
  index: number;
  isVisible: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = useCallback(() => {
    const vid = videoRef.current;
    if (!vid) return;

    if (isPlaying) {
      vid.pause();
      setIsPlaying(false);
    } else {
      vid.muted = isMuted;
      vid.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [isPlaying, isMuted]);

  const toggleMute = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      const vid = videoRef.current;
      if (!vid) return;
      vid.muted = !isMuted;
      setIsMuted(!isMuted);
    },
    [isMuted]
  );

  return (
    <div
      className={`relative group rounded-2xl overflow-hidden bg-gray-900 aspect-[9/16] sm:aspect-[9/14] cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={video.videoUrl}
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Overlay when not playing */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-[#FFD400]/90 group-hover:border-[#FFD400] transition-all duration-300">
            <Play size={24} className="text-white group-hover:text-gray-900 ml-1" />
          </div>
        </div>
      )}

      {/* Video info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <span className="inline-block text-[10px] sm:text-[11px] font-semibold bg-[#FFD400] text-gray-900 px-2 py-0.5 rounded mb-2">
          {video.category}
        </span>
        <p className="text-white text-[14px] sm:text-[15px] font-medium">
          {video.title}
        </p>
      </div>

      {/* Mute/Unmute button */}
      {isPlaying && (
        <button
          onClick={toggleMute}
          className="absolute top-3 right-3 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>
      )}
    </div>
  );
}

const CATEGORY_BUTTONS = [
  { icon: Package, label: "Product Reviews" },
  { icon: Heart, label: "Beauty & Skincare" },
  { icon: TrendingUp, label: "Health & Wellness" },
  { icon: Utensils, label: "Food & Grocery" },
  { icon: Shirt, label: "Fashion" },
];

export default function UGCVideos() {
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
      id="ugc-videos"
      ref={sectionRef}
      className="bg-black pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <div
              className={`flex items-center gap-3 mb-6 sm:mb-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FFD400] text-gray-900 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
                <Star size={12} />
              </span>
              <span className="text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-white/80">
                UGC Video Lab
              </span>
            </div>
            <h2
              className={`text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-white transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Content that sells
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              without looking like an ad.
            </h2>
          </div>
          <p
            className={`text-[14px] sm:text-[15px] text-white/50 max-w-md leading-relaxed transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            UGC videos outperform traditional ads by 4x. Click to play each
            one is crafted to stop the scroll and start a conversation.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {UGC_VIDEOS.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* UGC Categories Preview */}
        <div
          className={`mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {CATEGORY_BUTTONS.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <button
                key={cat.label}
                onClick={() => navigate("ugc")}
                className="flex items-center gap-2 bg-white/5 hover:bg-[#FFD400]/10 border border-white/5 hover:border-[#FFD400]/30 rounded-full px-4 py-2.5 transition-all duration-300"
              >
                <CatIcon className="w-3.5 h-3.5 text-[#FFD400]" />
                <span className="text-[12px] sm:text-[13px] text-white/70 hover:text-white font-medium">
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-8 sm:mt-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-[14px] sm:text-[15px] text-white/40 mb-4">
            Want UGC videos that actually convert?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-sm mx-auto sm:max-w-none">
            <button
              onClick={() => navigate("ugc")}
              className="group inline-flex items-center justify-center bg-[#FFD400] hover:bg-[#E6BE00] text-black text-[13px] sm:text-[14px] font-semibold rounded-full pl-6 pr-2 py-2.5 transition-colors duration-300 w-full sm:w-auto"
            >
              <span>Explore UGC Portfolio</span>
              <span className="w-6 h-6 bg-black rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45 shrink-0 ml-2">
                <ArrowRight size={12} className="text-[#FFD400]" />
              </span>
            </button>
            <a
              href={`https://wa.me/91${BRAND.phone}?text=${encodeURIComponent("Hi! I need UGC videos for my brand. Can we discuss?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-[#FFD400]/30 text-white text-[13px] sm:text-[14px] font-medium rounded-full px-6 py-2.5 transition-colors duration-300 w-full sm:w-auto"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>Book a UGC Strategy Call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
