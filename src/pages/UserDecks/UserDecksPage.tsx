import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { BASE_URL } from "../../data/constants";
import { DeckFromServer } from "../../types/DeckFromServer";
import { UserDeckPreview } from "./UserDeckPreview/UserDeckPreview";
import FileDropZone from "../../components/FileDropZone/FileDropZone";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { handleInputChange } from "../../utils/helpers";
import { UserAccountButton } from "../UserAccount/UserAccountButton";
import { useNavigate } from "react-router-dom";
import { handleSumbitDeck } from "../../api/handleSubmitDeck";

export const UserDecksPage = () => {
  const [decks, setDecks] = useState<DeckFromServer[] | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "" });
  const token = Cookies.get("token");

  const handleAddDeck = async () => {
    try {
      const dataToSend = {
        title: formData.name,
      };
      const response = await axios.post(
        BASE_URL + "/study/decks/",
        dataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setFormData({ name: "" });

      if (decks) {
        setDecks((prev) => [...prev!, response.data]);
      } else {
        setDecks([response.data]);
      }
    } catch (error) {}
  };

  useEffect(() => {
    async function getDecks() {
      try {
        const response = await axios.get(BASE_URL + "/study/decks/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setDecks(response.data.filter((deck: DeckFromServer) => !deck.default));
      } catch (error) {
        console.log(error);
      }
    }

    getDecks();
  }, [token, setDecks]);

  return (
    <div className="p-16">
      <div className="flex gap-32">
        <div className="flex flex-wrap gap-6 basis-2/3">
          {decks &&
            decks.map((deck) => (
              <UserDeckPreview
                deck={deck}
                key={deck.id}
                handleSumbitDeck={() =>
                  handleSumbitDeck(deck.id, token, navigate)
                }
              />
            ))}
        </div>
        <div className="basis-1/3 text-black flex flex-col gap-10">
          <FileDropZone
            setPreviewImage={setPreviewImage}
            previewImage={previewImage}
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
            handleOnClick={handleAddDeck}
          />
        </div>
      </div>
    </div>
  );
};
