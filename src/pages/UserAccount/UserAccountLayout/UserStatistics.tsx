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

/**
 * UserStatistics component to display a line chart of the user's learning progress.
 *
 * @component
 * @returns {JSX.Element} A memoized component that renders a responsive line chart
 * based on the user's progress data retrieved from the application state.
 */

export const UserStatisctics = memo(() => {
  const { user } = useAppSelector((state) => state.user);

  const formattedData = useMemo(() => {
    if (user) {
      return Object.keys(user?.progress)
        .sort()
        .map((date) => ({
          date,
          progress: user?.progress[date],
        }));
    }
  }, [user]);

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
