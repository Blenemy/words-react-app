import { Link, useLocation, useNavigate } from "react-router-dom"
import { BASE_URL, ROUTE_AUTHORIZATION, ROUTE_FLIP_CARD, ROUTE_USER_DECKS} from "../../data/constants"
import { useEffect, useState } from "react"
import axios from "axios";
import Cookies from 'js-cookie';
import { DeckFromServer } from "../../types/DeckFromServer";
import { useAppSelector } from "../../app/hooks";
import { StackOfDecks } from "./StackOfDecks";
import arrowDecorator from '../../images/gamePageVector.svg';

export const GamePage = () => {
  const [defaultDecks, setDefaultDecks] = useState<DeckFromServer[] | null>(null);
  const { user } = useAppSelector(state => state.user);
  const navigate = useNavigate();
	const location = useLocation();
  const token = Cookies.get('token');

  const handleSumbitDeck = async (deck: number) => {
    try {
      const response = await axios.post(BASE_URL + `/study/add_deck/${deck}/`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        navigate(ROUTE_FLIP_CARD, { state: { deckId: deck, isDefault: true } });
      }

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
    <div className="min-h-screen font-['Roboto_flex']">
      <div className="container mx-auto my-0">
        <div className="mt-14">
          <div className="mb-8">
            <Link className="text-primary inline-flex gap-4 items-center" to={ROUTE_USER_DECKS}>
              <img src={arrowDecorator} alt=""/>
              <span>My Decks</span>
            </Link>

          </div>
          <div className="mb-16">
            <div className="flex gap-3 items-center justify-between">
              <h2 
                className="basis-3/4 text-[22px] bg-primary rounded-[30px] px-12 py-2"
              >
                Choose a deck you want to play. The harder you choose, the harder the words will be!
              </h2>
              <h2 
                className="basis-1/4 rounded-[30px] px-12 py-3 text-[22px]" 
                style={{ backgroundColor: 'rgba(133, 96, 191, 0.65)'}} 
              >
                Please choose a deck!
              </h2>
            </div>
          </div>
          <div className="flex gap-6 relative">
            {defaultDecks?.map(deck => (
              <div key={deck.id} className="basis-1/3">
                <StackOfDecks 
                  frontImage={deck.preview![0]} 
                  onDeckClick={() => handleSumbitDeck(deck.id)}
                  deckTitle={deck.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

{/* <div className="flex gap-16 mb-14 flex-wrap">
          {defaultDecks?.map((deck: any, index) => (
            <div key={`${deck}-${index}`} className="flex flex-col items-center justify-center">
              <div 
                className="stack flex gap-8 relative items-center justify-center mb-8" 
              >
                <StackOfDecks images={deck.preview} onDeckClick={() => handleSumbitDeck(deck.id)}/>
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
{selectedDeck && (
  <Link to={ROUTE_FLIP_CARD} state={{ deckId: selectedDeck, isDefault: true }}>Start the Game</Link> 
)} */}
