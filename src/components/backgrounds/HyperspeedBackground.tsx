"use client";

import dynamic from "next/dynamic";
import { hyperspeedPresets } from "./HyperSpeedPresets";

const Hyperspeed = dynamic(() => import("./Hyperspeed"), {
  ssr: false,
});

export function HyperspeedBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Hyperspeed effectOptions={hyperspeedPresets.one as any} />
    </div>
  );
}
