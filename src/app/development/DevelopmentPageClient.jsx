'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image'
import { FaRedo, FaUsers, FaTachometerAlt } from "react-icons/fa";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

import web from "@/assets/web.png";
import web2 from "@/assets/web2.png";
import client1 from "@/assets/sony.jpg";
import client2 from "@/assets/drvikas.jpg";
import client3 from "@/assets/umesh.jpg";
import client4 from "@/assets/pankaj.jpg";
import ShimmerText from "@/components/ShimmerText";
import GridBg from "@/components/GridBg";

export default function Development() {
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
  return (
    <>

      <div className="min-h-screen bg-[#fbf1ef]">

        <GridBg gridSize={80} lineColor="#f5f1ed" bgColor="#d2edff">
          
        <section className="pt-20 mt-6 pb-32 overflow-hidden">
          <div className="max-w-[90%] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center pt-16">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="py-2.5 text-indigo-600 text-xl lg:text-2xl font-semibold tracking-wide">
                    India&apos;s highest rated web development company
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#30303c]">
                  We build a unique Web Portals &{" "}
                  <ShimmerText> CRM Softwares </ShimmerText>
                </h2>

                <p className="text-lg lg:text-xl text-[#30303c] leading-relaxed max-w-lg">
                  Hire website developers from us to establish a strong online
                  presence that will concrete your path toward success.
                </p>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-linear-to-r from-orange-500 to-pink-500 hover:bg-orange-600 text-white font-semibold text-lg px-10 py-5 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Let’s discuss
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>

              {/* Right Image */}
              <div className="flex justify-center lg:justify-center">
                <div className="relative">
                  <div className="absolute -inset-6 bg-linear-to-br from-orange-400/30 to-purple-400/30 rounded-[3rem] -rotate-6 blur-xl" />
                  <Image
                    src={web}
                    alt="Content Marketing"
                    className="relative z-10 w-full max-w-md lg:max-w-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-16 pb-20 md:pt-24 md:pb-32 bg-white overflow-hidden">
          <div className="max-w-[90%] mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Image / Visual */}
              <div className="flex justify-start lg:justify-end pt-8 lg:pt-0">
                <div className="relative w-full max-w-lg lg:max-w-xl">
                  {/* Decorative Background */}

                  <div className="absolute -inset-8 md:-inset-12 bg-linear-to-br from-orange-400/20 via-amber-400/20 to-purple-400/20 rounded-[3.5rem] -rotate-6 blur-2xl" />

                  {/* Main Image */}
                  <Image
                    src={web2}
                    alt="Web Application and CRM Development"
                    className="relative z-10 w-full h-auto rounded-3xl  
                       object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />

                  {/* Subtle shine/overlay effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent rounded-3xl pointer-events-none z-20" />
                </div>
              </div>

              {/* Right Content */}
              <div className="space-y-8 lg:pt-8">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#30303c]">
                  We offer <ShimmerText>Web Applications</ShimmerText> and{" "}
                  <ShimmerText>CRM Software</ShimmerText> Solutions
                </h1>

                <div className="space-y-6 text-[#555] text-[17px] md:text-lg leading-relaxed">
                  <p>
                    Website Development is an essential building block of a
                    client’s online presence. Without a good Website, you might
                    miss out on opportunities coming your way as most people
                    look for businesses online.
                  </p>

                  <p>
                    Website Development offers you customized designs that
                    convey the vision of your business, through carefully
                    crafted images and infographics. As a business owner, you
                    can collaborate with our team of professional website
                    Developers and create creative dynamic web portals &
                    software that will suit your business requirement.
                  </p>

                  
                </div>

                <div className="pt-4">
                  <ul className="space-y-4">
                    {/* Item 1 */}
                    <li className="flex items-center gap-3 text-[#30303c] font-bold leading-tight">
                      <FaRedo className="text-orange-500 shrink-0" size={20} />
                      <span>Fast landing Pages</span>
                    </li>

                    {/* Item 2 */}
                    <li className="flex items-center gap-3 text-[#30303c] font-bold leading-tight">
                      <FaTachometerAlt
                        className="text-amber-500 shrink-0"
                        size={20}
                      />
                      <span>Easy to understand functions</span>
                    </li>

                    {/* Item 3 */}
                    <li className="flex items-center gap-3 text-[#30303c] font-bold leading-tight">
                      <FaUsers className="text-purple-500 shrink-0" size={20} />
                      <span>User-friendly designs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              

              {/* Left Content */}
              <div className="space-y-8 lg:pt-8">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#30303c]">
                  We offer <ShimmerText>Full Stack</ShimmerText>  Solutions
                </h1>

                <div className="space-y-6 text-[#555] text-[17px] md:text-lg leading-relaxed">

                  <p>
                    Once the Web Design is ready and approved by the Client, the
                    Website Developer takes over the process of giving
                    functionality to the Website. The process makes the site
                    dynamic, i.e. all the functions and buttons now become
                    operational. The effects and Menus created by Designers now
                    lead to a result. The job of the Website Developer is to
                    insert LOGIC into the designed webpage so that the site is
                    user-friendly and its flow seamless and efficient.
                  </p>

                  <p>
                    We take into account several factors before the site goes
                    live, for everyone to see. We are open to honest feedback
                    from our clients that lead to a better result, even after
                    the completion of the site or software. There are several
                    factors that go into the creation of a successful web portal
                    or software. At Reva, we take care of all the aspects along
                    with efficient support that ensures the web portal or
                    software is always functional.
                  </p>
                </div>

                <div className="pt-4">
                  <ul className="space-y-4">
                    {/* Item 1 */}
                    <li className="flex items-center gap-3 text-[#30303c] font-bold leading-tight">
                      <FaRedo className="text-orange-500 shrink-0" size={20} />
                      <span>Fast landing Pages</span>
                    </li>

                    {/* Item 2 */}
                    <li className="flex items-center gap-3 text-[#30303c] font-bold leading-tight">
                      <FaTachometerAlt
                        className="text-amber-500 shrink-0"
                        size={20}
                      />
                      <span>Easy to understand functions</span>
                    </li>

                    {/* Item 3 */}
                    <li className="flex items-center gap-3 text-[#30303c] font-bold leading-tight">
                      <FaUsers className="text-purple-500 shrink-0" size={20} />
                      <span>User-friendly designs</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Image / Visual */}
              <div className="flex justify-start lg:justify-end pt-8 lg:pt-0">
                <div className="relative w-full max-w-lg lg:max-w-xl">
                  {/* Decorative Background */}

                  <div className="absolute -inset-8 md:-inset-12 bg-linear-to-br from-orange-400/20 via-amber-400/20 to-purple-400/20 rounded-[3.5rem] -rotate-6 blur-2xl" />

                  {/* Main Image */}
                  <Image
                    src={web2}
                    alt="Web Application and CRM Development"
                    className="relative z-10 w-full h-auto rounded-3xl  
                       object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />

                  {/* Subtle shine/overlay effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent rounded-3xl pointer-events-none z-20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        </GridBg>

        <section className="py-24 bg-white">
          <div className="max-w-[90vw] mx-auto px-6">
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-5xl font-bold text-zinc-900 mb-4">
                Creative Work
              </h2>
              <p className="text-xl text-gray-500">
                We have completed thousands of projects. Here are some of our
                most important works.
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
                          <p className="text-sm text-gray-500">
                            {item.company}
                          </p>
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
