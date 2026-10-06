'use client';

// components/AnimatedStat.jsx
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedStat ({ label, end, suffix = "" }) {
  const numberRef = useRef(null);

  useEffect(() => {
    const el = numberRef.current;
    if (!el) return;

    // Kill any previous animation/scrolltrigger on this element
    ScrollTrigger.getById(el.dataset.stId)?.kill();

    const animation = gsap.fromTo(
      el,
      { innerText: 0 },
      {
        innerText: end,
        duration: 2.2,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
          toggleActions: "play none none none",
        },
        onUpdate: function () {
          el.innerText = Math.floor(this.targets()[0].innerText) + suffix;
        },
      }
    );

    // Store ScrollTrigger ID on the element for cleanup
    if (animation.scrollTrigger) {
      el.dataset.stId = animation.scrollTrigger.id;
    }

    return () => {
      animation.kill();
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
    };
  }, [end, suffix]);

  return (
    <div>
      <p className="text-sm text-gray-500 font-medium">{label}</p>
      <p 
        ref={numberRef} 
        className="text-5xl font-bold text-orange-500 mt-1"
      >
        0{suffix}
      </p>
    </div>
  );
};

