'use client';

// src/pages/Stationery.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import stationery from "@/assets/stationery.png";
import ShimmerText from "@/components/ShimmerText";
import GridBg from "@/components/GridBg";
import DecorativeUnderline from "@/components/DecorativeUnderline";

export default function Stationery() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-sub",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 },
      );

      gsap.fromTo(
        ".reveal-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.4, ease: "expo.out", delay: 0.4 },
      );

      gsap.fromTo(
        ".grid-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.15,
          delay: 0.6,
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const collection = [
    {
      id: "01",
      title: "Corporate Identity Suite",
      desc: "Bespoke business cards, letterheads, and unified physical branding assets crafted on cotton-blend papers.",
      specs: "Letterpress / Hot Foil Stamping",
    },
    {
      id: "02",
      title: "Executive Correspondence",
      desc: "Custom heavy-weight envelopes, wax sealing matrices, and personalized luxury writing sheets.",
      specs: "Blind Debossing / Gilt Edging",
    },
    {
      id: "03",
      title: "Tangible Brand Artifacts",
      desc: "Premium brand packaging details, tissue linings, custom stickers, and tactile unboxing suites.",
      specs: "Custom Die-Cuts / Matte Duotone",
    },
  ];

  return (
    <>
      <div className=" min-h-screen">
      <GridBg gridSize={80} lineColor="#F0EDE8" bgColor="#fff">

        <section
          ref={containerRef}
          className="min-h-screen  text-neutral-900 lg:mt-16 mt-8 selection:bg-orange-200 pt-8 px-6 py-20 md:px-16 lg:px-24"
        >
          {/* Editorial Header Block */}
          <header className="max-w-4xl mt-12 mb-20">
            <span className="reveal-sub inline-block uppercase tracking-[0.3em] text-sm text-orange-600 font-medium mb-4">
              Tactile Architecture
            </span>
            <h1 className="reveal-title font-serif text-3xl md:text-5xl lg:text-5xl font-normal leading-[1.1] tracking-tight text-neutral-900">
              <ShimmerText>Stationery</ShimmerText> suites <br /> designed{" "}
              <ShimmerText>for</ShimmerText> <br /> the{" "}
              <ShimmerText>physical</ShimmerText> realm.
            </h1>
          </header>
          {/* Horizontal Structural Line */}
          <div className="w-full h-px bg-neutral-200 mb-16" />
          {/* Luxury Minimalist Showcase Grid */}


          <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {collection.map((item) => (
              <div
                key={item.id}
                className="grid-item group flex flex-col justify-between border-b border-neutral-200 pb-12 lg:border-b-0 lg:pb-0 lg:pr-6 lg:border-r last:border-0 hover:border-orange-200 transition-colors"
              >
                <div>
                  <span className="block font-serif text-sm text-neutral-500 mb-8">
                    {item.id}
                  </span>
                  <h3 className="text-2xl font-light tracking-tight text-neutral-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 font-light text-sm leading-relaxed mb-6 max-w-sm">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-auto">
                  <span className="inline-block text-[11px] uppercase tracking-wider text-neutral-500 font-mono bg-neutral-100 px-3 py-1 rounded hover:bg-orange-100 hover:text-orange-600 transition-colors">
                    {item.specs}
                  </span>
                </div>
              </div>
            ))}
          </section>


          {/* Secondary Dynamic Grid (Visual Placeholders) */}
          <section className="mt-28 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid-item h-105 bg-neutral-100 relative overflow-hidden group rounded-3xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1200')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 z-10 text-white">
                <p className="text-xs uppercase tracking-widest font-mono">
                  Archive 01 / Textures
                </p>
              </div>
            </div>

            <div className="grid-item h-105 bg-neutral-100 relative overflow-hidden group rounded-3xl md:mt-12">
              <div
                style={{ backgroundImage: `url(${stationery})` }}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 z-10 text-white">
                <p className="text-xs uppercase tracking-widest font-mono">
                  Archive 02 / Palette
                </p>
              </div>
            </div>
          </section>

        </section>

        </GridBg>
      </div>
    </>
  );
}
