"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import bali from "../assets/bali.jpg";
import dhruv from "../assets/dhruv.jpg";
import yashpal from "../assets/yashpal.jpg";
import ShimmerText from "../components/ShimmerText";
import DecorativeUnderline from "../components/DecorativeUnderline";
import GridBg from "../components/GridBg";

const reviews = [
  {
    id: 1,
    quote:
      "The best place Reva Graphics, to have for website designing and my personal experience with them is really great. they are so cool clam and professional with there work & best in it.",
    name: "Mr. Baliyogeshwar Prajapati",
    rating: 5,
    image: bali,
    accent: "#FF5733",
  },
  {
    id: 2,
    quote:
      "Got a dynamic website designed through them and quite Satisfied with the end product. Found Mr. Neel to be responsive and helpful in all stages.",
    name: "Dhruv Bhadoriya",
    rating: 5,
    image: dhruv,
    accent: "#3B82F6",
  },
  {
    id: 3,
    quote:
      "Designing & digital marketing work executed by your team for my company is excellent performance... thanks to your team... Best wishes to Reva Graphics.",
    name: "Yashpaal Soni",
    rating: 5,
    image: yashpal,
    accent: "#f72b2b",
  },
];

function StarRating({ count, color }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="22"
          height="22"
          viewBox="0 0 24 24"
          className="transition-transform duration-300 hover:scale-110"
          style={{
            filter: `drop-shadow(0 2px 4px ${color}40)`,
          }}
        >
          <defs>
            <linearGradient
              id={`star-grad-${i}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={color} />
              <stop offset="100%" stopColor={color} stopOpacity="0.85" />
            </linearGradient>
          </defs>
          <path
            d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.6-6.3 4.6 2.3-7.4-6-4.6h7.6z"
            fill={`url(#star-grad-${i})`}
          />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewCarousel() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const goTo = useCallback(
    (index) => {
      if (isAnimating || index === active) return;
      setIsAnimating(true);

      const direction = index > active ? 1 : -1;
      const currentCard = cardsRef.current[active];
      const nextCard = cardsRef.current[index];

      const tl = gsap.timeline({
        onComplete: () => {
          setActive(index);
          setIsAnimating(false);
        },
      });

      tl.to(currentCard, {
        x: -700 * direction,
        opacity: 0,
        duration: 0.6,
        ease: "power3.inOut",
      });

      gsap.set(nextCard, { x: 700 * direction, opacity: 0 });
      tl.to(
        nextCard,
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.35",
      );
    },
    [active, isAnimating],
  );

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        const next = (active + 1) % reviews.length;
        goTo(next);
      }
    }, 6500);

    return () => clearInterval(interval);
  }, [active, goTo, isAnimating]);

  return (
    <div className="px-4 sm:px-6">
      <GridBg gridSize={80} lineColor="#F0EDE8" bgColor="#fff">
        <div className="max-w-5xl mx-auto py-12 md:py-20">
          <div className="text-center mb-8 md:mb-14">
            <h2 className="text-3xl z-[60] sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              What Our Prestigious <ShimmerText>Clients</ShimmerText> Say...
            </h2>
            <DecorativeUnderline
              width="360px"
              className="mt-8 lg:mt-8 mx-auto md:w-[320px]"
              centerColor="#3B82F6"
            />
          </div>

          {/* Carousel Container */}
          <div
            ref={containerRef}
            className="relative flex min-h-[680px] items-center justify-center overflow-hidden sm:min-h-[620px] md:min-h-[480px] lg:min-h-[500px]"
          >
            {reviews.map((review, idx) => (
              <div
                key={review.id}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                className={`absolute w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 ${
                  idx === active ? "z-20" : "z-10"
                }`}
                style={{ opacity: idx === active ? 1 : 0 }}
              >
                {/* Image Side - Fixed */}
                <div className="relative w-full md:w-5/12 shrink-0">
                  <div className="relative aspect-[4/3] md:aspect-auto md:h-full md:min-h-[420px] overflow-hidden">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 42vw"
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                      priority={idx === 0}
                    />
                    {/* Soft gradient for better text readability on mobile */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent md:hidden" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:w-7/12 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <StarRating count={review.rating} color={review.accent} />

                    <p className="text-[1.05rem] sm:text-[1.1rem] leading-relaxed mt-6 text-gray-700">
                      &quot;{review.quote}&quot;
                    </p>

                    <div className="mt-8 md:mt-10">
                      <p className="font-semibold text-lg md:text-xl text-gray-900">
                        {review.name}
                      </p>
                    </div>
                  </div>

                  {/* Accent Bar */}
                  <div
                    className="h-1.5 w-16 rounded-full mt-8 md:mt-auto"
                    style={{ backgroundColor: review.accent }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Arrow Buttons */}
          <div className="flex justify-center gap-6 mt-6 md:mt-8">
            <button
              onClick={() =>
                goTo((active - 1 + reviews.length) % reviews.length)
              }
              className="w-12 h-12 rounded-full border border-gray-300 hover:border-gray-400 hover:bg-white flex items-center justify-center text-xl transition-all active:scale-95 shadow-sm"
            >
              ←
            </button>
            <button
              onClick={() => goTo((active + 1) % reviews.length)}
              className="w-12 h-12 rounded-full border border-gray-300 hover:border-gray-400 hover:bg-white flex items-center justify-center text-xl transition-all active:scale-95 shadow-sm"
            >
              →
            </button>
          </div>
        </div>
      </GridBg>
    </div>
  );
}