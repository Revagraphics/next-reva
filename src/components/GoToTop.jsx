'use client';

import { useEffect, useState } from "react";

export default function GoToTop(){
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
        title="Go-top"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[9999] bg-[#f97316] text-black px-4 py-2 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
        >
          ↑
        </button>
      )}
    </>
  );
};


