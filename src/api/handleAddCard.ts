import axios from "axios";
import { BASE_URL } from "../data/constants";

export const handleAddCard = async (
  dataToSend: Object,
  token: string | undefined
) => {
  const response = await axios.post(BASE_URL + "/study/cards/", dataToSend, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
