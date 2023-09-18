import React from "react";

interface RangeSliderProps {
  bgSize: number;
  setBgSize: React.Dispatch<React.SetStateAction<number>>;
}

export default function RangeSlider({ bgSize, setBgSize }: RangeSliderProps) {
  return (
    <div>
      <div className="flex justify-between items-center my-3">
        <p className="text-textColor">Character Length</p>
        <p className="text-creamyColor text-3xl md:text-4xl font-bold">
          {bgSize}
        </p>
      </div>
      <input
        type="range"
        min="1"
        max="20"
        value={bgSize}
        onChange={(e) => setBgSize(parseInt(e.target.value))}
        className="transparent h-5 w-full cursor-pointer appearance-none border-transparent "
        id="customRange1"
        style={{ backgroundSize: `${((bgSize - 1) * 100) / (20 - 1)}% 100%` }}
      />
    </div>
  );
}
