"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {
  FaArrowRight,
  FaChartLine,
  FaCloud,
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaPalette,
} from "react-icons/fa";

// Register the hook (recommended by GSAP for React)
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Interactive Services Showcase
 * Converted from HTML to dedicated React JSX component
 * Animations powered by GSAP
 *
 * Dependencies:
 * - react
 * - gsap
 * - @gsap/react
 * - tailwindcss (configured)
 * - font-awesome (CDN or package)
 * - Plus Jakarta Sans font
 */

const servicesData = [
  {
    id: 1,
    title: "Brand Identity",
    href: "/branding",
    tags: "Logo Design | Stationery Design",
    description:
      "Let's talk a story with different brand elements that unanimously define your brand personality. We craft iconic visual systems tailored for lasting recognition.",
    gradientClass: "gradient-red",
    icon: FaPalette,
    features: [
      "Logo & Visual Guidelines",
      "Stationery & Collateral Design",
      "Brand Messaging & Tone",
      "Packaging & Merchandising",
    ],
  },
  {
    id: 2,
    title: "Website Designing",
    href: "/designing",
    tags: "UI & UX Design | Dynamic Websites",
    description:
      "Customized, SEO-friendly, and user-centric websites that reflect your brand perfectly. Engaging UI/UX designs focused on conversion and retention.",
    gradientClass: "gradient-blue",
    icon: FaGlobe,
    features: [
      "UI/UX Prototyping",
      "Responsive Web Design",
      "SEO Optimized Architecture",
      "Interactive Animations",
    ],
  },
  {
    id: 3,
    title: "Website Development",
    href: "/development",
    tags: "eCommerce | Custom Portals",
    description:
      "Robust, scalable, and high-performance web applications tailored to your business needs. Built with modern tech stacks for maximum speed and security.",
    gradientClass: "gradient-teal",
    icon: FaCode,
    features: [
      "eCommerce Storefronts",
      "Custom Web Portals",
      "API Integrations",
      "Database Architecture",
    ],
  },
  {
    id: 4,
    title: "Digital Marketing",
    href: "/marketing",
    tags: "SEO | SMO | PPC",
    description:
      "360-degree digital strategies to boost your brand presence and engagement. Drive qualified traffic and maximize sales performance.",
    gradientClass: "gradient-orange",
    icon: FaChartLine,
    features: [
      "Search Engine Optimization",
      "Social Media Campaigns",
      "PPC & Paid Ads",
      "Analytics & Reporting",
    ],
  },
  {
    id: 5,
    title: "Application Development",
    href: "/application",
    tags: "Mobile Apps | Web Apps",
    description:
      "Powerful mobile and web applications designed for exceptional user experiences. Smooth performance across iOS, Android, and cross-platform web.",
    gradientClass: "gradient-purple",
    icon: FaMobileAlt,
    features: [
      "iOS & Android Native Apps",
      "Cross-Platform Flutter/React",
      "Progressive Web Apps",
      "Backend API Engine",
    ],
  },
  {
    id: 6,
    title: "Customize Software",
    href: "/cloud",
    tags: "Cloud Services | Hosting | SSL",
    description:
      "Tailored cloud solutions and custom software to give your business a competitive edge. Streamline operations with dedicated software systems.",
    gradientClass: "gradient-green",
    icon: FaCloud,
    features: [
      "Cloud Infrastructure",
      "Secure Web Hosting",
      "SSL & Cybersecurity",
      "Custom Enterprise ERP/CRM",
    ],
  },
];

// Gradient utility classes (add these to your global CSS or Tailwind config)
const gradientStyles = `
  .gradient-red { background: linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%); }
  .gradient-blue { background: linear-gradient(135deg, #00B4DB 0%, #0083B0 100%); }
  .gradient-green { background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); }
  .gradient-orange { background: linear-gradient(135deg, #FF8008 0%, #FFC837 100%); }
  .gradient-purple { background: linear-gradient(135deg, #7F00FF 0%, #E100FF 100%); }
  .gradient-teal { background: linear-gradient(135deg, #0575E6 0%, #00F666 100%); }

  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

`;

const ServicesShowcase = () => {
  const containerRef = useRef(null);
  const pinRef = useRef(null);
  const carouselViewportRef = useRef(null);
  const carouselTrackRef = useRef(null);
  const cardRefs = useRef([]);

  // Inject custom styles once
  useEffect(() => {
    const styleId = "services-showcase-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = gradientStyles;
      document.head.appendChild(style);
    }
  }, []);

  // Initial card entrance animation
  useGSAP(
    () => {
      const cards = cardRefs.current.filter(Boolean);
      if (cards.length > 0) {
        gsap.from(cards, {
          opacity: 0,
          y: 60,
          scale: 0.9,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
        });
      }
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      const viewport = carouselViewportRef.current;
      const track = carouselTrackRef.current;
      if (!viewport || !track || servicesData.length <= 3) return undefined;

      const media = gsap.matchMedia();
      media.add("(min-width: 1024px) and (min-height: 700px)", () => {
        const horizontalDistance = () =>
          Math.max(0, track.scrollWidth - viewport.clientWidth);

        if (horizontalDistance() <= 0) return undefined;

        gsap.to(track, {
          x: () => -horizontalDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: pinRef.current,
            pin: pinRef.current,
            start: "top top+=100",
            end: () => `+=${horizontalDistance()}`,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

      });

      return () => media.revert();
    },
    {
      scope: containerRef,
      dependencies: [],
    },
  );

  // Context-safe handlers for interactions
  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleCardHover = contextSafe((e, entering) => {
    const card = e.currentTarget;
    const iconWrapper = card.querySelector(".service-icon-wrapper");

    if (entering) {
      gsap.to(card, {
        y: -12,
        scale: 1.02,
        duration: 0.4,
        ease: "power2.out",
      });
      if (iconWrapper) {
        gsap.to(iconWrapper, {
          y: -20,
          scale: 1.15,
          rotation: 3,
          duration: 0.45,
          ease: "back.out(1.6)",
        });
      }
    } else {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.35,
        ease: "power2.inOut",
      });
      if (iconWrapper) {
        gsap.to(iconWrapper, {
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.35,
          ease: "power2.inOut",
        });
      }
    }
  });

  return (
    <section
      ref={containerRef}
      className="relative isolate bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8"
      style={{ color: "#1f2937" }}
    >
      <div
        ref={pinRef}
        className="services-showcase-pin relative mx-auto flex min-h-155 w-full max-w-7xl flex-col justify-between text-gray-800 lg:min-h-0"
      >
        <header className="z-10 flex flex-col justify-between gap-5 border-b border-gray-100 bg-white py-6 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-pink-600">
              What we do
            </p>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Services for your next stage
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600">
              Explore the expertise that turns your ideas into lasting results.
            </p>
          </div>

        </header>

        <div
          className="relative flex min-h-0 flex-1 flex-col justify-center overflow-hidden px-4 py-8 md:px-10 md:py-4"
        >

          {/* CAROUSEL TRACK */}
          <div
            ref={carouselViewportRef}
            className="services-showcase-viewport no-scrollbar -mx-4 overflow-x-auto px-4 py-12 scroll-smooth md:mx-0 md:px-0 md:py-12"
          >
            <div ref={carouselTrackRef} className="flex w-max gap-6">
              {servicesData.map((service, index) => {
                  const ServiceIcon = service.icon;
                  return (
                    <Link
                      key={service.id}
                      href={service.href}
                      ref={(el) => (cardRefs.current[index] = el)}
                      className="service-card service-showcase-card group cursor-pointer rounded-3xl focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-pink-500"
                      aria-label={`View ${service.title} services`}
                      onMouseEnter={(e) => handleCardHover(e, true)}
                      onMouseLeave={(e) => handleCardHover(e, false)}
                    >
                      <div
                        className={`${service.gradientClass} relative flex h-full min-h-97.5 flex-col justify-between overflow-visible rounded-2xl p-6 pt-12 text-white`}
                      >
                        {/* Floating Icon */}
                        <div className="service-icon-wrapper absolute -top-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-2xl border border-white/70 bg-white/90 text-3xl text-gray-800 backdrop-blur-md">
                          <ServiceIcon
                            aria-hidden="true"
                            className="text-gray-800 transition-colors group-hover:text-pink-500"
                          />
                        </div>

                        {/* Title & Tags */}
                        <div className="mt-8 text-center">
                          <h3 className="text-2xl font-extrabold tracking-tight">
                            {service.title}
                          </h3>
                          <p className="mt-2 inline-block rounded-full bg-black/10 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur-sm">
                            {service.tags}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="my-4 line-clamp-3 text-center text-xs leading-relaxed text-white/90">
                          {service.description}
                        </p>

                        {/* Read More Button */}
                        <div className="pt-2">
                          <div className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all group-hover:bg-white group-hover:text-gray-900">
                            <span>Read More</span>
                            <FaArrowRight
                              aria-hidden="true"
                              className="ml-2 inline transition-transform group-hover:translate-x-1"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>

          
        </div>

        
      </div>
    </section>
  );
};

export default ServicesShowcase;
