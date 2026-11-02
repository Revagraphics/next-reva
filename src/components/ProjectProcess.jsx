import ShimmerText from "./ShimmerText";
import GridBg from "./GridBg";
import { 
  FaClipboardList, 
  FaFileInvoiceDollar, 
  FaSearch, 
  FaPencilRuler, 
  FaDesktop, 
  FaComments, 
  FaCheckCircle, 
  FaHandshake 
} from "react-icons/fa";

export default function ProjectProcess() {
  const processes = [
    { id: 1, icon: <FaClipboardList className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600 group-hover:scale-110 transition-transform duration-300" />, title: "Project Brief" },
    { id: 2, icon: <FaFileInvoiceDollar className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600 group-hover:scale-110 transition-transform duration-300" />, title: "50% Payment – Advance" },
    { id: 3, icon: <FaSearch className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600 group-hover:scale-110 transition-transform duration-300" />, title: "Research Work" },
    { id: 4, icon: <FaPencilRuler className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600 group-hover:scale-110 transition-transform duration-300" />, title: "Design Creation" },
    { id: 5, icon: <FaDesktop className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600 group-hover:scale-110 transition-transform duration-300" />, title: "Initial Presentation" },
    { id: 6, icon: <FaComments className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600 group-hover:scale-110 transition-transform duration-300" />, title: "Client Feedback" },
    { id: 7, icon: <FaCheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600 group-hover:scale-110 transition-transform duration-300" />, title: "Final Presentation" },
    { id: 8, icon: <FaHandshake className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600 group-hover:scale-110 transition-transform duration-300" />, title: "50% Remaining" },
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
          {processes.map((process) => (
            <div
              key={process.id}
              className="group relative bg-gradient-to-br from-orange-100 via-amber-50 to-pink-100
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
              <div className="my-3 p-3.5 bg-orange-50/80 rounded-xl group-hover:bg-orange-500/10 transition-colors duration-300 flex items-center justify-center">
                {process.icon}
              </div>

              {/* Title */}
              <div className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-black tracking-tight leading-snug">
                {process.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}