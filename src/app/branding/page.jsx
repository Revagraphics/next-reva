import ProjectProcess from "@/components/ProjectProcess";
import ImageSlider from "@/components/ImageSlider";
import PaymentSection from "@/components/PaymentSection";
import Instagram from "@/components/Instagram";
// import bg from "../assets/about.webp";
// import content from "../assets/content.png";
import ShimmerText from "@/components/ShimmerText";
import DecorativeUnderline from "@/components/DecorativeUnderline";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Brand Identity & Design Services | Reva Graphics",
  "Build a distinctive brand with Reva Graphics, from brand strategy and visual identity to creative advertising and culture.",
  "/branding",
);

export default function Branding() {
  
  return (
    <>

      <div className="overflow-x-hidden">

        <div
          className="navbar-clearance-brand-hero relative h-screen w-full bg-gray-50 overflow-hidden"
        >
          {/* Video + Overlays (unchanged) */}
          <video
            src="/video-slider.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/70"></div>
          <div className="absolute inset-0 bg-linear-to-b from-gray-50/80 via-white/60 to-gray-100/80"></div>


          {/* Text Content */}
          <div className="navbar-clearance-hero-content absolute inset-0 flex items-center justify-center text-center px-6 z-10 pointer-events-none">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-7xl font-bold  text-gray-900 leading-tight tracking-tight mb-6">
                We build a unique Brand
                <br />
                {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600">
                  for attract the customers
                </span> */}
                <ShimmerText>for attract the customers</ShimmerText>
              </h1>

              
              <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-10">
                We craft stunning digital experiences that captivate and inspire
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
                <button className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition">
                  Explore Our Work
                </button>

                <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition">
                  Talk To Us
                </button>
              </div>
            </div>
          </div>

          {/* Floating Image Gsap Controlling */}
          {/* {floatingImages.map((img) => (
            <div
              key={img.id}
              id={`float-${img.id}`}
              className="absolute pointer-events-none z-50"
              style={{
                left: 0,
                top: 0,
                willChange: "transform", // performance boost
              }}
            >
              <img
                src={img.src}
                alt="floating"
                className="rounded-2xl  border-[2px] border-orange-500 shadow-2xl ring-1 ring-white/60 object-cover"
                style={{
                  width: `${img.size}px`,
                  height: `${img.size}px`,
                }}
              />
            </div>
          ))} */}

          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-gray-50 to-transparent"></div>
        </div>

        <section className="min-h-screen lg:pt-24 pb-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Main Heading */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tighter text-black">
                We offer <ShimmerText>Brand Identity</ShimmerText> Designing Services
              </h2>

              <DecorativeUnderline
                width="420px"
                className="mt-6 mx-auto md:w-95 lg:w-112.5"
                centerColor="#3B82F6"
              />
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Creating meaningful brands that connect, inspire, and stand the
                test of time.
              </p>
            </div>

            {/* Two Column Content */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left Column - Visual Identity */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-px h-10 bg-black"></div>
                  <h2 className="uppercase text-sm tracking-[2px] font-medium text-gray-500">
                    <ShimmerText>Brand Strategy</ShimmerText> & Visual Identity
                  </h2>
                </div>

                <p className="text-[17px] leading-relaxed  hover:stroke-black text-gray-700">
                  The most meaningful brands are those that are rich with
                  meaning. They push us to think, feel, and behave in new ways.
                  We design amazing brands that express your mission — from
                  naming and messaging to visual identities and advertising.
                </p>

                <p className="text-[17px] leading-relaxed  hover:stroke-black text-gray-700">
                  We’ll work together to create a story that captivates and
                  drives your audience. A strong visual identity conveys the
                  spirit of your company. From logos and typefaces to graphic
                  treatments and illustrations, we craft every element so your
                  brand stands out with clarity and confidence.
                </p>
              </div>

              {/* Right Column - Advertising & Culture */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-px h-10 bg-black"></div>
                  <h2 className="uppercase text-sm tracking-[2px] font-medium text-gray-500">
                    <ShimmerText>Creative Advertising</ShimmerText> & Brand Culture
                  </h2>
                </div>

                <p className="text-[17px] leading-relaxed  hover:stroke-black text-gray-700">
                  We create one-of-a-kind creative that sets you apart — whether
                  it’s for print, direct mail, or digital advertising. Our
                  strategists help you choose the optimal advertising mix and
                  manage campaigns that deliver maximum impact within your
                  budget.
                </p>

                <p className="text-[17px] leading-relaxed  hover:stroke-black text-gray-700">
                  Our award-winning creative sparks an emotional reaction. It
                  brings your brand story to life, captivates attention, engages
                  the senses, and transforms perspectives. We develop
                  commercials that create memorable experiences across any medium.
                </p>

                <p className="text-[17px] leading-relaxed  hover:stroke-black text-gray-700">
                  When a brand is deeply ingrained in company culture, you can
                  feel it. We help you build excitement and stewardship so your
                  team becomes true brand ambassadors.
                </p>
              </div>
            </div>
          </div>
        </section>

        
        <ImageSlider />
        <ProjectProcess />
        <PaymentSection />
        
        <Instagram />
      </div>
    </>
  );
}
