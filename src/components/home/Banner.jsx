import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-black h-[40vh] flex items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <span
          className="text-white text-[10vw]  relative z-10 tracking-widest"
          style={{ fontFamily: "Anybody" }}
        >
          Designlabs
        </span>
        <div className="absolute top-full left-0 w-full h-1/5 flex items-center justify-center overflow-hidden">
          <span
            className="text-white text-[10vw]  relative z-10 opacity-30 tracking-widest"
            style={{ fontFamily: "Anybody", transform: "scaleY(-1)" }}
          >
            Designlabs
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
