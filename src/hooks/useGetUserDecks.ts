import { useQuery } from "@tanstack/react-query";
import { getDecks } from "../api/getDeck";
import { DeckFromServer } from "../types/DeckFromServer";

export const useGetUserDecks = (token: string | undefined) => {
  const { data, isLoading } = useQuery({
    queryFn: () => getDecks(token),
    queryKey: ["user-decks"],
    staleTime: 1000 * 60 * 5,
  });

  const userDecks = data?.filter((item: DeckFromServer) => !item.default);

  return { isLoading, userDecks };
};
