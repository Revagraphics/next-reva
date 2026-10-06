'use client';

import React from "react";
import Image from "next/image";

import react from "../assets/react-js.svg";
import photoshop from "../assets/photoshop.svg";
import tailwind from "../assets/tailwindcss.svg";
import css from "../assets/css.svg";
import Invision from "../assets/illustrator.svg";
import oracle from "../assets/oracle.svg";

import ShimmerText from "../components/ShimmerText";
import GridBg from "../components/GridBg";

export default function Expertise() {
  const expertiseData = [
    {
      id: 1,
      emoji: photoshop,
      title: "UI/UX Design",
      desc: "Obsessively crafted interfaces that feel alive. We design experiences users fall in love with.",
      gradient: "from-pink-500 via-purple-500 to-cyan-500",
      accent: "text-pink-600",
      tech: "Figma • Framer • Webflow",
    },
    {
      id: 2,
      emoji: react,
      title: "Frontend Magic",
      desc: "Blazing-fast, buttery-smooth websites built with React, Next.js, Tailwind & Three.js.",
      gradient: "from-cyan-400 via-blue-500 to-purple-500",
      accent: "text-cyan-600",
      tech: "React • Next.js • Tailwind",
    },
    {
      id: 3,
      emoji: tailwind,
      title: "Full-Stack Power",
      desc: "End-to-end solutions with robust backend, databases, APIs & scalable architecture.",
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      accent: "text-emerald-600",
      tech: "Node.js • Python • Supabase",
    },
    {
      id: 4,
      emoji: css,
      title: "Mobile-First Design",
      desc: "Stunning responsive websites that look perfect on every device — from phones to 8K screens.",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      accent: "text-amber-600",
      tech: "Tailwind • Framer Motion",
    },
    {
      id: 5,
      emoji: Invision,
      title: "Performance & SEO",
      desc: "Lightning-fast loading, perfect Core Web Vitals, and SEO-optimized for maximum reach.",
      gradient: "from-rose-500 via-pink-500 to-violet-500",
      accent: "text-rose-600",
      tech: "Lighthouse • Next SEO",
    },
    {
      id: 6,
      emoji: oracle,
      title: "Maintenance & Growth",
      desc: "Ongoing support, updates, security & continuous improvements to keep your site thriving.",
      gradient: "from-sky-500 via-blue-500 to-indigo-500",
      accent: "text-sky-600",
      tech: "24/7 Support",
    },
  ];
  return (
    <section className=" bg-[#f2fff5] text-zinc-900 overflow-hidden relative">
      <GridBg gridSize={80} lineColor="#f5f1ed" bgColor="#fff">
        <div className="max-w-[80%] mx-auto py-8  px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-black mb-6 text-zinc-900">
              OUR KEY{" "}
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                <ShimmerText>EXPERTISE</ShimmerText>
              </span>
            </h2>
            <p className="text-2xl text-zinc-600 max-w-3xl mx-auto">
              Explore our range of prowess in website design and development. We
              don&apos;t just build websites — we create digital fire.
            </p>
          </div>
          {/* Light 3D Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {expertiseData.map((item) => (
              <div
                key={item.id}
                className="expertise-card group relative bg-white border border-zinc-200 rounded-3xl p-10 overflow-hidden transition-all duration-500 hover:border-orange-300 hover:shadow-2xl cursor-pointer"
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 25;
                  const rotateY = (centerX - x) / 25;
                  card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
                }}
              >
                {/* Soft Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}
                ></div>
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-7xl mb-8 h-9 w-9 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Image
                      src={item.emoji}
                      alt={`${item.title} icon`}
                      width={36}
                      height={36}
                    />
                  </div>
                  <h3 className="text-3xl font-bold mb-5 tracking-tight text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                    {item.desc}
                  </p>
                  <div
                    className={`flex items-center justify-between text-sm font-medium ${item.accent}`}
                  >
                    <span>{item.tech}</span>
                    <span className="text-3xl transition-transform group-hover:translate-x-3 duration-300">
                      →
                    </span>
                  </div>
                </div>
                {/* Subtle Glow Border */}
                <div
                  className={`absolute -inset-[2px] bg-gradient-to-r ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500 -z-10`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </GridBg>
    </section>
  );
}
