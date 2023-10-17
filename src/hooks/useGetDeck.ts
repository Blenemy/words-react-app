import { useState } from "react";
import { CardFromServer } from "../types/CardFromServer";
import { useQuery } from "@tanstack/react-query";
import { getDeckInfo } from "../api/getDeck";

export const useGetDeck = (
  deckId: string | undefined,
  token: string | undefined
) => {
  const [cardInDeck, setCardInDeck] = useState<CardFromServer[]>();

  useQuery({
    queryFn: () => getDeckInfo(deckId, token),
    onSuccess: (payload) => {
      setCardInDeck(payload.cards);
    },
  });

  return { cardInDeck };
};
