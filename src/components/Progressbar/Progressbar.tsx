import { Progress, Typography } from "@material-tailwind/react";
import "./Progressbar.scss";
import { memo } from "react";

/**
 * Компонент Progressbar
 *
 * Отображает прогресс-бар для отслеживания прогресса по количеству оставшихся и общему числу слов.
 * Использует компоненты Progress и Typography из @material-tailwind/react.
 *
 * @component
 * @param {object} props - Свойства, переданные компоненту.
 * @param {number} props.words_left - Количество оставшихся слов.
 * @param {number} props.words_total - Общее количество слов.
 *
 */

interface ProgressbarType {
  words_left: number;
  words_total: number;
}

export const Progressbar: React.FC<ProgressbarType> = memo(
  ({ words_left, words_total }) => {
    const countCurrentProgress = (
      wordsLeft: number,
      wordsTotal: number
    ): number => {
      const progress = ((wordsTotal - wordsLeft) / wordsTotal) * 100;
      return progress;
    };

    return (
      <div className="mb-10">
        <div className="mb-2 flex items-center justify-between gap-4">
          <Typography color="blue-gray" variant="h6">
            Completed
          </Typography>
          <Typography color="blue-gray" variant="h6">
            {words_total - words_left} /{words_total}
          </Typography>
        </div>
        <Progress
          value={countCurrentProgress(words_left, words_total)}
          className="h-5"
          color="blue"
        />
      </div>
    );
  }
);
