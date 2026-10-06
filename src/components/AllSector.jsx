'use client';

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DecorativeUnderline from "../components/DecorativeUnderline";
import GridBg from "../components/GridBg";
import {
  FaGraduationCap,
  FaHeartbeat,
  FaFlask,
  FaHandsHelping,
  FaIndustry,
  FaSchool,
  FaCar,
  FaTshirt,
  FaLaptopCode,
  FaPalette,
  FaDraftingCompass,
  FaHotel,
  FaBuilding,
  FaPlaceOfWorship,
  FaCouch,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaSpa,
  FaGem,
  FaTruck,
  FaUtensils,
} from "react-icons/fa";

import ShimmerText from "./ShimmerText";

const sectors = [
  { id: 1, img: FaUtensils, category: "Restaurants", color: "#F97316" },
  { id: 2, img: FaGraduationCap, category: "Education", color: "#3B82F6" },
  { id: 3, img: FaFlask, category: "Science", color: "#8B5CF6" },
  { id: 4, img: FaHandsHelping, category: "NGOs", color: "#14B8A6" },
  { id: 5, img: FaIndustry, category: "Chemicals", color: "#22C55E" },
  { id: 6, img: FaSchool, category: "Schools", color: "#0EA5E9" },
  { id: 7, img: FaCar, category: "Automobile", color: "#EF4444" },
  { id: 8, img: FaTshirt, category: "Clothing", color: "#EC4899" },
  { id: 9, img: FaLaptopCode, category: "Technology", color: "#06B6D4" },
  { id: 10, img: FaPalette, category: "Textiles", color: "#A855F7" },
  {
    id: 11,
    img: FaDraftingCompass,
    category: "Architecture",
    color: "#F59E0B",
  },
];

const logos = [
  { id: 1, img: FaHotel, category: "Hotels & Resorts", color: "#2563EB" },
  { id: 2, img: FaHeartbeat, category: "Healthcare", color: "#EF4444" },
  { id: 3, img: FaBuilding, category: "Real Estate", color: "#F59E0B" },
  {
    id: 4,
    img: FaPlaceOfWorship,
    category: "Religious & Cultural Organizations",
    color: "#8B5CF6",
  },
  { id: 5, img: FaCouch, category: "Interior Design Firms", color: "#14B8A6" },
  { id: 6, img: FaCalendarAlt, category: "Event Management", color: "#10B981" },
  {
    id: 7,
    img: FaChalkboardTeacher,
    category: "Coaching Institutes",
    color: "#3B82F6",
  },
  { id: 8, img: FaIndustry, category: "Manufacturing", color: "#6B7280" },
  { id: 9, img: FaSpa, category: "Salon & Wellness", color: "#EC4899" },
  {
    id: 10,
    img: FaGem,
    category: "Jewellery & Luxury Brands",
    color: "#FACC15",
  },
  {
    id: 11,
    img: FaTruck,
    category: "Logistics & Transportation",
    color: "#06B6D4",
  },
];

const AllSector = () => {
  const marquee1Ref = useRef(null);
  const marquee2Ref = useRef(null);

  useEffect(() => {
    const marquee1 = marquee1Ref.current;
    const marquee2 = marquee2Ref.current;

    if (marquee1) {
      gsap.to(marquee1, {
        x: "-50%",
        duration: 70,
        ease: "linear",
        repeat: -1,
      });
    }

    if (marquee2) {
      gsap.set(marquee2, { x: "-50%" });
      gsap.to(marquee2, {
        x: "0%",
        duration: 75,
        ease: "linear",
        repeat: -1,
      });
    }

    return () => {
      gsap.killTweensOf([marquee1, marquee2]);
    };
  }, []);

  const renderCard = (item) => (
    <div
      className="flex items-center gap-4 bg-white border border-zinc-100 hover:border-zinc-200 
                    rounded-2xl px-5 py-4 shadow-sm hover:shadow transition-all duration-300 
                    min-w-70 shrink-0"
    >
      {/* Icon Container - Light colored background */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${item.color}15` }}
      >
        <item.img
          className="w-6 h-6"
          style={{
            color: item.color,
            stroke: item.color,
            strokeWidth: 25,
            fill: "none",
          }}
        />
      </div>

      {/* Text */}
      <span className="text-[#4b5563]  text-[15px] leading-tight pr-2">
        {item.category}
      </span>
    </div>
  );

  return (
    <section className=" overflow-hidden py-4 lg:py-2 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-full mx-auto py-8 lg:py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-zinc-900">
            <ShimmerText>All Sectors</ShimmerText>
          </h2>
          <DecorativeUnderline
            width="280px"
            className="mt-4 mx-auto"
            centerColor="#3B82F6"
          />
        </div>

        {/* First Marquee - Left to Right */}
        <div className="overflow-hidden mb-6">
          <div ref={marquee1Ref} className="flex gap-4 w-max">
            {[...sectors, ...sectors, ...sectors].map((item, index) => (
              <React.Fragment key={`m1-${item.id}-${index}`}>
                {renderCard(item)}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Second Marquee - Right to Left */}
        <div className="overflow-hidden">
          <div ref={marquee2Ref} className="flex gap-4 w-max">
            {[...logos, ...logos, ...logos].map((item, index) => (
              <React.Fragment key={`m2-${item.id}-${index}`}>
                {renderCard(item)}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllSector;


