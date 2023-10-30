import { useState } from "react";
import Cookies from "js-cookie";
import { ROUTE_CARD_GAME } from "../../data/constants";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { handleInputChange } from "../../utils/helpers";
import { UserAccountButton } from "../UserAccount/UserAccountLayout/UserAccountButton";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { useGetUserDecks } from "../../hooks/useGetUserDecks";
import { useAddDeck } from "../../hooks/useAddDeck";
import { UserDeckList } from "./UserDeckList/UserDeckList";
import { FileDropZone } from "../../components/FileDropZone/FileDropZone";
import { NoResluts } from "../../components/NoResults/NoResluts";
import { GlobalLoader } from "../../components/Loaders/GlobalLoader";
import { DeckFromServer } from "../../types/DeckFromServer";

export const UserDecksPage = () => {
  const token = Cookies.get("token");
  const [fileError, setFileError] = useState<string>("");

  const handleDragError = (payload: string) => {
    setFileError(payload);
  };

  const { data } = useGetUserDecks(token);
  const {
    handleOnSubmit,
    previewImage,
    formData,
    setFormData,
    setPreviewImage,
    addDeckLoading,
  } = useAddDeck();

  if (addDeckLoading) {
    return <GlobalLoader />;
  }

  return (
    <div className="p-16">
      <div className="mb-7">
        <BreadCrumbs text={"Back to GamePage"} route={ROUTE_CARD_GAME} />
      </div>

      <div className="flex gap-32">
        <div className="flex flex-wrap mx-[-24px] gap-y-6 basis-2/3">
          {!!data.filter((item: DeckFromServer) => !item.default).length ? (
            <UserDeckList
              decks={data.filter((item: DeckFromServer) => !item.default)}
            />
          ) : (
            <NoResluts highlightedText="a new custom deck" />
          )}
        </div>
        <form
          className="basis-1/3 text-black flex flex-col gap-10"
          onSubmit={handleOnSubmit}
        >
          <h3 className="text-primary text-center text-xl">Add you deck</h3>
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
        </form>
      </div>
    </div>
  );
};
