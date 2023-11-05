import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import {
  ROUTE_CARD_GAME,
  ROUTE_HOME,
  ROUTE_USER_DECKS,
} from "../../../data/constants";
import { AddCard } from "../AddCard/AddCard";
import { useGetDeck } from "../../../hooks/useGetDeck";
import { NoResluts } from "../../../components/NoResults/NoResluts";
import { GlobalLoader } from "../../../components/Loaders/GlobalLoader";
import { DeckCardsList } from "../DeckCardsList/DeckCardsList";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";

/**
 * Component for managing a deck's details and adding new cards to it.
 *
 * @component
 * @returns The ChangeDeck component with deck details and add card functionality.
 */

export const ChangeDeck = () => {
  const { deckId } = useParams();
  const token = Cookies.get("token");
  const { cardInDecks, isLoading } = useGetDeck(deckId, token);

  if (isLoading) {
    return <GlobalLoader />;
  }

  return (
    <div className="p-14">
      <div className="mb-7">
        <Breadcrumbs
          crumbs={[
            { text: "Home", path: ROUTE_HOME },
            { text: "Back to game page", path: ROUTE_CARD_GAME },
            { text: "Back to my decks", path: ROUTE_USER_DECKS },
          ]}
          current="Deck customization"
        />
      </div>

      <div className="flex gap-32">
        <div className="flex flex-wrap basis-8/12 -mx-2 gap-y-4">
          {!!cardInDecks.length ? (
            <DeckCardsList deckCards={cardInDecks} deckId={deckId} />
          ) : (
            <NoResluts highlightedText="a new custom card" />
          )}
        </div>
        {deckId && <AddCard deckId={+deckId} />}
      </div>
    </div>
  );
};
