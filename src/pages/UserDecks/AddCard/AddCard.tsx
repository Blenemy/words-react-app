import { handleInputChange } from "../../../utils/helpers";
import { useAddCart } from "../../../hooks/useAddCard";
import { CustomInput } from "../../../components/CustomInput/CustomInput";
import { UserAccountButton } from "../../UserAccount/UserAccountLayout/UserAccountButton";
import { useState } from "react";
import { FileDropZone } from "../../../components/FileDropZone/FileDropZone";
import { GlobalLoader } from "../../../components/Loaders/GlobalLoader";

interface AddCardType {
  deckId: number | undefined;
}

export const AddCard: React.FC<AddCardType> = ({ deckId }) => {
  const [fileError, setFileError] = useState<string>("");

  const handleDragError = (payload: string) => {
    setFileError(payload);
  };

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setFormData((prevData) => ({
        ...prevData,
        image: reader.result as string,
      }));
    });
    reader.readAsDataURL(file);
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
    <div className="basis-4/12 shrink-0 grow">
      <div className="flex flex-col">
        {isLoading ? (
          <GlobalLoader />
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={handleAddCardOnSubmit}
          >
            <h3 className="text-primary text-xl text-center font-['Roboto_flex']">
              Add you own card to this deck
            </h3>
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
              onFileUpload={handleFileUpload}
              setPreviewImage={setPreviewImage}
              previewImage={previewImage}
              fileError={fileError}
              handleDragError={handleDragError}
            />
            <UserAccountButton
              type="submit"
              text="Add a card"
              variant="secondary"
            />
            {error && <div className="text-[14px] text-red-500">{error}</div>}
          </form>
        )}
      </div>
    </div>
  );
};
