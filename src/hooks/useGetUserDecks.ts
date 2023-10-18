import { useQuery } from "@tanstack/react-query";
import { DeckFromServer } from "../types/DeckFromServer";
import { useState } from "react";
import { getDecks } from "../api/getDeck";

export const useGetUserDecks = (token: string | undefined) => {
  const [decks, setDecks] = useState<DeckFromServer[] | null>(null);

  useQuery({
    queryFn: () => getDecks(token),
    queryKey: ["decks"],
    onSuccess: (payload) => {
      setDecks(payload.filter((deck: DeckFromServer) => !deck.default));
    },
  });

  return { decks, setDecks };
};
