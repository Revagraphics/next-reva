import React from "react";
import SelectedWork from "@/components/SelectedWork";
import Expertise from "@/components/Expertise";
import Image from 'next/image'
import Link from "next/link";
import bg from "@/assets/about.webp";
import ShimmerText from "@/components/ShimmerText";
import { createPageMetadata } from "@/lib/seo";
import GridBg from "@/components/GridBg";
import DecorativeUnderline from "@/components/DecorativeUnderline";

export const metadata = createPageMetadata(
  "Graphic & Digital Design Services | Reva Graphics",
  "Explore graphic design, digital design, and visual communication services created by the Reva Graphics team.",
  "/designing",
);

const projectsData = [
  {
    title: "Aarsan Shipping",
    description: "Trusted Logistics with 24/7 Global Reach & Customs Expertise",
    image:
      "https://plus.unsplash.com/premium_photo-1661880224695-47dc8805c4ea?w=500&auto=format&fit=crop&q=60",
    category: "Logistics",
    link: "https://example.com",
  },
  {
    title: "Eternative Herbals",
    description: "Bringing Ancient Ayurvedic Wisdom into Modern Wellness",
    image:
      "https://plus.unsplash.com/premium_photo-1673264303561-de2ab31df03c?q=80&w=687&auto=format&fit=crop",
    category: "E-Commerce",
    link: "#",
  },
  {
    title: "UrbanFit Gym",
    description:
      "Transform Your Body with Expert Trainers & Smart Fitness Plans",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fitness",
    link: "#",
  },
  {
    title: "CodeNest",
    description: "Innovative Software Solutions for Startups & Enterprises",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60",
    category: "Technology",
    link: "#",
  },
  {
    title: "Foodie's Hub",
    description:
      "Delicious Food Delivered Fast with Premium Quality Ingredients",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60",
    category: "Food",
    link: "#",
  },
  {
    title: "EduSmart Academy",
    description: "Empowering Students with Modern Learning Techniques",
    image:
      "https://media.istockphoto.com/id/1262283526/photo/indian-girl-student-wear-headphones-learning-online-watching-webinar-class-looking-at-laptop.jpg?s=2048x2048&w=is&k=20&c=1qXe3QcWLA0WkA5asYq16P1YfOhInYO1aul5NftkTk8=",
    category: "Education",
    link: "#",
  },
  {
    title: "TravelXplore",
    description: "Discover the World with Customized Travel Experiences",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60",
    category: "Travel",
    link: "#",
  },
  {
    title: "StyleAura",
    description: "Trendy Fashion That Defines Your Personality",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?w=500&auto=format&fit=crop&q=60",
    category: "Fashion",
    link: "#",
  },
  {
    title: "GreenScape",
    description: "Sustainable Landscaping Solutions for Modern Living",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500&auto=format&fit=crop&q=60",
    category: "Environment",
    link: "#",
  },
  {
    title: "MediCare Plus",
    description: "Advanced Healthcare Services with Compassion & Care",
    image:
      "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lZGljYXJlfGVufDB8fDB8fHww",
    category: "Healthcare",
    link: "#",
  },
];

export default function designing() {
  return (
    <>

      <div className="bg-white">
        <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-linear-to-br from-zinc-50 via-white to-slate-50">
          {/* Subtle Light Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(at_center,#e0e7ff30_0%,transparent_70%)]"></div>

          <div className="relative z-10 w-full py-20 sm:py-24">
            <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Left Content */}
                <div className="space-y-6 sm:space-y-8">
                  <div className="inline-flex items-center gap-1 rounded-full border  px-4 py-2.5 shadow-sm sm:px-5">
                    {/* <span className="text-orange-600 text-sm font-semibold tracking-widest">
                      PREMIUM DESIGNING
                    </span> */}
                  </div>

                  <h1 className="text-4xl font-bold leading-tight tracking-tighter text-zinc-900 sm:text-5xl md:text-6xl lg:text-6xl">
                    We Design <ShimmerText>Experiences</ShimmerText>
                 
                    That Convert
                  </h1>

                  <p className="max-w-lg text-base text-zinc-600 sm:text-lg lg:text-xl">
                    From stunning branding to high-converting websites and
                    packaging — we craft designs that don&apos;t just look good, they
                    perform.
                  </p>

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4 sm:pt-4">
                    <Link href="/portfolio">
                      <button className="w-full rounded-2xl bg-linear-to-r from-orange-500 to-pink-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:scale-105 active:scale-95 sm:w-auto sm:px-9 sm:py-4">
                        Explore Our Work
                      </button>
                    </Link>
                    <Link href="/development">
                      {" "}
                      <button className="w-full rounded-2xl border border-zinc-300 px-7 py-3.5 font-medium text-zinc-700 transition-all hover:border-zinc-400 sm:w-auto sm:px-9 sm:py-4">
                        View Services
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Right Visual - Light Version */}
                <div className="relative flex justify-center lg:justify-end">
                  <div className="relative">
                    {/* Main Decorative Frame */}
                    <div className="relative aspect-square w-[min(72vw,20rem)] rotate-3 overflow-hidden rounded-[2.5rem] bg-linear-to-r from-orange-500 to-pink-500 shadow-2xl sm:w-88 sm:rotate-6 sm:rounded-[3rem] lg:w-100 lg:rounded-[4rem]">
                      {/* Inner Card */}
                      <div className="absolute inset-3 flex items-center justify-center rounded-4xl bg-white shadow-inner sm:inset-4 sm:rounded-[2.5rem] lg:rounded-[3rem]">
                        <div className="text-center">
                          <div className="mb-3 text-3xl text-orange-500 sm:mb-4 sm:text-4xl">
                            <ShimmerText>✦</ShimmerText>
                          </div>
                          <p className="text-lg font-light text-zinc-500 sm:text-2xl">
                            Premium
                          </p>
                          <p className="text-lg font-bold tracking-wider text-zinc-900 sm:text-2xl">
                            DESIGN STUDIO
                          </p>
                          <p className="text-lg font-bold tracking-wider sm:text-2xl">
                            <ShimmerText>REVA GRAPHICS</ShimmerText>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Subtle Glow / Highlight */}
                    <div className="absolute -inset-6 bg-linear-to-br from-orange-200/30 to-transparent rounded-[5rem] -z-10 blur-3xl"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator - Light Theme */}
            <div className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-zinc-400 sm:bottom-5 sm:text-sm">
              <span>Scroll to explore</span>
              <div className="w-px h-12 bg-linear-to-b from-transparent via-zinc-300 to-transparent"></div>
            </div>
          </div>
        </section>

        <section className=" min-h-[70vh] lg:pt-24 pb-6 lg:pb-12">
          <div className="max-w-[90%] mx-auto px-6">
            <div className="grid lg:grid-cols-2 items-center mt-20 gap-12">
              {/* LEFT CONTENT */}
              <div>
                <span className="inline-block lg:text-[2rem] font-medium text-[#ff9904] mb-4">
                  Highest rated brand designing company
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  We build a <ShimmerText> Unique Brand </ShimmerText> for
                  attract the customers
                </h2>

                <p className="text-gray-500 mb-8">
                  Hire website developers from us to establish a strong online
                  presence that will concrete your path toward success.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff9904] text-white rounded-full font-medium hover:opacity-90 transition"
                >
                  Let’s discuss →
                </Link>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-center lg:justify-end">
                <Image
                  src={bg}
                  alt="hero"
                  className="w-full h-1/2 max-w-md object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <SelectedWork />
        <Expertise />
      </div>
    </>
  );
}
