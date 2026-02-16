"use client";

import React from "react";
import { motion } from "motion/react";
import { ChartCandlestick, SparklesIcon, Share2Icon } from "lucide-react";
import { cn } from "@/lib/utils";

interface DatabaseWithRestApiProps {
  className?: string;
  circleText?: string;
  badgeTexts?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  buttonTexts?: {
    first: string;
    second: string;
  };
  title?: string;
  lightColor?: string;
}

const DatabaseWithRestApi = ({
  className,
  circleText,
  badgeTexts,
  buttonTexts,
  title,
  lightColor,
}: DatabaseWithRestApiProps) => {
  return (
    <div
      className={cn(
        "relative flex h-[350px] w-full flex-col items-center",
        className
      )}
    >
      {/* SVG Paths - viewBox widened to 260 to fit longer labels */}
      <svg
        className="h-full sm:w-full text-muted"
        width="100%"
        height="100%"
        viewBox="0 0 260 100"
      >
        {/* Lines from button centers (39, 92, 150, 216) converging at x=130 */}
        <g
          stroke="currentColor"
          fill="none"
          strokeWidth="0.4"
          strokeDasharray="100 100"
        >
          <path d="M 39 15 v 10 q 0 5 5 5 h 81 q 5 0 5 5 v 10" pathLength={100} />
          <path d="M 92 15 v 5 q 0 5 5 5 h 28 q 5 0 5 5 v 10" pathLength={100} />
          <path d="M 150 15 v 5 q 0 5 -5 5 h -10 q -5 0 -5 5 v 10" pathLength={100} />
          <path d="M 216 15 v 10 q 0 5 -5 5 h -76 q -5 0 -5 5 v 10" pathLength={100} />
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        </g>
        {/* Blue Lights */}
        <g mask="url(#db-mask-1)">
          <circle className="database db-light-1" cx="0" cy="0" r="12" fill="url(#db-blue-grad)" />
        </g>
        <g mask="url(#db-mask-2)">
          <circle className="database db-light-2" cx="0" cy="0" r="12" fill="url(#db-blue-grad)" />
        </g>
        <g mask="url(#db-mask-3)">
          <circle className="database db-light-3" cx="0" cy="0" r="12" fill="url(#db-blue-grad)" />
        </g>
        <g mask="url(#db-mask-4)">
          <circle className="database db-light-4" cx="0" cy="0" r="12" fill="url(#db-blue-grad)" />
        </g>
        {/* Buttons - evenly spaced, sized to fit content */}
        <g stroke="currentColor" fill="none" strokeWidth="0.4">
          {/* Creditsafe: x=15 w=48 center=39 */}
          <g>
            <rect fill="white" x="15" y="5" width="48" height="10" rx="5" />
            <image href="" x="18" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" />
            <text x="27" y="12" fill="#18181B" stroke="none" fontSize="6" fontWeight="500">
              {badgeTexts?.first || "Creditsafe"}
            </text>
          </g>
          {/* Experian: x=71 w=42 center=92 */}
          <g>
            <rect fill="white" x="71" y="5" width="42" height="10" rx="5" />
            <image href="" x="74" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" />
            <text x="83" y="12" fill="#18181B" stroke="none" fontSize="6" fontWeight="500">
              {badgeTexts?.second || "Experian"}
            </text>
          </g>
          {/* Amazon reviews: x=121 w=58 center=150 */}
          <g>
            <rect fill="white" x="121" y="5" width="58" height="10" rx="5" />
            <image href="" x="124" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" />
            <text x="133" y="12" fill="#18181B" stroke="none" fontSize="6" fontWeight="500">
              {badgeTexts?.third || "Amazon reviews"}
            </text>
          </g>
          {/* Google reviews: x=187 w=58 center=216 */}
          <g>
            <rect fill="white" x="187" y="5" width="58" height="10" rx="5" />
            <image href="" x="190" y="6" width="7" height="7" preserveAspectRatio="xMidYMid meet" />
            <text x="199" y="12" fill="#18181B" stroke="none" fontSize="6" fontWeight="500">
              {badgeTexts?.fourth || "Google reviews"}
            </text>
          </g>
        </g>
        <defs>
          <mask id="db-mask-1">
            <path d="M 39 15 v 10 q 0 5 5 5 h 81 q 5 0 5 5 v 10" strokeWidth="0.5" stroke="white" />
          </mask>
          <mask id="db-mask-2">
            <path d="M 92 15 v 5 q 0 5 5 5 h 28 q 5 0 5 5 v 10" strokeWidth="0.5" stroke="white" />
          </mask>
          <mask id="db-mask-3">
            <path d="M 150 15 v 5 q 0 5 -5 5 h -10 q -5 0 -5 5 v 10" strokeWidth="0.5" stroke="white" />
          </mask>
          <mask id="db-mask-4">
            <path d="M 216 15 v 10 q 0 5 -5 5 h -76 q -5 0 -5 5 v 10" strokeWidth="0.5" stroke="white" />
          </mask>
          <radialGradient id="db-blue-grad" fx="1">
            <stop offset="0%" stopColor={lightColor || "#00A6F5"} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
      {/* Main Box */}
      <div className="absolute bottom-10 flex w-full flex-col items-center">
        {/* box title */}
        <div className="absolute -top-3 z-20 flex items-center justify-center rounded-lg border bg-[#101112] px-2 py-1 sm:-top-4 sm:py-1.5">
          <SparklesIcon className="size-3" />
          <span className="ml-2">
            {title ? title : "Dosa automatically integrates with your data sources"}
          </span>
        </div>
        {/* box outter circle */}
        <div className="absolute -bottom-8 z-30 grid h-[60px] w-[60px] place-items-center rounded-full bg-[#f56565] font-semibold text-lg">
          {circleText ? circleText : "SVG"}
        </div>
        {/* box content */}
        <div className="relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background shadow-md">
          {/* Badges */}
          <div className="absolute bottom-8 left-12 z-10 h-7 rounded-full bg-[#101112] px-3 text-xs border flex items-center gap-2 ">
            <ChartCandlestick className="size-4" />
            <span style={{ fontSize: "14px" }}>{buttonTexts?.first}</span>
          </div>
          <div className="absolute right-16 z-10 hidden h-7 rounded-full bg-[#101112] px-3 text-xs sm:flex border items-center gap-2">
            <Share2Icon className="size-4" />
            <span style={{ fontSize: "14px" }}>{buttonTexts?.second}</span>
          </div>
          {/* Circles */}
          <motion.div
            className="absolute -bottom-14 h-[100px] w-[100px] rounded-full border-t bg-accent/5"
            animate={{
              scale: [0.98, 1.02, 0.98, 1, 1, 1, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-20 h-[145px] w-[145px] rounded-full border-t bg-accent/5"
            animate={{
              scale: [1, 1, 1, 0.98, 1.02, 0.98, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-[100px] h-[190px] w-[190px] rounded-full border-t bg-accent/5"
            animate={{
              scale: [1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-[120px] h-[235px] w-[235px] rounded-full border-t bg-accent/5"
            animate={{
              scale: [1, 1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};

export default DatabaseWithRestApi;


