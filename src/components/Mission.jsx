'use client';
import { useState, useRef, useEffect } from "react";

import ShimmerText from "../components/ShimmerText";
import DecorativeUnderline from "../components/DecorativeUnderline";

const tabs = [
  {
    id: "mission",
    tag: "What We Do",
    label: "Our Mission",
    emoji: "🚀",
    accent: "#FF5C35",
    accentLight: "#fff3f0",
    content:
      "Our Mission to satisfy all our valuable clients through high-quality and result-oriented Digital Design and Branding Services is driven by our team of passionate experts. From the inception of a project, through its delivery and beyond, we diligently work to understand our clients and provide them with intelligent digital design solutions and support.",
  },
  {
    id: "vision",
    tag: "Where We're Headed",
    label: "Our Vision",
    emoji: "👁️",
    accent: "#FF5C35", // Matches the warm accent color from your reference image
    accentLight: "#fff3f0",
    content:
      "Our Vision to break the digital world with our highly innovative thought leadership and delivering capacity is bolstered by our team of industry experts, who have proven their expertise in the field of Digital Marketing. From the inception of a project, through its delivery and beyond, we diligently work to understand our clients and provide them with intelligent digital design solutions and support.",
  },
];

function useAnimateIn(dep) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(15px)";
    const t = setTimeout(() => {
      el.style.transition = "all 0.4s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 30);
    return () => clearTimeout(t);
  }, [dep]);
  return ref;
}

export default function Mission() {
  const [activeTab, setActiveTab] = useState("vision");
  const active = tabs.find((t) => t.id === activeTab);
  const contentRef = useAnimateIn(activeTab);

  return (
    <section className="bg-[#fcf8f5] py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-widest px-4 py-1.5 bg-white border rounded-full text-gray-500 shadow-sm">
            Who We Are
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight text-gray-900">
            Driven by purpose,
            <br />
            <ShimmerText>guided by vision</ShimmerText>
          </h2>
          <DecorativeUnderline
            width="300px"
            className="mt-4 mx-auto"
            centerColor="#FF5C35"
          />
        </div>

        {/* Layout: Vertical Stacked Tabs on Left, Content Box on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 md:p-12 shadow-xl border border-orange-50/50">
          
          {/* Left Side: Vertical Stacked Buttons */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-base font-medium transition-all text-left shadow-sm ${
                    isActive
                      ? "bg-gradient-to-r from-orange-50 to-orange-100/60 border border-orange-200/80 text-gray-900 shadow-md"
                      : "bg-white border border-gray-100 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-xl">{tab.emoji}</span>
                  <span className="font-semibold">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Side: Dynamic Content Panel (No Image) */}
          <div className="md:col-span-7 md:pl-6 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0">
            <div ref={contentRef}>
              <h3 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900">
                {active.label}
              </h3>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {active.content}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}