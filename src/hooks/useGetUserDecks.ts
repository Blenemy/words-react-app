import { useQuery } from "@tanstack/react-query";
import { getDecks } from "../api/getDeck";

export const useGetUserDecks = (token: string | undefined) => {
  const { data, isLoading } = useQuery({
    queryFn: () => getDecks(token),
    queryKey: ["user-decks"],
  });

  return { isLoading, data };
};
