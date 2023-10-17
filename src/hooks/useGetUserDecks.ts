import { useQuery } from "@tanstack/react-query";
import { DeckFromServer } from "../types/DeckFromServer";
import { getDeck } from "../api/getDeck";
import { useState } from "react";

export const useGetUserDecks = (token: string | undefined) => {
  const [decks, setDecks] = useState<DeckFromServer[] | null>(null);

  useQuery({
    queryFn: () => getDeck(token),
    queryKey: ["decks"],
    onSuccess: (payload) => {
      setDecks(payload.filter((deck: DeckFromServer) => !deck.default));
    },
  });

  return { decks, setDecks };
};
