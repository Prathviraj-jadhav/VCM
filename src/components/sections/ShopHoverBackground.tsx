"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Sliders, Eye, Wand2 } from "lucide-react";

interface ShopHoverBackgroundProps {
  children?: React.ReactNode;
}

export default function ShopHoverBackground({ children }: ShopHoverBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 }); // percentage
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [mode, setMode] = useState<"lens" | "slider" | "modern">("lens");
  const [sliderPos, setSliderPos] = useState(50); // percentage for slider mode

  // Smooth lerp positioning
  const targetPos = useRef({ x: 50, y: 50 });
  const currentPos = useRef({ x: 50, y: 50 });
  const animFrame = useRef<number | null>(null);

  const updatePosition = useCallback(() => {
    // Lerp algorithm for ultra smooth movement
    const ease = 0.18;
    currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
    currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;

    setPos({
      x: Number(currentPos.current.x.toFixed(2)),
      y: Number(currentPos.current.y.toFixed(2)),
    });

    const dx = Math.abs(targetPos.current.x - currentPos.current.x);
    const dy = Math.abs(targetPos.current.y - currentPos.current.y);

    if (dx > 0.01 || dy > 0.01) {
      animFrame.current = requestAnimationFrame(updatePosition);
    } else {
      animFrame.current = null;
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;

    targetPos.current = { x: Math.max(0, Math.min(100, xPct)), y: Math.max(0, Math.min(100, yPct)) };
    setSliderPos(Math.max(0, Math.min(100, xPct)));

    if (!isHovered) setIsHovered(true);
    if (!animFrame.current) {
      animFrame.current = requestAnimationFrame(updatePosition);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    setIsTouch(true);
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = ((touch.clientX - rect.left) / rect.width) * 100;
    const yPct = ((touch.clientY - rect.top) / rect.height) * 100;

    targetPos.current = { x: Math.max(0, Math.min(100, xPct)), y: Math.max(0, Math.min(100, yPct)) };
    setSliderPos(Math.max(0, Math.min(100, xPct)));
    setIsHovered(true);

    if (!animFrame.current) {
      animFrame.current = requestAnimationFrame(updatePosition);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly return target to center
    targetPos.current = { x: 50, y: 50 };
    if (!animFrame.current) {
      animFrame.current = requestAnimationFrame(updatePosition);
    }
  };

  // Clean up animation frames on unmount
  useEffect(() => {
    return () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, []);

  // Compute clip path based on active mode
  let modernClipPath = "polygon(0 0, 0 0, 0 100%, 0 100%)";
  if (mode === "modern") {
    modernClipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
  } else if (mode === "slider") {
    modernClipPath = `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`;
  } else {
    // Lens mode
    const lensRadius = isHovered ? "220px" : "0px";
    modernClipPath = `circle(${lensRadius} at ${pos.x}% ${pos.y}%)`;
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onTouchStart={() => setIsHovered(true)}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsHovered(false)}
      className="relative w-full min-h-screen overflow-hidden select-none bg-black text-white"
    >
      {/* 1. BASE LAYER: Vintage Old Shop */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/old-shop.png"
          alt="Vintage Storefront - Original Vibe Media Shop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter contrast-[1.05] brightness-[0.82] transition-transform duration-700 ease-out scale-105"
        />
        {/* Subtle warm vintage tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* 2. REVEAL LAYER: Modern Futuristic Shop */}
      <div
        className="absolute inset-0 z-10 transition-[clip-path] duration-150 ease-out pointer-events-none"
        style={{
          clipPath: modernClipPath,
          WebkitClipPath: modernClipPath,
        }}
      >
        <Image
          src="/images/modern-shop.png"
          alt="Modern Studio Storefront - Vibe Create Media Today"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.95] contrast-[1.15] scale-105"
        />
        {/* Modern high-tech glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 via-transparent to-black/70 pointer-events-none" />
      </div>

      {/* 3. LENS PORTAL GLOW & RING EFFECT (Lens Mode Only) */}
      {mode === "lens" && isHovered && (
        <div
          className="absolute z-20 pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#FFD400] shadow-[0_0_45px_rgba(255,212,0,0.7),inset_0_0_25px_rgba(255,212,0,0.3)] transition-opacity duration-300"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            width: "440px",
            height: "440px",
          }}
        >
          {/* Floating indicator prompt near cursor lens */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#FFD400]/40 text-[11px] text-[#FFD400] font-semibold flex items-center gap-1.5 shadow-lg whitespace-nowrap">
            <Sparkles size={12} className="animate-spin text-[#FFD400]" />
            Modern Era Studio
          </div>
        </div>
      )}

      {/* 4. SPLIT SLIDER LINE (Slider Mode Only) */}
      {mode === "slider" && (
        <div
          className="absolute top-0 bottom-0 z-20 w-1 bg-[#FFD400] shadow-[0_0_20px_#FFD400] pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-black border-2 border-[#FFD400] rounded-full flex items-center justify-center text-[#FFD400] shadow-xl">
            <Sliders size={16} />
          </div>
        </div>
      )}

      {/* 5. LEGIBILITY GRADIENT OVERLAYS (Ensures Hero content is crystal clear) */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-black/80 via-black/45 to-black/85" />
      <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.65)_100%)]" />

      {/* 6. INTERACTIVE ERA BADGES & CONTROL BAR */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 z-30 flex items-center gap-2 bg-black/75 backdrop-blur-xl border border-white/15 p-1.5 rounded-full shadow-2xl">
        <button
          onClick={() => setMode("lens")}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
            mode === "lens"
              ? "bg-[#FFD400] text-black shadow-[0_0_15px_rgba(255,212,0,0.4)]"
              : "text-white/70 hover:text-white hover:bg-white/10"
          }`}
          title="Spotlight Lens Mode"
        >
          <Wand2 size={13} />
          <span>Spotlight Lens</span>
        </button>

        <button
          onClick={() => setMode("slider")}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
            mode === "slider"
              ? "bg-[#FFD400] text-black shadow-[0_0_15px_rgba(255,212,0,0.4)]"
              : "text-white/70 hover:text-white hover:bg-white/10"
          }`}
          title="Split Reveal Mode"
        >
          <Sliders size={13} />
          <span>Split Reveal</span>
        </button>

        <button
          onClick={() => setMode(mode === "modern" ? "lens" : "modern")}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
            mode === "modern"
              ? "bg-[#FFD400] text-black shadow-[0_0_15px_rgba(255,212,0,0.4)]"
              : "text-white/70 hover:text-white hover:bg-white/10"
          }`}
          title="Toggle Full Modern View"
        >
          <Eye size={13} />
          <span>Full Modern</span>
        </button>
      </div>

      {/* Era Label Indicator on bottom left */}
      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 z-30 flex items-center gap-2">
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-medium text-white/80">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span>Hover / Touch to Reveal Transformation</span>
        </div>
      </div>

      {/* 7. HERO CONTENT CONTAINER (Renders on top of interactive background) */}
      <div className="relative z-30 w-full h-full min-h-screen flex flex-col justify-end">
        {children}
      </div>
    </div>
  );
}
