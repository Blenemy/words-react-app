import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { CardFromServer } from "../types/CardFromServer";
import { updateCard } from "../api/updateCard";

type ReturnType = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  handleOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const useChangeCard = (
  card: CardFromServer,
  closeModal: () => void,
  deckId: string | undefined
): ReturnType => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    id: card.id,
    word: card.word || "",
    translation: card.translation || "",
    description: card.description || "",
    image: card.image || null,
  });
  const token = Cookies.get("token");

  const { mutate } = useMutation(
    async (dataToSend: any) => {
      return await updateCard(card.id, dataToSend, token);
    },
    {
      onSuccess: () => {
        closeModal();
      },
      onError: (error: any) => {
        if (error.response) {
          console.log(error.response.data);
        }
      },
    }
  );

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const dataToSend: any = {};
    if (formData.word !== card.word) dataToSend.word = formData.word;
    if (formData.translation !== card.translation)
      dataToSend.translation = formData.translation;
    if (formData.description !== card.description)
      dataToSend.description = formData.description;
    if (formData.image !== card.image) dataToSend.image = formData.image;

    if (Object.keys(dataToSend).length > 0) {
      mutate(dataToSend);
      queryClient.invalidateQueries([`deck${deckId}`]);
    } else {
      closeModal();
    }
  };

  return {
    formData,
    setFormData,
    handleOnSubmit,
  };
};
