import React, { memo } from "react";
import { FlipCardLayout } from "./QuizGameLayout";
import { QuizAnswer } from "../../components/QuizAnswer/QuizAnswer";
import { v4 as uuidv4 } from "uuid";
import { CardFromServer } from "../../types/CardFromServer";

interface GameContentProps {
  currentCard: CardFromServer;
  triggerNextCard: (answer: string) => void;
  showPopup: boolean;
  isCorrectAnswer: boolean;
}

export const GameContent: React.FC<GameContentProps> = memo(
  ({ currentCard, triggerNextCard, showPopup, isCorrectAnswer }) => {
    console.log(currentCard);

    if (!currentCard) return null;
    return (
      <>
        <FlipCardLayout currentCard={currentCard} />
        <div className="flex gap-5 justify-center mb-8 items-center">
          {currentCard.answers?.map((answer) => (
            <button
              key={uuidv4()}
              className='w-[151px] h-[46px] rounded-3xl quiz-button font-["Roboto_flex"] font-semibold bg-gradientBackground bg-no-repeat bg-cover quiz-button'
              onClick={() => triggerNextCard(answer)}
            >
              {answer}
            </button>
          ))}
        </div>
        <div className="self-center">
          {showPopup && <QuizAnswer isCorrect={isCorrectAnswer} />}
        </div>
      </>
    );
  }
);
