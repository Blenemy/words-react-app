import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleAddDeck } from "../api/handleAddDeck";
import { useState } from "react";
import { DeckFromServer } from "../types/DeckFromServer";

export const useAddDeck = (
  token: string | undefined,
  setDecks: React.Dispatch<React.SetStateAction<DeckFromServer[] | null>>,
  decks: DeckFromServer[] | null
) => {
  const [formData, setFormData] = useState({ name: "", image: "" });
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    ({ formData, token }: { formData: any; token: string | undefined }) =>
      handleAddDeck(formData, token),
    {
      onSuccess: (payload) => {
        setFormData({ name: "", image: "" });
        setPreviewImage(null);

        if (decks) {
          setDecks((prev) => [...prev!, payload]);
        } else {
          setDecks([payload]);
        }

        queryClient.invalidateQueries(["decks"]);
      },
    }
  );

  const handleOnClick = async () => {
    await mutateAsync({ formData, token });
  };

  return {
    handleOnClick,
    previewImage,
    formData,
    setFormData,
    setPreviewImage,
  };
};
