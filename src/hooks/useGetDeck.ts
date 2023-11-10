import { useQuery } from "@tanstack/react-query";
import { getDeckInfo } from "../api/getDeck";

export const useGetDeck = (
  deckId: string | undefined,
  token: string | undefined
) => {
  const { isLoading, data } = useQuery({
    queryFn: () => getDeckInfo(deckId, token),
    queryKey: [`deck${deckId}`],
  });

  const { cards: cardInDecks = [], title: deckTitle = "" } = data || {};

  return { cardInDecks, isLoading, deckTitle };
};
