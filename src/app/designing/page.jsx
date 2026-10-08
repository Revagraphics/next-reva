import React from "react";
import SelectedWork from "@/components/SelectedWork";
import Expertise from "@/components/Expertise";
import Image from 'next/image'
import Link from "next/link";
import WorkFilter from "@/components/WorkFilter";
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
        <section className="relative min-h-[70vh] flex items-center bg-linear-to-br from-zinc-50 via-white to-slate-50 overflow-hidden">
          {/* Subtle Light Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(at_center,#e0e7ff30_0%,transparent_70%)]"></div>

          <div className="mt-10">
            <div className="max-w-[80%] mx-auto px-6  lg:px-12 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-8 pt-12  lg:pt-0">
                  <div className="inline-flex items-center mt-14 lg:mt-4 gap-1 bg-white px-5 py-2.5 rounded-full border border-orange-200 shadow-sm">
                    <span className="text-orange-600 text-sm font-semibold tracking-widest">
                      PREMIUM DESIGNING
                    </span>
                  </div>

                  <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-zinc-900 leading-tight tracking-tighter">
                    We Design <ShimmerText>Experiences</ShimmerText>
                    <br />
                    That Convert
                  </h1>

                  <p className="text-xl text-zinc-600 max-w-lg">
                    From stunning branding to high-converting websites and
                    packaging — we craft designs that don&apos;t just look good, they
                    perform.
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4 lg:pt-6">
                    <Link href="/portfolio">
                      <button className="bg-linear-to-r from-orange-500 to-pink-500 text-white px-9 py-4 rounded-2xl hover:scale-105 font-semibold transition-all active:scale-95 shadow-lg shadow-orange-500/30">
                        Explore Our Work
                      </button>
                    </Link>
                    <Link href="/development">
                      {" "}
                      <button className="border border-zinc-300 hover:border-zinc-400 text-zinc-700 px-9 py-4 rounded-2xl font-medium transition-all">
                        View Services
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Right Visual - Light Version */}
                <div className="relative flex justify-center lg:justify-end">
                  <div className="relative">
                    {/* Main Decorative Frame */}
                    <div className="w-70 md:w-82.5 lg:w-87.5 aspect-square bg-linear-to-r from-orange-500 to-pink-500 rounded-[4rem] rotate-6 shadow-2xl overflow-hidden">
                      {/* Inner Card */}
                      <div className="absolute inset-4 bg-white rounded-[3rem] flex items-center justify-center shadow-inner">
                        <div className="text-center">
                          <div className="text-4xl mb-4 text-orange-500">
                            <ShimmerText>✦</ShimmerText>
                          </div>
                          <p className="text-2xl font-light text-zinc-500">
                            Premium
                          </p>
                          <p className="text-2xl font-bold tracking-wider text-zinc-900">
                            DESIGN STUDIO
                          </p>
                          <p className="text-2xl font-bold tracking-wider">
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
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-400 text-sm flex flex-col items-center gap-2">
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

        <WorkFilter
          title="Our Creative Work"
          subtitle="We design and develop high-impact digital experiences across industries"
          projects={projectsData}
          categories={[
            "All",
            "logistics",
            "E-commerce",
            "Education",
            "Informative & Service",
            "International Site",
          ]}
        />

        <SelectedWork />
        <Expertise />
      </div>
    </>
  );
}
