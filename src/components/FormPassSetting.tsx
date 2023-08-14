import React, { useState } from "react";
import RangeSlider from "./RangeSlider";
import Checkbox from "./Checkbox";

const FormPassSetting = () => {
  const [uppercase, setuppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  return (
    <div className="bg-primary w-5/6 h-[522px] mx-auto px-5 py-4">
      <RangeSlider />
      <div className="flex flex-col gap-3 mt-3">
        <Checkbox
          label="Include Uppercase Letters"
          checked={uppercase}
          setChecked={setuppercase}
        />
        <Checkbox
          label="Include Lowercase Letters"
          checked={lowercase}
          setChecked={setLowercase}
        />
        <Checkbox
          label="Include Numbers"
          checked={numbers}
          setChecked={setNumbers}
        />
        <Checkbox
          label="Include Symbols"
          checked={symbols}
          setChecked={setSymbols}
        />
      </div>
    </div>
  );
};

export default FormPassSetting;
