// import { useCallback, useEffect, useState } from 'react';
// import { FlipCard } from '../../components/FlipCard/FlipCard';
// import { BASE_URL } from '../../data/constants';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { CardFromServer } from '../../types/CardFromServer';
// import { Loader } from '../../components/Loader/Loader';
// import Cookies from 'js-cookie';

// export const FlipCardPage = () => {
//   const [currentCard, setCurrentCard] = useState<null | CardFromServer>(null)
//   const [isLoading, setLoading] = useState<boolean>(false);
//   const token = Cookies.get('token');

//   console.log(currentCard);

//   const getNextCard = useCallback(async (answer: string) => {
//     setLoading(true);

//     try {
//       const action = answer === currentCard?.translation ? 'good' : 'again';
//       console.log(currentCard?.translation, answer);
//       console.log({ action });
//       const dataToSend = {
//         card_id: currentCard?.id,
//         action: action,
//       }
//       const response = await axios.post(BASE_URL + '/study/learn/1/', dataToSend, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       });
      
//       setCurrentCard((response.data));
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false)
//     }
//   }, [currentCard]);

//   useEffect(() => {
//     async function getFirstCard () {
//       setLoading(true);
//       try {
//         const response = await axios.get(BASE_URL + '/study/learn/1/', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//           },
//         });
//         setCurrentCard(response.data);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false)
//       }
//     }

//     getFirstCard()
//   }, []);

//   if (isLoading) return <Loader />

//   return (
//     <>
//       <div className="flex flex-col gap-8 justify-center items-center h-full">
//         {currentCard && (
//           <>
//             <FlipCard card={currentCard}/>
//             {/* <button
//               className="
//                 text-3xl font-serif text-yellow-600
//                 uppercase tracking-widest leading-loose"
//               onClick={getRandomCard}
//               type="button"
//             >
//             Наступна картка
//             </button> */}
//             <Link to={`./${currentCard?.id}`}>
//               Modify the card
//             </Link>
//             <div className='flex gap-5'>
//               {currentCard.answers?.map(answer => (
//                 <button key={answer} onClick={() => getNextCard(answer)}>{answer}</button>
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   )
// }

import { useCallback, useEffect, useState } from 'react';
import { FlipCard } from '../../components/FlipCard/FlipCard';
import { BASE_URL, ROUTE_CARD_GAME } from '../../data/constants';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { CardFromServer } from '../../types/CardFromServer';
import { Loader } from '../../components/Loader/Loader';
import Cookies from 'js-cookie';

export const FlipCardPage: React.FC = () => {
  const [currentCard, setCurrentCard] = useState<null | CardFromServer>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<boolean>(false);
  const location = useLocation();
  const deckId = location.state.deckId;
  const token = Cookies.get('token');

  const getNextCard = useCallback(async (answer: string) => {
    setLoading(true);

    try {
      const action = answer === currentCard?.translation ? 'good' : 'again';
      const dataToSend = {
        card_id: currentCard?.id,
        action,
      };
      const response = await axios.post(`${BASE_URL}/study/learn/${deckId}/`, dataToSend, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.data.status === 'finished') {
        setCurrentCard(null);
        setSuccessMessage(true);
      } else {
        setCurrentCard(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [currentCard, token, deckId]);

  useEffect(() => {
    async function getFirstCard() {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/study/learn/${deckId}/`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        console.log(response);

        if (response.data.status === 'finished') {
          setCurrentCard(null);
          setSuccessMessage(true);
        } else {
          setCurrentCard(response.data);
        }
        
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getFirstCard();
  }, [token, deckId]);

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col gap-8 justify-center items-center h-full">
      {currentCard && (
        <>
          <FlipCard card={currentCard} />
          <Link to={`./${currentCard.id}`}>Modify the card</Link>
          <div className='flex gap-5'>
            {currentCard.answers?.map(answer => (
              <button key={answer} onClick={() => getNextCard(answer)}>{answer}</button>
            ))}
          </div>
        </>
      )}

      {successMessage && (
        <>
          <div>Good Job! You've passed all the tests!</div>
          <Link to={ROUTE_CARD_GAME}>Return to the game page</Link>
        </>
      )}
    </div>
  );
};
