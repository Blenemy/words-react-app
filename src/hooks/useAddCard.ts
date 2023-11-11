import { AddCardType } from "../types/AddCardType";
import { FormEvent, useState } from "react";
import Cookies from "js-cookie";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleAddCard } from "../api/handleAddCard";

export const useAddCart = (deckId: number | undefined) => {
  const queryClient = useQueryClient();
  const token = Cookies.get("token");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [error, setError] = useState<null | string>(null);
  const [formData, setFormData] = useState<AddCardType>({
    word: "",
    translation: "",
    description: "",
    image: "",
  });

  const { mutateAsync, isLoading } = useMutation(
    (data: { dataToSend: Object; token: string | undefined }) =>
      handleAddCard(data.dataToSend, data.token),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`deck${deckId}`]);
        setFormData({
          word: "",
          translation: "",
          description: "",
          image: null,
        });
        setPreviewImage(null);
        setError(null);
      },
    }
  );

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const dataToSend = {
      deck: deckId,
      word: formData.word,
      translation: formData.translation,
      description: formData.description,
      image: formData.image,
    };

    try {
      await mutateAsync({ dataToSend, token });
    } catch (error: any) {
      setError(error.response.data.detail);
    }
  };

  return {
    formData,
    setFormData,
    handleOnSubmit,
    error,
    previewImage,
    setPreviewImage,
    isLoading,
  };
};
