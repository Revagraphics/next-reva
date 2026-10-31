import ShimmerText from "@/components/ShimmerText";
import GridBg from "@/components/GridBg";
import DecorativeUnderline from "@/components/DecorativeUnderline";
import { createPageMetadata } from "@/lib/seo";
import Image from "next/image";
import adobe1 from "@/assets/after-effact.png";
import adobe2 from "@/assets/premier.svg";
import adobe3 from "@/assets/final.png";
import adobe4 from "@/assets/Davinci.png";
import photoshop from "@/assets/photoshop.svg";
import Adob from "@/assets/ex.svg";
import Invision from "@/assets/illustrator.svg";
import figma from "@/assets/Figma.svg";

export const metadata = createPageMetadata(
  "Cloud Services & Solutions | Reva Graphics",
  "Modernize your business with scalable cloud architecture, migration, and managed solutions from Reva Graphics.",
  "/cloud",
);

export default function Cloud() {
  const softwareTools = [
    {
      name: "After Effects",
      icon: adobe1,
      size: "h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16",
    },
    {
      name: "Premiere Pro",
      icon: adobe2,
      size: "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-20 lg:w-20",
    },
    {
      name: "Final Cut Pro",
      icon: adobe3,
      size: "h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-14 lg:w-14",
    },
    {
      name: "DaVinci Resolve",
      icon: adobe4,
      size: "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-20 lg:w-20",
    },
    {
      name: "Photoshop",
      icon: photoshop,
      size: "h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-14 lg:w-14",
    },
    {
      name: "After Effects",
      icon: Adob,
      size: "h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-12 lg:w-12",
    },
    {
      name: "Illustrator",
      icon: Invision,
      size: "h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-14 lg:w-14",
    },
    {
      name: "Figma",
      icon: figma,
      size: "h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-12 lg:w-12",
    },
  ];

  const services = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.502 5.502 0 00-10.78 2.22A4.5 4.5 0 003 15z"
          />
        </svg>
      ),
      title: "Cloud Migration",
      description:
        "Seamless, zero-downtime migration of your applications, databases, and infrastructure to the cloud.",
      features: ["AWS • Azure • GCP", "Data Transfer", "Legacy Modernization"],
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2"
          />
        </svg>
      ),
      title: "Managed Cloud Hosting",
      description:
        "Fully managed, scalable, and high-performance cloud hosting with 99.99% uptime guarantee.",
      features: ["Auto Scaling", "Load Balancing", "24/7 Monitoring"],
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04 12.02 12.02 0 00-3.19 8.56 12 12 0 002.69 7.44"
          />
        </svg>
      ),
      title: "Cloud Security & Compliance",
      description:
        "Enterprise-grade security, data protection, and compliance solutions for your cloud environment.",
      features: ["Zero Trust Security", "GDPR • ISO 27001", "Threat Detection"],
    },
  ];

  return (
    <>
      <div className="bg-white min-h-screen">
        {/* HERO SECTION - Orange Theme + Fully Responsive */}

        <GridBg gridSize={80} lineColor="#f5f1ed" bgColor="#f2fff5">
          <section className="navbar-clearance-hero h-[70vh] sm:h-[90vh] flex items-center justify-center text-black py-16 md:py-24 relative overflow-hidden">
            {/* Floating Software Badges */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Left side */}
              <div className="absolute top-[18%] left-[6%] hidden animate-float-slow sm:block md:left-[10%]">
                <Image
                  src={softwareTools[0].icon}
                  alt={softwareTools[0].name}
                  className={`${softwareTools[0].size} object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.35)]`}
                />
              </div>
              <div className="absolute top-[42%] left-[3%] hidden animate-float sm:block md:left-[6%]">
                <Image
                  src={softwareTools[2].icon}
                  alt={softwareTools[2].name}
                  className={`${softwareTools[2].size} object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.35)]`}
                />
              </div>
              <div className="absolute bottom-[28%] left-[8%] hidden animate-float-delayed sm:block md:left-[12%]">
                <Image
                  src={softwareTools[4].icon}
                  alt={softwareTools[4].name}
                  className={`${softwareTools[4].size} object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.35)]`}
                />
              </div>

              {/* Right side */}
              <div className="absolute top-[22%] right-[5%] hidden animate-float sm:block md:right-[9%]">
                <Image
                  src={softwareTools[1].icon}
                  alt={softwareTools[1].name}
                  className={`${softwareTools[1].size} object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.35)]`}
                />
              </div>
              <div className="absolute top-[48%] right-[4%] hidden animate-float-slow sm:block md:right-[7%]">
                <Image
                  src={softwareTools[3].icon}
                  alt={softwareTools[3].name}
                  className={`${softwareTools[3].size} object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.35)]`}
                />
              </div>
              <div className="absolute bottom-[24%] right-[9%] hidden animate-float-delayed sm:block md:right-[13%]">
                <Image
                  src={softwareTools[5].icon}
                  alt={softwareTools[5].name}
                  className={`${softwareTools[5].size} object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.35)]`}
                />
              </div>

              {/* Extra small ones */}
              <div className="absolute top-[32%] left-[22%] hidden lg:block animate-float">
                <Image
                  src={softwareTools[6].icon}
                  alt={softwareTools[6].name}
                  className={`${softwareTools[6].size} object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.35)]`}
                />
              </div>
              <div className="absolute bottom-[38%] right-[22%] hidden lg:block animate-float-slow">
                <Image
                  src={softwareTools[7].icon}
                  alt={softwareTools[7].name}
                  className={`${softwareTools[7].size} object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.35)]`}
                />
              </div>
            </div>

            <div className="max-w-[90%] mx-auto px-6 text-center relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-3xl text-sm font-medium mb-6">
                ⚡ POWERED BY <ShimmerText>AWS • AZURE • GCP</ShimmerText>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none mb-6">
                <ShimmerText> Cloud Services </ShimmerText>
              </h1>
              <DecorativeUnderline
                width="420px"
                className="mt-6 mx-auto md:w-95 lg:w-112.5"
                centerColor="#3B82F6"
              />

              <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl opacity-90">
                Scalable, secure, and intelligent cloud solutions that transform
                your business.
              </p>

              <button className="mt-10 px-8 sm:px-10 py-4 bg-white text-orange-600 font-semibold text-base sm:text-lg rounded-3xl hover:bg-orange-100 active:scale-95 transition-all duration-300 shadow-xl">
                Get a Free Cloud Assessment
              </button>
            </div>

            {/* Decorative cloud elements */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-white/10 to-transparent pointer-events-none" />
          </section>
        </GridBg>

        {/* THREE SERVICES SECTION - Orange Theme + Responsive Grid */}
        <section className="bg-[#fffaf0] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#08182b] mb-3">
                Our Three Core Cloud Solutions
              </h2>
              <p className="text-gray-600 max-w-md mx-auto text-base sm:text-lg">
                Choose the perfect cloud service that fits your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white rounded-3xl p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.07)] hover:shadow-[0_25px_70px_rgba(249,115,22,0.15)] hover:-translate-y-3 transition-all duration-500 flex flex-col"
                >
                  {/* Icon */}
                  <div className="mb-8 w-20 h-20 flex items-center justify-center bg-orange-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#08182b] mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-4 py-2 bg-orange-100 text-orange-700 rounded-3xl"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US - Orange Theme + Responsive */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
                  99.99%
                </div>
                <div className="font-medium text-gray-700">Uptime SLA</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
                  24/7
                </div>
                <div className="font-medium text-gray-700">Expert Support</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
                  50+
                </div>
                <div className="font-medium text-gray-700">
                  Cloud Projects Delivered
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
                  3
                </div>
                <div className="font-medium text-gray-700">
                  Major Cloud Platforms
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
