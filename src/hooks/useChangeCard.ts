import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { BASE_URL } from "../data/constants";
import { CardFromServer } from "../types/CardFromServer";

type ReturnType = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  handleOnSubmit: (event: any) => Promise<void>;
};

export const useChangeCard = (
  card: CardFromServer,
  closeModal: () => void
): ReturnType => {
  const [formData, setFormData] = useState<any>({
    id: card.id,
    word: card.word || "",
    translation: card.translation || "",
    description: card.description || "",
    image: card.image || null,
  });
  const token = Cookies.get("token");

  const handleOnSubmit = async (event: any) => {
    event.preventDefault();

    const dataToSend: any = {};
    if (formData.word !== card.word) dataToSend.word = formData.word;
    if (formData.translation !== card.translation)
      dataToSend.translation = formData.translation;
    if (formData.description !== card.description)
      dataToSend.description = formData.description;
    if (formData.image !== card.image) dataToSend.image = formData.image;

    if (Object.keys(dataToSend).length === 0) {
      closeModal();
      return;
    }

    try {
      const response = await axios.patch(
        `${BASE_URL}/study/cards/${card.id}/`,
        dataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        closeModal();
      }
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  };

  return {
    formData,
    setFormData,
    handleOnSubmit,
  };
};
