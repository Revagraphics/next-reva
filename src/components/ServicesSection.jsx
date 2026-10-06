import React from "react";
import {
  FaArrowRight,
  FaPalette,
  FaGlobe,
  FaCode,
  FaChartLine,
  FaMobileAlt,
  FaCloud,
} from "react-icons/fa";

import Link from "next/link";

import ShimmerText from "../components/ShimmerText";
import GridBg from "../components/GridBg";
import DecorativeUnderline from "../components/DecorativeUnderline";

const services = [
  {
    id: 1,
    title: "Brand Identity",
    description:
      "Let’s talk a story with different brand elements that unanimously define your brand personality.",
    tags: "Logo Design | Stationery Design",
    link: "/branding",
    icon: FaPalette,
    tagColor: "#FF6B6B", // Vibrant Red
  },
  {
    id: 2,
    title: "Website Designing",
    description:
      "Customized, SEO-friendly, and user-centric websites that reflect your brand perfectly.",
    tags: "UI & UX Design | Dynamic Websites",
    link: "/designing",
    icon: FaGlobe,
    tagColor: "#4ECDC4", // Teal
  },
  {
    id: 3,
    title: "Website Development",
    description:
      "Robust, scalable, and high-performance web applications tailored to your business needs.",
    tags: "eCommerce | Custom Portals",
    link: "/development",
    icon: FaCode,
    tagColor: "#45B7D1", // Sky Blue
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "360-degree digital strategies to boost your brand presence and engagement.",
    tags: "SEO | SMO | PPC",
    link: "/marketing",
    icon: FaChartLine,
    tagColor: "#96CEB4", // Sage Green
  },
  {
    id: 5,
    title: "Application Development",
    description:
      "Powerful mobile and web applications designed for exceptional user experiences.",
    tags: "Mobile Apps | Web Apps",
    link: "/content",
    icon: FaMobileAlt,
    tagColor: "#FF9F1C", // Orange
  },
  {
    id: 6,
    title: "Customize Software",
    description:
      "Tailored cloud solutions and custom software to give your business a competitive edge.",
    tags: "Cloud Services | Hosting | SSL",
    link: "/cloud",
    icon: FaCloud,
    tagColor: "#6C5CE7", // Purple
  },
];

export default function ServicesSection() {
  return (
    <section className=" bg-gradient-to-br from-slate-50 to-gray-100">
      <GridBg gridSize={80} lineColor="#f5f1ed" bgColor="#fff">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
              See what we can do for <ShimmerText>Your Business</ShimmerText>
            </h2>
            <DecorativeUnderline
              width="320px" // Adjust width as needed
              className="mt-4 mx-auto"
              centerColor="#3B82F6" // Optional: change blue color
            />
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Professional solutions that transform ideas into powerful digital
              experiences
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-[#f7f7f7]/60 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl 
                             transition-all duration-300 overflow-hidden border border-gray-100 
                             hover:border-transparent hover:-translate-y-3
                             hover:bg-gradient-to-br hover:from-[#FF9800] hover:to-[#E91E63]"
                >
                  {/* Left Vertical Accent Line */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#FF9800] to-[#E91E63] 
                               scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-700"
                  />

                  {/* Icon */}
                  <div className="p-8 pb-4">
                    <div
                      className="w-20 h-20 bg-gradient-to-br from-slate-100 to-gray-100 rounded-2xl 
                                 flex items-center justify-center 
                                 group-hover:bg-white/20 group-hover:backdrop-blur-sm 
                                 transition-all duration-500"
                    >
                      <IconComponent className="w-12 h-12 text-orange-600 group-hover:text-orange-600 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 pt-2">
                    <h3
                      className="text-2xl font-semibold text-gray-900 
                                 group-hover:text-white transition-colors duration-300"
                    >
                      <Link href={service.link} className="hover:underline">
                        {service.title}
                      </Link>
                    </h3>

                    <p
                      className="text-gray-600 group-hover:text-white/90 leading-relaxed mb-6 
                                 line-clamp-4 mt-3 transition-colors duration-300"
                    >
                      {service.description}
                    </p>

                    {/* Tags with unique colors */}
                    <p
                      className="font-medium text-sm mb-8 transition-colors duration-200 text-[color:var(--tag-color)] group-hover:text-white"
                      style={{ "--tag-color": service.tagColor }}
                    >
                      {service.tags}
                    </p>

                    {/* Read More */}

                    <button className="inline-block mt-8 bg-gradient-to-r from-[#FF9800] to-[#E91E63] hover:from-white hover:to-white group-hover:from-white group-hover:to-white px-8 py-3 rounded-full transition-all duration-300">
                      <Link
                        href={service.link}
                        className="inline-flex items-center gap-2 text-white group-hover:text-orange-500 font-semibold group-hover:gap-3 transition-all duration-300"
                      >
                        Explore Service
                        <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </button>
                  </div>

                  {/* Bottom Glow Effect */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r 
                               from-[#FF9800] via-[#E91E63] to-pink-500 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </GridBg>
    </section>
  );
}
