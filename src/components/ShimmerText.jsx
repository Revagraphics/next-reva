import React from "react";

const ShimmerText = ({ children, className = "" }) => {
  return (
    <span className={`shimmer-animated-text ${className}`}>{children}</span>
  );
};

export default ShimmerText;