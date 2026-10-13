"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ShimmerText from "./ShimmerText";
import DecorativeUnderline from "./DecorativeUnderline";

import py1 from "../assets/google-pay.webp";
import py2 from "../assets/pay-pal.webp";
import py3 from "../assets/visa.webp";
import py4 from "../assets/discover.webp";
import py5 from "../assets/maestro.webp";

const images = [
  { id: 1, img: py1 },
  { id: 2, img: py2 },
  { id: 3, img: py3 },
  { id: 4, img: py4 },
  { id: 5, img: py5 },
];

export default function PaymentSection() {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const setupLoop = () => {
      tweenRef.current?.kill();

      // Calculate the exact width of a single complete set of items
      const singleSetWidth = track.scrollWidth / 3;

      gsap.set(track, { x: 0 });

      // Animate exactly to -singleSetWidth and loop seamlessly using modifiers or repeat
      tweenRef.current = gsap.to(track, {
        x: -singleSetWidth,
        duration: 25,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % singleSetWidth),
        },
      });
    };

    // Small timeout to allow images/fonts to render widths accurately
    const timer = setTimeout(setupLoop, 50);
    window.addEventListener("resize", setupLoop);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", setupLoop);
      tweenRef.current?.kill();
      tweenRef.current = null;
    };
  }, []);

  return (
    <section className="relative py-20 bg-zinc-100 overflow-hidden">
      <div className="max-w-[100%] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#313131] tracking-tight">
            <ShimmerText>Flexible</ShimmerText> Payment Options
          </h2>

          <DecorativeUnderline
            width="380px"
            className="mt-6 mx-auto md:w-[380px] lg:w-[450px]"
            centerColor="#3B82F6"
          />

          <p className="text-[#313131] mt-3 text-lg">
            Choose the payment method that works best for you
          </p>
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex select-none will-change-transform"
            style={{
              width: "max-content",
              gap: "1.5rem",
            }}
          >
            {/* Render 3 identical sets to ensure continuous coverage across any screen size */}
            {[...images, ...images, ...images].map((image, index) => (
              <div
                key={`marquee-${index}`}
                className="flex-shrink-0 bg-white rounded-3xl overflow-hidden shadow-xl border border-zinc-200 hover:border-zinc-400 transition-all duration-300 flex items-center justify-center p-4 relative"
                style={{
                  width: "210px",
                  height: "120px",
                }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={image.img}
                    alt={`Payment method ${image.id}`}
                    fill
                    sizes="160px"
                    className="object-contain p-2 transition-transform duration-500 hover:scale-110"
                    draggable="false"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
