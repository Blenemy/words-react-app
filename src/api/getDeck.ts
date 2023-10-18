import axios from "axios";
import { BASE_URL } from "../data/constants";

export const getDeckInfo = async (
  deckId: string | undefined,
  token: string | undefined
) => {
  const response = await axios.get(BASE_URL + `/study/decks/${deckId}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getDecks = async (token: string | undefined) => {
  const response = await axios.get(BASE_URL + "/study/decks/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
