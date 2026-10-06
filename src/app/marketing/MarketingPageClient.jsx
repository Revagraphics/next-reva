'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image'
import cart from "@/assets/cart.png";
import seo from "@/assets/seo.png";
import benefit1 from "@/assets/expert1.png?url";
import benefit2 from "@/assets/expert2.png?url";
import benefit3 from "@/assets/expert3.png?url";
import benefit4 from "@/assets/expert4.png?url";
import benefit5 from "@/assets/expert5.png?url";
import devloper from "@/assets/developers.svg?url";
import ShimmerText from "@/components/ShimmerText"
import GridBg from "@/components/GridBg.jsx";
import DecorativeUnderline from "@/components/DecorativeUnderline";

export default function Marketing() {
  const Benefits = [
    {
      id: 1,
      img: benefit1,
      title: "Branding & Management",
      dis: "Our SEO & SMO teams understand the true value of a brand & engage with users to know how they feel about your product or service.",
    },
    {
      id: 2,
      img: benefit2,
      title: "Social Media Campaigns",
      dis: "We possess experience with paid ad campaigns on Facebook, Twitter, Instagram for effective engagement.",
    },
    {
      id: 3,
      img: benefit3,
      title: "Search Engine Optimization (SEO)",
      dis: "We perform complete keyword research after understanding the business, industry, and target audience.",
    },
    {
      id: 4,
      img: benefit4,
      title: "Social Media Monitoring",
      dis: "Regular monitoring and optimization help to better understand results at every stage before executing future campaigns.",
    },
    {
      id: 5,
      img: benefit5,
      title: "Performance Reporting",
      dis: "In order to monitor and breakdown the details of the performance, SEO marketing team at Reva will send monthly reports.",
    },
    {
      id: 6,
      img: benefit5,
      title: "Experienced Team",
      dis: "High-quality content from an experienced team.",
    },
  ];
  return (
    <>
      <div className="min-h-screen bg-[#f2fff5]">
        <section className="pt-20 pb-32  overflow-hidden">
          <div className="max-w-[90%] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center pt-16">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="py-2.5 text-indigo-600 text-xl lg:text-2xl font-semibold tracking-wide">
                    Top SEO & SMO expert company in India
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#30303c]">
                  Don&apos;t Build Links Build{" "} <ShimmerText>Relationships</ShimmerText>
                </h1>

                <p className="text-lg lg:text-xl text-[#30303c] leading-relaxed max-w-lg">
                  Everything starts with a ‘Hello’!! With ZERO upfront
                  investment, we are committed to providing a solid foundation
                  for your business idea. You’ll be amazed by working with our
                  experts.
                </p>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-linear-to-r from-[#FF9800] to-[#E91E63] hover:bg-orange-600 text-white font-semibold text-lg px-10 py-5 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
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
                    src={cart}
                    alt="Content Marketing"
                    className="relative z-10 w-full max-w-md lg:max-w-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="pt-20 pb-32 overflow-hidden">
          <div className="max-w-[90%] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">


              {/* Left Image */}
              <div className="flex justify-center order-2 lg:order-1 lg:justify-center">
                <div className="relative">
                  <div className="absolute -inset-6 bg-linear-to-br from-orange-400/30 to-purple-400/30 rounded-[3rem] -rotate-6 blur-xl" />
                  <Image
                    src={seo}
                    alt="Content Writing Services"
                    className="relative z-10 w-full max-w-md lg:max-w-lg "
                  />
                </div>
              </div>


              {/* Right Text */}
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-[#30303c]">
                  We offer <ShimmerText>SEO & SMO</ShimmerText>
                  {" "}Promotional services
                </h2>
                <div className="space-y-6 text-[#30303c] text-lg leading-relaxed">
                  <p>
                    Hire experienced SMO & SEO experts facilitating effective
                    engagement with your existing and potential customers while
                    delivering an effective social media presence. Reva is a top
                    Social Media Marketing agency in India and Singapore
                    delivering business-driven marketing strategies on social
                    media.
                  </p>
                </div>
              </div>

              
            </div>
          </div>
        </section>

        <GridBg gridSize={80} lineColor="#f5f1ed" bgColor="#fff">
        <section className="pt-20 pb-32 ">
          <div className="max-w-[90%] mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#30303c]">
                Benefits of Working{" "}
                <ShimmerText>
                  With Us
                </ShimmerText>
              </h2>
               <DecorativeUnderline
                   width="320px"
                   className="mt-6 mx-auto md:w-95 lg:w-112.5"
                    centerColor="#3B82F6"
                  />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="group bg-white/10 backdrop-blur-sm border border-gray-200 hover:border-orange-300 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 mb-6 bg-linear-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={benefit.img}
                      alt={benefit.title}
                      className="w-15 h-15 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-[#30303c] mb-4 group-hover:text-orange-600 transition-colors">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-[17px]">
                    {benefit.dis}
                  </p>

                  {/* Accent Line */}
                  <div className="mt-8 h-1 w-12 bg-orange-500 rounded-full group-hover:w-20 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
        </GridBg>

        <section className="pt-20 pb-32 bg-white">
          <div className="max-w-[90%] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side Content */}
              <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
                <h2 className="text-[#3f3f3f] text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold">
                  Hire world-class <ShimmerText>SEO experts </ShimmerText> for your project
                </h2>

                <p className="text-[#3f3f3f] text-lg md:text-xl leading-relaxed max-w-lg">
                  We have a dexterity team of SEO & SMO Experts that work on
                  clients&apos; projects excellently and deliver the project on the
                  timeline.
                </p>

                {/* Optional CTA Button */}
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-linear-to-r from-[#FF9800] to-[#E91E63] hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    Hire Developers Now
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Right Side Image */}
              <div className="flex justify-center lg:justify-center order-1 lg:order-2">
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <div className="absolute -inset-6 bg-linear-to-br from-orange-400/30 to-purple-400/30 rounded-[3rem] -rotate-6 blur-xl" />

                  <Image
                    src={devloper}
                    alt="Hire World-Class Developers"
                    className="relative z-10 w-full h-auto  object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
