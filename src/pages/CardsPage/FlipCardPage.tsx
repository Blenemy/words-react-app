import React, { useCallback, useEffect, useState } from "react";
import { BASE_URL, ROUTE_CARD_GAME } from "../../data/constants";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { CardFromServer } from "../../types/CardFromServer";
import { Loader } from "../../components/Loader/Loader";
import Cookies from "js-cookie";
import { BreadCrumbs } from "../../components/BreakCrumbs/BreadCrumbs";
import "./FlipCardPage.scss";
import { FlipCardLayout } from "./FlipCardLayout";
import { QuizAnswer } from "../../components/QuizAnswer/QuizAnswer";

export const FlipCardPage: React.FC = () => {
  const [currentCard, setCurrentCard] = useState<null | CardFromServer>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<boolean>(false);
  const location = useLocation();
  const { deckId } = location.state;
  const token = Cookies.get("token");
  const [showPopup, setShowPopup] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const getNextCard = useCallback(
    async (answer: string) => {
      setLoading(true);

      try {
        const isCorrect = answer === currentCard?.translation;
        setIsCorrectAnswer(isCorrect);
        setShowPopup(true);
        const action = answer === currentCard?.translation ? "good" : "again";
        const dataToSend = {
          card_id: currentCard?.id,
          action,
        };
        const response = await axios.post(
          `${BASE_URL}/study/learn/${deckId}/`,
          dataToSend,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.status === "finished") {
          setCurrentCard(null);
          setSuccessMessage(true);
        } else {
          setCurrentCard(response.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [currentCard, token, deckId]
  );

  useEffect(() => {
    async function getFirstCard() {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/study/learn/${deckId}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.status === "finished") {
          setCurrentCard(null);
          setSuccessMessage(true);
        } else {
          setCurrentCard(response.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getFirstCard();
  }, [token, deckId]);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col text-primary">
      <div className="container mx-auto my-0 relative">
        <div className="py-14 flex flex-col">
          <div className="mb-10">
            <BreadCrumbs text={"Back to GamePage"} route={ROUTE_CARD_GAME} />
          </div>
          {currentCard && (
            <>
              <FlipCardLayout currentCard={currentCard} />
              <div className="flex gap-5 justify-center mb-8">
                {currentCard?.answers?.map((answer, idx) => (
                  <React.Fragment key={`${answer}-${idx}`}>
                    <button
                      className='w-[151px] h-[46px] rounded-3xl quiz-button font-["Roboto_flex"] font-semibold'
                      onClick={() => getNextCard(answer)}
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
              <div>Good Job! You've passed all the tests!</div>
              <Link to={ROUTE_CARD_GAME}>Return to the game page</Link>
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
