import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getNextCard, getFirstCard } from "../api/getCards";
import { CardFromServer } from "../types/CardFromServer";

export const useCards = (deckId: number, token: string) => {
  const [currentCard, setCurrentCard] = useState<null | CardFromServer>(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const firstCardQuery = useQuery(
    ["firstCard"],
    () => getFirstCard(deckId, token),
    {
      onSuccess: (data) => {
        if (data.status === "finished") {
          setCurrentCard(null);
          setSuccessMessage(true);
        } else {
          setCurrentCard(data);
        }
      },
      enabled: currentCard === null,
    }
  );

  const nextCardMutation = useMutation(
    () =>
      getNextCard(
        deckId,
        {
          card_id: currentCard?.id,
          action: isCorrectAnswer ? "good" : "again",
        },
        token
      ),
    {
      onSuccess: (data) => {
        if (data.status === "finished") {
          setCurrentCard(null);
          setSuccessMessage(true);
        } else {
          setCurrentCard(data);
        }
      },
    }
  );

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showPopup, currentCard]);

  const triggerNextCard = (answer: string) => {
    const isCorrect = answer === currentCard?.translation;
    setIsCorrectAnswer(isCorrect);
    setShowPopup(true);
    if (currentCard) {
      nextCardMutation.mutate();
    }
  };

  return {
    currentCard,
    triggerNextCard,
    showPopup,
    isCorrectAnswer,
    successMessage,
    isLoading: firstCardQuery.isLoading || nextCardMutation.isLoading,
  };
};
