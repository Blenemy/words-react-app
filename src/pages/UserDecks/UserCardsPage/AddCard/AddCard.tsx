import { memo, useState } from "react";
import { useAddCart } from "../../../../hooks/useAddCard";
import { CustomInput } from "../../../../components/CustomInput/CustomInput";
import { handleFileUpload, handleInputChange } from "../../../../utils/helpers";
import { FileDropZone } from "../../../../components/FileDropZone/FileDropZone";
import { UserAccountButton } from "../../../UserAccount/UserAccountLayout/UserAccountButton";
import { Loader } from "../../../../components/Loaders/Loader";

/**
 * Компонент для добавления новой карточки в колоду.
 *
 * @component
 * @param {AddCardType} props - Свойства, содержащие идентификатор колоды.
 * @returns Компонент AddCard.
 */

interface AddCardType {
  deckId: number | undefined;
}

export const AddCard: React.FC<AddCardType> = memo(({ deckId }) => {
  const [fileError, setFileError] = useState<string>("");

  const handleDragError = (payload: string) => {
    setFileError(payload);
  };

  const {
    formData,
    setFormData,
    handleOnSubmit,
    error,
    previewImage,
    setPreviewImage,
    isLoading,
  } = useAddCart(deckId);

  return (
    <div className="basis-4/12 shrink-0 grow">
      <div className="flex flex-col">
        {isLoading ? (
          <Loader />
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
            <h3 className="text-center text-2xl text-red-600">
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
              onFileUpload={(file: File) => handleFileUpload(file, setFormData)}
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
});
