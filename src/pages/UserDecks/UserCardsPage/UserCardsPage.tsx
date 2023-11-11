import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { useGetCards } from "../../../hooks/useGetCards";
import { GlobalLoader } from "../../../components/Loaders/GlobalLoader";
import {
  ROUTE_CARD_GAME,
  ROUTE_HOME,
  ROUTE_USER_DECKS,
} from "../../../constants/routes";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";
import { DeckCardsList } from "./DeckCardsList/DeckCardsList";
import { NoResluts } from "../../../components/NoResults/NoResluts";
import { AddCard } from "./AddCard/AddCard";
import { MotionContainer } from "../../../components/MotionContainer/MotionContainer";

/**
 * Компонент для управления деталями колоды и добавления новых карточек в нее.
 *
 * @component
 * @returns Компонент ChangeDeck с деталями колоды и функциональностью добавления карточек.
 */

export const UserCardsPage = () => {
  const { deckId } = useParams();
  const token = Cookies.get("token");
  const { cardInDecks, isLoading, deckTitle } = useGetCards(deckId, token);

  if (isLoading) {
    return <GlobalLoader />;
  }

  return (
    <MotionContainer classes="p-14">
      <div className="mb-7">
        <Breadcrumbs
          crumbs={[
            { text: "Home", path: ROUTE_HOME },
            { text: "Back to game page", path: ROUTE_CARD_GAME },
            { text: "Back to my decks", path: ROUTE_USER_DECKS },
          ]}
          current={deckTitle}
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
    </MotionContainer>
  );
};
