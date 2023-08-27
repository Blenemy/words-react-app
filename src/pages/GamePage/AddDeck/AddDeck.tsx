import axios from "axios"
import { BASE_URL } from "../../../data/constants"
import { useEffect, useState } from "react";
import { handleInputChange } from "../../../utils/helpers";
import Cookies from "js-cookie";
import { DeckFromServer } from "../../../types/DeckFromServer";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    async function getDecks() {
      try {
        const response = await axios.get(BASE_URL + '/study/decks/', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })

        setDecks(response.data)
        console.log(response.data);
        
      } catch (error) {
        console.log(error);
      }
    }

    getDecks();
  }, [token, setDecks])

  return (
    <div>
      <h2>Check The Existing Decks Or Add Your Personal One</h2>
      <ul>
        {decks?.filter(deck => !deck.default).map(deck => (
          <li key={deck.id}>
            <Link to={`./${deck.id}`}>{deck.title}</Link>
          </li>
        ))}
      </ul>
      <div>
        <input 
          placeholder='Title of the deck'
          required
          name={'title'}
          type={'text'}
          value={addDeck.title}
          className="text-black"
          onChange={(event) => handleInputChange(event, setAddDeck)}
          autoComplete='off'
        />
        <button onClick={handleAddDeck}>Add you own deck</button>
      </div>
    </div>
  )
}