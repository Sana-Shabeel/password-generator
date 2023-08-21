const StrengthIndicator = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-4 mt-3 bg-[#191820]">
        <p className="text-textColor opacity-25 font-bold tracking-wider">
          STRENGTH
        </p>
        <div className="flex gap-2">
          <div className="w-3 h-8 bg-transparent border-2"></div>
          <div className="w-3 h-8 bg-transparent border-2"></div>
          <div className="w-3 h-8 bg-transparent border-2"></div>
        </div>
      </div>
    </div>
  );
};

export default StrengthIndicator;
