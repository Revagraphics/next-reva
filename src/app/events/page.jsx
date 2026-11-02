import ShimmerText from "@/components/ShimmerText";
import GridBg from "@/components/GridBg";
import DecorativeUnderline from "@/components/DecorativeUnderline";
import WorkGallery from "@/components/WorkGallery";
import campaign from "@/assets/campaign.webp";
import website from "@/assets/banglore.jpg";
import branding from "@/assets/branding.webp";
import brochure from "@/assets/brochure.jpg";
import testimonial from "@/assets/testimonial.webp";
import packaging from "@/assets/product-packaging.webp";
import { createPageMetadata } from "@/lib/seo";

const works = [
  { id: 1, image: campaign, title: "Event Invitations" },
  { id: 2, image: website, title: "Event Banners" },
  { id: 3, image: branding, title: "Standee Displays" },
  { id: 4, image: brochure, title: "Stage Backdrops" },
  { id: 5, image: testimonial, title: "Event Badges" },
  { id: 6, image: packaging, title: "Wristbands" },
  { id: 7, image: packaging, title: "Event Flyers" },
  { id: 8, image: packaging, title: "Entry Passes" },
  { id: 9, image: packaging, title: "Certificates" },
  { id: 10, image: packaging, title: "Event Lanyards" },
];

export const metadata = createPageMetadata(
  "Event Branding & Design | Reva Graphics",
  "Create memorable events with custom event branding, design, promotional materials, and print solutions from Reva Graphics.",
  "/events",
);

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <GridBg gridSize={80} lineColor="#f5f1ed" bgColor="#f2fff5">
        <section className="navbar-clearance-hero relative flex min-h-[40vh] flex-col items-center justify-end overflow-hidden pt-32 pb-16 text-black sm:pt-36 md:pt-40 md:pb-24">
          <div className="relative z-10 mx-auto max-w-[90%] px-6 text-center">
            <h1 className="mb-6 text-4xl font-bold leading-none tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <ShimmerText>Events Prints</ShimmerText>
            </h1>
            <DecorativeUnderline
              width="min(420px, 85vw)"
              className="mx-auto mt-6"
              centerColor="#3B82F6"
            />
            <p className="mx-auto max-w-2xl text-lg opacity-90 sm:text-xl md:text-2xl">
              Custom event branding and print materials that help create
              memorable, polished experiences.
            </p>
            <button className="mt-10 rounded-3xl bg-white px-8 py-4 text-base font-semibold text-orange-600 shadow-xl transition-all duration-300 hover:bg-orange-100 active:scale-95 sm:px-10 sm:text-lg">
              Get a Free consultation
            </button>
          </div>
          <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-linear-to-t from-white/10 to-transparent" />
        </section>
      </GridBg>

      <WorkGallery works={works} name="Events" />
    </div>
  );
}
