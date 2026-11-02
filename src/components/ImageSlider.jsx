'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ShimmerText from "../components/ShimmerText";
import DecorativeUnderline from "../components/DecorativeUnderline";

import bg1 from "../assets/big-slider1.jpg";
import bg2 from "../assets/big-slider2.jpg";
import bg3 from "../assets/big-slider6.webp";
import bg4 from "../assets/big-slider8.webp";

const images = [
  { id: 1, img: bg1 },
  { id: 2, img: bg2 },
  { id: 3, img: bg3 },
  { id: 4, img: bg4 },
];

export default function ImageSlider() {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const loopedItems = [...images, ...images];
    const isMobile = window.matchMedia('(max-width: 640px)').matches;

    track.style.gap = '1.5rem';
    track.innerHTML = loopedItems
      .map(
        (img) => `
          <div class="branding_slide w-[75vw] max-w-[340px] min-w-[240px] h-[32vh] min-h-[200px] md:w-[45vw] md:max-w-[450px] md:min-w-[320px] md:h-[45vh] lg:w-[58vh] lg:min-w-[440px] lg:h-[45vh] flex-shrink-0 rounded-3xl overflow-hidden shadow-xl bg-gray-900 flex items-center justify-center transition-all duration-300 hover:scale-[1.02]">
            <img src="${img.img.src}" alt="Slide ${img.id}" class="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]" draggable="false" />
          </div>
        `,
      )
      .join('');

    const totalWidth = track.scrollWidth / 2;

    tweenRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: isMobile ? 34 : 30,
      ease: 'none',
      repeat: -1,
      onRepeat: () => gsap.set(track, { x: 0 }),
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  return (
    <section className="relative w-full h-auto py-16 md:py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          <ShimmerText>Our Creative</ShimmerText> Showcase
        </h2>
        <DecorativeUnderline
          width="min(320px, 80vw)"
          className="mx-auto mt-4"
          centerColor="#3B82F6"
        />
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
          A glimpse into our professional design portfolio, branding campaigns, and custom digital assets.
        </p>
      </div>

      <div className="relative z-20 w-full flex items-center">
        <div className="w-full overflow-hidden py-4">
          <div
            ref={trackRef}
            className="flex will-change-transform select-none"
            style={{ width: 'max-content' }}
          />
        </div>
      </div>
    </section>
  );
}