import React from "react";
import Link from "next/link";
import content from "@/assets/content.png";
import content2 from "@/assets/wc.png";
import Image from 'next/image'

import benefit1 from "@/assets/benefit1.svg?url";
import benefit2 from "@/assets/benefit2.svg?url";
import { createPageMetadata } from "@/lib/seo";
import benefit3 from "@/assets/benefit3.svg?url";
import benefit4 from "@/assets/benefit4.svg?url";
import benefit5 from "@/assets/benefit5.svg?url";
import benefit6 from "@/assets/benefit6.svg?url";
import devloper from "@/assets/developers.svg?url";
import team from "@/assets/team-support.svg?url";

export const metadata = createPageMetadata(
  "Content Creation Services | Reva Graphics",
  "Create clear, engaging brand content with Reva Graphics, including digital content, copywriting, and creative production.",
  "/content",
);

export default function Content() {
  const Benefits = [
    {
      id: 1,
      img: benefit1,
      title: "Original Content",
      dis: "Original content from experienced advertising copywriter.",
    },
    {
      id: 2,
      img: benefit2,
      title: "Delivery",
      dis: "Delivery within 24 hours, in various cases.",
    },
    {
      id: 3,
      img: benefit3,
      title: "Fully Researched",
      dis: "Thoroughly researched and written carefully.",
    },
    {
      id: 4,
      img: benefit4,
      title: "SEO Based",
      dis: "Keywords to increase your SEO ranking.",
    },
    {
      id: 5,
      img: benefit5,
      title: "Revisions",
      dis: "Revisions to suit your requirements.",
    },
    {
      id: 6,
      img: benefit6,
      title: "Experienced Team",
      dis: "High-quality content from an experienced team.",
    },
  ];

  return (
    <>


      <div className="min-h-screen bg-[#f2fff5]">

        {/* Hero Section */}
        <section className="pt-20 pb-32 overflow-hidden">
          <div className="max-w-[90%] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center pt-16">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="py-2.5 text-indigo-600 text-xl lg:text-2xl font-semibold tracking-wide">
                    India&apos;s highest rated web development company
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#30303c]">
                  Content fires up your{" "}
                  <span className="bg-orange-500 bg-clip-text text-transparent">
                    Digital marketing
                  </span>{" "}
                  strategies
                </h1>

                <p className="text-lg lg:text-xl text-[#30303c] leading-relaxed max-w-lg">
                  Hire website developers from us to establish a strong online
                  presence that will concrete your path toward success.
                </p>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-10 py-5 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Let’s discuss
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>

              {/* Right Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-6 bg-linear-to-br from-orange-400/30 to-purple-400/30 rounded-[3rem] -rotate-6 blur-xl" />
                  <Image
                    src={content}
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
              {/* Left Text */}
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#30303c]">
                  Get quality Content for <br />
                  your website &amp; social media
                </h2>
                <div className="space-y-6 text-[#30303c] text-lg leading-relaxed">
                  <p>
                    We at REVA GRAPHICS make and create engaging content to
                    brilliantly present them, we take pride in providing the
                    best content writing services in India. Just give us all the
                    information you want to see in an advertisement. Instead of
                    going to just any content writer online, be assured that you
                    will receive the best service from us. For our advertising
                    content writing team, it is not only a job but also their
                    passion. They put both their hearts and minds into it. The
                    scarcity of content writing services in India is staggering.
                    Such that no one faces the insufficiency of the content
                    writer online, we are here to help you with everything.
                  </p>
                  <p>
                    There are not many companies which provide content writing
                    services in India. Undoubtedly, you would find a content
                    writer online offering content writing services. However, no
                    one would take responsibility for shoddy work. To avoid such
                    inconvenience, we are here to help you. Our expert
                    advertising content writer team has not only a vast amount
                    of knowledge in the field of marketing and advertising, but
                    they also follow the latest trends in the market.
                  </p>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-6 bg-linear-to-br from-orange-400/30 to-purple-400/30 rounded-[3rem] -rotate-6 blur-xl" />
                  <Image
                    src={content2}
                    alt="Content Writing Services"
                    className="relative z-10 w-full max-w-md lg:max-w-lg "
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Clean & Responsive */}
        <section className="pt-20 pb-32 bg-white">
          <div className="max-w-[90%] mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#30303c]">
                Benefits of Working{" "}
                <span className="bg-orange-500 bg-clip-text text-transparent">
                  With Us
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="group bg-white border border-gray-200 hover:border-orange-300 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 mb-6 bg-linear-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={benefit.img}
                      alt={benefit.title}
                      className="w-9 h-9 object-contain"
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

        <section className="pt-20 pb-32 bg-white">
          <div className="max-w-[90%] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side Content */}
              <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
                <h2 className="text-[#3f3f3f] text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold">
                  Hire world-class developers for your project
                </h2>

                <p className="text-[#3f3f3f] text-lg md:text-xl leading-relaxed max-w-lg">
                  We have a dexterous team of designers & developers that works
                  on clients&apos; projects excellently and delivers the project on
                  timeline.
                </p>

                {/* Optional CTA Button */}
                <div>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    Hire Developers Now
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Right Side Image */}
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <div className="absolute -inset-6 bg-linear-to-br from-orange-400/30 to-purple-400/30 rounded-[3rem] -rotate-6 blur-xl" />

                  <Image
                    src={devloper}
                    alt="Hire World-Class Developers"
                    className="relative z-10 w-full h-auto rounded-3xl shadow-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-32 bg-white">
          <div className="max-w-[90%] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side Content */}
              <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
                <span>CONTACT US</span>
                <h2 className="text-[#3f3f3f] text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold">
                  Have a project in mind? Let&apos;s get to chat.
                </h2>

                {/* Optional CTA Button */}
                <div className="gap-5 flex ">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    Contact Us
                  </Link>

                  <a
                    href=""
                    className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    Whatsapp
                  </a>
                </div>
              </div>

              {/* Right Side Image */}
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <div className="absolute -inset-6 bg-linear-to-br from-orange-400/30 to-purple-400/30 rounded-[3rem] -rotate-6 blur-xl" />

                  <Image
                    src={team}
                    alt="Hire World-Class Developers"
                    className="relative z-10 w-full h-auto rounded-3xl shadow-2xl object-cover"
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
