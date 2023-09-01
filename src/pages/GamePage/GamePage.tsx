import { Link, useLocation, useNavigate } from "react-router-dom"
import { BASE_URL, ROUTE_AUTHORIZATION, ROUTE_FLIP_CARD, ROUTE_USER_DECKS} from "../../data/constants"
import { useEffect, useState } from "react"
import axios from "axios";
import Cookies from 'js-cookie';
import { DeckFromServer } from "../../types/DeckFromServer";
import { useAppSelector } from "../../app/hooks";
import { StackOfDecks } from "./StackOfDecks";
import classNames from "classnames";

export const GamePage = () => {
  const [defaultDecks, setDefaultDecks] = useState<DeckFromServer[] | null>(null);
  const [selectedDeck, setSelectedDeck] = useState<number | null>(null);
  const { user } = useAppSelector(state => state.user);
  const navigate = useNavigate();
	const location = useLocation();
  const token = Cookies.get('token');

  const handleSumbitDeck = async (deck: number) => {
    setSelectedDeck(deck);

    try {
      await axios.post(BASE_URL + `/study/add_deck/${deck}/`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function getDecks() {
      if (!token) {
        navigate(ROUTE_AUTHORIZATION, { state: { from: location.pathname } });
        return;
      }

      try {
        const response = await axios.get(BASE_URL + '/study/decks/', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })

        setDefaultDecks(response.data.filter((deck: DeckFromServer) => deck.default))
        
      } catch (error) {
        console.log(error);
      }
    }

    getDecks();
  }, [token, user, navigate, location.pathname])

  return (
    <div className="h-screen bg-primary">
      <div className="px-10 py-8 flex flex-col items-center">
        <Link className="mb-6" to={ROUTE_USER_DECKS}>My Decks</Link>
        <h2 
          className="text-2xl font-serif text-yellow-600
          uppercase tracking-widest leading-loose text-center mb-14"
        >
          Choose a deck you want to play. <br />The harder you choose, the harder the words will be!
        </h2>
        <div className="flex gap-16 mb-14 flex-wrap">
          {defaultDecks?.map((deck: any, index) => (
            <div key={`${deck}-${index}`} className="flex flex-col items-center justify-center">
              <div 
                className="stack flex gap-8 relative items-center justify-center mb-8" 
              >
                <StackOfDecks images={deck.preview}/>
              </div>
              <button 
                key={deck.id} 
                className={classNames({
                  'text-red-400': selectedDeck === deck.id
                })}
                onClick={() => handleSumbitDeck(deck.id)}
              >
                {deck.title}
              </button>
            </div>
          ))}
        </div>
        {selectedDeck 
          ? 
            <Link to={ROUTE_FLIP_CARD} state={{ deckId: selectedDeck }}>Start the Game</Link> 
          : 
            <div>Warning: Choose a deck, please!</div>
        }
      </div>
    </div>
  )
}
