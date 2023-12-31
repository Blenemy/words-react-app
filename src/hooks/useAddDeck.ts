import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleAddDeck } from "../api/handleAddDeck";
import { FormEvent, useState } from "react";
import Cookies from "js-cookie";

export const useAddDeck = () => {
  const queryClient = useQueryClient();
  const token = Cookies.get("token");
  const [formData, setFormData] = useState({ name: "", image: "" });
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const { mutateAsync, isLoading: addDeckLoading } = useMutation(
    (data: { formData: Object; token: string | undefined }) =>
      handleAddDeck(data.formData, data.token),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user-decks"]);
        setFormData({ name: "", image: "" });
        setPreviewImage(null);
      },
    }
  );

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await mutateAsync({ formData, token });
  };

  return {
    handleOnSubmit,
    previewImage,
    formData,
    setFormData,
    setPreviewImage,
    addDeckLoading,
  };
};
