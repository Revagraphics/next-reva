import React from "react";

const ShimmerText = ({ children, className = "" }) => {
  return (
    <>
      {/* Inline styles injected to make the component instantly plug-and-play */}
      <style>{`
        @keyframes custom-text-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .shimmer-animated-text {
          background: linear-gradient(110deg, #c2185b 0%, #ef7b20 35%, #e84393 55%, #ef7b20 75%, #c2185b 100%) 0 0 / 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: 4s linear infinite custom-text-shimmer;
          display: inline-block;
        }
      `}</style>

      <span className={`shimmer-animated-text ${className}`}>
        {children}
      </span>
    </>
  );
};

export default ShimmerText;