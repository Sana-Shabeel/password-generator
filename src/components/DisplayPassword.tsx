interface DisplayPasswordProps {
  generatedPassword: string;
}

const DisplayPassword = ({ generatedPassword }: DisplayPasswordProps) => {
  return (
    <div className="bg-primary h-20 px-3 md:h-32  w-5/6 flex justify-between items-center mx-auto mb-8 max-w-lg">
      <span
        id="display-password"
        className="text-textColor text-2xl md:text-4xl opacity-40 font-bold "
      >
        {generatedPassword || "P4$5W0rD!"}
      </span>
      <div>
        <img
          src="src/assets/icon-copy.svg"
          alt="copy icon"
          className="w-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default DisplayPassword;
