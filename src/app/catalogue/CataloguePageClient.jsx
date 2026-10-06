'use client';

// src/pages/CatalogueBrochure.jsx
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from 'next/image'
import gsap from "gsap";
import catalogue1 from "@/assets/catalogue2.png";
import catalogue2 from "@/assets/catalogue3.png";
import catalogue3 from "@/assets/catalogue4.png";
import ShimmerText from "@/components/ShimmerText";
import GridBg from "@/components/GridBg";
import { FaCut, FaTimes } from "react-icons/fa";

const PdfFlipBook = dynamic(() => import("@/components/PdfFlipBook"), {
  ssr: false,
  loading: () => (
    <div className="text-center text-sm text-neutral-500">
      Loading PDF viewer...
    </div>
  ),
});

export default function Catalogue() {
  const pageRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPdf) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPdf]);

  // Close modal on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedPdf(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".panel-fade",
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 1.3, ease: "power3.out" },
      );

      gsap.fromTo(
        ".list-row",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.12,
          delay: 0.25,
        },
      );

      gsap.fromTo(
        ".pdf-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.15,
        },
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // Only show files that are present in public/. Add new entries when their PDFs are uploaded.
  const pdfs = [
    {
      id: 1,
      title: "Aarika Lookbook 2026",
      description: "Spring / Summer Collection",
      cover:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800",
      pdfUrl: "/aarika.pdf",
      pages: 24,
    },
     {
      id: 2,
      title: "eezy chair 2026",
      description: "Spring / Summer Collection",
      cover:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800",
      pdfUrl: "/aarika_2.pdf",
      pages: 24,
    },
  ];

  const products = [
    {
      title: "Couture Lookbooks",
      type: "Digital & High-Finish Print",
      year: "2026",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800",
      desc: "Luxury fashion lookbooks with premium finishes",
    },
    {
      title: "Corporate Portfolios",
      type: "Minimal Archival Binding",
      year: "2025",
      image: catalogue2,
      desc: "Professional corporate identity presentations",
    },
    {
      title: "Artisan Product Catalogs",
      type: "Asymmetric Editorial Layouts",
      year: "2026",
      image: catalogue1,
      desc: "Handcrafted product storytelling",
    },
    {
      title: "Architectural Monographs",
      type: "Hardbound Gallery Editions",
      year: "2024",
      image: catalogue3,
      desc: "Architectural photography & documentation",
    },
  ];

  return (
    <>

      <div
        ref={pageRef}
        className="bg-white min-h-screen selection:bg-orange-200"
      >
        {/* ====================================================== */}
        {/* 1. INTERACTIVE PDF GALLERY (FIRST SECTION)              */}
        {/* ====================================================== */}
        <section className="py-20 lg:py-28 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block uppercase tracking-[0.3em] text-xs text-orange-600 font-semibold mb-4">
                Digital Experience
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4">
                View Our Catalogue Work..
              </h2>
              <p className="text-neutral-600 max-w-xl mx-auto text-lg font-light">
                 &quot;catalogue work that stands out&quot;.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {pdfs.map((pdf) => (
                <button
                  key={pdf.id}
                  onClick={() => setSelectedPdf(pdf)}
                  className="pdf-card group text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:border-neutral-200"
                >
                  {/* Cover */}
                  <div className="relative aspect-3/4 overflow-hidden bg-neutral-100">
                    <Image
                      src={pdf.cover}
                      alt={pdf.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-500 bg-white text-neutral-900 px-7 py-3 rounded-full text-sm font-medium shadow-xl">
                        Open Book
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-neutral-900 mb-1 group-hover:text-orange-600 transition-colors">
                      {pdf.title}
                    </h3>
                    <p className="text-sm text-neutral-500 mb-3 font-light">
                      {pdf.description}
                    </p>
                    <span className="inline-block text-xs tracking-widest uppercase text-neutral-400">
                      {pdf.pages} pages
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>


        {/* ====================        =========================== */}
        {/* 2. EDITORIAL SECTION (your original layout, refined)    */}
        {/* ====================        =========================== */}

        <section className="min-h-screen bg-white text-neutral-900">
          <GridBg gridSize={80} lineColor="#F0EDE8" bgColor="#fff">
            <div className="flex flex-col lg:flex-row min-h-screen">
              {/* Left Panel */}
              <div className="panel-fade lg:w-[40%] px-6 py-24 md:px-12 lg:px-16 flex flex-col justify-between lg:sticky lg:top-0 lg:h-screen border-b lg:border-b-0 lg:border-r border-neutral-200">
                <div>
                  <span className="inline-block uppercase tracking-[0.3em] text-sm text-orange-600 font-semibold mb-4">
                    Printed System Architectures
                  </span>
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-neutral-900">
                    Curating page <ShimmerText>hierarchies.</ShimmerText>
                  </h1>
                </div>

                <div className="mt-12 lg:mt-0">
                  <p className="text-neutral-600 font-light text-xl leading-relaxed max-w-sm">
                    We translate digital ecosystems into heavy, weighted page
                    spreads that express authority and scale.
                  </p>
                </div>
              </div>

              {/* Right Side - List */}
              <div className="lg:w-[60%] px-6 py-12 lg:py-24 md:px-12 lg:px-20 relative">
                <div className="space-y-0 relative z-10">
                  {products.map((prod, idx) => (
                    <div
                      key={idx}
                      className="list-row group border-b border-neutral-200 py-10 flex flex-col sm:flex-row sm:items-center justify-between cursor-pointer transition-all duration-300 hover:border-orange-300"
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="flex items-start gap-6">
                        <span className="font-mono text-xs text-neutral-400 pt-1.5 transition-colors group-hover:text-orange-600">
                          0{idx + 1}
                        </span>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-light text-neutral-900 tracking-tight group-hover:text-orange-600 transition-colors duration-300">
                            {prod.title}
                          </h2>
                          <p className="text-sm text-neutral-500 mt-2 font-light">
                            {prod.type}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:text-right flex items-center justify-between sm:justify-end gap-12">
                        <span className="font-mono text-xs text-neutral-400">
                          {prod.year}
                        </span>
                        <span className="text-neutral-400 group-hover:text-orange-500 transition-colors duration-300 hidden sm:block text-xl">
                          →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating Preview Image */}
                <div
                  className={`fixed lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2 w-72 h-96 lg:w-80 lg:h-105 bg-white shadow-2xl border border-neutral-200 rounded-2xl overflow-hidden pointer-events-none z-20 transition-all duration-500 ${
                    hoveredIndex !== null
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  {hoveredIndex !== null && (
                    <>
                      <Image
                        src={products[hoveredIndex].image}
                        alt={products[hoveredIndex].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h4 className="text-xl font-light mb-1">
                          {products[hoveredIndex].title}
                        </h4>
                        <p className="text-sm opacity-90 font-light">
                          {products[hoveredIndex].desc}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Bottom Graphic Card */}
                <div className="list-row mt-24 h-85 bg-neutral-100 relative overflow-hidden rounded-3xl">
                  <Image
                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-900/70 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <h4 className="text-xl font-serif font-light mb-1">
                      The Art of Editorial Print
                    </h4>

                    <p className="text-sm opacity-80 font-light">
                      Available for production booking globally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </GridBg>
        </section>
      </div>



      {/* ====================================================== */}
      {/* MODAL - PDF FLIP BOOK                                  */}
      {/* ====================================================== */}
      {selectedPdf && (
        <div className="fixed inset-0 z-10000 flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            onClick={() => setSelectedPdf(null)}
          />

          {/* Modal  height is 90vh and should be cover whole pdf */}
          <div className="relative w-full max-w-7xl h-[min(94vh,980px)] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-neutral-100 shrink-0">
              <div>
                <h3 className="font-serif text-2xl text-neutral-900">{selectedPdf.title} </h3>
                <p className="text-sm text-neutral-500 mt-0.5 font-light"> {selectedPdf.description} </p>
              </div>

              <button
                onClick={() => setSelectedPdf(null)}
                className="p-2.5 rounded-full hover:bg-neutral-100 transition text-neutral-500 hover:text-neutral-900"
                aria-label="Close"
              >
                <FaTimes size={22} />
              
              </button>
            </div>

            {/* Flip Book */}
            <div className="flex flex-1 min-h-0 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,#fff_0%,#f5f5f4_72%)] py-4 px-2 md:px-6">
              <PdfFlipBook pdfUrl={selectedPdf.pdfUrl} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
