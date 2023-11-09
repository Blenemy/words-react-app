import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_NOT_AVAILABLE } from "../constants/routes";
import { getDecks } from "../api/getDeck";
import Cookies from "js-cookie";
import { DeckFromServer } from "../types/DeckFromServer";
import { useAppSelector } from "../app/hooks";

export const useGamePageDecks = () => {
  const token = Cookies.get("token");
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token && !user) {
      navigate(ROUTE_NOT_AVAILABLE, { replace: true });
    }
  }, [user, navigate, token]);

  const { data } = useQuery({
    queryFn: () => getDecks(token),
    enabled: !!token,
    queryKey: ["decks"],
  });

  const defaultDecks = data?.filter((deck: DeckFromServer) => deck.default);

  return { defaultDecks, navigate, token };
};
