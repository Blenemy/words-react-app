import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { FlipCard } from '../components/FlipCard/FlipCard';
import { BASE_URL, ROUTE_CHANGE_CARD } from '../constants/constants';
import { Link } from 'react-router-dom';
import { setCurrentCard } from '../features/currentCardSlice';
import axios from 'axios';

export const FlipCardPage = () => {
  const dispatch = useAppDispatch();
  const { currentCard } = useAppSelector(state => state.currentCard);
  const { cards } = useAppSelector(state => state.cards);

  const getRandomCard = useCallback(async () => {
    try {
      const response = await axios.get(BASE_URL + '/study/random_card/');
      console.log(response.data);
      dispatch(setCurrentCard(response.data));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getRandomCard();
  }, [getRandomCard]);

  if (!cards) {
    return (
      <div>Something went wrong</div>
    )
  }

  return (
    <>
      <div className="flex flex-col gap-8 justify-center items-center h-full">
      {currentCard && (
        <FlipCard card={currentCard}/>
      )}
      <button
        className="
          text-3xl font-serif text-yellow-600
          uppercase tracking-widest leading-loose"
        onClick={getRandomCard}
        type="button"
      >
        Наступна картка
      </button>
      <Link to={ROUTE_CHANGE_CARD}>
        Modify the card
      </Link>
    </div>
    </>
  )
}