import axios from "axios";
import { BASE_URL } from "../data/constants";

export const updateCard = async (
  cardId: number,
  dataToSend: any,
  token: string | undefined
) => {
  const response = await axios.patch(
    `${BASE_URL}/study/cards/${cardId}/`,
    dataToSend,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
