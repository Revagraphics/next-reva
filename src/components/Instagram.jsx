import Image from 'next/image'
import Link from "next/link";
import Insta from "../assets/phone-frame.jpg";
import ShimmerText from "./ShimmerText";

export default function Instagram() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-[320px] w-full">
                <div className="bg-black rounded-[2.25rem] overflow-hidden aspect-[9/19] relative">
                  <Image
                    src={Insta}
                    alt="Reva Instagram"
                    className="w-full h-full object-cover"
                  />
                </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-white/10 to-transparent rounded-[4rem] pointer-events-none -z-10" />
            </div>
          </div>

          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="max-w-lg lg:max-w-none mx-auto lg:mx-0">
              <h4 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#30303c] leading-tight tracking-tight mb-8">
                Check out our Instagram <br className="hidden lg:block" />
                for daily updates
              </h4>

              <div className="btn-div mt-10">
                <a
                  href="https://www.instagram.com/werevagraphics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-lg hover:shadow-xl"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                  <span>@werevagraphics</span>
                </a>
              </div>

              <p className="mt-6 text-gray-600 text-lg">
                <ShimmerText> Daily design inspiration </ShimmerText>, project reveals, and behind-the-scenes moments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

