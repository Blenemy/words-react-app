import { AddCardType } from "../types/AddCardType";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { BASE_URL } from "../data/constants";

export const useAddCart = (deckId: number | undefined) => {
  const token = Cookies.get("token");
  const [error, setError] = useState<null | string>(null);
  const [formData, setFormData] = useState<AddCardType>({
    deck: deckId,
    word: "",
    translation: "",
    description: "",
    image: "",
  });

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setFormData((prevData) => ({
        ...prevData,
        image: reader.result,
      }));
    });
    reader.readAsDataURL(file);
  };

  const handleAddCardOnSubmit = async (event: any) => {
    event.preventDefault();

    const dataToSend = {
      deck: deckId,
      word: formData.word,
      translation: formData.translation,
      description: formData.description,
      image: formData.image,
    };

    try {
      await axios.post(BASE_URL + "/study/cards/", dataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setError(null);
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.data);
        setError(error.response.data.error);
      }
    } finally {
      setFormData({
        deck: deckId,
        word: "",
        translation: "",
        description: "",
        image: null,
      });
    }
  };

  return {
    formData,
    setFormData,
    handleAddCardOnSubmit,
    onDrop,
    error,
  };
};
