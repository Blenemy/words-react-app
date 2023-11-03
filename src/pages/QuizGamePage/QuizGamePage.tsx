import React from "react";
import { ROUTE_CARD_GAME } from "../../data/constants";
import { useLocation } from "react-router-dom";
import { Loader } from "../../components/Loaders/Loader";
import Cookies from "js-cookie";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { FlipCardLayout } from "./QuizGameLayout";
import { QuizAnswer } from "../../components/QuizAnswer/QuizAnswer";
import { useCards } from "../../hooks/useCards";
import { GameSuccess } from "../../components/GameSuccess/GameSuccess";
import { Feedback } from "../../components/Feedback/Feedback";

export const FlipCardPage: React.FC = () => {
  const location = useLocation();
  const { deckId } = location.state;
  const token = Cookies.get("token");

  const {
    successMessage,
    currentCard,
    isLoading,
    triggerNextCard,
    showPopup,
    isCorrectAnswer,
  } = useCards(deckId, token!);

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col text-primary">
      <div className="container mx-auto my-0 relative">
        <div className="py-14 flex flex-col">
          {!successMessage && (
            <div className="mb-10">
              <BreadCrumbs text={"Back to GamePage"} route={ROUTE_CARD_GAME} />
            </div>
          )}

          {currentCard && (
            <>
              <FlipCardLayout currentCard={currentCard} />
              <div className="flex gap-5 justify-center mb-8">
                {currentCard?.answers?.map((answer, idx) => (
                  <React.Fragment key={`${answer}-${idx}`}>
                    <button
                      className='w-[151px] h-[46px] rounded-3xl quiz-button font-["Roboto_flex"] font-semibold'
                      onClick={() => triggerNextCard(answer)}
                    >
                      {answer}
                    </button>
                  </React.Fragment>
                ))}
              </div>
            </>
          )}
          {successMessage && (
            <>
              <div className="flex flex-col gap-8">
                <GameSuccess />
                <Feedback />
              </div>
            </>
          )}
          <div className="self-center">
            {showPopup && <QuizAnswer isCorrect={isCorrectAnswer} />}
          </div>
        </div>
      </div>
    </div>
  );
};
