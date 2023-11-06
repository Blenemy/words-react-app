import { FC } from "react";
import { DeckFromServer } from "../../../types/DeckFromServer";
import { UserDeckPreview } from "../UserDeckPreview/UserDeckPreview";
import { handleSumbitDeck } from "../../../api/handleSubmitDeck";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { ROUTE_USER_DECKS } from "../../../data/constants";

/**
 * Отображает список колод пользователя.
 *
 * @param {Props} props - Свойства компоненты UserDeckList.
 * @returns Список компонентов UserDeckPreview.
 */

type UserDeckListProps = {
  decks: DeckFromServer[];
};

export const UserDeckList: FC<UserDeckListProps> = ({ decks }) => {
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
