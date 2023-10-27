type Props = {
  text: string;
  number: string;
};

export const HowDoesItWorkCard: React.FC<Props> = ({ text, number }) => {
  return (
    <div className="basis-1/4 bg-gradientBackground shadow-[10px_-10px_0_1px_rgba(0,0,0,1)] rounded-3xl min-h-[305px] font-['Roboto_flex']">
      <div className="px-4 py-7 flex flex-col items-center justify-center">
        <p className="w-full border-2 border-primary rounded-3xl flex items-center justify-center h-[43px] mb-8 font-bold">
          {number}
        </p>
        <p>{text}</p>
      </div>
    </div>
  );
};
