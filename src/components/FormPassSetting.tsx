import { useState } from "react";
import RangeSlider from "./RangeSlider";
import Checkbox from "./Checkbox";
import StrengthIndicator from "./StrengthIndicator";
// Array of uppercase letters
const uppercaseLetters = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(65 + index)
);

// Array of lowercase letters
const lowercaseLetters = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(97 + index)
);

// Array of numbers from 0 to 9
const numbers = Array.from({ length: 10 }, (_, index) => index);

const symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ":",
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
];

const FormPassSetting = () => {
  const [uppercase, setuppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [bgSize, setBgSize] = useState(10);

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const generatePassword = () => {
    const password = [];
    for (let i = 0; i < bgSize; i++) {
      password.push(
        uppercaseLetters[getRandomNumber(0, uppercaseLetters.length)]
      );
    }
    return password.join("");
  };

  return (
    <div className="bg-primary w-5/6 h-[522px] max-w-lg mx-auto px-5 py-4">
      <RangeSlider bgSize={bgSize} setBgSize={setBgSize} />
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
        <StrengthIndicator />
        <button className="bg-creamyColor w-full h-14 mt-2 uppercase font-bold text-lg flex items-center justify-center gap-3 hover:bg-transparent hover:border-2 border-creamyColor group">
          <span className="group-hover:text-creamyColor">GENERATE</span>
          <svg
            width="12"
            height="12"
            className="group-hover:text-creamyColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FormPassSetting;
