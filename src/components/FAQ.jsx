'use client';

import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import ShimmerText from "../components/ShimmerText";
import GridBg from "./GridBg"

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  const answerRef = useRef(null);
  const horizontalIconRef = useRef(null);
  const verticalIconRef = useRef(null);

  // Trigger GSAP animations when the open state changes
  React.useEffect(() => {
    if (isOpen) {
      // Open animation: Expand height and fade in text
      gsap.to(answerRef.current, {
        height: 'auto',
        duration: 0.4,
        ease: 'power2.out',
        opacity: 1
      });
      // Rotate the vertical line to blend into the horizontal line (creates the minus effect)
      gsap.to(verticalIconRef.current, {
        rotate: 90,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(horizontalIconRef.current, {
        rotate: 180,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      // Close animation: Collapse height and fade out text
      gsap.to(answerRef.current, {
        height: 0,
        duration: 0.3,
        ease: 'power2.inOut',
        opacity: 0
      });
      // Reset icon back to a plus sign
      gsap.to(verticalIconRef.current, {
        rotate: 0,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.inOut'
      });
      gsap.to(horizontalIconRef.current, {
        rotate: 0,
        duration: 0.3,
        ease: 'power2.inOut'
      });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-orange-100 last:border-none">
      <button
        className="w-full py-5 flex justify-between items-center text-left font-medium text-slate-800 hover:text-orange-600 transition-colors duration-200 focus:outline-none group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-lg md:text-xl pr-4 select-none">{question}</span>
        
        {/* Plus / Minus Custom Animated Icon Container */}
        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 relative overflow-hidden">
          {/* Horizontal Line (Stays present for both + and -) */}
          <span 
            ref={horizontalIconRef}
            className="absolute w-3.5 h-0.5 bg-current rounded-full"
          />
          {/* Vertical Line (Fades/Rotates out to turn + into -) */}
          <span 
            ref={verticalIconRef}
            className="absolute w-0.5 h-3.5 bg-current rounded-full"
          />
        </span>
      </button>

      <div
        ref={answerRef}
        className="h-0 opacity-0 overflow-hidden"
      >
        <div className="pb-5 pr-8 text-slate-600 leading-relaxed text-base md:text-md">
          {answer}
        </div>
      </div>
    </div>
  );
};

/**
 * Main FAQ Component (Reusable with Props)
 * Controls state globally to ensure only one item can be expanded at a time.
 *  @param {Array} data - Array of objects containing { question, answer }
 * @param {string} title - Optional title text
 * @param {string} subtitle - Optional description text
 */
const FAQ = ({ data = [], title = "Frequently Asked Questions", subtitle }) => {
  // Track index of the currently open item. null means all are closed.
  const [activeIndex, setActiveIndex] = useState(null);

  if (!data || data.length === 0) return null;

  const handleToggle = (index) => {
    // If the clicked item is already open, close it. Otherwise, open the new one.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white">
        <GridBg gridSize={80} lineColor="#f5f1ed" bgColor="#fff">
      <div className="max-w-3xl p-6 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            <ShimmerText>{title}</ShimmerText>
          </h2>
          {subtitle && (
            <p className="mt-3 text-slate-500 text-lg">
              {subtitle}
            </p>
          )}
        </div>

        {/* Accordion Wrapper */}
        <div className="bg-white rounded-2xl border border-orange-100 shadow-sm px-6 md:px-8">
          {data.map((item, index) => (
            <FAQItem 
              key={index} 
              question={item.question} 
              answer={item.answer} 
              isOpen={activeIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
      </GridBg>

    </section>
  );
};

export default FAQ;