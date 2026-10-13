import Image from "next/image";
import img1 from "../assets/workflow-icon1.webp";
import img2 from "../assets/workflow-icon2.webp";
import img3 from "../assets/workflow-icon3.webp";
import img4 from "../assets/workflow-icon5.webp";
import img5 from "../assets/workflow-icon6.webp";
import img6 from "../assets/workflow-icon7.webp";
import img7 from "../assets/workflow-icon9.webp";
import img8 from "../assets/workflow-icon10.webp";
import ShimmerText from "./ShimmerText";
import GridBg from "./GridBg";

export default function ProjectProcess() {
  const processes = [
    { id: 1, icon: img1, title: "Project Brief" },
    { id: 2, icon: img2, title: "50% Payment – Advance" },
    { id: 3, icon: img3, title: "Research Work" },
    { id: 4, icon: img4, title: "Design Creation" },
    { id: 5, icon: img5, title: "Initial Presentation" },
    { id: 6, icon: img6, title: "Client Feedback" },
    { id: 7, icon: img7, title: "Final Presentation" },
    { id: 8, icon: img8, title: "50% Remaining" },
  ];

  return (
    <section className="process_section relative bg-[#f2fff5] py-16 md:py-24 overflow-hidden">
      {/* Optional Background Grid Component */}
      <GridBg />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="process_heading text-[#313131] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            From Concept to <ShimmerText>Completion</ShimmerText>
          </h2>
        </div>

        {/* Cards Grid - Compact, Balanced, & Modern */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {processes.map((process, index) => (
            <div
              key={process.id}
              className="group relative bg-white/90 backdrop-blur-xl 
                border border-orange-500/20 hover:border-orange-500/60
                rounded-2xl p-4 sm:p-5 
                shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                hover:shadow-[0_12px_30px_rgba(249,115,22,0.12)]
                hover:-translate-y-1.5 
                transition-all duration-300 ease-out
                flex flex-col items-center text-center justify-between"
            >
              {/* Subtle top accent highlight on hover */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 to-pink-500 opacity-0 group-hover:opacity-100 rounded-t-2xl transition-opacity duration-300" />

              {/* Icon Container - Cleaner & Compact */}
              <div className="my-2 p-3 bg-orange-50/50 rounded-xl group-hover:bg-orange-500/10 transition-colors duration-300">
                <Image
                  src={process.icon}
                  alt={process.title}
                  width={64}
                  height={64}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <div className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-zinc-800 tracking-tight leading-snug">
                {process.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}