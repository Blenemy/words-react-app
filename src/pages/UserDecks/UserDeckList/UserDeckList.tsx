import { FC } from "react";
import { DeckFromServer } from "../../../types/DeckFromServer";
import { UserDeckPreview } from "../UserDeckPreview/UserDeckPreview";
import { handleSumbitDeck } from "../../../api/handleSubmitDeck";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { ROUTE_USER_DECKS } from "../../../data/constants";

type Props = {
  decks: DeckFromServer[];
};
export const UserDeckList: FC<Props> = ({ decks }) => {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  const redirectToDeck = (deckId: number) => {
    navigate(ROUTE_USER_DECKS + `/${deckId}`);
  };

  return (
    <>
      {decks &&
        decks.map((deck) => (
          <UserDeckPreview
            deck={deck}
            key={deck.id}
            redirectFunc={redirectToDeck}
            handleSumbitDeck={() => handleSumbitDeck(deck.id, token, navigate)}
          />
        ))}
    </>
  );
};
