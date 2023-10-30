import { useState } from "react";
import { CardFromServer } from "../types/CardFromServer";
import { useQuery } from "@tanstack/react-query";
import { getDeckInfo } from "../api/getDeck";

export const useGetDeck = (
  deckId: string | undefined,
  token: string | undefined
) => {
  const [cardInDecks, setCardInDeck] = useState<CardFromServer[]>();

  const { isLoading } = useQuery({
    queryFn: () => getDeckInfo(deckId, token),
    queryKey: [`deck${deckId}`],
    onSuccess: (payload) => {
      setCardInDeck(payload.cards);
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return { cardInDecks, isLoading };
};
