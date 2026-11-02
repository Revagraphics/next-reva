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
        <div className="columns-1 min-[420px]:columns-2 gap-3 min-[420px]:gap-4 md:columns-3 md:gap-5 xl:columns-4">
          {works.map((work, index) => (
            <button
              key={work.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${work.title}`}
              className="group mb-3 inline-block w-full break-inside-avoid overflow-hidden rounded-[1.25rem] border border-gray-200 bg-white p-1.5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 min-[420px]:mb-4 md:mb-5  sm:rounded-[1.5rem]"
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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-end bg-white/30 p-3 backdrop-blur-md sm:p-6 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeWork.title} image viewer`}
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
        >
          {/* <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close image viewer"
            className="absolute right-3 top-3 z-20 rounded-full bg-black/50 px-3 py-1 text-2xl leading-none text-white hover:bg-black/70 sm:right-5 sm:top-5 sm:px-4 sm:py-2"
          >
            &times;
          </button> */}

          {works.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-xl text-white hover:bg-black/70 sm:left-5 sm:px-4 sm:py-3 sm:text-2xl md:left-8"
              >
                &#8592;
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next image"
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-xl text-white hover:bg-black/70 sm:right-5 sm:px-4 sm:py-3 sm:text-2xl md:right-8"
              >
                &#8594;
              </button>
            </>
          )}
          <div className="relative h-[min(72svh,700px)] max-h-[calc(100svh-5rem)] w-full max-w-5xl">
            <div className="absolute inset-0 overflow-hidden rounded-[1.25rem]">
              <Image
                src={activeWork.image}
                alt={activeWork.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <p className="absolute -bottom-6 left-0 right-0 truncate px-12 text-center text-xs font-semibold text-gray-900 sm:-bottom-8 sm:text-sm md:text-base">
              {activeWork.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
