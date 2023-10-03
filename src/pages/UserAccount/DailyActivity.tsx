import { useAppSelector } from "../../app/hooks";
import progress from "../../assets/progress.png";

export const DailyActivity = () => {
  const { user } = useAppSelector((state) => state.user);

  if (!user) {
    return <div>something went wrong</div>;
  }

  const formattedData = Object.keys(user.progress).map((date) => ({
    date,
    progress: user.progress[date],
  }))[0];

  console.log(formattedData);

  return (
    <div className="flex flex-col gap-4">
      <img
        src={progress}
        alt="ProfilePhoto"
        className="rounded-[50%] object-cover h-[84px] w-[84px] self-center"
      />
      <p className="text-primary">
        {formattedData.progress} learned words today{" "}
      </p>
    </div>
  );
};
