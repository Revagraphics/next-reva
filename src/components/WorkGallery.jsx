"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const imageRatios = [
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-[5/4]",
  "aspect-[4/3]",
  "aspect-[2/3]",
  "aspect-[5/4]",
];

export default function WorkGallery({ works, name }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeWork = activeIndex === null ? null : works[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index + 1) % works.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => (index - 1 + works.length) % works.length);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, works.length]);

  function showPrevious() {
    setActiveIndex((index) => (index - 1 + works.length) % works.length);
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % works.length);
  }

  return (
    <section className="bg-gray-50 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-orange-600">
              Selected work
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Our {name} Prints
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-gray-500 sm:text-right">
            A collection of ideas, details, and finished prints. Select any
            image to take a closer look.
          </p>
        </div>
        <div className="columns-2 gap-4 md:columns-3 md:gap-5 xl:columns-4">
          {works.map((work, index) => (
            <button
              key={work.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${work.title}`}
              className="group mb-4 inline-block w-full break-inside-avoid overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white p-1.5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 md:mb-5"
            >
              <span
                className={`relative block overflow-hidden rounded-[1.15rem] bg-gray-100 ${imageRatios[index % imageRatios.length]}`}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 p-3 text-sm font-semibold text-white sm:p-4 sm:text-base">
                  {work.title}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeWork && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeWork.title} image viewer`}
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 px-4 py-2 text-2xl text-white hover:bg-white/20"
          >
            &times;
          </button>
          {works.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous image"
                className="absolute left-3 z-10 rounded-full bg-white/10 px-4 py-3 text-2xl text-white hover:bg-white/20 sm:left-8"
              >
                &#8592;
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next image"
                className="absolute right-3 z-10 rounded-full bg-white/10 px-4 py-3 text-2xl text-white hover:bg-white/20 sm:right-8"
              >
                &#8594;
              </button>
            </>
          )}
          <div className="relative h-[75vh] w-full max-w-5xl">
            <Image
              src={activeWork.image}
              alt={activeWork.title}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
            <p className="absolute -bottom-8 left-0 right-0 text-center text-sm font-medium text-white sm:-bottom-10 sm:text-base">
              {activeWork.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
