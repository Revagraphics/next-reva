import ShimmerText from "@/components/ShimmerText";
import GridBg from "@/components/GridBg";
import DecorativeUnderline from "@/components/DecorativeUnderline";
import SelectedWork from "@/components/SelectedWork";
import campaign from "@/assets/campaign.webp";
import website from "@/assets/banglore.jpg";
import branding from "@/assets/branding.webp";
import brochure from "@/assets/brochure.jpg";
import testimonial from "@/assets/testimonial.webp";
import packaging from "@/assets/product-packaging.webp";
import idCards from "@/assets/event/id-cards.jpg";
import letterhead from "@/assets/event/letterheads.jpg";
import envelopes from "@/assets/gifting/envelop.jpg";

const works = [
  { id: 1, image: campaign, title: "Brochures" },
  { id: 2, image: website, title: "Catalogues" },
  { id: 3, image: branding, title: "Booklets" },
  { id: 4, image: brochure, title: "Magazines" },
  { id: 5, image: testimonial, title: "UV Cards" },
  { id: 6, image: packaging, title: "Stickers" },
  { id: 7, image: letterhead, title: "Letterheads" },
  { id: 8, image: envelopes, title: "Envelopes" },
  { id: 9, image: letterhead, title: "Magazines" },
  { id: 10, image: idCards, title: "ID Cards" },
  { id: 11, image: packaging, title: "Lanyards" },
];

export const metadata = {
  title: "Corporate Design & Printing | Reva Graphics",
  description:
    "Strengthen your corporate identity with business stationery, branded materials, and print services from Reva Graphics.",
  openGraph: {
    title: "Corporate Design & Printing | Reva Graphics",
    description:
      "Corporate identity, branded business materials, and professional printing from Reva Graphics.",
  },
};

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
          <section className=" min-h-[65vh] flex items-center justify-center text-black py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-[90%] mx-auto px-6 text-center relative z-10">
              <h1 className="text-4xl sm:text-2xl md:text-5xl lg:text-6l font-bold tracking-tighter leading-none mb-6">
                <ShimmerText> Corporate Prints </ShimmerText>
              </h1>
              <DecorativeUnderline
                width="420px"
                className="mt-6 mx-auto md:w-95 lg:w-112.5"
                centerColor="#3B82F6"
              />

              <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl opacity-90">
                Premium, high-volume corporate printing solutions that elevate
                your brand identity and professional presence.
              </p>
              <button className="mt-10 px-8 sm:px-10 py-4 bg-white text-orange-600 font-semibold text-base sm:text-lg rounded-3xl hover:bg-orange-100 active:scale-95 transition-all duration-300 shadow-xl">
                Get a Free consultation
              </button>
            </div>
            {/* Decorative cloud elements */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-white/10 to-transparent pointer-events-none" />
          </section>
        </GridBg>

        <SelectedWork
          works={works}
          name="Corporate"
          viewAllLink="/portfolio"
          viewAllText="See All Prints"
          duration={20}
        />

        
      </div>
    </>
  );
}
