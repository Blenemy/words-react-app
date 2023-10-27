/**
 * Компонент для отображения ответа в викторине.
 *
 * @param {object} props - Свойства компонента QuizAnswer.
 * @param {boolean} props.isCorrect - Флаг, указывающий, является ли ответ правильным.
 * @returns {JSX.Element} - JSX элемент ответа.
 */

interface QuizAnswerProps {
  isCorrect: boolean;
}

export const QuizAnswer: React.FC<QuizAnswerProps> = ({
  isCorrect,
}): JSX.Element => {
  return (
    <div className={`${isCorrect ? "text-green-500" : "text-red-500"}`}>
      {isCorrect ? <div>Правильно!</div> : <div>Невірно : &#40; </div>}
    </div>
  );
};
