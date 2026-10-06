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
    { id: 1, num: 1, icon: img1, title: "Project Brief" },
    { id: 2, num: 2, icon: img2, title: "50% Payment – Advance" },
    { id: 3, num: 3, icon: img3, title: "Research Work" },
    { id: 4, num: 4, icon: img4, title: "Design Creation" },
    { id: 5, num: 5, icon: img5, title: "Initial Presentation" },
    { id: 6, num: 6, icon: img6, title: "Client Feedback" },
    { id: 7, num: 7, icon: img7, title: "Final Presentation" },
    { id: 8, num: 8, icon: img8, title: "50% Remaining" },
  ];

  return (
    <section className="process_section bg-[#f2fff5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="process_heading text-[#313131] text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-16 md:mb-20">
          From Concept to <ShimmerText> Completion </ShimmerText>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {processes.map((process) => (
            <div
              key={process.id}
              className="step group
                bg-white/80 backdrop-blur-md 
                border border-orange-400/60 
                rounded-2xl sm:rounded-3xl 
                p-3 sm:p-5 md:p-6 lg:p-8 
                shadow-[0_10px_40px_rgba(0,0,0,0.07)]
                hover:shadow-[0_25px_70px_rgba(249,115,22,0.15)]
                hover:-translate-y-2 
                transition-all duration-500
                flex flex-col items-center text-center
                min-h-[200px] sm:min-h-[260px] md:min-h-[320px] lg:min-h-[380px]"
            >
              {/* Large Icon */}
              <div className="mb-3 sm:mb-6 md:mb-8 p-2 sm:p-4 md:p-5 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform duration-500">
                <Image
                  src={process.icon}
                  alt={process.title}
                  width={112}
                  height={112}
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 object-contain"
                />
              </div>

              {/* Step Number */}
              <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-orange-500 mb-2 sm:mb-3 md:mb-4 tracking-tighter">
                {process.num}
              </div>

              {/* Title */}
              <div className="text-[11px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800 leading-tight">
                {process.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
