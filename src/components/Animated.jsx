'use client';

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
export default function Animated({
  children,
  as: Tag = "h1",
  className = "",
  stagger = 0.05,
  duration = 0.8,
  delay = 0.2,
  y = 80,
  ...props
}) {
  const ref = useRef(null);

  // convert text safely
  const text = typeof children === "string" ? children : "new ";
  const letters = text.split("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const spans = ref.current.querySelectorAll("span");

      gsap.from(spans, {
        y,
        opacity: 0,
        duration,
        stagger,
        ease: "power3.out",
        delay,
      });
    }, ref);

    return () => ctx.revert(); // ✅ cleanup
  }, [delay, duration, stagger, y]);

  return (
    <Tag ref={ref} className={`overflow-hidden ${className}`} {...props}>
      {letters.map((letter, index) => (
        <span key={index} className="inline-block will-change-transform">
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </Tag>
  );
}
