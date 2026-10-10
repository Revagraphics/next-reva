'use client';
import Image from 'next/image'
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ShimmerText from "../components/ShimmerText";
import DecorativeUnderline from "../components/DecorativeUnderline";

import logo1 from "../assets/customer-logo-1.png";
import logo2 from "../assets/customer-logo-2.png";
import logo3 from "../assets/customer-logo-11.png";
import logo4 from "../assets/customer-logo-4.png";
import logo6 from "../assets/customer-logo-6.png";
import logo7 from "../assets/customer-logo-7.png";
import logo8 from "../assets/FRENZY-01.png";
import logo9 from "../assets/customer-logo-10.png";
import toast from "react-hot-toast";

// location icons
import delhiIcon from "../assets/new-delhi.svg";
import singapore from "../assets/singapore.svg";
import uk from "../assets/big-ben.svg";

const logos = [logo1, logo2, logo3, logo4];
const logos2 = [logo6, logo7, logo8, logo9];

export default function Feedback() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    interestedIn: "",
    message: "",
    agree: false,
  });

  const marqueeRefLeft = useRef(null);
  const marqueeRefRight = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // GSAP Infinite Marquee
  // Left Moving Marquee
  useEffect(() => {
    const container = marqueeRefLeft.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;

    const tween = gsap.to(container, {
      x: -totalWidth,
      duration: 25,
      ease: "none",
      repeat: -1,
    });

    return () => tween.kill();
  }, []);

  // Right Moving Marquee - Fixed & Seamless
  useEffect(() => {
    const container = marqueeRefRight.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;

    // Start from right side and move left (creates right-to-left visual flow)
    gsap.set(container, { x: -totalWidth }); // Initial position

    const tween = gsap.to(container, {
      x: 0,
      duration: 28, // Slightly slower for nice contrast
      ease: "none",
      repeat: -1,
    });

    return () => tween.kill();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const toastId = toast.loading("Sending inquiry...");

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          contactNumber: formData.contactNumber,
          interestedIn: formData.interestedIn,
          message: formData.message,
        }),
      });

      const result = await response.json();
      toast.dismiss(toastId);

      if (response.ok && result.success) {
        toast.success(result.message || "Inquiry submitted successfully!");
        setFormData({
          fullName: "",
          contactNumber: "",
          email: "",
          interestedIn: "",
          message: "",
          agree: false,
        });

      } else {
        toast.error(result.message || "Unable to send inquiry. Please try again.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-[#FF9800] to-[#E91E63] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest text-zinc-100 uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-100 leading-tight">
            Let&apos;s Build Something Extraordinary
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">
          {/* ===== LEFT SIDE - Equal Height ===== */}

          <div className="lg:col-span-2 flex flex-col h-full gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 flex-1 flex flex-col">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                Talk to Our Team
              </h2>

              <div className="space-y-6 flex-1">
                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                      📞
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-gray-900 text-sm sm:text-base">
                        Sales Department
                      </p>
                      <a
                        href="tel:+919958503650"
                        className="text-base sm:text-lg font-semibold text-gray-800 hover:text-orange-600 transition-colors block"
                      >
                        +91 995 850 3650
                      </a>
                      <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                        Project inquiries &amp; business
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                      🛠️
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-gray-900 text-sm sm:text-base">
                        Technical Department
                      </p>
                      <a
                        href="tel:+919310711788"
                        className="text-base sm:text-lg font-semibold text-gray-800 hover:text-orange-600 transition-colors block"
                      >
                        +91 9310 711 788
                      </a>
                      <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                        Technical support &amp; development
                      </p>
                    </div>
                  </div>
                </div>

                {/* Emails */}
                <div className="pt-5 border-t border-gray-100 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                      Technical Email
                    </p>
                    <a
                      href="mailto:revagraphicss@gmail.com"
                      className="text-sm sm:text-base text-gray-700 hover:text-orange-600 transition-colors break-all"
                    >
                      revagraphicss@gmail.com
                    </a>
                  </div>
                </div>

                {/* === GSAP Marquee Logos === */}
                {/* === DUAL MARQUEE LOGOS === */}
                <div className="mt-auto pt-6">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Trusted By
                  </p>

                  {/* Left Moving Marquee */}
                  <div className="overflow-hidden rounded-xl bg-gray-50 py-4 mb-6">
                    <div
                      ref={marqueeRefLeft}
                      className="flex items-center gap-8 w-max"
                    >
                      {[...logos, ...logos, ...logos].map((logo, i) => (
                        <div
                          key={`left-${i}`}
                          className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex-shrink-0"
                        >
                          <Image
                            src={logo}
                            alt={`Client ${i}`}
                            className="h-12 w-auto object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Moving Marquee */}
                  <div className="overflow-hidden rounded-xl bg-gray-50 py-4">
                    <div
                      ref={marqueeRefRight}
                      className="flex items-center gap-8 w-max"
                    >
                      {[...logos2, ...logos2, ...logos2].map((logo, i) => (
                        <div
                          key={`right-${i}`}
                          className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex-shrink-0"
                        >
                          <Image
                            src={logo}
                            alt={`Client ${i}`}
                            className="h-12 w-auto object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ===== right SIDE - Equal Height ===== */}
          <div className="lg:col-span-3 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
              Send Your Inquiry
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col flex-1 space-y-4 sm:space-y-5"
            >
              {/* Form fields remain same */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200 text-sm sm:text-base placeholder-gray-400 transition"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200 text-sm sm:text-base placeholder-gray-400 transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200 text-sm sm:text-base placeholder-gray-400 transition"
                />
                <div className="relative">
                  <select
                    name="interestedIn"
                    value={formData.interestedIn}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200 text-sm sm:text-base text-gray-500 transition appearance-none cursor-pointer pr-10"
                  >
                    <option value="">Interested in</option>
                    <option value="branding">Brand Identity</option>
                    <option value="web-desiging">Website Designing</option>
                    <option value="web-development">Website Development</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="application">Application Development</option>
                    <option value="customize software">
                      Customise Software
                    </option>
                    <option value="other">Other</option>
                  </select>
                  <svg
                    className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us more about your project..."
                className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200 text-sm sm:text-base placeholder-gray-400 resize-y transition"
              />

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 sm:w-5 sm:h-5 accent-orange-500 cursor-pointer flex-shrink-0"
                />
                <label
                  htmlFor="agree"
                  className="text-xs sm:text-sm text-gray-500 leading-relaxed cursor-pointer"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-orange-500 hover:underline font-medium"
                  >
                    Terms &amp; Conditions
                  </a>{" "}
                  of Reva.
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-auto w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] transition-all text-white font-semibold text-sm sm:text-base lg:text-lg py-3.5 sm:py-4 rounded-xl sm:rounded-2xl shadow-sm shadow-orange-200 disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send your inquiry →"}
              </button>

              <p className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-gray-400 pt-1">
                <span>🔒</span> We hate spam, and we respect your privacy.
              </p>
            </form>
          </div>
        </div>
        {/* address section */}
        <div className="pb-24 mt-4 bg-[#fff] rounded-2xl p-10">
          <div className="text-center mb-12">
            <p className="text-gray-800 font-medium tracking-widest text-sm mb-2">
              FIND US
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
              Our Office <ShimmerText>Locations</ShimmerText>
            </h2>
            <DecorativeUnderline
              width="280px"
              className="mt-4 mx-auto"
              centerColor="#3B82F6"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">
                  <Image src={delhiIcon} alt="Delhi Icon" className="w-12 h-12" />
                </span>
                <h3 className="text-2xl font-bold text-gray-800">India</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                12, Jodhka House, Sant Nagar, East of Kailash, New
               
                Delhi 110065, INDIA
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">
                  <Image
                    src={singapore}
                    alt="Singapore Icon"
                    className="w-12 h-12"
                  />
                </span>
                <h3 className="text-2xl font-bold text-gray-800">Singapore</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Robinson Road SPACES, Crown at Robinson #13-07,
                Singapore 068907.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">
                  <Image src={uk} alt="UK Icon" className="w-12 h-12" />
                </span>
                <h3 className="text-2xl font-bold text-gray-800">UK</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Bourne Court, Southend Road, Woodford Green,
             
                Greater London - IG8 8HD
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
