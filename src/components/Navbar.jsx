'use client';

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image'
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

/* ================= MENU CONFIG =================
   Hoisted out of the component so it isn't recreated on every render.
   Each group now has a `to` so the label itself is a real link, not
   just a hover trigger. */
const dropdownConfigs = {
  printing: {
    label: "Printing",
    to: "/printing",
    items: [
      { to: "/corporate", label: "Corporate Printing" },
      { to: "/gifting", label: "Corporate Gifting" },
      { to: "/events", label: "Events Printing" },
    ],
  },
  services: {
    label: "Designing",
    to: "/designing",
    items: [
      { to: "/branding", label: "Brand Identity" },
      { to: "/marketing", label: "Digital Marketing" },
      { to: "/videopage", label: "Video Editing" },
    ],
  },
  development: {
    label: "Development",
    to: "/development",
    items: [
      { to: "/designing", label: "Web designing" },
      { to: "/development", label: "Web Development" },
      { to: "/application", label: "Mobile Application" },
      { to: "/cloud", label: "Cloud Services" },
    ],
  },
  Portfolio: {
    label: "Portfolio",
    to: "/portfolio",
    items: [
      { to: "/portfolio", label: "Portfolio" },
      { to: "/stationery", label: "Stationery" },
      { to: "/catalogue", label: "Catalogue & Brochure" },
    ],
  },
};

const navLinkClass = (pathname, href) =>
  `nav-animate-item px-3 py-2 font-bold transition-all duration-200 ${
    pathname === href ? "text-orange-500" : "text-[#08182b] hover:bg-white/70"
  }`;

export default function Navbar() {
  /* ================= STATE ================= */
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scope = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileBackdropRef = useRef(null);
  // One ref per dropdown panel (keyed by dropdown name) instead of a
  // single ever-growing array — fixes the repeated re-animation bug.
  const dropdownPanelRefs = useRef({});

  const pathname = usePathname();

  /* ================= ENTRANCE ANIMATION ================= */
  useGSAP(
    () => {
      gsap.fromTo(
        scope.current,
        { opacity: 0, y: -24 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      );

      gsap.fromTo(
        scope.current?.querySelectorAll(".nav-animate-item"),
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.07,
          delay: 0.12,
          ease: "power3.out",
        },
      );
    },
    { scope },
  );

  /* ================= MOBILE DROPDOWN ================= */
  const toggleMobile = (name) => {
    setMobileDropdown((prev) => (prev === name ? null : name));
  };

  // Animate only the items inside the panel that just opened —
  // scoped per-panel, so nothing else gets re-triggered.
  useEffect(() => {
    if (!mobileDropdown) return;
    const panel = dropdownPanelRefs.current[mobileDropdown];
    if (!panel) return;

    const items = panel.querySelectorAll(".nav-animate-item");
    gsap.fromTo(
      items,
      { opacity: 0, x: 24 },
      { opacity: 1, x: 0, duration: 0.35, stagger: 0.06, ease: "power2.out" },
    );
  }, [mobileDropdown]);

  /* ================= LOCK BODY SCROLL ================= */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  /* ================= MOBILE MENU SLIDE / FADE ================= */
  useEffect(() => {
    if (!mobileBackdropRef.current || !mobileMenuRef.current) return;
    gsap.set(mobileBackdropRef.current, { autoAlpha: 0 });
    gsap.set(mobileMenuRef.current, { x: "100%" });
  }, []);

  useEffect(() => {
    if (!mobileBackdropRef.current || !mobileMenuRef.current) return;

    gsap.to(mobileBackdropRef.current, {
      autoAlpha: mobileOpen ? 1 : 0,
      duration: 0.25,
      ease: "power2.out",
      overwrite: "auto",
    });

    gsap.to(mobileMenuRef.current, {
      x: mobileOpen ? 0 : "100%",
      duration: 0.45,
      ease: "power3.out",
      overwrite: "auto",
    });

    if (mobileOpen) {
      const items = mobileMenuRef.current.querySelectorAll(
        ".nav-animate-item",
      );
      gsap.fromTo(
        items,
        { opacity: 0, x: 24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.35,
          stagger: 0.06,
          delay: 0.12,
          ease: "power2.out",
        },
      );
    }
  }, [mobileOpen]);

  const openMobile = () => {
    setMobileDropdown(null);
    setMobileOpen(true);
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        ref={scope}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[90%] z-9999 rounded-3xl bg-white/30 backdrop-blur-[20px] border border-gray-600 shadow-xl"
      >
        <div className="flex justify-between items-center px-6 py-3">
          {/* LOGO */}
          <Link href="/" className="nav-animate-item">
            <Image
              src={Logo}
              className="h-14 w-auto object-contain"
              alt="Reva Graphics logo"
            />
          </Link>

          {/* ================= DESKTOP ================= */}
          <div className="hidden desktop lg:flex text-[#08182b] font-bold md:px-4 md:py-4 md:gap-2 px-8 py-4 items-center gap-8">
            <Link href="/" className={navLinkClass(pathname, "/")}>
              Home
            </Link>

            <Link href="/about" className={navLinkClass(pathname, "/about")}>
              About
            </Link>

            {Object.entries(dropdownConfigs).map(([key, config]) => {
              const isGroupActive = config.items.some(
                (item) => pathname === item.to,
              );

              return (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setDesktopDropdown(key)}
                  onMouseLeave={() => setDesktopDropdown(null)}
                >
                  {/* LABEL — now a real link, click navigates,
                      hover still opens the dropdown */}
                  <Link
                    href={config.to}
                    onClick={() => setDesktopDropdown(null)}
                    className={
                      `nav-animate-item flex items-center gap-1 py-2 px-3 font-bold transition-all duration-200 ${
                        pathname === config.to || isGroupActive
                          ? "text-orange-500"
                          : "text-[#08182b] hover:bg-white/70"
                      }`
                    }
                    aria-haspopup="true"
                    aria-expanded={desktopDropdown === key}
                  >
                    {config.label}
                    <FaAngleDown
                      className={`transition-transform duration-300 ${
                        desktopDropdown === key ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {/* DROPDOWN PANEL */}
                  <div
                    className={`absolute left-0 mt-2 w-52 bg-white shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 origin-top ${
                      desktopDropdown === key
                        ? "opacity-100 scale-100 visible"
                        : "opacity-0 scale-95 invisible"
                    }`}
                  >
                    <div className="h-1 w-full bg-orange-500" />
                    {config.items.map((item) => (
                      <Link
                        key={item.to}
                        href={item.to}
                        onClick={() => setDesktopDropdown(null)}
                        className={
                          `nav-animate-item block px-6 py-3 transition-colors ${
                            pathname === item.to
                              ? "text-orange-500"
                              : "text-gray-700 hover:text-orange-500"
                          }`
                        }
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            <Link
              href="/contact"
              className={
                `nav-animate-item px-3 py-2 font-bold transition-all duration-200 ${
                  pathname === "/contact"
                    ? "text-orange-500 bg-white/60"
                    : "text-[#08182b] hover:bg-white/70"
                }`
              }
            >
              Contact
            </Link>
          </div>

          {/* CTA DESKTOP */}
          <Link
            href="/contact"
            className="talk nav-animate-item desktop hidden lg:block px-6 py-2 rounded-full border cursor-pointer font-semibold text-[#fff] bg-gradient-to-r from-[#FF9800] to-[#E91E63] hover:scale-105 transition"
          >
            Talk To Us
          </Link>

          {/* HAMBURGER */}
          <button
            className="nav-animate-item hamburger lg:hidden text-3xl"
            onClick={openMobile}
            aria-label="Open menu"
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </nav>

      {/* ================= BACKDROP ================= */}
      <button
        ref={mobileBackdropRef}
        onClick={closeMobile}
        aria-label="Close menu"
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside
        ref={mobileMenuRef}
        className={`fixed hamburger right-0 top-0 h-full w-[85%] max-w-sm z-[99999] bg-white shadow-2xl transition-transform duration-500 flex flex-col ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <Link href="/" onClick={closeMobile}>
            <Image
              src={Logo}
              className="h-9 w-auto object-contain"
              alt="Reva Graphics"
            />
          </Link>
          <HiX
            className="text-3xl cursor-pointer"
            onClick={closeMobile}
            aria-label="Close menu"
          />
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-2">
          <Link href="/" className="nav-animate-item block py-3 border-b" onClick={closeMobile}>
            Home
          </Link>

          <Link href="/about" className="nav-animate-item block py-3 border-b" onClick={closeMobile}>
            About
          </Link>

          {/* Mobile Dropdowns — label navigates, chevron toggles the
              accordion. No more duplicate hardcoded "Printing" link. */}
          {Object.entries(dropdownConfigs).map(([key, config]) => (
            <div key={key} className="border-b">
              <div className="nav-animate-item flex items-center justify-between py-3">
                <Link href={config.to} className="flex-1" onClick={closeMobile}>
                  {config.label}
                </Link>
                <button
                  onClick={() => toggleMobile(key)}
                  aria-label={`Toggle ${config.label} submenu`}
                  aria-expanded={mobileDropdown === key}
                  className="p-1"
                >
                  <FaAngleDown
                    className={`transition ${mobileDropdown === key ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              <div
                ref={(el) => {
                  dropdownPanelRefs.current[key] = el;
                }}
                className={`overflow-hidden transition-all duration-300 ${
                  mobileDropdown === key ? "max-h-60 pb-2" : "max-h-0"
                }`}
              >
                {config.items.map((item) => (
                  <Link
                    key={item.to}
                    href={item.to}
                    className="nav-animate-item block pl-4 py-2 text-slate-600"
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link href="/contact" className="nav-animate-item block py-3 border-b" onClick={closeMobile}>
            Contact
          </Link>

          <Link
            href="/contact"
            onClick={closeMobile}
            className="nav-animate-item mt-6 block w-full py-3 rounded-full bg-black text-white font-medium text-center"
          >
            Talk To Us
          </Link>
        </div>

        <div className="border-t p-6 mt-auto">
          <div className="flex justify-center items-center gap-6 text-2xl">
            <a
              href="https://x.com/Revagraphics"
              className="text-zinc-400 hover:text-orange-500 transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <FaXTwitter  />
            </a>
            <a
              href="https://www.instagram.com/werevagraphics/"
              className="text-zinc-400 hover:text-orange-500 transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/werevagraphics"
              className="text-zinc-400 hover:text-orange-500 transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/company/werevagraphics"
              className="text-zinc-400 hover:text-orange-500 transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}