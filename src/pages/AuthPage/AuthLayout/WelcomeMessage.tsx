export const WelcomeMessage = () => {
  return (
    <div className="bg-violetStroke border-2 border-primary rounded-3xl col-start-item-3 row-start-item-3 col-end-item-3 row-end-item-3">
      <div className="py-16 px-8 flex flex-col items-center justify-center font-['Roboto_flex']">
        <h4 className="mb-8 text-3xl text-white">
          Welcome to <span className="text-[#FFDE59]">Card Lingo!</span>
        </h4>
        <p className="text-[#CFCBD5] text-center">
          The user-friendly interface and interactive gameplay make it engaging
          and enjoyable to practice vocabulary and language skills.
        </p>
      </div>
    </div>
  );
};
