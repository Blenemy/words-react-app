import { useState } from "react";
import { CustomInput } from "../../../components/CustomInput/CustomInput";
import { FileDropZone } from "../../../components/FileDropZone/FileDropZone";
import { useAddDeck } from "../../../hooks/useAddDeck";
import { handleFileUpload, handleInputChange } from "../../../utils/helpers";
import { UserAccountButton } from "../../UserAccount/UserAccountLayout/UserAccountButton";
import { Loader } from "../../../components/Loaders/Loader";

export const AddDeck = () => {
  const [fileError, setFileError] = useState<string>("");

  const handleDragError = (payload: string) => {
    setFileError(payload);
  };

  const {
    handleOnSubmit,
    previewImage,
    formData,
    setFormData,
    setPreviewImage,
    addDeckLoading,
  } = useAddDeck();

  return (
    <form
      className="basis-1/3 text-black flex flex-col gap-10"
      onSubmit={handleOnSubmit}
    >
      {addDeckLoading ? (
        <Loader />
      ) : (
        <>
          <h3 className="text-center text-2xl text-red-600">Add you deck</h3>
          <FileDropZone
            onFileUpload={(file: File) => handleFileUpload(file, setFormData)}
            setPreviewImage={setPreviewImage}
            previewImage={previewImage}
            handleDragError={handleDragError}
            fileError={fileError}
          />
          <CustomInput
            placeholder="The name of the deck"
            type="text"
            required
            value={formData.name}
            onChangeHandler={(event: Event) =>
              handleInputChange(event, setFormData)
            }
            name="name"
            autoComplete="off"
            classname="w-full"
          />
          <UserAccountButton
            type="submit"
            text="Add a deck"
            variant="secondary"
          />
        </>
      )}
    </form>
  );
};
