"use client";

import { TrendingUp, Cpu, Lock, Sparkles } from "lucide-react";

export function Features6() {
  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-semibold text-black">
            The Vibe Create ecosystem brings together our expertise
          </h2>
          <p className="max-w-sm sm:ml-auto text-[15px] text-gray-600 leading-relaxed">
            Empower your brand with workflows that adapt to your needs, whether you prefer data-driven strategy or performance-focused creative execution.
          </p>
        </div>
        <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
          <div className="aspect-[88/36] relative">
            <div className="bg-gradient-to-t z-1 from-white absolute inset-0 to-transparent"></div>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
              className="absolute inset-0 z-10 object-cover rounded-2xl"
              alt="Vibe Create Media analytics dashboard"
              width={1200}
              height={490}
            />
          </div>
        </div>
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="size-4 text-black" />
              <h3 className="text-sm font-medium text-black">Revenue First</h3>
            </div>
            <p className="text-muted-foreground text-sm">Every campaign measured against one metric: did it generate revenue?</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4 text-black" />
              <h3 className="text-sm font-medium text-black">Data-Driven</h3>
            </div>
            <p className="text-muted-foreground text-sm">Smart creative testing, performance optimization, and analytics built in.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4 text-black" />
              <h3 className="text-sm font-medium text-black">Proven Systems</h3>
            </div>
            <p className="text-muted-foreground text-sm">Battle-tested frameworks refined across 200+ campaigns and ₹2Cr+ in ad spend.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-black" />
              <h3 className="text-sm font-medium text-black">Creative Edge</h3>
            </div>
            <p className="text-muted-foreground text-sm">UGC, motion graphics, and scroll-stopping content that outperforms by 4x.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
