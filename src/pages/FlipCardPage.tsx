import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { FlipCard } from '../components/FlipCard/FlipCard';
import { ROUTE_CHANGE_CARD } from '../constants/constants';
import { Link } from 'react-router-dom';
import { setCurrentCard } from '../features/currentCardSlice';

export const FlipCardPage = () => {
  const dispatch = useAppDispatch();
  const { currentCard } = useAppSelector(state => state.currentCard);
  const { cards } = useAppSelector(state => state.cards);

  useEffect(() => {
    if (cards) {
      const randomCard
       = cards[Math.floor(Math.random() * cards.length)];

       dispatch(setCurrentCard(randomCard));
    }
  }, [cards, dispatch]);

  if (!cards) {
    return (
      <div>Something went wrong</div>
    )
  }

  const randomCardGenerator = () => {
    const randomCard = [...cards][Math.floor(Math.random() * cards.length)];

    dispatch(setCurrentCard(randomCard));
  };

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
        onClick={randomCardGenerator}
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