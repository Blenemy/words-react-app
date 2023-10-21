import { handleInputChange } from "../../../utils/helpers";
import { useAddCart } from "../../../hooks/useAddCard";
import FileDropZone from "../../../components/FileDropZone/FileDropZone";
import { CustomInput } from "../../../components/CustomInput/CustomInput";
import { UserAccountButton } from "../../UserAccount/UserAccountButton";
import { useState } from "react";
import { Loader } from "../../../components/Loader/Loader";

export const AddCard = ({ deckId }: { deckId: number | undefined }) => {
  const [fileError, setFileError] = useState<string>("");

  const handleDragError = (payload: string) => {
    setFileError(payload);
  };

  const {
    formData,
    setFormData,
    handleAddCardOnSubmit,
    error,
    previewImage,
    setPreviewImage,
    isLoading,
  } = useAddCart(deckId);

  return (
    <>
      <div className="flex flex-col">
        {isLoading ? (
          <Loader />
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={handleAddCardOnSubmit}
          >
            <CustomInput
              placeholder="Deck"
              disabled
              name={"deck"}
              type={"number"}
              classname="text-black"
              value={formData.deck}
              onChangeHandler={(event: Event) =>
                handleInputChange(event, setFormData)
              }
              autoComplete="off"
            />
            <CustomInput
              placeholder="Word in English"
              required
              name={"word"}
              type={"text"}
              classname="text-black"
              value={formData.word}
              onChangeHandler={(event: Event) =>
                handleInputChange(event, setFormData)
              }
              autoComplete="off"
            />
            <CustomInput
              placeholder="Translation"
              required
              name={"translation"}
              type={"text"}
              classname="text-black"
              value={formData.translation}
              onChangeHandler={(event: Event) =>
                handleInputChange(event, setFormData)
              }
              autoComplete="off"
            />
            <CustomInput
              placeholder="Description"
              required
              name={"description"}
              type={"text"}
              classname="text-black"
              value={formData.description}
              onChangeHandler={(event: Event) =>
                handleInputChange(event, setFormData)
              }
              autoComplete="off"
            />
            <FileDropZone
              onFileUpload={(file) => {
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                  setFormData((prevData) => ({
                    ...prevData,
                    image: reader.result as string,
                  }));
                });
                reader.readAsDataURL(file);
              }}
              setPreviewImage={setPreviewImage}
              previewImage={previewImage}
              fileError={fileError}
              handleDragError={handleDragError}
            />
            <UserAccountButton
              type="submit"
              text="Add a card"
              color="violetStroke"
            />
            {error && <div className="text-[14px] text-red-500">{error}</div>}
          </form>
        )}
      </div>
    </>
  );
};
