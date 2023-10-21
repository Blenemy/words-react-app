import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { DeckFromServer } from "../types/DeckFromServer";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE_AUTHORIZATION } from "../data/constants";
import { getDecks } from "../api/getDeck";

export const useGamePageDecks = (token: string | undefined) => {
  const [defaultDecks, setDefaultDecks] = useState<DeckFromServer[] | null>(
    null
  );
  const navigate = useNavigate();
  const location = useLocation();

  useQuery({
    queryFn: () => getDecks(token),
    queryKey: ["deck"],
    onSuccess: (payload) => {
      setDefaultDecks(payload.filter((deck: DeckFromServer) => deck.default));
    },
  });

  useEffect(() => {
    if (!token) {
      navigate(ROUTE_AUTHORIZATION, { state: { from: location.pathname } });
      return;
    }
  }, [token, navigate, location.pathname]);

  return { defaultDecks, navigate };
};
