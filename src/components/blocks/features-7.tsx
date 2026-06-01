"use client";

import { Zap, Cpu, Lock, Sparkles } from "lucide-react";

export function Features7() {
  return (
    <section className="overflow-hidden py-16 md:py-32 bg-gray-50">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-semibold lg:text-5xl text-black">
            Built for Scaling Brands
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Empower your team with growth systems that adapt to your needs, whether you prefer hands-on strategy or data-driven execution.
          </p>
        </div>
        <div className="relative -mx-4 rounded-3xl p-3 md:-mx-12 lg:col-span-3">
          <div className="[perspective:800px]">
            <div className="[transform:skewY(-2deg)skewX(-2deg)rotateX(6deg)]">
              <div className="aspect-[88/36] relative">
                <div className="[background-image:radial-gradient(var(--tw-gradient-stops,at_75%_25%))] to-gray-50 z-1 -inset-[4.25rem] absolute from-transparent to-75%"></div>
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80"
                  className="absolute inset-0 z-10 object-cover rounded-2xl"
                  alt="Vibe Create Media team collaboration"
                  width={1200}
                  height={490}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-black" />
              <h3 className="text-sm font-medium text-black">Faaast</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              While others schedule meetings about meetings, we&apos;re already live and optimizing.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4 text-black" />
              <h3 className="text-sm font-medium text-black">Powerful</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Full-stack growth under one roof branding, performance, content, UGC, development.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4 text-black" />
              <h3 className="text-sm font-medium text-black">Secure ROI</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              94% client retention rate. We build long-term partnerships, not short-term invoices.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-black" />
              <h3 className="text-sm font-medium text-black">Data Powered</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Smart creative testing, performance optimization, and analytics built in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
