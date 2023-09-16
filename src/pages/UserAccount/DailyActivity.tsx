import progress from "../../assets/progress.png";

export const DailyActivity = () => {
  return (
    <div className="flex flex-col gap-4">
      <img
        src={progress}
        alt="ProfilePhoto"
        className="rounded-[50%] object-cover h-[84px] w-[84px] self-center"
      />
      <p className="text-primary">25 learned words today</p>
    </div>
  );
};
