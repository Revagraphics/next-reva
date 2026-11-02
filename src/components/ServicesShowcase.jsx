"use client";

import { useRef } from "react";
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

gsap.registerPlugin(useGSAP, ScrollTrigger);

const servicesData = [
  {
    id: 1,
    title: "Brand Identity",
    href: "/branding",
    tags: "Logo Design | Stationery Design",
    description:
      "Let's talk a story with different brand elements that unanimously define your brand personality. We craft iconic visual systems tailored for lasting recognition.",
    gradient: "from-pink-200 via-purple-200 to-cyan-200",
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
    gradient: "from-cyan-200 via-blue-200 to-purple-200",
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
    gradient: "from-emerald-200 via-teal-200 to-cyan-200",
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
    gradient: "from-amber-200 via-orange-200 to-red-200",
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
    gradient: "from-rose-200 via-pink-200 to-violet-200",
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
    gradient: "from-sky-200 via-blue-200 to-indigo-200",
    icon: FaCloud,
    features: [
      "Cloud Infrastructure",
      "Secure Web Hosting",
      "SSL & Cybersecurity",
      "Custom Enterprise ERP/CRM",
    ],
  },
];

const ServicesShowcase = () => {
  const containerRef = useRef(null);
  const pinRef = useRef(null);
  const carouselViewportRef = useRef(null);
  const carouselTrackRef = useRef(null);

  // Horizontal scroll + pin (desktop only)
  useGSAP(
    () => {
      const viewport = carouselViewportRef.current;
      const track = carouselTrackRef.current;
      if (!viewport || !track || servicesData.length <= 3) return;

      const media = gsap.matchMedia();

      media.add("(min-width: 1024px)", () => {
        const getDistance = () =>
          Math.max(0, track.scrollWidth - viewport.clientWidth);

        if (getDistance() <= 0) return;

        gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: pinRef.current,
            pin: true,
            start: "top top+=128",
            end: () => `+=${getDistance()}`,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            snap: {
              snapTo: 1 / (Math.ceil(servicesData.length / 3) - 1 || 1),
              duration: { min: 0.2, max: 0.5 },
              ease: "power1.inOut",
            },
          },
        });
      });

      return () => media.revert();
    },
    { scope: containerRef },
  );

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
          y: -18,
          scale: 1.12,
          rotation: 4,
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
    >
      <div
        ref={pinRef}
        className="services-showcase-pin relative mx-auto flex min-h-[620px] w-full max-w-7xl flex-col justify-between text-gray-800"
      >
        {/* Header */}
        <header className="z-10 flex flex-col justify-between gap-5 border-b border-gray-100 bg-white py-6 sm:flex-row sm:items-center">
          <div>
            {/* <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-pink-600">
              What we do
            </p> */}
            <h2 className="text-3xl font-bold text-zinc-900 lg:text-5xl">
              See what we can do for you
            </h2>
            <p className="mt-2 text-[17px] leading-relaxed text-slate-600 sm:text-lg">
              Explore the expertise that turns your ideas into lasting results.
            </p>
          </div>
        </header>

        {/* Carousel */}
        <div className="services-showcase-carousel relative flex min-h-0 flex-1 flex-col justify-center overflow-hidden px-4 py-8 md:px-10">
          <div
            ref={carouselViewportRef}
            className="services-showcase-viewport no-scrollbar -mx-4 overflow-x-auto px-4 pt-16 pb-8 scroll-smooth md:mx-0 md:px-0 lg:overflow-x-hidden"
          >
            <div ref={carouselTrackRef} className="flex w-max gap-6">
              {servicesData.map((service) => {
                const ServiceIcon = service.icon;
                return (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="service-card service-showcase-card group flex-shrink-0 cursor-pointer rounded-3xl
                               w-[300px] sm:w-[320px] lg:w-[340px]
                               focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-pink-500"
                    aria-label={`View ${service.title} services`}
                    onMouseEnter={(e) => handleCardHover(e, true)}
                    onMouseLeave={(e) => handleCardHover(e, false)}
                  >
                    <div
                      className={`${service.gradient} relative flex h-full min-h-[390px] flex-col justify-between overflow-visible rounded-2xl p-6 pt-14 text-white`}
                    >
                      {/* Floating Icon */}
                      <div className="service-icon-wrapper absolute -top-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-2xl border border-white/70 bg-white/90 text-3xl text-gray-800 backdrop-blur-md shadow-lg">
                        <ServiceIcon
                          aria-hidden="true"
                          className="text-gray-800 transition-colors duration-300 group-hover:text-pink-500"
                        />
                      </div>

                      {/* Title & Tags */}
                      <div className="mt-6 text-center">
                        <h3 className="text-2xl font-extrabold tracking-tight">
                          {service.title}
                        </h3>
                        <p className="mt-2 inline-block rounded-full bg-black/15 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-sm">
                          {service.tags}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="my-4 line-clamp-3 text-center text-sm leading-relaxed text-white/90">
                        {service.description}
                      </p>

                      {/* Read More Button */}
                      <div className="pt-2">
                        <div className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-gray-900">
                          <span>Read More</span>
                          <FaArrowRight
                            aria-hidden="true"
                            className="ml-2 inline transition-transform duration-300 group-hover:translate-x-1"
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
