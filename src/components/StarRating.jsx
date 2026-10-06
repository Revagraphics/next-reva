'use client';
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import bali from "../assets/bali.jpg";
import dhruv from "../assets/dhruv.jpg";
import yashpal from "../assets/yashpal.jpg";
import umesh from "../assets/umesh.jpg";
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
    accent: "#8B5CF6",
  },
  {
    id: 5,
    quote:
      "Best website designing & development service provided by reva graphics to us. Reva Graphics is an excellent web design and development company...",
    name: "Mr. Umesh",
    rating: 5,
    image: umesh,
    accent: "#10B981",
  },
];

function StarRating({ count, color }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill={color}>
          <path d="M10 1l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.27l-4.78 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z" />
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

  const goTo = useCallback((index) => {
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
  }, [active, isAnimating]);

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
    <div className="min-h-screen  px-4 sm:px-6">
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

          {/* Carousel Container - More Responsive Height */}
          <div
            ref={containerRef}
            className="relative min-h-[520px] md:min-h-[560px] lg:min-h-[580px] flex items-center justify-center overflow-hidden"
          >
            {reviews.map((review, idx) => (
              <div
                key={review.id}
                ref={(el) => (cardsRef.current[idx] = el)}
                className={`absolute w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 ${
                  idx === active ? "z-20" : "z-10"
                }`}
                style={{ opacity: idx === active ? 1 : 0 }}
              >
                {/* Image Side */}
                <div className="md:w-5/12 relative">
                  <div className="relative aspect-[4/3] md:aspect-auto md:h-full bg-gray-100 flex items-center justify-center">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 42vw"
                      className="w-full h-full object-contain md:object-cover transition-transform duration-700"
                    />
                  </div>
                  {/* Mobile Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent md:hidden" />
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

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-10 md:mt-12">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 border-2 ${
                  idx === active
                    ? "bg-white scale-125 shadow-md"
                    : "bg-transparent border-gray-400 hover:border-gray-600"
                }`}
                style={{
                  borderColor:
                    idx === active ? reviews[active].accent : undefined,
                }}
              />
            ))}
          </div>

          {/* Arrow Buttons */}
          {/* <div className="flex justify-center gap-6 mt-8 md:mt-10">
            <button
              onClick={() =>
                goTo((active - 1 + reviews.length) % reviews.length)
              }
              className="w-12 h-12 rounded-full border border-gray-300 hover:border-gray-400 hover:bg-white flex items-center justify-center text-xl transition-all active:scale-95"
            >
              ←
            </button>
            <button
              onClick={() => goTo((active + 1) % reviews.length)}
              className="w-12 h-12 rounded-full border border-gray-300 hover:border-gray-400 hover:bg-white flex items-center justify-center text-xl transition-all active:scale-95"
            >
              →
            </button>
          </div> */}
        </div>
      </GridBg>
    </div>
  );
}
