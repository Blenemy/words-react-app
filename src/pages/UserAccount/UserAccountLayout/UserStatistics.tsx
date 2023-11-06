import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Brush,
} from "recharts";
import { useAppSelector } from "../../../app/hooks";
import { memo, useMemo } from "react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

/**
 * Компонент UserStatistics для отображения линейного графика прогресса обучения пользователя.
 *
 * @component
 * @returns {JSX.Element} Мемоизированный компонент, который отображает адаптивный линейный график
 * на основе данных о прогрессе пользователя, полученных из состояния приложения.
 */

export const UserStatisctics = memo(() => {
  const { user } = useAppSelector((state) => state.user);

  const formattedData = useMemo(() => {
    if (user) {
      const lastSevenEntries = Object.keys(user?.progress)
        .sort()
        .map((date) => ({
          date: format(new Date(date), "MMM d", { locale: enUS }),
          progress: user?.progress[date],
        }));
      return lastSevenEntries;
    }
  }, [user]);

  const maxYValue = useMemo(() => {
    return formattedData
      ? Math.max(...formattedData.map((data) => data.progress), 10)
      : 50;
  }, [formattedData]);

  return (
    <div className="text-primary basis-3/5">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={800} height={420} data={formattedData}>
          <XAxis dataKey="date" stroke="#444" />
          <YAxis
            stroke="#444"
            domain={[0, maxYValue]}
            tickCount={6}
            interval={0}
          />
          <Tooltip wrapperStyle={{ backgroundColor: "#ccc" }} />
          <Line
            type="monotone"
            dataKey="progress"
            stroke="#8884d8"
            strokeWidth={4}
            dot={false}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="0 0" vertical={false} />
          <Brush dataKey="date" height={20} stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
});
