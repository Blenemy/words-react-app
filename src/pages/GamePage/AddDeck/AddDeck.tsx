import axios from "axios"
import { BASE_URL } from "../../../data/constants"
import { useEffect, useState } from "react";
import { handleInputChange } from "../../../utils/helpers";
import Cookies from "js-cookie";
import { DeckFromServer } from "../../../types/DeckFromServer";
import { Link } from "react-router-dom";
import { StackOfDecks } from "../StackOfDecks";

export const AddDeck = () => {
  const [addDeck, setAddDeck] = useState<any>({ title: '', });
  const [decks, setDecks] = useState<DeckFromServer[] | null>(null);
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

  console.log(decks);

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
          {decks?.map(deck => (
            <div 
              className="stack flex flex-col gap-8 relative items-center justify-center mb-8" 
            >
              <StackOfDecks images={deck.preview}/>
              <Link to={`./${deck.id}`}>{deck.title}</Link>
            </div>
          ))}
            
        </div>
      </div>
    </div>
  )
}
