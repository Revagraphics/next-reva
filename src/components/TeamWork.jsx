import Link from "next/link"
import Image from 'next/image'
import Team from "../assets/teamwork2.svg"



export default function TeamWork() {
  return (
    <section className="bg-[#fbf1ef] py-20 md:py-24">
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* TEXT */}
          <section className="hero-animate flex-1 text-center lg:text-left">
            <span className="text-indigo-600 font-semibold mb-4 uppercase text-[1.3rem]">
              CAREER
            </span>
            <h2 className="lg:text-3xl text-[#30303c] sm:text-2xl  font-bold leading-tight">
              Teamwork is the ability to work  <br />together toward a common vision
            </h2>


            <Link
              href="/contact"
              className="inline-block mt-8 bg-gradient-to-r from-[#FF9800] to-[#E91E63] text-zinc-100 px-8 py-3 rounded-full"
            >
              Let&apos;s Talk

            </Link>
          </section>

          {/* IMAGE */}
          <section className="hero-animate flex-1 w-full">
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src={Team}
                alt="hero"
                className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};


