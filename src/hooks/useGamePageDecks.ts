import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { DeckFromServer } from "../types/DeckFromServer";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE_AUTHORIZATION } from "../data/constants";
import { getDecks } from "../api/getDeck";
import Cookies from "js-cookie";

export const useGamePageDecks = () => {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      navigate(ROUTE_AUTHORIZATION, { state: { from: location.pathname } });
      return;
    }
  }, [token, navigate, location.pathname]);

  const query = useQuery({
    queryFn: () => getDecks(token),
    queryKey: ["deck"],
  });

  const defaultDecks: DeckFromServer[] =
    query.data?.filter((deck: DeckFromServer) => deck.default) || null;

  return { defaultDecks, navigate, token };
};
