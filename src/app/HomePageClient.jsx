import Image from "next/image";
import SelectedWork from "@/components/SelectedWork";
import SkillsTabs from "@/components/SkillTabs";
import Feedback from "@/components/Feedback";
import StarRating from "@/components/StarRating";
import DecorativeUnderline from "@/components/DecorativeUnderline";
import Link from "next/link";
import HeroImg from "@/assets/hero1.png";
import logo1 from "@/assets/customer-logo-1.png";
import logo2 from "@/assets/customer-logo-2.png";
import logo3 from "@/assets/customer-logo-3.png";
import logo4 from "@/assets/customer-logo-4.png";
import logo6 from "@/assets/customer-logo-6.png";
import logo7 from "@/assets/customer-logo-7.png";
import logo8 from "@/assets/FRENZY-01.png";
import logo9 from "@/assets/customer-logo-10.png";
import badge1 from "@/assets/badge-1.png";
import badge2 from "@/assets/badge22.png";
import badge3 from "@/assets/badge-3.png";
import ShimmerText from "@/components/ShimmerText";
import RotatingText from "@/components/RotatingText";
import GridBg from "@/components/GridBg";
import AllSector from "@/components/AllSector";
import ServicesShowcase from "@/components/ServicesShowcase";

// selected images
import campaign from "@/assets/campaign.webp";
import website from "@/assets/banglore.jpg";
import branding from "@/assets/branding.webp";
import brochure from "@/assets/brochure.jpg";
import packaging from "@/assets/product-packaging.webp";

const works = [
  { id: 1, image: campaign, title: "Development" },
  { id: 2, image: website, title: "Designing" },
  { id: 3, image: branding, title: "Marketing" },
  { id: 4, image: brochure, title: "Editing" },
  { id: 6, image: packaging, title: "Printing" },
  { id: 7, image: packaging, title: "Packaging" },
];

import {
  FaBriefcase,
  FaUsers,
  FaHandshake,
  FaCalendarAlt,
  FaRegCheckCircle,
} from "react-icons/fa";

function StatCard({
  title,
  value,
  desc,
  icon: Icon,
  color = "#FF9800",
  color2 = "#E91E63",
}) {
  return (
    <div className="group relative rounded-3xl border border-orange-100 bg-white/80 backdrop-blur-xl p-4 sm:p-5 md:p-4 xl:p-5 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden h-full flex flex-col">
      <div
        className="absolute top-0 left-0 w-2 h-full rounded-l-3xl"
        style={{
          background: `linear-gradient(to bottom, ${color}, ${color2})`,
        }}
      />

      <div className="flex flex-col h-full ml-2">
        <div className="flex items-start gap-3 sm:gap-4 xl:gap-5">
          <div className="flex shrink-0 aspect-square w-12 h-12 sm:w-14 sm:h-14 xl:w-16 xl:h-16 items-center justify-center rounded-2xl bg-orange-50 border border-orange-100 group-hover:scale-105 transition-transform duration-300 mt-1">
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8 text-orange-500 stroke-[1.5]" />
          </div>

          <div className="flex-1 min-w-0">
            <span className="text-orange-500 text-xs sm:text-sm font-bold tracking-[0.125em] uppercase">
              {title}
            </span>
            <h3 className="mt-1 text-3xl sm:text-4xl md:text-3xl xl:text-4xl font-bold text-slate-900 tracking-tighter leading-none whitespace-nowrap">
              {value}
            </h3>
          </div>
        </div>

        <div className="pt-4 flex-grow flex flex-col justify-center">
          <p className="text-sm sm:text-base md:text-sm xl:text-base leading-relaxed text-slate-600">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const logos = [
    { id: 1, logo: logo1 },
    { id: 2, logo: logo2 },
    { id: 3, logo: logo3 },
    { id: 4, logo: logo4 },
    { id: 6, logo: logo6 },
    { id: 7, logo: logo7 },
    { id: 8, logo: logo8 },
    { id: 9, logo: logo9 },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="mt-28 md:mt-20 px-4 flex items-center lg:h-[70vh] max-w-[90vw] justify-center mx-auto py-12 sm:py-16 lg:py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <section className="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl text-[#30303c] sm:text-2xl md:text-4xl lg:text-6xl font-poppins font-bold leading-tight">
              Expert Branding & Web <span>Development Solutions Across</span>{" "}
              <RotatingText />
            </h1>

            <Link
              href="/contact"
              className="inline-block mt-8 bg-linear-to-r from-[#FF9800] to-[#E91E63] text-white px-8 py-3 rounded-full"
            >
              Let&apos;s Talk
            </Link>
          </section>

          <section className="order-1 lg:order-2 flex-1 w-full">
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src={HeroImg}
                alt="Reva Graphics branding and web design services"
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="w-full h-80 sm:h-105 lg:h-130 object-cover"
              />
            </div>
          </section>
        </div>
      </section>

      {/* ================= CLIENT LOGOS ================= */}
      <section className="mt-16 w-full overflow-hidden">
        <div className="home-logo-marquee w-max shrink-0">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="home-logo-group flex gap-6 sm:gap-8 pr-6 sm:pr-8 items-center"
              aria-hidden={group === 1}
            >
              {logos.map((logo) => (
                <div
                  key={`${group}-${logo.id}`}
                  className="home-logo-card shrink-0 overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                >
                  <Image
                    src={logo.logo}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ================= REVA SECTION ================= */}
      <section className="relative mt-24 overflow-hidden flex justify-center w-full sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <GridBg gridSize={80} lineColor="#f5f1ed" bgColor="#fff">
          <div className="relative z-10 max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col max-w-295 lg:max-w-none mx-auto gap-12 lg:gap-16 xl:gap-20">
              <div className="text-center mx-auto max-w-5xl w-full">
                <span className="inline-block text-orange-500 font-semibold uppercase tracking-[0.35em] text-sm mb-5">
                  We Are Reva
                </span>

                <h2 className="text-[#30303c] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  <span>We Pioneer Design Tech & Physical Print </span>
                  <ShimmerText className="font-bold">
                    Under The Roof
                  </ShimmerText>
                </h2>

                <DecorativeUnderline
                  width="320px"
                  className="mt-6 mx-auto md:w-95 lg:w-112.5"
                  centerColor="#3B82F6"
                />
              </div>

              <div className="about-container flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 xl:gap-20 w-full">
                <div className="space-y-8 lg:space-y-10 w-full lg:w-1/2">
                  <p className="text-slate-600 leading-relaxed text-[17px] sm:text-lg text-justify md:text-left">
                    Founded in 2019, Reva Graphics has grown from a specialized
                    brand identity design studio into an end-to-end full-service
                    agency offering a wide range of solutions, including digital
                    marketing, web software, Android and iOS app development,
                    corporate merchandising, premium gifting, and enterprise
                    printing services.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  p-4">
                    {[
                      ["Full In-House Production", "Zero outsourcing delay"],
                      [
                        "Dedicated Project Managers",
                        "24/7 client communication",
                      ],
                    ].map(([title, desc]) => (
                      <div key={title} className="flex items-center  rounded-sm gap-3">
                        <div className="rounded-xl bg-cyan-500/10 p-3">
                          <FaRegCheckCircle className="text-xl text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-black sm:text-base">
                            {title}
                          </h3>
                          <p className="text-xs text-gray-800 sm:text-sm">
                            {desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-2 sm:gap-3 lg:justify-start lg:gap-4">
                    {[badge1, badge2, badge3].map((badge, i) => (
                      <Image
                        key={i}
                        src={badge}
                        alt=""
                        className="h-9 w-auto object-contain transition-transform duration-300 hover:scale-105 sm:h-10 md:h-12 lg:h-24"
                      />
                    ))}
                  </div>

                  <div className="flex justify-center lg:justify-start">
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-orange-500 to-pink-500 px-8 py-4 text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300 text-center"
                    >
                      About Us <span>→</span>
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full lg:w-1/2">
                  <StatCard
                    title="PROJECTS"
                    value="750+"
                    desc="Reva delivered hundreds of successful projects around the world."
                    icon={FaBriefcase}
                  />
                  <StatCard
                    title="TEAM"
                    value="25+"
                    desc="Our team consists of highly qualified, experienced and knowledgeable."
                    icon={FaUsers}
                  />
                  <StatCard
                    title="CLIENTS"
                    value="250+"
                    desc="Reva Graphics achieves hundreds of great customers around the world."
                    icon={FaHandshake}
                  />
                  <StatCard
                    title="YEARS"
                    value="04+"
                    desc="Clients across the globe witness our quality, processes, and work."
                    icon={FaCalendarAlt}
                  />
                </div>
              </div>
            </div>
          </div>
        </GridBg>
      </section>

      <AllSector />
      <ServicesShowcase />

      <SkillsTabs />

      <SelectedWork
        works={works}
        title="Selected"
        highlight="Work"
        subtitle=""
        viewAllLink="/portfolio"
        viewAllText="See our work"
        duration={25}
      />
      <StarRating />
      <Feedback />
    </div>
  );
}
