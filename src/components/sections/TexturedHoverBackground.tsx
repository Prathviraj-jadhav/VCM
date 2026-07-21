"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Search,
  QrCode,
  Share2,
  TrendingUp,
  MessageCircle,
  MapPin,
  Rocket,
  Sparkles,
  PenTool,
  Video,
  Mic,
  Scissors,
  Palette,
} from "lucide-react";

interface PopOutItem {
  id: string;
  title: string;
  badge: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  badgeBg: string;
  badgeColor: string;
  // Position as percentages of screen width/height
  posX: number;
  posY: number;
  floatDelay: string;
  isSmall?: boolean;
}

const POP_OUT_ITEMS: PopOutItem[] = [
  // --- Main Pop-outs ---
  {
    id: "seo",
    title: "SEO",
    badge: "Top #1 Rank",
    icon: Search,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    badgeBg: "bg-amber-50",
    badgeColor: "text-amber-700",
    posX: 12,
    posY: 16,
    floatDelay: "0s",
  },
  {
    id: "vibeqr",
    title: "VibeQR",
    badge: "Smart Review QR",
    icon: QrCode,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    badgeBg: "bg-blue-50",
    badgeColor: "text-blue-700",
    posX: 76,
    posY: 16,
    floatDelay: "1.2s",
  },
  {
    id: "smm",
    title: "Social Media Marketing",
    badge: "Viral Reach",
    icon: Share2,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    badgeBg: "bg-pink-50",
    badgeColor: "text-pink-700",
    posX: 10,
    posY: 32,
    floatDelay: "2.1s",
  },
  {
    id: "perf-mktg",
    title: "Performance Marketing",
    badge: "10x ROI",
    icon: TrendingUp,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    badgeBg: "bg-emerald-50",
    badgeColor: "text-emerald-700",
    posX: 78,
    posY: 46,
    floatDelay: "0.7s",
  },
  {
    id: "wa-auto",
    title: "WhatsApp Automation",
    badge: "Auto 24/7",
    icon: MessageCircle,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    badgeBg: "bg-green-50",
    badgeColor: "text-green-700",
    posX: 46,
    posY: 52,
    floatDelay: "1.8s",
  },
  {
    id: "gmb",
    title: "Google My Business Optimization",
    badge: "Local #1 Spot",
    icon: MapPin,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    badgeBg: "bg-red-50",
    badgeColor: "text-red-700",
    posX: 72,
    posY: 76,
    floatDelay: "2.5s",
  },
  {
    id: "grow-brand",
    title: "Grow Your Brand With Us",
    badge: "3x Growth",
    icon: Rocket,
    iconBg: "bg-[#FFD400]",
    iconColor: "text-black",
    badgeBg: "bg-[#FFD400]/20",
    badgeColor: "text-black font-bold",
    posX: 46,
    posY: 12,
    floatDelay: "1.5s",
  },

  // --- 5 New Small Pop-outs in between ---
  {
    id: "content-creation",
    title: "Content Creation",
    badge: "Creative",
    icon: PenTool,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    badgeBg: "bg-purple-50",
    badgeColor: "text-purple-700",
    posX: 28,
    posY: 24,
    floatDelay: "0.4s",
    isSmall: true,
  },
  {
    id: "ugc-videos",
    title: "UGC Videos",
    badge: "High CTR",
    icon: Video,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    badgeBg: "bg-rose-50",
    badgeColor: "text-rose-700",
    posX: 66,
    posY: 30,
    floatDelay: "1.6s",
    isSmall: true,
  },
  {
    id: "podcast",
    title: "Podcast",
    badge: "Studio 4K",
    icon: Mic,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    badgeBg: "bg-indigo-50",
    badgeColor: "text-indigo-700",
    posX: 36,
    posY: 38,
    floatDelay: "2.3s",
    isSmall: true,
  },
  {
    id: "video-editing",
    title: "Video Editing",
    badge: "Pro Cuts",
    icon: Scissors,
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    badgeBg: "bg-cyan-50",
    badgeColor: "text-cyan-700",
    posX: 68,
    posY: 60,
    floatDelay: "0.9s",
    isSmall: true,
  },
  {
    id: "graphics",
    title: "Graphics",
    badge: "Brand Design",
    icon: Palette,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    badgeBg: "bg-orange-50",
    badgeColor: "text-orange-700",
    posX: 34,
    posY: 78,
    floatDelay: "1.1s",
    isSmall: true,
  },
];

interface TexturedHoverBackgroundProps {
  children?: React.ReactNode;
}

export default function TexturedHoverBackground({ children }: TexturedHoverBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cursor, setCursor] = useState({ x: -1000, y: -1000, px: 50, py: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Canvas animated texture parameters
  const animFrame = useRef<number | null>(null);
  const timeRef = useRef(0);

  // Render animated canvas background with dynamic dot matrix grid and animated noise waves
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const render = () => {
      timeRef.current += isHovered ? 0.04 : 0.015; // Texture animates faster when hovered!
      const t = timeRef.current;

      // Base crisp textured off-white background
      ctx.fillStyle = "#FAF9F6";
      ctx.fillRect(0, 0, width, height);

      // 1. Draw animated dot-matrix grid with wave distortion
      const dotSpacing = 28;
      const cols = Math.ceil(width / dotSpacing);
      const rows = Math.ceil(height / dotSpacing);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * dotSpacing;
          const y = j * dotSpacing;

          // Calculate distance to cursor
          const dx = x - (cursor.px / 100) * width;
          const dy = y - (cursor.py / 100) * height;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 280;

          // Wave equation for texture movement
          const wave = Math.sin(i * 0.25 + t) * Math.cos(j * 0.25 + t * 0.8);

          let dotRadius = 1.2 + wave * 0.4;
          let opacity = 0.14 + wave * 0.05;
          let dotColor = "rgba(15, 23, 42, ";

          // Interactive cursor proximity reaction
          if (isHovered && dist < maxDist) {
            const factor = (1 - dist / maxDist);
            dotRadius += factor * 3.5;
            opacity += factor * 0.45;
            if (factor > 0.4) {
              dotColor = "rgba(255, 185, 0, "; // Vibe yellow accent glow under cursor
            }
          }

          ctx.beginPath();
          ctx.arc(x, y, Math.max(0.5, dotRadius), 0, Math.PI * 2);
          ctx.fillStyle = `${dotColor}${opacity.toFixed(3)})`;
          ctx.fill();
        }
      }

      // 2. Animated organic noise ripple waves under cursor
      if (isHovered && cursor.x > 0 && cursor.y > 0) {
        const cx = (cursor.px / 100) * width;
        const cy = (cursor.py / 100) * height;

        const gradient = ctx.createRadialGradient(cx, cy, 10, cx, cy, 320);
        gradient.addColorStop(0, "rgba(255, 212, 0, 0.18)");
        gradient.addColorStop(0.5, "rgba(255, 212, 0, 0.06)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cx, cy, 320, 0, Math.PI * 2);
        ctx.fill();
      }

      animFrame.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [isHovered, cursor.px, cursor.py]);

  // Handle Mouse Movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;

    setCursor({ x, y, px, py });
    if (!isHovered) setIsHovered(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;

    setCursor({ x, y, px, py });
    setIsHovered(true);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsHovered(false)}
      className="relative w-full min-h-screen overflow-hidden select-none bg-[#FAF9F6] text-slate-900"
    >
      {/* 1. ANIMATED TEXTURED CANVAS BACKGROUND */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none w-full h-full" />

      {/* Subtle paper grain texture overlay */}
      <div
        className={`absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply transition-opacity duration-500 ${
          isHovered ? "opacity-65" : "opacity-35"
        }`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient background light gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-yellow-300/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Custom keyframe styles for slow wiggle animation */}
      <style jsx global>{`
        @keyframes slowWiggle {
          0%, 100% { transform: rotate(-2.5deg); }
          25% { transform: rotate(2.2deg); }
          50% { transform: rotate(-1.8deg); }
          75% { transform: rotate(2.5deg); }
        }
        .animate-slow-wiggle {
          animation: slowWiggle 3.5s ease-in-out infinite;
        }
      `}</style>

      {/* 2. FLOATING INTERACTIVE POP-OUT SERVICE CARDS */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden hidden sm:block">
        {POP_OUT_ITEMS.map((item) => {
          const IconComp = item.icon;

          // Calculate distance to cursor for pop-out reaction
          const itemPx = item.posX;
          const itemPy = item.posY;
          const dx = cursor.px - itemPx;
          const dy = cursor.py - itemPy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const isNear = isHovered && dist < 22;
          const isSuperNear = isHovered && dist < 12;

          // Magnetic pull offset
          const pullX = isNear ? (dx * 0.15) : 0;
          const pullY = isNear ? (dy * 0.15) : 0;

          return (
            <div
              key={item.id}
              className="absolute transition-all duration-300 ease-out pointer-events-auto"
              style={{
                left: `${item.posX}%`,
                top: `${item.posY}%`,
                transform: `translate(${pullX}px, ${pullY}px) scale(${isSuperNear ? 1.15 : isNear ? 1.08 : 1})`,
                animationDelay: item.floatDelay,
              }}
              onMouseEnter={() => setActiveItem(item.id)}
              onMouseLeave={() => setActiveItem(null)}
            >
              {/* Pop-Out Card Container: wobbles ONLY when cursor is hovered over this specific item */}
              <div
                className={`group flex items-center transition-all duration-300 cursor-pointer backdrop-blur-xl border shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] ${
                  item.isSmall ? "gap-2 px-3 py-1.5 rounded-xl bg-white/90" : "gap-3 px-4 py-2.5 rounded-2xl bg-white/85"
                } ${
                  isNear || activeItem === item.id ? "animate-slow-wiggle border-[#FFD400] ring-4 ring-[#FFD400]/25 bg-white -translate-y-1" : "border-slate-200/80 hover:border-slate-300"
                }`}
                style={{
                  animationDelay: item.floatDelay,
                }}
              >
                {/* Icon Container */}
                <div
                  className={`flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                    item.isSmall ? "w-7 h-7 rounded-lg" : "w-9 h-9 rounded-xl"
                  } ${item.iconBg} ${item.iconColor}`}
                >
                  <IconComp size={item.isSmall ? 14 : 18} />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <span className={`font-bold text-slate-900 group-hover:text-amber-600 transition-colors whitespace-nowrap ${
                    item.isSmall ? "text-[11px]" : "text-xs"
                  }`}>
                    {item.title}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 font-semibold rounded-full w-fit mt-0.5 ${
                      item.isSmall ? "text-[9px] px-1.5 py-0.2" : "text-[10px] px-2 py-0.5"
                    } ${item.badgeBg} ${item.badgeColor}`}
                  >
                    {item.id === "grow-brand" && <Sparkles size={10} className="animate-spin text-amber-500" />}
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Glowing Pulse Ring when Cursor is Near */}
              {isNear && (
                <div className="absolute inset-0 -z-10 rounded-2xl border-2 border-[#FFD400] animate-ping opacity-30 pointer-events-none" />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Pop-Out Marquee Bar (for small screens where absolute layout floats offscreen) */}
      <div className="sm:hidden absolute top-20 left-0 right-0 z-20 overflow-x-auto py-2 px-4 flex gap-2 no-scrollbar">
        {POP_OUT_ITEMS.map((item) => {
          const IconComp = item.icon;
          return (
            <div
              key={item.id}
              className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm text-xs font-semibold text-slate-800"
            >
              <IconComp size={14} className={item.iconColor} />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>

      {/* 3. HERO CONTENT CONTAINER (Renders Hero text & buttons on top) */}
      <div className="relative z-30 w-full h-full min-h-screen flex flex-col justify-end pointer-events-none">
        {children}
      </div>
    </div>
  );
}
