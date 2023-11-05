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
  if (!isCorrect) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex gap-1 max-w-fit">
        <strong className="font-bold">Incorrect!</strong>
        <span className="block sm:inline">You'll see this card later on</span>
      </div>
    );
  }
  return (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative flex gap-1 max-w-fit">
      <strong className="font-bold">Correct!</strong>
      <span className="block sm:inline">Keep it up! Onto the next one.</span>
    </div>
  );
};
