import axios from "axios"
import { BASE_URL, ROUTE_FLIP_CARD } from "../../../data/constants"
import { useEffect, useState } from "react";
import { handleInputChange } from "../../../utils/helpers";
import Cookies from "js-cookie";
import { DeckFromServer } from "../../../types/DeckFromServer";
import { Link } from "react-router-dom";
import { StackOfDecks } from "../StackOfDecks";
import classNames from "classnames";

export const AddDeck = () => {
  const [addDeck, setAddDeck] = useState<any>({ title: '', });
  const [decks, setDecks] = useState<DeckFromServer[] | null>(null);
  const [selectedDeck, setSelectedDeck] = useState<number | null>(null);
  const token = Cookies.get('token');

  const handleAddDeck = async () => {
    try {
      const dataToSend = {
        title: addDeck.title,
      }
      const response = await axios.post(BASE_URL + '/study/decks/', dataToSend, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      console.log(response.data);

      setAddDeck({ title: ''});

      if (decks) {
        setDecks(prev => [...prev!, response.data])
      } else {
        setDecks([response.data]);
      }
    } catch (error) {
      
    }
  }

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

  console.log(selectedDeck);

  useEffect(() => {
    async function getDecks() {
      try {
        const response = await axios.get(BASE_URL + '/study/decks/', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })

        setDecks(response.data.filter((deck: DeckFromServer) => !deck.default))
        
      } catch (error) {
        console.log(error);
      }
    }

    getDecks();
  }, [token, setDecks])

  return (
    <div>
      <div className="px-10 py-8">
        <h2 
          className="text-2xl font-serif text-yellow-600
          uppercase tracking-widest leading-loose text-center mb-14"
          >
            Check The Existing Decks Or Add Your Personal One</h2>
        
        <div className="flex flex-col gap-4 mb-12">
          <input 
            placeholder='Title of the deck'
            required
            name={'title'}
            type={'text'}
            value={addDeck.title}
            className="text-black w-[20%]"
            onChange={(event) => handleInputChange(event, setAddDeck)}
            autoComplete='off'
          />
          <button className="w-[20%] bg-orange-500" onClick={handleAddDeck}>Add you own deck</button>
        </div>
        <div>
          <h3 className="text-center mb-12">List of your decks</h3>
          <div className="flex">
            {decks?.map(deck => (
              <div 
                className="stack flex flex-col gap-8 relative items-center justify-center mb-8" 
                key={deck.id}
              >
                <StackOfDecks images={deck.preview}/>
                <button 
                  className={classNames({
                    'text-red-400': selectedDeck === deck.id
                  })} 
                  onClick={() => handleSumbitDeck(deck.id)}
                >
                  {deck.title}
                </button>
                {/* <Link to={`./${deck.id}`}>{deck.title}</Link> */}
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
    </div>
  )
}
