import { useState } from "react";
import Cookies from "js-cookie";
import { ROUTE_CARD_GAME, ROUTE_HOME } from "../../data/constants";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { handleFileUpload, handleInputChange } from "../../utils/helpers";
import { UserAccountButton } from "../UserAccount/UserAccountLayout/UserAccountButton";
import { useGetUserDecks } from "../../hooks/useGetUserDecks";
import { useAddDeck } from "../../hooks/useAddDeck";
import { UserDeckList } from "./UserDeckList/UserDeckList";
import { FileDropZone } from "../../components/FileDropZone/FileDropZone";
import { NoResluts } from "../../components/NoResults/NoResluts";
import { GlobalLoader } from "../../components/Loaders/GlobalLoader";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";

/**
 * Компонент UserDecksPage для отображения колод пользователя и добавления новых.
 *
 * @returns Компонент UserDecksPage.
 */

export const UserDecksPage = () => {
  const token = Cookies.get("token");
  const [fileError, setFileError] = useState<string>("");

  const handleDragError = (payload: string) => {
    setFileError(payload);
  };

  const { userDecks, isLoading } = useGetUserDecks(token);

  const {
    handleOnSubmit,
    previewImage,
    formData,
    setFormData,
    setPreviewImage,
    addDeckLoading,
  } = useAddDeck();

  if (addDeckLoading || isLoading) {
    return <GlobalLoader />;
  }

  return (
    <div className="p-14">
      <div className="mb-7">
        <Breadcrumbs
          crumbs={[
            { text: "Home", path: ROUTE_HOME },
            { text: "Back to game page", path: ROUTE_CARD_GAME },
          ]}
          current="Your decks"
        />
      </div>

      <div className="flex gap-32">
        <div className="flex flex-wrap mx-[-24px] gap-y-6 basis-2/3">
          {!!userDecks?.length ? (
            <UserDeckList decks={userDecks} />
          ) : (
            <NoResluts highlightedText="a new custom deck" />
          )}
        </div>
        <form
          className="basis-1/3 text-black flex flex-col gap-10"
          onSubmit={handleOnSubmit}
        >
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
        </form>
      </div>
    </div>
  );
};
