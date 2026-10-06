'use client';
import Image from 'next/image'
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const reviews = [
  {
    id: 1,
    name: "Aman Sharma",
    text: "Amazing service! The design quality and support were top-notch.",
    image: "https://i.pravatar.cc/100?img=1",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Verma",
    text: "Very professional team. My website looks stunning now.",
    image: "https://i.pravatar.cc/100?img=2",
    rating: 4,
  },
  {
    id: 3,
    name: "Rahul Mehta",
    text: "Highly recommended! Smooth process and great communication.",
    image: "https://i.pravatar.cc/100?img=3",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha Kapoor",
    text: "Loved the creativity and attention to detail.",
    image: "https://i.pravatar.cc/100?img=4",
    rating: 5,
  },
];

export default function ReviewSlider() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const allReviews = [...reviews, ...reviews]; // loop trick

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children);

    if (!cards.length) return;

    // calculate width of one set
    const getWidth = () => {
      return cards.slice(0, reviews.length).reduce((acc, el) => {
        return acc + el.offsetWidth + 24; // gap-6
      }, 0);
    };

    let totalWidth = getWidth();

    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => `${Number.parseFloat(x) % totalWidth}px`,
      },
    });

    // hover slow effect
    const container = containerRef.current;

    const slow = () => tween.timeScale(0.3);
    const normal = () => tween.timeScale(2);

    container.addEventListener("mouseenter", slow);
    container.addEventListener("mouseleave", normal);

    // resize fix
    const handleResize = () => {
      totalWidth = getWidth();
      tween.invalidate();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      tween.kill();
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mouseenter", slow);
      container.removeEventListener("mouseleave", normal);
    };
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[90%] mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Client Reviews
          </h2>
          <p className="text-gray-500 mt-2">
            What people say about us
          </p>
        </div>

        {/* Slider */}
        <div ref={containerRef} className="relative overflow-hidden">

          {/* Gradient fade */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-6 will-change-transform"
          >
            {allReviews.map((review) => (
              <div
                key={review}
                className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
              >
                {/* Top */}
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <h4 className="font-semibold text-gray-800">
                    {review.name}
                  </h4>
                </div>

                {/* Text */}
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  &quot;{review.text}&quot;
                </p>

                {/* Stars */}
                <div className="flex gap-1 text-yellow-400 text-lg">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      {i < review.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
