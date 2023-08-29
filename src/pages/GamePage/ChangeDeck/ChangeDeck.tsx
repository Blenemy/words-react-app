import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { BASE_URL, ROUTE_ADD_CARD } from "../../../data/constants";
import { CardFromServer } from "../../../types/CardFromServer";
import { DeckCard } from "../../../components/DeckCard/DeckCard";

export const ChangeDeck = () => {
  const { deckId } = useParams();
  const [cardInDeck, setCardInDeck] = useState<CardFromServer[]>();
  const token = Cookies.get('token');

  useEffect(() => {
    async function getDeck() {
      try {
        const response = await axios.get(BASE_URL + `/study/decks/${deckId}/`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        setCardInDeck(response.data.cards)
        
      } catch (error) {
        
      }
    }

    getDeck()
  }, [deckId, token])

  return (
    <div>
      <div className="px-10 py-8">
        {!!cardInDeck?.length ? (
          <div className="flex flex-wrap gap-5">
            {cardInDeck.map(card => (
              <DeckCard key={card.id} card={card}/>
            ))}
          </div>
        ) : (
          <>
            <div>'There are no cards in this deck'</div>
          </>
        )}

        <Link to={ROUTE_ADD_CARD} state={{ deckId: deckId }}>Add more cards to this deck</Link>
      </div>
    </div>
  )
}