import Link from "next/link";

import React from "react";
import GridBg from "@/components/GridBg";
import ShimmerText from "@/components/ShimmerText";

import {
  FaMobileAlt,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaCircle
} from "react-icons/fa";

export const metadata = {
  title: "Mobile App Design & Development | Reva Graphics",
  description:
    "Plan and build intuitive mobile applications with product strategy, user-focused design, and custom development from Reva Graphics.",
  openGraph: {
    title: "Mobile App Design & Development | Reva Graphics",
    description:
      "Product strategy, user-focused app design, and custom mobile development from Reva Graphics.",
  },
};

export default function Application() {
  return (
    <>
     

      <div className="min-h-screen bg-[#f8fafc]">
        {/* ==================== HERO SECTION ==================== */}
        <section className="relative h-[80vh] lg:h-screen  flex items-center justify-center overflow-hidden bg-linear-to-br from-[#0f766e] via-[#14b8a6] to-[#22d3ee]">
          <div className="absolute inset-0 bg-black/30" />

          <GridBg
            gridSize={60}
            lineColor="rgba(255,255,255,0.1)"
            bgColor="transparent"
          >
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white py-20">
              <div className="inline-flex items-center mt-8 gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-6">
                <FaMobileAlt className="text-2xl" />
                <span className="uppercase tracking-widest text-sm font-semibold">
                  Mobile Excellence
                </span>
              </div>

              <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                We Build <ShimmerText>High-Impact</ShimmerText>
                <br />
                Mobile Applications
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10">
                From idea to reality — we create powerful, user-friendly mobile
                apps that solve real problems and drive business growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-teal-700 font-semibold px-10 py-4 rounded-2xl text-lg hover:scale-105 transition-all duration-300 shadow-xl">
                  Get Your App Built
                </button>
                <button className="border border-white/70 hover:bg-white/10 font-semibold px-10 py-4 rounded-2xl text-lg transition-all duration-300">
                  View Our Work →
                </button>
              </div>

              <div className="mt-16 flex justify-center gap-10 text-sm">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold">50+</div>
                  <div className="text-white/70">Apps Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold">98%</div>
                  <div className="text-white/70">Client Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold">4.9/5</div>
                  <div className="text-white/70">Average Rating</div>
                </div>
              </div>
            </div>
          </GridBg>
        </section>

        {/* ==================== SERVICES SECTION ==================== */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-6 lg:mb-16 md:mb-16">
              <span className="text-teal-600 font-semibold uppercase tracking-widest">
                <ShimmerText>What We Build</ShimmerText>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                Tailored Mobile Solutions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 first-letter:">
              {[
                {
                  icon: <FaMobileAlt className="text-5xl text-teal-500" />,
                  title: "Native Apps",
                  desc: "High-performance iOS & Android applications built with Swift, Kotlin, and Flutter.",
                  color: "teal",
                },
                {
                  icon: <FaRocket className="text-5xl text-purple-500" />,
                  title: "Cross-Platform Apps",
                  desc: "Cost-effective apps using React Native and Flutter that work beautifully on both platforms.",
                  color: "purple",
                },
                {
                  icon: <FaUsers className="text-5xl text-orange-500" />,
                  title: "On-Demand Apps",
                  desc: "Uber-like, Swiggy-like, or any service-based app with real-time features.",
                  color: "orange",
                },
                {
                  icon: <FaChartLine className="text-5xl text-blue-500" />,
                  title: "Enterprise Apps",
                  desc: "Scalable internal tools, CRM, inventory, and business management apps.",
                  color: "blue",
                },
                {
                  icon: <FaShieldAlt className="text-5xl text-emerald-500" />,
                  title: "Secure & Scalable",
                  desc: "Bank-grade security, offline support, and cloud integration.",
                  color: "emerald",
                },
                {
                  icon: <FaMobileAlt className="text-5xl text-rose-500" />,
                  title: "UI/UX Focused",
                  desc: "Beautiful, intuitive designs that users love and keep coming back to.",
                  color: "rose",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="group bg-white border border-gray-100 hover:border-teal-200 p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== WHY CHOOSE US SECTION ==================== */}
        <section className="py-20 bg-[#f1f5f9]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-teal-600 font-semibold uppercase tracking-widest">
                  <ShimmerText>Why Reva?</ShimmerText>
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                  Your Success is Our <ShimmerText>Priority</ShimmerText>
                </h2>
                <p className="mt-6 text-lg text-gray-600">
                  We don’t just develop apps — we craft digital experiences that
                  drive real business results.
                </p>

                <div className="mt-10 space-y-8">
                  {[
                    "End-to-end development from concept to launch.",
                    "Transparent communication & agile methodology.",
                    "Post-launch support & maintenance.",
                    "Scalable architecture for future growth.",
                    "Modern tech stack with latest trends.",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                        {" "}
                        <FaCircle
                          fill="orange" // Hides the inside color (makes it hollow)
                          stroke="black" // Sets your outline color
                          strokeWidth="50" // Sets the thickness of the outline
                          style={{ overflow: "visible", fontSize: "0.8rem" }} // Prevents the stroke from clipping
                        />
                      </div>
                      <p className="text-gray-700 text-lg"> {item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-semibold mb-8 text-center">
                  Our Development Process
                </h3>
                <div className="space-y-8">
                  {[
                    {
                      step: "01",
                      title: "Discovery & Planning",
                      desc: "Understanding your vision and market.",
                    },
                    {
                      step: "02",
                      title: "UI/UX Design",
                      desc: "Pixel-perfect, user-centric designs.",
                    },
                    {
                      step: "03",
                      title: "Development",
                      desc: "Agile development with regular updates.",
                    },
                    {
                      step: "04",
                      title: "Testing & Launch",
                      desc: "Rigorous testing before going live.",
                    },
                    {
                      step: "05",
                      title: "Support & Growth",
                      desc: "Continuous improvement & scaling.",
                    },
                  ].map((phase) => (
                    <div key={phase.step} className="flex gap-6">
                      <div className="w-12 h-12 bg-orange-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl shrink-0">
                        {phase.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-xl">{phase.title}</h4>
                        <p className="text-gray-600 mt-1">{phase.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
