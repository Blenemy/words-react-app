import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../data/constants";
import { CardFromServer } from "../../../types/CardFromServer";
import { DeckCard } from "../../../components/DeckCard/DeckCard";
import { AddCard } from "../../CardsPage/AddCard/AddCard";

export const ChangeDeck = () => {
  const { deckId } = useParams();
  const [cardInDeck, setCardInDeck] = useState<CardFromServer[]>();
  const token = Cookies.get("token");

  useEffect(() => {
    async function getDeck() {
      try {
        const response = await axios.get(BASE_URL + `/study/decks/${deckId}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCardInDeck(response.data.cards);
      } catch (error) {}
    }

    getDeck();
  }, [deckId, token, cardInDeck]);

  return (
    <div className="p-16">
      <div className="flex gap-32">
        <div className="flex flex-wrap gap-4 basis-3/4">
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
          <div className="basis-1/4">
            <AddCard deckId={+deckId} />
          </div>
        )}
      </div>
    </div>
  );
};
