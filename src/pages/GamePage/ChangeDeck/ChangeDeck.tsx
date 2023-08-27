import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { BASE_URL, ROUTE_ADD_CARD } from "../../../data/constants";
import { CardFromServer } from "../../../types/CardFromServer";

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

  console.log(cardInDeck);
  
  return (
    <div>
      <div>
        {!!cardInDeck?.length ? (
          <>
            {cardInDeck.map(card => (
              <div key={card.id}>{card.word}</div>
            ))}
          </>
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