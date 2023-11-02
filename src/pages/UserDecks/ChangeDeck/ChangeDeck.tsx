import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { ROUTE_USER_DECKS } from "../../../data/constants";
import { DeckCard } from "../../../components/DeckCard/DeckCard";
import { AddCard } from "../AddCard/AddCard";
import { BreadCrumbs } from "../../../components/BreadCrumbs/BreadCrumbs";
import { useGetDeck } from "../../../hooks/useGetDeck";
import { NoResluts } from "../../../components/NoResults/NoResluts";
import { GlobalLoader } from "../../../components/Loaders/GlobalLoader";

export const ChangeDeck = () => {
  const { deckId } = useParams();
  const token = Cookies.get("token");
  const { cardInDecks, isLoading } = useGetDeck(deckId, token);

  if (isLoading) {
    return <GlobalLoader />;
  }

  return (
    <div className="p-16">
      <div className="mb-7">
        <BreadCrumbs text={"Back to my decks"} route={ROUTE_USER_DECKS} />
      </div>

      <div className="flex gap-32">
        <div className="flex flex-wrap basis-8/12 -mx-4">
          {!!cardInDecks?.length ? (
            <>
              {cardInDecks.map((card) => (
                <div key={card.id} className="basis-1/3 px-4">
                  <DeckCard card={card} />
                </div>
              ))}
            </>
          ) : (
            <NoResluts highlightedText="a new custom card" />
          )}
        </div>
        {deckId && (
          <div className="basis-4/12 shrink-0 grow">
            <AddCard deckId={+deckId} />
          </div>
        )}
      </div>
    </div>
  );
};
