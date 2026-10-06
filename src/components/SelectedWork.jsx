'use client';
import Image from 'next/image'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import ShimmerText from "../components/ShimmerText";

gsap.registerPlugin(ScrollTrigger);

export default function SelectedWork({
  works = [],
  name = "Portfolio",
  viewAllLink = "/portfolio",
  viewAllText = "View All Projects",
  duration = 35,
  gap = 24,
}) {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || works.length === 0) return;

    const firstCard = track.children[0];
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + gap;
    const totalWidth = works.length * cardWidth;

    tweenRef.current = gsap.to(track, {
      x: -totalWidth,
      duration,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => Number.parseFloat(x) % -totalWidth),
      },
    });

    const pause = () => tweenRef.current?.pause();
    const play = () => tweenRef.current?.play();

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", play);

    return () => {
      tweenRef.current?.kill();
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", play);
    };
  }, [works, duration, gap]);

  // Triple the works array for a smooth seamless loop
  const loopedWorks = [...works, ...works, ...works];

  return (
    <section className="bg-gray-50 py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-tight">
            Our <ShimmerText>{name}</ShimmerText> Prints
          </h2>
          <Link
            href={viewAllLink}
            className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-gray-500 hover:text-orange-500 transition-colors duration-300 self-start sm:self-auto"
          >
            {viewAllText}
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>

        {/* Scrolling Track */}
        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-5 sm:gap-6 will-change-transform"
          >
            {loopedWorks.map((work, i) => (
              <div
                key={`${work.id}-${i}`}
                className="flex-shrink-0 w-[220px] sm:w-[280px] md:w-[320px] lg:w-[340px] group cursor-pointer"
              >
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md aspect-[4/4] bg-gray-200">
                  <Image
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl" />
                </div>
                <p className="mt-3 sm:mt-4 text-center text-base sm:text-lg lg:text-xl font-medium text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                  {work.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button — bottom, centered (mobile) */}
        <div className="flex justify-center mt-10 sm:mt-14 sm:hidden">
          <Link
            href={viewAllLink}
            className="group inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-gray-700 hover:text-orange-500 transition-all duration-300 border border-gray-300 hover:border-orange-400 rounded-2xl"
          >
            {viewAllText}
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

