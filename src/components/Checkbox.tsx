import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, setChecked }) => {
  console.log("Checkbox", checked);

  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <div
        className={`w-5 h-5 border-2 border-creamyColor rounded ${
          checked ? "bg-creamyColor" : "bg-transparent"
        }`}
      >
        {checked && (
          <svg
            className="w-4 h-4 mx-auto mt-px"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <span className="ml-5 text-white font-semibold text-lg">{label}</span>
    </label>
  );
};

export default Checkbox;
