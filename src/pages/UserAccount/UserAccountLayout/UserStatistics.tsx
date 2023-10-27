import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useAppSelector } from "../../../app/hooks";
import { memo, useMemo } from "react";

export const UserStatisctics = memo(() => {
  const { user } = useAppSelector((state) => state.user);

  const formattedData = useMemo(() => {
    return Object.keys(user?.progress)
      .sort()
      .map((date) => ({
        date,
        progress: user?.progress[date],
      }));
  }, [user?.progress]);

  if (!user) {
    return <div>something went wrong</div>;
  }

  return (
    <div className="text-primary basis-3/5">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={800} height={420} data={formattedData}>
          <XAxis dataKey="date" stroke="#444" />
          <YAxis stroke="#444" domain={[0, 50]} tickCount={6} interval={0} />
          <Tooltip wrapperStyle={{ backgroundColor: "#ccc" }} />
          <Line
            type="monotone"
            dataKey="progress"
            stroke="#8884d8"
            strokeWidth={4}
            dot={false}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="0 0" vertical={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
});