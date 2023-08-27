import { Link } from "react-router-dom"
import { BASE_URL, ROUTE_FLIP_CARD, ROUTE_USER_DECKS} from "../../data/constants"
import { useEffect, useState } from "react"
import axios from "axios";
import Cookies from 'js-cookie';
import { DeckFromServer } from "../../types/DeckFromServer";

export const GamePage = () => {
  const [defaultDecks, setDefaultDecks] = useState<DeckFromServer[] | null>(null);
  const [selectedDeck, setSelectedDeck] = useState<number | null>(null);
  const token = Cookies.get('token');

  const handleSumbitDeck = async (deck: number) => {
    setSelectedDeck(deck);

    try {
      const response = await axios.post(BASE_URL + `/study/add_deck/${deck}/`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      console.log(response);

    } catch (error) {
      console.log(error);
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

        setDefaultDecks(response.data)
        console.log(response.data);
        
      } catch (error) {
        console.log(error);
      }
    }

    getDecks();
  }, [token])

  return (
    <div>
      <Link to={ROUTE_USER_DECKS}>My Decks</Link>
      <h2>Choose a difficulty of a deck. The harder you choose, the harder the words will be!</h2>
      <div className="flex gap-5">
        {defaultDecks?.map((deck: any) => (
          <button 
            key={deck.id} 
            className=""
            onClick={() => handleSumbitDeck(deck.id)}
          >
            {deck.title}
          </button>
        ))}
      </div>
      <Link to={ROUTE_FLIP_CARD} state={{ deckId: selectedDeck }}>Start the Game</Link>
    </div>
  )
}

// const CustomCheckbox = ({ name }: any) => {
//   return (
//     <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
//         <input
//           className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
//           type="checkbox"
//           value=""
//           id="checkboxDefault" />
//         <label
//           className="inline-block pl-[0.15rem] hover:cursor-pointer"
//           htmlFor="checkboxDefault">
//           {name}
//         </label>
//       </div>
//   )
// }