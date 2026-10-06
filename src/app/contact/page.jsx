import React from "react";
import Feedback from "@/components/Feedback";
import ShimmerText from "@/components/ShimmerText";
import FAQ from "@/components/FAQ";
import GridBg from "@/components/GridBg";

export const metadata = {
  title: "Contact Reva Graphics | Start a Project",
  description:
    "Contact Reva Graphics to discuss creative design, marketing, development, and print projects for your business.",
  openGraph: {
    title: "Contact Reva Graphics | Start a Project",
    description:
      "Talk to Reva Graphics about your next design, marketing, development, or print project.",
  },
};

// const pageData = [
//   {
//     question:
//       "What design files and formats will I receive upon project completion?",
//     answer:
//       "For graphic design, you receive fully layered source files (Adobe Illustrator, Photoshop, or Figma) alongside high-resolution production formats like print-ready PDFs, SVGs for web use, and optimized PNG/JPEG exports.",
//   },
//   {
//     question:
//       "Do your web design and development services include mobile optimization?",
//     answer:
//       "Yes, every website we build is developed with a mobile-first approach. We ensure fully responsive layouts, optimized asset loading, and smooth interactions across all modern smartphones, tablets, and desktop displays.",
//   },
//   {
//     question:
//       "What is your typical turnaround time for video editing and post-production?",
//     answer:
//       "Turnaround depends on footage volume and complexity. Standard promotional videos or social cuts typically take 3 to 5 business days for an initial draft. Complex edits involving heavy motion graphics or sound design are mapped out on custom timelines.",
//   },
//   {
//     question:
//       "How do you handle revisions during the design or editing process?",
//     answer:
//       "We structure our projects with clear review milestones. Each package includes a set number of revision rounds (typically 2 to 3) where you can consolidate feedback using interactive markup tools before we lock in the final render or code deployment.",
//   },
//   {
//     question:
//       "Can you update or redesign an existing website built by another developer?",
//     answer:
//       "Absolutely. We can perform a comprehensive UI/UX redesign or step into your existing codebase (whether it's React, WordPress, or raw HTML/CSS) to clean up performance bottlenecks, update branding, and optimize SEO structure.",
//   },
// ];

export default function Contact() {
  return (
    <>

      <div className="bg-[white] min-h-screen">
        {/* Navbar */}
        <div className="max-w-[90%] mx-auto py-5 px-6">
          {/* Let's Talk Section */}
          <div className="pt-20 mt-5 flex min-h-[70vh] items-center pb-16">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Text */}
              <div>
                <p className="text-blue-600 font-medium tracking-widest text-sm mb-3">
                  LET&apos;S TALK
                </p>
                <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold text-[#30303c] mb-6">
                  <ShimmerText>Good talks</ShimmerText> make <br /> good
                  Projects
                </h1>

                <p className="text-lg text-gray-600 max-w-md">
                  We would be happy to hear from you. Please fill in the form
                  below or mail us your requirements.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-100 rounded-3xl p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl">
                      📞
                    </div>
                    <p className="font-medium text-gray-900">
                      Sales Department
                    </p>
                  </div>
                  <a
                    href="tel:+919958503650"
                    className="text-xl font-semibold text-gray-800 hover:text-blue-600"
                  >
                    +91 995 850 3650
                  </a>
                </div>

                <div className="bg-white border border-gray-100 rounded-3xl p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl">
                      📞
                    </div>
                    <p className="font-medium text-gray-900">
                      Technical Department
                    </p>
                  </div>
                  <a
                    href="tel:+919310711788"
                    className="text-xl font-semibold text-gray-800 hover:text-blue-600"
                  >
                    +91 9310 711 788
                  </a>
                </div>

                <div className="bg-white border border-gray-100 rounded-3xl p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl">
                      ✉️
                    </div>
                    <p className="font-medium text-gray-900">
                      Sales Department
                    </p>
                  </div>
                  <a
                    href="mailto:nverma@revagraphics.com"
                    className="text-lg font-medium text-gray-700 hover:text-blue-600 break-all"
                  >
                    nverma@revagraphics.com
                  </a>
                </div>

                <div className="bg-white border border-gray-100 rounded-3xl p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl">
                      ✉️
                    </div>
                    <p className="font-medium text-gray-900">
                      Technical Department
                    </p>
                  </div>
                  <a
                    href="mailto:revagraphicss@gmail.com"
                    className="text-lg font-medium text-gray-700 hover:text-blue-600 break-all"
                  >
                    revagraphicss@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <FAQ
          data={pageData}
          title="Design & Development Insights"
          subtitle="Everything you need to know about our creative workflow and development process."
        /> */}

        <Feedback />
      </div>
    </>
  );
}
