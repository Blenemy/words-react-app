import { useAppSelector } from "../../../app/hooks";
import progress from "../../../assets/progress.png";

export const DailyActivity = () => {
  const { user } = useAppSelector((state) => state.user);

  if (!user) {
    return <div>something went wrong</div>;
  }

  const date = new Date();
  const options = {
    timeZone: "Europe/Kiev",
    year: "numeric" as const,
    month: "2-digit" as const,
    day: "2-digit" as const,
  };
  const formattedDate = date
    .toLocaleString("en-CA", options)
    .split("/")
    .reverse()
    .join("-");

  return (
    <div className="flex flex-col gap-4">
      <img
        src={progress}
        alt="ProfilePhoto"
        className="rounded-[50%] object-cover h-[84px] w-[84px] self-center"
      />
      <p className="text-primary">
        {user.progress[formattedDate] || 0} learned words today{" "}
      </p>
    </div>
  );
};
