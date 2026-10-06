'use client';

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Image from 'next/image'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShimmerText from "@/components/ShimmerText";
import GridBg from "@/components/GridBg";
import bali from "@/assets/bali.jpg";
import dhruv from "@/assets/dhruv.jpg";
import yashpal from "@/assets/yashpal.jpg";
import vineet from "@/assets/vineet.jpg";
// portfolio
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import client1 from "@/assets/sony.jpg";
import client2 from "@/assets/drvikas.jpg";
import client3 from "@/assets/umesh.jpg";
import client4 from "@/assets/pankaj.jpg";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    text: "The best place Reva Graphics, to have for website designing and my personal experience with them is really great. they are so cool clam and professional with there work & best in it. Just want say thanks to both Neel and Vikas for making a beautiful website for us.",
    name: "Mr. Baliyogeshwar Prajapati",
    role: "Bali Dance Studio",
    img: bali,
  },
  {
    id: 2,
    text: "Best website designing & development service provided by reva graphics to us. Reva Graphics is an excellent web design and development company...",
    name: "Mr. Vineet Kumar",
    role: "AVSR Kendra",
    img: vineet,
  },
  
  {
    id: 3,
    text: "Designing & digital marketing work executed by your team for my company is excellent performance... thanks to your team... Best wishes to Reva Graphics",
    name: "Yashpaal Soni",
    role: "UDEF",
    img: yashpal,
  },
  {
    id: 4,
    text: "Got a dynamic website designed through them and quite Satisfied with the end product. Found Mr. Neel to be responsive and helpful in all stages.",
    name: "Dhruv Bhadoriya",
    role: "MGlobelink",
    img: dhruv,
  },
  {
    id: 5,
    text: "They built an e-commerce website for my business. They are very responsive and professional able to solve my problems.",
    name: "Mr. Umesh Kumar",
    role: "Heavenox",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
  },
];

const portfolioData = [
  {
    id: 1,
    title: "Creative and minimal health care website",
    tags: "UX, UI, Graphic Design",
    image: portfolio1,
    link: "http://www.mdshealthcare.in/",
    client: "Dr. Sony Varmani",
    company: "MDS Healthcare",
    clientImg: client1,
  },
  {
    id: 2,
    title: "Creative and worldwide level development",
    tags: "UX, UI, Web Development",
    image: portfolio2,
    link: "https://eternitiveherbals.com/",
    client: "Dr. Vikas Kumar",
    company: "Eternitive Herbals",
    clientImg: client2,
  },
  {
    id: 3,
    title: "Multi Vendor shopping ecommerce store",
    tags: "Web Development, E-commerce",
    image: portfolio3,
    link: "https://eternitiveherbals.com/",
    client: "Umesh Kumar",
    company: "Heavenox",
    clientImg: client3,
  },
  {
    id: 4,
    title: "Creative and minimal IT Solution",
    tags: "IT Solution, Web Development",
    image: portfolio4,
    link: "http://raizlink.com/",
    client: "Pankaj Jha",
    company: "Raizlink",
    clientImg: client4,
  },
];

export default function Portfolio() {
  const [active, setActive] = useState(2); //

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 2500); // speed adjust kar sakte ho

    return () => clearInterval(interval);
  }, []);

  return (
    <>

    <div className="min-h-screen bg-[#fbf1ef] overflow-x-hidden">
      {/* ==================== CREATIVE WORK / PROJECT SHOWCASE SECTION ==================== */}
      <section className="pt-16 sm:pt-20 lg:pt-28 pb-20  lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <span className="text-orange-500 tracking-widest text-xs sm:text-sm font-semibold">
              CLIENT LOVE
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mt-3 sm:mt-4 text-[#30303c] leading-tight">
              What our <ShimmerText>clients say</ShimmerText>
            </h1>

            <p className="mt-4 sm:mt-6 text-zinc-500 text-sm sm:text-base lg:text-lg max-w-md mx-auto lg:mx-0">
              Real stories from businesses we&apos;ve helped grow online.
            </p>
          </div>

          {/* FAN CARDS */}
          <div className="lg:col-span-7 flex justify-center mt-10 lg:mt-0">
            <div className="relative w-65 sm:w-[320px] lg:w-95 h-105 sm:h-115 lg:h-125">
              {testimonials.map((t, i) => {
                const total = testimonials.length;
                let offset = i - active;

                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;

                const isVisible = Math.abs(offset) <= 2;

                return (
                  <div
                    key={t.id}
                    onClick={() => setActive(i)}
                    className="portfolio-fan-card absolute w-full h-full cursor-pointer flex items-end"
                    style={{
                      transformOrigin: "bottom center",
                      "--fan-x": `${offset * 80}px`,
                      "--fan-y": `${Math.abs(offset) * -25}px`,
                      "--fan-rotation": `${offset * 12}deg`,
                      "--fan-x-mobile": `${offset * 40}px`,
                      "--fan-y-mobile": `${Math.abs(offset) * -15}px`,
                      "--fan-rotation-mobile": `${offset * 8}deg`,
                      "--fan-scale": offset === 0 ? 1 : 0.9,
                      transition:
                        "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",

                      zIndex: 100 - Math.abs(offset),
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    {/* CARD */}
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-lg border border-zinc-100 h-full w-full flex flex-col justify-between hover:shadow-2xl transition">
                      <div>
                        <div className="text-4xl sm:text-5xl text-orange-200 mb-3">
                          “
                        </div>

                        <p className="text-zinc-700 text-xs sm:text-sm lg:text-[15px] leading-relaxed">
                          {t.text}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 sm:gap-4 mt-6">
                        <Image
                          src={t.img}
                          alt={t.name}
                          unoptimized={
                            typeof t.img === "string" &&
                            t.img.startsWith("https://randomuser.me/")
                          }
                          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl object-cover"
                        />

                        <div>
                          <h5 className="font-semibold text-sm sm:text-base text-zinc-900">
                            {t.name}
                          </h5>
                          <p className="text-orange-500 text-xs sm:text-sm">
                            {t.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          
        </div>
      </section>

      {/* ==================== CREATIVE WORK / PROJECT SHOWCASE SECTION ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-zinc-900 mb-4">
              Creative Work
            </h2>
            <p className="text-gray-500 text-sm sm:text-base lg:text-lg ">
              We have completed thousands of projects. Here are some of our most
              important works.
            </p>
          </div>

          {/* Portfolio Projects - Alternating Layout */}
          <div className="space-y-28">
            {portfolioData.map((item, index) => {
              const isReverse = index % 2 === 1;
              return (
                <div
                  key={item.id}
                  className={`grid lg:grid-cols-12 gap-12 items-center ${isReverse ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Image Side */}
                  <div
                    className={`lg:col-span-7 ${isReverse ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div className="overflow-hidden rounded-3xl group shadow-xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div
                    className={`lg:col-span-5 ${isReverse ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <p className="text-sm uppercase tracking-widest text-orange-600 font-medium mb-3">
                      {item.tags}
                    </p>

                    <h3 className="text-3xl font-semibold leading-tight text-zinc-900 mb-6">
                      {item.title}
                    </h3>

                    <a
                      href={item.link}
                      className="inline-flex items-center gap-2 text-black font-medium hover:gap-3 transition-all duration-300"
                    >
                      Live View <span>→</span>
                    </a>

                    {/* Client Info */}
                    <div className="mt-12 flex items-center gap-4">
                      <div className="w-12 h-12 bg-zinc-200 overflow-hidden  rounded-full shrink-0">
                        <Image src={item.clientImg} alt={item.client} />
                      </div>
                      <div>
                        <h5 className="font-semibold text-zinc-900">
                          {item.client}
                        </h5>
                        <p className="text-sm text-gray-500">{item.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
