import { useCallback, useEffect, useState } from 'react';
import { FlipCard } from '../../components/FlipCard/FlipCard';
import { BASE_URL, ROUTE_CARD_GAME } from '../../data/constants';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { CardFromServer } from '../../types/CardFromServer';
import { Loader } from '../../components/Loader/Loader';
import Cookies from 'js-cookie';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import testImage from '../../images/test.png';
import './FlipCardPage.scss';
import { FlipCardLayout } from './FlipCardLayout';

export const FlipCardPage: React.FC = () => {
  const [currentCard, setCurrentCard] = useState<null | CardFromServer>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<boolean>(false);
  const location = useLocation();
  const { deckId, isDefault } = location.state;
  const token = Cookies.get('token');

  console.log(currentCard);

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
    <div className="flex flex-col text-primary">
      <div className='container mx-auto my-0'>
        <div className='py-14 flex flex-col'>
          <div className='mb-10'>
            <BreadCrumbs />
          </div>
          {currentCard && (
            <>
              <FlipCardLayout 
                currentCard={currentCard}
              />
              <div className='flex gap-5 justify-center'>
                {currentCard?.answers?.map(answer => (
                  <button 
                    className='w-[151px] h-[46px] rounded-3xl quiz-button font-["Roboto_flex"]'
                    key={answer} 
                    onClick={() => getNextCard(answer)}
                  >
                    {answer}
                  </button>
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
      </div>
    </div>
  );
};

// {currentCard && (
//   <>
//     <FlipCard card={currentCard} />
//     {!isDefault && (
//       <Link to={`./${currentCard.id}`}>Modify the card</Link>
//     )}
//     <div className='flex gap-5'>
//       {currentCard.answers?.map(answer => (
//         <button key={answer} onClick={() => getNextCard(answer)}>{answer}</button>
//       ))}
//     </div>
//   </>
// )}

// {successMessage && (
//   <>
//     <div>Good Job! You've passed all the tests!</div>
//     <Link to={ROUTE_CARD_GAME}>Return to the game page</Link>
//   </>
// )}
