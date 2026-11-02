import ShimmerText from "@/components/ShimmerText";
import GridBg from "@/components/GridBg";
import DecorativeUnderline from "@/components/DecorativeUnderline";
import WorkGallery from "@/components/WorkGallery";
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

export default function GiftingPage() {
  return (
    <>
      <div className="bg-white min-h-screen">
        {/* HERO SECTION - Orange Theme + Fully Responsive */}

        <GridBg gridSize={80} lineColor="#f5f1ed" bgColor="#f2fff5">
          <section className="navbar-clearance-hero relative flex min-h-[40vh] flex-col items-center justify-end overflow-hidden pt-32 pb-16 text-black sm:pt-36 md:pt-40 md:pb-24">
            <div className="max-w-[90%] mx-auto px-6 text-center relative z-10">
              <h1 className="mb-6 text-4xl font-bold leading-none tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <ShimmerText>Gifting Prints</ShimmerText>
              </h1>
              
              <DecorativeUnderline
                width="min(420px, 85vw)"
                className="mx-auto mt-6"
                centerColor="#3B82F6"
              />

              <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl opacity-90">
                Thoughtful custom gifts and branded merchandise for your
                clients, teams, and business events.
              </p>

              <button className="mt-10 px-8 sm:px-10 py-4 bg-white text-orange-600 font-semibold text-base sm:text-lg rounded-3xl hover:bg-orange-100 active:scale-95 transition-all duration-300 shadow-xl">
                Get a Free consultation
              </button>
            </div>

            {/* Decorative cloud elements */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-white/10 to-transparent pointer-events-none" />
          </section>
        </GridBg>

        <WorkGallery works={works} name="Gifting" />
      </div>
    </>
  );
}
