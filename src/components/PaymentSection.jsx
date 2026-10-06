'use client';

import React, { useLayoutEffect, useRef } from "react";
import Image from 'next/image'
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

    // Wait until the browser has rendered everything
    const setupLoop = () => {
      // Kill previous animation if any
      tweenRef.current?.kill();

      const items = track.children;

      if (items.length < images.length * 2) return;

      // Width of ONE complete set
      const firstItem = items[0];
      const lastItemOfFirstSet = items[images.length - 1];

      const firstItemRect = firstItem.getBoundingClientRect();
      const lastItemRect = lastItemOfFirstSet.getBoundingClientRect();

      const singleSetWidth =
        lastItemRect.right - firstItemRect.left + 24;

      /*
        24px = 1.5rem gap

        We move exactly one complete set.
        Therefore when GSAP repeats,
        the second set is exactly where the first set was.
      */

      tweenRef.current = gsap.to(track, {
        x: -singleSetWidth,
        duration: 22,
        ease: "none",
        repeat: -1,
      });
    };

    // Wait for images/layout
    const timer = setTimeout(setupLoop, 100);

    const pause = () => {
      tweenRef.current?.pause();
    };

    const play = () => {
      tweenRef.current?.play();
    };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", play);

    return () => {
      clearTimeout(timer);

      tweenRef.current?.kill();
      tweenRef.current = null;

      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", play);
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
        <div className="relative">
          <div className="overflow-hidden w-full">
            <div
              ref={trackRef}
              className="flex select-none will-change-transform"
              style={{
                width: "max-content",
                gap: "1.5rem",
              }}
            >
              {/* First set */}
              {images.map((image) => (
                <div
                  key={`first-${image.id}`}
                  className="flex-shrink-0 bg-zinc-100 rounded-3xl overflow-hidden shadow-xl border border-zinc-800 hover:border-zinc-600 transition-all duration-300"
                  style={{
                    width: "160px",
                    height: "100px",
                  }}
                >
                  <Image
                    src={image.img}
                    alt={`Payment method ${image.id}`}
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                    draggable="false"
                  />
                </div>
              ))}

              {/* Duplicate set */}
              {images.map((image) => (
                <div
                  key={`second-${image.id}`}
                  className="flex-shrink-0 bg-zinc-100 rounded-3xl overflow-hidden shadow-xl border border-zinc-800 hover:border-zinc-600 transition-all duration-300"
                  style={{
                    width: "160px",
                    height: "100px",
                  }}
                >
                  <Image
                    src={image.img}
                    alt={`Payment method ${image.id}`}
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}