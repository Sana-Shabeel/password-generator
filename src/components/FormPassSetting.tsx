import { useState } from "react";
import zxcvbn from "zxcvbn";
import RangeSlider from "./RangeSlider";
import Checkbox from "./Checkbox";
import StrengthIndicator from "./StrengthIndicator";
import DisplayPassword from "./DisplayPassword";
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
  const [uppercaseCheckbox, setuppercaseCheckbox] = useState(false);
  const [lowercaseCheckbox, setLowercaseCheckbox] = useState(false);
  const [numbersCheckbox, setNumbersCheckbox] = useState(false);
  const [symbolsCheckbox, setSymbolsCheckbox] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [bgSize, setBgSize] = useState(10);
  const [score, setScore] = useState(0);

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const generatePassword = () => {
    const password = [];
    if (
      !uppercaseCheckbox &&
      !lowercaseCheckbox &&
      !numbersCheckbox &&
      !symbolsCheckbox
    ) {
      setGeneratedPassword("Please select at least one option");
      return "Please select at least one option";
    }

    for (let i = 0; i < bgSize; i++) {
      if (uppercaseCheckbox) {
        password.push(
          uppercaseLetters[getRandomNumber(0, uppercaseLetters.length)]
        );
      }
      if (lowercaseCheckbox) {
        password.push(
          lowercaseLetters[getRandomNumber(0, lowercaseLetters.length)]
        );
      }
      if (numbersCheckbox) {
        password.push(numbers[getRandomNumber(0, numbers.length)]);
      }
      if (symbolsCheckbox) {
        password.push(symbols[getRandomNumber(0, symbols.length)]);
      }
    }
    console.log(bgSize, password.slice(0, bgSize).join(""));
    setGeneratedPassword(password.slice(0, bgSize).join(""));
    setScore(zxcvbn(password.join("")).score);

    return password.join("");
  };

  console.log(score);

  return (
    <div>
      <DisplayPassword generatedPassword={generatedPassword} />

      <div className="bg-primary w-5/6 h-[522px] max-w-lg mx-auto px-5 py-4">
        <RangeSlider bgSize={bgSize} setBgSize={setBgSize} />
        <div className="flex flex-col gap-3 ">
          <Checkbox
            label="Include Uppercase Letters"
            checked={uppercaseCheckbox}
            setChecked={setuppercaseCheckbox}
          />
          <Checkbox
            label="Include Lowercase Letters"
            checked={lowercaseCheckbox}
            setChecked={setLowercaseCheckbox}
          />
          <Checkbox
            label="Include Numbers"
            checked={numbersCheckbox}
            setChecked={setNumbersCheckbox}
          />
          <Checkbox
            label="Include Symbols"
            checked={symbolsCheckbox}
            setChecked={setSymbolsCheckbox}
          />
          <StrengthIndicator score={score} />
          <button
            className="bg-creamyColor w-full h-14 mt-2 uppercase font-bold text-lg flex items-center justify-center gap-3 hover:bg-transparent hover:border-2 border-creamyColor group"
            onClick={() => generatePassword()}
          >
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
    </div>
  );
};

export default FormPassSetting;
