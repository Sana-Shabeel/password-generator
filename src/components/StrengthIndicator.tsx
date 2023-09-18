interface StrengthIndicatorProps {
  score: number;
}

const StrengthIndicator = ({ score }: StrengthIndicatorProps) => {
  const baseBarStyles = "w-3 h-8 bg-transparent border-2 border-currentColor";

  const passwordStrength = ["TOO WEAK", "WEAK", "MEDIUM", "STRONG"];

  console.log(`score: ${score}`);

  const getPasswordColor = () => {
    switch (score) {
      case 0:
        return "bg-[#F74A4B] border-[#F74A4B]";
      case 1:
        return "bg-[#F74A4B] border-[#F74A4B]";
      case 2:
        return "bg-[#FB7956] border-[#FB7956]";
      case 3:
        return "bg-[#F8CC63] border-[#F8CC63]";
      case 4:
        return "bg-[#A3FFAE] border-[#A3FFAE]";
      default:
        return "";
    }
  };
  console.log(score);

  return (
    <div>
      <div className="flex justify-between items-center p-4 mt-3 bg-[#191820]">
        <p className="text-textColor opacity-25 font-bold tracking-wider">
          STRENGTH
        </p>
        <div className="flex gap-2">
          <span className="text-xl mr-2 font-bold text-white">
            {passwordStrength[score - 1]}
          </span>
          <div
            className={`${baseBarStyles} ${
              score >= 0 ? getPasswordColor() : ""
            }`}
          ></div>
          <div
            className={`${baseBarStyles} ${
              score >= 1 ? getPasswordColor() : ""
            }`}
          ></div>
          <div
            className={`${baseBarStyles} ${
              score >= 2 ? getPasswordColor() : ""
            }`}
          ></div>
          <div
            className={`${baseBarStyles} ${
              score >= 3 ? getPasswordColor() : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StrengthIndicator;
