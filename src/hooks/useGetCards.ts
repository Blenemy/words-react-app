import { useQuery } from "@tanstack/react-query";
import { getDeckInfo } from "../api/getDeck";

export const useGetCards = (
  deckId: string | undefined,
  token: string | undefined
) => {
  const { isLoading, data } = useQuery({
    queryFn: () => getDeckInfo(deckId, token),
    queryKey: [`deck${deckId}`],
    staleTime: 1000 * 60 * 5,
  });

  const { cards: cardInDecks = [], title: deckTitle = "" } = data || {};

  return { cardInDecks, isLoading, deckTitle };
};
