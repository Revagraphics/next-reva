"use client";

import { useEffect, useState } from "react";

const words = ["India.", "Australia.", "Singapore.", "United kingdom."];

export default function RotatingText() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setWordIndex((currentIndex) => (currentIndex + 1) % words.length);
    }, 1900);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <span className="home-rotating-words text-transparent bg-clip-text bg-linear-to-r from-[#FF9800] to-[#E91E63]">
      <span className="home-rotating-measure" aria-hidden="true">
        United kingdom.
      </span>
      <span key={wordIndex} className="home-rotating-word" aria-live="off">
        {words[wordIndex]}
      </span>
    </span>
  );
}
