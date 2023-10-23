import { useState } from "react";
import Cookies from "js-cookie";
import { ROUTE_CARD_GAME, ROUTE_USER_DECKS } from "../../data/constants";
import { UserDeckPreview } from "./UserDeckPreview/UserDeckPreview";
import FileDropZone from "../../components/FileDropZone/FileDropZone";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { handleInputChange } from "../../utils/helpers";
import { UserAccountButton } from "../UserAccount/UserAccountButton";
import { useNavigate } from "react-router-dom";
import { handleSumbitDeck } from "../../api/handleSubmitDeck";
import { BreadCrumbs } from "../../components/BreakCrumbs/BreadCrumbs";
import { useGetUserDecks } from "../../hooks/useGetUserDecks";
import { useAddDeck } from "../../hooks/useAddDeck";

export const UserDecksPage = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [fileError, setFileError] = useState<string>("");

  const handleDragError = (payload: string) => {
    setFileError(payload);
  };

  const redirectToDeck = (deckId: number) => {
    navigate(ROUTE_USER_DECKS + `/${deckId}`);
  };

  const { decks, setDecks } = useGetUserDecks(token);
  const {
    handleOnClick,
    previewImage,
    formData,
    setFormData,
    setPreviewImage,
  } = useAddDeck(token, setDecks, decks);

  return (
    <div className="p-16">
      <div className="mb-7">
        <BreadCrumbs text={"Back to GamePage"} route={ROUTE_CARD_GAME} />
      </div>

      <div className="flex gap-32">
        <div className="flex flex-wrap gap-6 basis-2/3">
          {decks &&
            decks.map((deck) => (
              <UserDeckPreview
                deck={deck}
                key={deck.id}
                redirectFunc={redirectToDeck}
                handleSumbitDeck={() =>
                  handleSumbitDeck(deck.id, token, navigate)
                }
              />
            ))}
        </div>
        <form className="basis-1/3 text-black flex flex-col gap-10">
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
            color="violetStroke"
            handleOnClick={handleOnClick}
          />
        </form>
      </div>
    </div>
  );
};
