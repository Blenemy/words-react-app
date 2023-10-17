import axios from "axios";
import { BASE_URL } from "../data/constants";

export const handleAddDeck = async (
  formData: any,
  token: string | undefined
) => {
  const dataToSend = {
    title: formData.name,
    image: formData.image,
  };

  const response = await axios.post(BASE_URL + "/study/decks/", dataToSend, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
