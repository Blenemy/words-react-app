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

  return (
    <div className="flex flex-col text-primary">
      <div className="container mx-auto my-0 relative">
        <div className="py-14 flex flex-col">
          {!successMessage && (
            <div className="mb-10">
              <Breadcrumbs
                crumbs={[
                  { text: "Home", path: ROUTE_HOME },
                  { text: "Back to game page", path: ROUTE_CARD_GAME },
                ]}
                current="Quiz"
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
