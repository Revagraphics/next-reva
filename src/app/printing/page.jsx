import Image from "next/image";
import Link from "next/link";
import ShimmerText from "@/components/ShimmerText";
import DecorativeUnderline from "@/components/DecorativeUnderline";
import HeroVideo from "@/components/HeroVideo";
import ScrollToServices from "@/components/ScrollToServices";

export const metadata = {
  title: "Printing Services | Reva Graphics",
  description:
    "High-quality printing services for business cards, brochures, banners, and marketing materials.",
  openGraph: {
    title: "Printing Services | Reva Graphics",
    description:
      "High-quality printing services for business cards, brochures, banners, and marketing materials.",
  },
};

const services = [
  {
    title: "Corporate Printing",
    description:
      "Premium matte, gloss, and spot UV business cards, letterheads, envelopes, and corporate stationery.",
    href: "/corporate",
    image:
      "https://images.pexels.com/photos/4107145/pexels-photo-4107145.jpeg",
    alt: "Business Cards & Stationery",
  },
  {
    title: "Corporate Gifting",
    description:
      "Eye-catching flyers, tri-fold brochures, catalogs, and large format posters for promotions and events.",
    href: "/gifting",
    image:
      "https://images.pexels.com/photos/346553/pexels-photo-346553.jpeg",
    alt: "Flyers & Brochures",
  },
  {
    title: "Event Printing",
    description:
      "Custom packaging, banners, roll-up stands, stickers, labels, and creative specialty printing.",
    href: "/events",
    image:
      "https://images.pexels.com/photos/18138580/pexels-photo-18138580.jpeg",
    alt: "Packaging & More",
  },
];

const portfolio = [1, 2, 3, 4, 5, 6];

export default function PrintingPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <HeroVideo src="/print.mp4" />

        <div className="absolute inset-0 bg-slate-950/10" />
        <div className="absolute inset-0 bg-linear-to-t from-black/10 via-slate-900/10 to-transparent" />

        <div className="relative z-10 text-center px-6 sm:px-4 max-w-5xl mx-auto py-20 mt-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md text-sm font-medium uppercase tracking-[0.3em] text-white/80 mb-6">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF9800] animate-pulse" />
            Precision Printing Studio
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Premium <ShimmerText>Printing</ShimmerText>
          </h1>

          <DecorativeUnderline
            width="520px"
            className="mt-2 mx-auto"
            centerColor="#3B82F6"
          />

          <p className="text-md sm:text-xl md:text-2xl px-8 text-white/90 mb-8 max-w-3xl mx-auto">
            High-quality prints that make your brand stand out. From business
            cards to large format — we bring your ideas to life with premium
            materials and flawless detail.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ScrollToServices />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-white/70 rounded-full animate-scroll" />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#08182b] mb-4">
              What We <ShimmerText>Print</ShimmerText>
            </h2>
            <DecorativeUnderline
              width="260px"
              className="mb-4 mx-auto md:w-[320px]"
              centerColor="#3B82F6"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beautiful, professional prints crafted with precision and premium
              materials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item) => (
              <article
                key={item.title}
                className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority={item.title === "Corporate Printing"}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-[#08182b]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <Link
                    href={item.href}
                    className="text-orange-500 font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    view more <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#08182b] mb-4">
              Our Recent <ShimmerText>Prints</ShimmerText>
            </h2>
            <DecorativeUnderline
              width="360px"
              className="mt-2 mx-auto md:w-[320px]"
              centerColor="#3B82F6"
            />
            <p className="text-xl text-gray-600">
              Real projects that turned ideas into stunning reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl aspect-4/3 shadow-md hover:shadow-xl transition-all duration-500"
              >
                <Image
                  src={`https://picsum.photos/id/${180 + i}/800/600`}
                  alt={`Print Project ${i}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-8">
                  <div>
                    <p className="text-white font-medium text-lg">
                      Project Title {i}
                    </p>
                    <p className="text-white/70 text-sm">
                      Business Cards · Brochures
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-[#08182b] text-white">
        <div className="max-w-4xl mx-auto text-center px-3 lg:px-5 md:px-5">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Print Something Amazing <ShimmerText>?</ShimmerText>
          </h2>
          <p className="text-white/80 mb-10">
            Get a free quote today. Fast turnaround • Premium quality •
            Competitive prices
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 lg:px-12 py-3 lg:py-5 bg-linear-to-r from-[#FF9800] to-[#E91E63] hover:bg-orange-600 text-white font-semibold text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            Get Free Quote Now
          </Link>
        </div>
      </section>
    </div>
  );
}