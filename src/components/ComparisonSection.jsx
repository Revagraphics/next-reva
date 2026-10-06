'use client';

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  FaCheck,
  FaXmark,
  FaWandMagicSparkles,
  FaShieldHalved,
} from "react-icons/fa6";

gsap.registerPlugin(useGSAP);

const comparisonData = [
  {
    feature: "Core Digital Services",
    us: "End-to-end execution: App design, web dev, marketing, eCommerce, & cloud under one roof",
    others:
      "Fragmented agencies requiring multiple third-party handoffs and vendors",
    highlight: true,
  },
  {
    feature: "Technology & Innovation",
    us: "Future-proof cloud development & custom code made to scale with tech advancements",
    others:
      "Rigid legacy systems and basic templates with low optimization limits",
    highlight: false,
  },
  {
    feature: "Industry Expertise",
    us: "Reva's top-tier professionals building cross-vertical, domain-specific digital products",
    others:
      "Generalist teams using one-size-fits-all solutions across different domains",
    highlight: false,
  },
  {
    feature: "Concept to Execution",
    us: "Seamless workflow translating rough product concepts into fully executed digital designs",
    others: "Disconnect between design vision and final developmental reality",
    highlight: true,
  },
  {
    feature: "Client Requirements",
    us: "Highly customized architecture built tailored precisely to your specific business goals",
    others:
      "Restricted platform constraints that force you to adapt to their technical limits",
    highlight: false,
  },
];

export default function ComparisonSection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".cmp-badge", {
        y: -15,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".cmp-heading",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4",
        )
        .from(
          ".cmp-row",
          {
            y: 25,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
          },
          "-=0.3",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 px-6 md:px-12 bg-slate-950 text-slate-100 overflow-hidden"
    >
      {/* Subtle background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-137.5 h-87.5 bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="cmp-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <FaWandMagicSparkles className="w-3.5 h-3.5" />
            Clear Transparency
          </div>
          <h2 className="cmp-heading text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Why partner with us over traditional agencies?
          </h2>
          <p className="cmp-heading mt-3 text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            We swap generic templates and agency bureaucracy for tailored
            micro-craft, verified performance, and direct engineering power.
          </p>
        </div>


        {/* Comparison Table Container */}
        <div className="border border-slate-800/80 rounded-2xl bg-slate-900/60 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Table Column Titles */}
          <div className="grid grid-cols-12 border-b border-slate-800/80 bg-slate-900/90 text-sm font-semibold text-slate-400 py-4 px-4 md:px-8 items-center">
            <div className="col-span-5 md:col-span-4 text-slate-300">
              Deliverable Standard
            </div>
            <div className="col-span-4 md:col-span-4 text-indigo-400 flex items-center gap-1.5">
              <FaShieldHalved className="w-4 h-4" />
              <span>Our Agency</span>
            </div>
            <div className="col-span-3 md:col-span-4 text-slate-500">
              Other Agencies
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-800/50">
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className="cmp-row grid grid-cols-12 gap-3 py-5 px-4 md:px-8 items-center transition-colors duration-200 hover:bg-slate-800/30"
              >
                {/* Feature Label */}
                <div className="col-span-12 md:col-span-4 font-medium text-slate-200 text-sm md:text-base">
                  {item.feature}
                </div>

                {/* Our Side */}
                <div className="col-span-7 md:col-span-4 flex items-start gap-2.5 text-sm text-slate-200">
                  <span className="shrink-0 mt-0.5 p-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <FaCheck className="w-3.5 h-3.5" />
                  </span>
                  <span className="leading-snug">{item.us}</span>
                </div>

                {/* Competitors Side */}
                <div className="col-span-5 md:col-span-4 flex items-start gap-2.5 text-sm text-slate-400">
                  <span className="shrink-0 mt-0.5 p-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    <FaXmark className="w-3.5 h-3.5" />
                  </span>
                  <span className="leading-snug line-through text-slate-500">
                    {item.others}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Card Summary Footnote */}
          <div className="p-4 md:p-6 bg-slate-900/90 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm text-slate-400">
            <span>
              Ready to see measurable results instead of generic promises?
            </span>
            <button className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 shadow-lg shadow-indigo-600/20">
              Schedule Architecture Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
