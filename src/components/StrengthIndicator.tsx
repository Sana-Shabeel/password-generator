interface StrengthIndicatorProps {
  score: number;
}

const StrengthIndicator = ({ score }: StrengthIndicatorProps) => {
  const basicBarStyles = "w-3 h-8 bg-transparent border-2";

  const passwordColor = ["#F74A4B", "#FB7956", "#F8CC63", "#A3FFAE"];

  console.log(`score: ${score}`);

  return (
    <div>
      <div className="flex justify-between items-center p-4 mt-3 bg-[#191820]">
        <p className="text-textColor opacity-25 font-bold tracking-wider">
          STRENGTH
        </p>
        <div className="flex gap-2">
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className={`${basicBarStyles} `}
              style={{
                backgroundColor: i < score ? passwordColor[score] : "",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrengthIndicator;
