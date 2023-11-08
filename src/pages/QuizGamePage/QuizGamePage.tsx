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
import { Progressbar } from "../../components/Progressbar/Progressbar";

/**
 * Компонент FlipCardPage - это функциональный компонент React, который отображает игровую страницу для викторины с переворачивающимися картами.
 * Он управляет игровым процессом, отображает загрузчик, хлебные крошки, переворачивающиеся карты, ответы и компоненты успешного завершения или обратной связи
 * в зависимости от состояния игры. Он также управляет колодой карт для игры с использованием пользовательского хука.
 *
 * @component
 * @returns {JSX.Element} Полноценный макет страницы для игры в викторину с переворачивающимися картами.
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
        <div className="py-14 flex flex-col min-w-full">
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
            <Progressbar
              words_left={currentCard.words_left}
              words_total={currentCard.words_total}
            />
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
