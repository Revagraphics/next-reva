import ShimmerText from "@/components/ShimmerText";
import GridBg from "@/components/GridBg";
import DecorativeUnderline from "@/components/DecorativeUnderline";
import SelectedWork from "@/components/SelectedWork";
import campaign from "@/assets/campaign.webp";
import website from "@/assets/banglore.jpg";
import branding from "@/assets/branding.webp";
import brochure from "@/assets/brochure.jpg";
import { createPageMetadata } from "@/lib/seo";
import testimonial from "@/assets/testimonial.webp";
import packaging from "@/assets/product-packaging.webp";

const works = [
  { id: 1, image: campaign, title: "Gift Boxes" },
  { id: 2, image: website, title: "Paper Bags" },
  { id: 3, image: branding, title: "Gift Hampers" },
  { id: 4, image: brochure, title: "Corporate Diaries" },
  { id: 5, image: testimonial, title: "Branded Mugs" },
  { id: 6, image: packaging, title: "Custom T-Shirts" },
  { id: 7, image: packaging, title: "Promotional Pens" },
  { id: 8, image: packaging, title: "Keychains" },
  { id: 9, image: packaging, title: "Tote Bags" },
  { id: 10, image: packaging, title: "Gift Cards" },
];

export const metadata = createPageMetadata(
  "Corporate Gifting Solutions | Reva Graphics",
  "Discover thoughtful custom corporate gifts and branded merchandise for clients, teams, and business events.",
  "/gifting",
);

export default function Cloud() {
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
          <section className=" min-h-[70vh] flex items-center justify-center text-black py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-[90%] mx-auto px-6 text-center relative z-10">
              

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none mb-6">
                <ShimmerText> Gifting Prints </ShimmerText>
              </h1>
              <DecorativeUnderline
                width="420px"
                className="mt-6 mx-auto md:w-95 lg:w-112.5"
                centerColor="#3B82F6"
              />

              <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl opacity-90">
               Premium, high-volume corporate printing solutions that elevate your brand identity and professional presence.
              </p>

              <button className="mt-10 px-8 sm:px-10 py-4 bg-white text-orange-600 font-semibold text-base sm:text-lg rounded-3xl hover:bg-orange-100 active:scale-95 transition-all duration-300 shadow-xl">
                Get a Free consultation
              </button>
            </div>

            {/* Decorative cloud elements */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-white/10 to-transparent pointer-events-none" />
          </section>
        </GridBg>

        {/* THREE SERVICES SECTION - Orange Theme + Responsive Grid */}

        {/* <section className="bg-[#fffaf0] py-16 md:py-20">
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
                 
                  <div className="mb-8 w-20 h-20 flex items-center justify-center bg-orange-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

             
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#08182b] mb-4">
                    {service.title}
                  </h3>

                 
                  <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                    {service.description}
                  </p>

                
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

                
                  <button className="mt-auto w-full py-4 text-orange-600 font-semibold border border-orange-200 hover:border-orange-500 rounded-3xl transition-all group-hover:bg-orange-600 group-hover:text-white">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section> */}

                <SelectedWork
                  works={works}
                  name="Gifting"
                  viewAllLink="/portfolio"
                  viewAllText="See All Prints"
                  duration={25} 
                />

        
      </div>
    </>
  );
}
