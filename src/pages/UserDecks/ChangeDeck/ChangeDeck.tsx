import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { ROUTE_USER_DECKS } from "../../../data/constants";
import { DeckCard } from "../../../components/DeckCard/DeckCard";
import { AddCard } from "../AddCard/AddCard";
import { BreadCrumbs } from "../../../components/BreadCrumbs/BreadCrumbs";
import { useGetDeck } from "../../../hooks/useGetDeck";

export const ChangeDeck = () => {
  const { deckId } = useParams();
  const token = Cookies.get("token");
  const { cardInDeck } = useGetDeck(deckId, token);

  return (
    <div className="p-16">
      <div className="mb-7">
        <BreadCrumbs text={"Back to my decks"} route={ROUTE_USER_DECKS} />
      </div>

      <div className="flex gap-32">
        <div className="flex flex-wrap gap-4 basis-8/12">
          {!!cardInDeck?.length ? (
            <>
              {cardInDeck.map((card) => (
                <div key={card.id} style={{ flexBasis: "calc(33.33% - 1rem)" }}>
                  <DeckCard card={card} />
                </div>
              ))}
            </>
          ) : (
            <>
              <div>'There are no cards in this deck'</div>
            </>
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
