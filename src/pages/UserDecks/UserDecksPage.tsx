import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
// import classNames from "classnames";
import { BASE_URL } from "../../data/constants";
import { DeckFromServer } from "../../types/DeckFromServer";
import { UserDeckPreview } from "./UserDeckPreview/UserDeckPreview";
import FileDropZone from "../../components/FileDropZone/FileDropZone";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { handleInputChange } from "../../utils/helpers";
import { UserAccountButton } from "../UserAccount/UserAccountButton";

export const UserDecksPage = () => {
  // const [addDeck, setAddDeck] = useState<any>({ title: "" });
  const [decks, setDecks] = useState<DeckFromServer[] | null>(null);
  // const [selectedDeck, setSelectedDeck] = useState<number | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
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

  // const handleSumbitDeck = async (deck: number) => {
  //   setSelectedDeck(deck);

  //   try {
  //     await axios.post(
  //       BASE_URL + `/study/add_deck/${deck}/`,
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // console.log(decks);

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
            decks.map((deck) => <UserDeckPreview deck={deck} key={deck.id} />)}
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

{
  /* <div className="px-10 py-8">
  <div className="flex flex-col gap-4 mb-12">
    <input
      placeholder="Title of the deck"
      required
      name={"title"}
      type={"text"}
      value={addDeck.title}
      className="text-black w-[20%]"
      onChange={(event) => handleInputChange(event, setAddDeck)}
      autoComplete="off"
    />
    <button className="w-[20%] bg-orange-500" onClick={handleAddDeck}>
      Add you own deck
    </button>
  </div>
  <div>
    <h3 className="mb-12">List of your decks</h3>
    <div className="flex gap-8 mb-10">
      {decks?.map((deck) => (
        <div
          key={deck.id}
          className="flex flex-col gap-3 items-center justify-center"
        >
          <div className="stack flex flex-col gap-8 relative">
            <StackOfDecks
              frontImage={deck.preview![0]}
              onDeckClick={() => handleSumbitDeck(deck.id)}
              deckTitle={deck.title}
            />
          </div>
          <div className="flex flex-col gap-2">
            <button
              className={classNames({
                "text-red-400": selectedDeck === deck.id,
              })}
              onClick={() => handleSumbitDeck(deck.id)}
            >
              {deck.title}
            </button>
            <Link to={`./${deck.id}`}>Modify the deck</Link>
          </div>
        </div>
      ))}
    </div>

    {selectedDeck ? (
      <Link
        to={ROUTE_FLIP_CARD}
        state={{ deckId: selectedDeck, isDefault: false }}
      >
        Start the Game
      </Link>
    ) : (
      <div>Warning: Choose a deck, please!</div>
    )}
  </div>
</div>; */
}
