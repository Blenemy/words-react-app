type QuizProps = {
  isCorrect: boolean;
};

export const QuizAnswer: React.FC<QuizProps> = ({ isCorrect }) => {
  return (
    <div className={`${isCorrect ? "text-green-500" : "text-red-500"}`}>
      {isCorrect ? <div>Правильно!</div> : <div>Невірно : &#40; </div>}
    </div>
  );
};
