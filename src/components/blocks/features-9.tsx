"use client";

import { Activity, Map as MapIcon, MessageCircle } from "lucide-react";
import DottedMap from "dotted-map";
import { Area, AreaChart, CartesianGrid } from "recharts";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export function Features9() {
  return (
    <section className="px-4 py-16 md:py-32 bg-white">
      <div className="mx-auto grid max-w-5xl border border-gray-200 rounded-2xl overflow-hidden md:grid-cols-2">
        <div>
          <div className="p-6 sm:p-12">
            <span className="text-muted-foreground flex items-center gap-2 text-[13px]">
              <MapIcon className="size-4" />
              Pan-India Growth Network
            </span>
            <p className="mt-8 text-2xl font-semibold text-black">
              Advanced targeting system. Instantly reach your audience across India.
            </p>
          </div>

          <div aria-hidden className="relative">
            <div className="absolute inset-0 z-10 size-fit m-auto">
              <div className="bg-white z-[1] relative flex size-fit w-fit items-center gap-2 border border-gray-200 px-3 py-1 text-xs font-medium shadow-md shadow-black/5 rounded-lg">
                <span className="text-lg">🇮🇳</span> Last campaign from Maharashtra
              </div>
              <div className="bg-white absolute inset-2 -bottom-2 mx-auto border border-gray-100 px-3 py-4 text-xs font-medium shadow-md shadow-black/5 rounded-lg"></div>
            </div>

            <div className="relative overflow-hidden">
              <div className="bg-gradient-to-t from-white z-1 absolute inset-0 from-transparent to-75%"></div>
              <Map />
            </div>
          </div>
        </div>
        <div className="overflow-hidden border-t bg-gray-50 p-6 sm:p-12 md:border-0 md:border-l">
          <div className="relative z-10">
            <span className="text-muted-foreground flex items-center gap-2 text-[13px]">
              <MessageCircle className="size-4" />
              WhatsApp & Email Support
            </span>
            <p className="my-8 text-2xl font-semibold text-black">
              Reach out via WhatsApp or email for any assistance you need.
            </p>
          </div>
          <div aria-hidden className="flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex justify-center items-center size-5 rounded-full border">
                  <span className="size-3 rounded-full bg-[#FFD400]" />
                </span>
                <span className="text-muted-foreground text-xs">Mon 9 Feb</span>
              </div>
              <div className="bg-white mt-1.5 w-3/5 border border-gray-200 p-3 text-xs rounded-lg">Hey, I need UGC videos for my brand launch.</div>
            </div>

            <div>
              <div className="mb-1 ml-auto w-3/5 bg-[#FFD400] p-3 text-xs text-black font-medium rounded-lg">We&apos;d love to help! Let&apos;s schedule a strategy call to understand your brand goals.</div>
              <span className="text-muted-foreground block text-right text-xs">Now</span>
            </div>
          </div>
        </div>
        <div className="col-span-full border-y p-12 bg-black text-center">
          <p className="text-4xl font-semibold lg:text-7xl text-white">
            99.99% <span className="text-[#FFD400]">Uptime</span>
          </p>
        </div>
        <div className="relative col-span-full">
          <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
            <span className="text-muted-foreground flex items-center gap-2 text-[13px]">
              <Activity className="size-4" />
              Campaign Performance
            </span>
            <p className="my-8 text-2xl font-semibold text-black">
              Monitor your campaign performance in real-time.{" "}
              <span className="text-muted-foreground">Instantly identify and scale what works.</span>
            </p>
          </div>
          <MonitoringChart />
        </div>
      </div>
    </section>
  );
}

const map = new DottedMap({ height: 55, grid: "diagonal" });
const points = map.getPoints();

const svgOptions = {
  backgroundColor: "transparent",
  color: "#d4d4d4",
  radius: 0.15,
};

const Map = () => {
  const viewBox = "0 0 120 60";
  return (
    <svg viewBox={viewBox} style={{ background: svgOptions.backgroundColor }}>
      {points.map((point, index) => (
        <circle
          key={index}
          cx={point.x}
          cy={point.y}
          r={svgOptions.radius}
          fill={svgOptions.color}
        />
      ))}
    </svg>
  );
};

const chartConfig = {
  desktop: {
    label: "Conversions",
    color: "#FFD400",
  },
  mobile: {
    label: "Revenue",
    color: "#E6BE00",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "May", desktop: 56, mobile: 224 },
  { month: "June", desktop: 56, mobile: 224 },
  { month: "January", desktop: 126, mobile: 252 },
  { month: "February", desktop: 205, mobile: 410 },
  { month: "March", desktop: 200, mobile: 126 },
  { month: "April", desktop: 400, mobile: 800 },
];

const MonitoringChart = () => {
  return (
    <ChartContainer
      className="h-120 aspect-auto md:h-96"
      config={chartConfig}
    >
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{ left: 0, right: 0 }}
      >
        <defs>
          <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
            <stop offset="55%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
            <stop offset="55%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} />
        <ChartTooltip
          active
          cursor={false}
          content={<ChartTooltipContent className="bg-white" />}
        />
        <Area
          strokeWidth={2}
          dataKey="mobile"
          type="stepBefore"
          fill="url(#fillMobile)"
          fillOpacity={0.1}
          stroke="var(--color-mobile)"
          stackId="a"
        />
        <Area
          strokeWidth={2}
          dataKey="desktop"
          type="stepBefore"
          fill="url(#fillDesktop)"
          fillOpacity={0.1}
          stroke="var(--color-desktop)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  );
};
