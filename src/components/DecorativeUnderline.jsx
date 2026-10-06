import React from "react";

const DecorativeUnderline = ({
  width = "280px",        // You can control width
  className = "",
  centerColor = "#3B82F6", // Default blue for the glowing circle
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div 
        className="relative flex items-center"
        style={{ width }}
      >
        {/* Left Line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-orange-500 flex-1" />

        {/* Orange Dot */}
        <div className="w-3 h-3 rounded-full bg-orange-500 mx-3" />

        {/* Blue Glowing Circle */}
        <div className="relative flex items-center justify-center">
          <div 
            className="w-4 h-4 rounded-full border-2 border-blue-500 relative z-10"
            style={{ backgroundColor: centerColor }}
          />
          {/* Glow Effect */}
          <div 
            className="absolute w-8 h-8 rounded-full blur-md opacity-60"
            style={{ backgroundColor: centerColor }}
          />
        </div>

        {/* Green Dot */}
        <div className="w-3 h-3 rounded-full bg-emerald-500 mx-3" />

        {/* Right Line */}
        <div className="h-[2px] bg-gradient-to-r from-emerald-500 via-emerald-500 to-transparent flex-1" />
      </div>
    </div>
  );
};

export default DecorativeUnderline;