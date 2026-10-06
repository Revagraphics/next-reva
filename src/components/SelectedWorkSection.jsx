'use client';
import Image from 'next/image'
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import portfolio1 from "../assets/portfolio-1.jpg";
import portfolio2 from "../assets/portfolio-2.jpg";
import portfolio3 from "../assets/portfolio-3.jpg";
import portfolio4 from "../assets/portfolio-4.jpg";
import portfolio5 from "../assets/portfolio-5.jpg";
import Link from "next/link";
import ShimmerText from "./ShimmerText";

const projects = [
  {
    id:1,
    img: portfolio1,
    tag: "Website UI Design",
    title: "Creative and minimal dance studio website",
  },
  {
    id:2,
    img: portfolio2,
    tag: "UX, UI, Web Development",
    title: "Creative and worldwide level development",
  },
  {
    id:3,
    img: portfolio3,
    tag: "UX, UI, Graphic Design",
    title: "Furniture ios app kit design development",
  },
  {
    id:4,
    img: portfolio4,
    tag: "UX, UI, Graphic Design",
    title: "Furniture ios app kit design development",
  },
  {
    id:5,
    img: portfolio5,
    tag: "UX, UI, Web Development",
    title: "Innovative web application design",
  }
];

export default function SelectedWork() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(projects.length);

  // Clone items for infinite illusion
  const loopData = [...projects, ...projects, ...projects];

  useEffect(() => {
    const cardWidth = 340; // width + gap

    gsap.set(trackRef.current, {
      x: -projects.length * cardWidth,
    });

  }, []);

  const slideTo = (newIndex) => {
    const cardWidth = 340;

    gsap.to(trackRef.current, {
      x: -newIndex * cardWidth,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => {
        // Infinite loop reset
        if (newIndex >= projects.length * 2) {
          gsap.set(trackRef.current, {
            x: -projects.length * cardWidth,
          });
          setIndex(projects.length);
        }

        if (newIndex < projects.length) {
          gsap.set(trackRef.current, {
            x: -projects.length * cardWidth,
          });
          setIndex(projects.length);
        }
      },
    });

    setIndex(newIndex);
  };

  const next = () => {
    slideTo(index + 1);
  };

  const prev = () => {
    slideTo(index - 1);
  };

  return (
    <section className="bg-[#fddbc9] text-zinc-900 py-20 overflow-hidden">
      <div className="max-w-[90%] mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-4xl font-bold leading-tight">
            Our <ShimmerText>Portfolio</ShimmerText> Showcase
          </h2>

          <Link
            href="/portfolio"
            className="flex items-center gap-2 text-sm font-medium hover:text-[#ff6726] transition"
          >
            View All
            <FaArrowRight size={18} />
          </Link>
        </div>

        {/* Slider */}
        <div className="relative mt-14 overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6"
          >
            {loopData.map((item) => (
              <div
                key={item.id}
                className="min-w-[320px] bg-[#fff] backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-gray-700"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="w-full h-52 object-cover"
                  />
                </div>

                <div className="p-5">
                  <p className="text-sm text-gray-400 mb-2 tracking-wide">
                    {item.tag}
                  </p>
                  <h4 className="text-lg font-semibold cursor-pointer leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#fff] p-3 rounded-full hover:bg-[#fff] hover:text-[#ff6726] transition z-10"
          >
            <FaArrowLeft size={18} />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#fff] p-3 rounded-full hover:bg-[#fff] hover:text-[#ff6726] transition z-10"
          >
            <FaArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}