import axios from "axios";
import { BASE_URL } from "../data/constants";

export const getNextCard = async (
  deckId: number,
  dataToSend: any,
  token: string
) => {
  const response = await axios.post(
    `${BASE_URL}/study/learn/${deckId}/`,
    dataToSend,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const getFirstCard = async (deckId: number, token: string) => {
  const response = await axios.get(`${BASE_URL}/study/learn/${deckId}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
