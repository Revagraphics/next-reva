const GridBg = ({
  children,
  className = "",
  gridSize = 40,
  lineColor = "#4b5563",
  bgColor = "#111827",
  lineOpacity = 0.6,
}) => {
  return (
    <div
      className={`relative w-full min-h-auto overflow-hidden ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Grid Lines */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${lineColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          opacity: lineOpacity,
        }}
      />

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize * 5}px ${gridSize * 5}px`,
        }}
      />

      {/* === Top Right System === */}
      <div className="absolute top-14 right-8 md:right-16 lg:right-16 z-10">
        <div className="relative w-[180px] h-[180px] md:w-[260px] md:h-[260px]">
          {/* Orbit Rings */}
          <div className="absolute w-full h-full border border-gray-400/30 rounded-full" />
          <div className="absolute w-[55%] h-[55%] border border-gray-400/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

          {/* Outer Planet */}
          <div
            className="outer-orbit orbit-spin-forward absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ transformOrigin: "center" }}
          >
            <div
              className="planet absolute w-6 h-6 md:w-7 md:h-7 bg-orange-500 rounded-full shadow-[0_0_25px_#fb923c,0_0_50px_#f97316]"
              style={{
                left: "50%",
                top: "0%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>

          {/* Inner Planet */}
          <div
            className="inner-orbit orbit-spin-forward-slow absolute w-[55%] h-[55%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ transformOrigin: "center" }}
          >
            <div
              className="planet absolute w-5 h-5 md:w-6 md:h-6 bg-pink-500 rounded-full shadow-[0_0_22px_#f472b6,0_0_45px_#ec4899]"
              style={{
                left: "50%",
                top: "0%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* === Left Center System (Moved from Bottom Left) === */}
      <div className="absolute left-6 bottom-1 md:left-16 lg:left-24 z-10">
        <div className="relative w-[220px] h-[220px] md:w-[340px] md:h-[340px]">
          {/* Orbit Rings */}
          <div className="absolute w-full h-full border border-gray-400/30 rounded-full" />
          <div className="absolute w-[52%] h-[52%] border border-gray-400/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

          {/* Outer Planet - Orange */}
          <div
            className="outer-orbit orbit-spin-reverse absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ transformOrigin: "center" }}
          >
            <div
              className="planet absolute w-7 h-7 md:w-8 md:h-8 bg-orange-500 rounded-full shadow-[0_0_28px_#fb923c,0_0_55px_#f97316]"
              style={{
                left: "50%",
                top: "0%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>

          {/* Inner Planet - Pink */}
          <div
            className="inner-orbit orbit-spin-reverse-slow absolute w-[52%] h-[52%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ transformOrigin: "center" }}
          >
            <div
              className="planet absolute w-5 h-5 md:w-7 md:h-7 bg-pink-500 rounded-full shadow-[0_0_25px_#f472b6,0_0_50px_#ec4899]"
              style={{
                left: "50%",
                top: "0%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-30 w-full h-full">{children}</div>
    </div>
  );
};

export default GridBg;