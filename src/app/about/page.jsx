import Link from "next/link";
import Image from 'next/image'

import AnimatedStat from "@/components/AnimatedStat";
import build from "@/assets/building.jpg";
import Mission from "@/components/Mission";
import Ethics from "@/components/Ethics";
import TeamWork from "@/components/TeamWork";
import { createPageMetadata } from "@/lib/seo";
import SelectedWork from "@/components/SelectedWork";
import ShimmerText from "@/components/ShimmerText";
import GridBg from "@/components/GridBg";
import xv from "@/assets/xv.png";

import campaign from "@/assets/campaign.webp";
import banglore from "@/assets/banglore.jpg";
import branding from "@/assets/branding.webp";
import brochure from "@/assets/brochure.jpg";
import testimonial from "@/assets/testimonial.webp";
import packaging from "@/assets/product-packaging.webp";

export const metadata = createPageMetadata(
  "About Reva Graphics | Creative Digital Agency",
  "Meet Reva Graphics, a creative agency delivering design, marketing, and digital solutions for ambitious businesses.",
  "/about",
);

const works = [
  { id: 1, image: campaign, title: "Campaign" },
  { id: 2, image: banglore, title: "Web Design" },
  { id: 3, image: branding, title: "Branding" },
  { id: 4, image: brochure, title: "Brochure" },
  { id: 5, image: testimonial, title: "Testimonials" },
  { id: 6, image: packaging, title: "Product Packaging" },
];

export default function About() {
  return (
    <>
      

      <div className=" min-h-screen">
        <section className="mt-28 px-4 flex item-center lg:h-[75vh] max-w-[90%] mx-auto">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-12 items-center">
            {/* TEXT */}
            <section className="hero-animate flex-1 text-center lg:text-left">
              <span className="text-indigo-600 font-semibold mb-4 uppercase text-[1.3rem]">
                We Are Reva
              </span>
              <h1 className="text-3xl text-[#30303c] sm:text-2xl lg:text-6xl font-semibold leading-tight">
                We are a <ShimmerText>creative digital</ShimmerText>
                <br /> agency based in India.
              </h1>

              <p className="mt-4 text-[#30303c] ">
                Reva started its operation in the year 2019. We are a Worldwide,
                based Web Designing and Digital Marketing Company. Our main
                Domain is Web Design, Web Development, Web Application, Digital
                Marketing, Product Design, and Cloud Services.
              </p>

              <Link
                href="/contact"
                className="inline-block mt-8 bg-linear-to-r from-[#FF9800] to-[#E91E63] text-white px-8 py-3 rounded-full"
              >
                 Let&apos;s Talk
              </Link>
            </section>

            {/* IMAGE */}
            <section className="hero-animate flex-1 w-full">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src={build}
                  alt="hero"
                  className="w-full h-80 sm:h-105 lg:h-130 object-cover"
                />
              </div>
            </section>

          </div>
        </section>

        {/* ==================== ABOUT REVA SECTION (with Animated Stats) ==================== */}
        <section className=" py-2 lg:py-0 ">
          <GridBg gridSize={80} lineColor="#f5f1ed" bgColor="#f8f7f4">
            <div className="max-w-[90%] mx-auto py-10">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left Side */}
                <div>
                  <section className="hero-animate flex-1 w-full">
                    <div className="relative rounded-3xl overflow-hidden">
                      <Image
                        src={xv}
                        alt="hero"
                        className="w-full h-80 sm:h-105 lg:h-130 object-cover"
                      />
                    </div>
                  </section>
                  {/* <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 475.83 475.83"
                  >
                    <circle cx="237.91" cy="237.91" r="237.91" fill="#231f20" />
                  </svg> */}
                </div>

                {/* Right Side */}
                <div className="space-y-8">
                  {/* <p className="text-indigo-600 font-semibold mb-4 uppercase text-[1.3rem]">
                    ABOUT THE REVA
                  </p> */}
                  <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                    <ShimmerText>Reva Graphics</ShimmerText>
                  </h2>
                  <h3 className="text-3xl font-semibold text-gray-900">
                    Reva is a full-service web and digital marketing company
                    based in India.
                  </h3>

                  <div className="text-gray-600 leading-relaxed space-y-6">
                    <p>
                      Our experts provide a wide range of services including app
                      design, web development, digital marketing, ecommerce
                      solutions and cloud development. We stay updated with the
                      technology to build innovative digital products that meet
                      client requirements across multiple business verticals and
                      domains by housing some of the best professionals in the
                      industry.
                    </p>

                    <p>
                      To transform the concepts to design, concluding with full
                      executions, we also stay updated with the latest trending
                      technologies. And we evolve with the advancement in
                      technology because we believe in making our technology as
                      your innovation.
                    </p>

                    <p className="text-gray-700">
                      To learn more about our approach to business and work,
                      feel free to hop on over to our{" "}
                      <Link
                        href="/contact"
                        className="text-orange-500 hover:underline font-medium"
                      >
                        Open Contact Page.
                      </Link>
                    </p>
                  </div>

                  {/* Animated Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 pt-6 border-t border-gray-200">
                    <AnimatedStat
                      label="Complete Projects"
                      end={750}
                      suffix="+"
                    />
                    <AnimatedStat label="Happy Clients" end={250} suffix="+" />
                    <AnimatedStat label="Expert Team" end={25} suffix="+" />
                    <AnimatedStat label="Success Years" end={7} suffix="+" />
                  </div>
                </div>
              </div>
            </div>
          </GridBg>
        </section>

        
        <SelectedWork
          works={works}
          title="Our Portfolio"
          highlight="Work"
          subtitle=""
          viewAllLink="/portfolio"
          viewAllText="See All Clients"
          duration={25} 
        />
        <Mission />
        <Ethics />
        {/* <ComparisonSection /> */}
        <TeamWork />
      </div>
    </>
  );
}
