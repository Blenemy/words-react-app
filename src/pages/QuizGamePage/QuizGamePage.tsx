import React from "react";
import { ROUTE_CARD_GAME, ROUTE_HOME } from "../../data/constants";
import { useLocation } from "react-router-dom";
import { Loader } from "../../components/Loaders/Loader";
import Cookies from "js-cookie";
import { useCards } from "../../hooks/useCards";
import { GameSuccess } from "../../components/GameSuccess/GameSuccess";
import { Feedback } from "../../components/Feedback/Feedback";
import { GameContent } from "./GameContent";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Progress, Typography } from "@material-tailwind/react";

/**
 * FlipCardPage is a React functional component that renders the game page for the flip card quiz.
 * It handles the game flow, displays the loader, breadcrumbs, flip cards, answers, and success or feedback
 * components based on the game state. It also manages the deck of cards for the game using a custom hook.
 *
 * @component
 * @returns {JSX.Element} The complete page layout for the flip card quiz game.
 */

export const QuizGamePage: React.FC = () => {
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

  const countCurrentProgress = (
    wordsLeft: number,
    wordsTotal: number
  ): number => {
    const progress = ((wordsTotal - wordsLeft) / wordsTotal) * 100;
    return progress;
  };

  return (
    <div className="flex flex-col text-primary">
      <div className="container mx-auto my-0 relative">
        <div className="py-14 flex flex-col">
          {!successMessage && (
            <div className="mb-5">
              <Breadcrumbs
                crumbs={[
                  { text: "Home", path: ROUTE_HOME },
                  { text: "Back to game page", path: ROUTE_CARD_GAME },
                ]}
                current="Quiz"
              />
            </div>
          )}

          {currentCard && (
            <div className="mb-10">
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="blue-gray" variant="h6">
                  Completed
                </Typography>
                <Typography color="blue-gray" variant="h6">
                  {countCurrentProgress(
                    currentCard.words_left,
                    currentCard.words_total
                  )}
                  %
                </Typography>
              </div>
              <Progress
                value={countCurrentProgress(
                  currentCard.words_left,
                  currentCard.words_total
                )}
                className="h-5"
                color="blue"
              />
            </div>
          )}

          {isLoading ? (
            <Loader />
          ) : (
            currentCard && (
              <GameContent
                currentCard={currentCard}
                triggerNextCard={triggerNextCard}
                showPopup={showPopup}
                isCorrectAnswer={isCorrectAnswer}
              />
            )
          )}
          {successMessage && (
            <>
              <div className="flex flex-col gap-8">
                <GameSuccess />
                <Feedback />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
