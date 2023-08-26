import { useCallback, useEffect, useState } from 'react';
import { FlipCard } from '../../components/FlipCard/FlipCard';
import { BASE_URL } from '../../data/constants';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CardFromServer } from '../../types/CardFromServer';
import { Loader } from '../../components/Loader/Loader';

export const FlipCardPage = () => {
  const [currentCard, setCurrentCard] = useState<null | CardFromServer>(null)
  const [isLoading, setLoading] = useState<boolean>(false);

  const getRandomCard = useCallback(async () => {
    setLoading(true)
    try {
      const response = await axios.get(BASE_URL + '/study/random_card/');
      setCurrentCard((response.data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }, []);

  useEffect(() => {
    getRandomCard();
  }, []);

  if (isLoading) return <Loader />

  return (
    <>
      <div className="flex flex-col gap-8 justify-center items-center h-full">
      {currentCard && (
        <>
          <FlipCard card={currentCard}/>
          <button
            className="
              text-3xl font-serif text-yellow-600
              uppercase tracking-widest leading-loose"
            onClick={getRandomCard}
            type="button"
          >
          Наступна картка
          </button>
          <Link to={`./${currentCard?.id}`}>
            Modify the card
          </Link>
        </>
      )}
    </div>
    </>
  )
}