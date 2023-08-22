import { useEffect, useState } from 'react';
import { useAppSelector } from '../app/hooks';
import { CardFromServer } from '../types/CardFromServer';
import { FlipCard } from '../components/FlipCard/FlipCard';

export const FlipCardPage = () => {
  const [currentCard, setCurrentCard] = useState<CardFromServer>();
  const { cards } = useAppSelector(state => state.cards);

  useEffect(() => {

    if (cards) {
      const randomCard
       = cards[Math.floor(Math.random() * cards.length)];

      setCurrentCard(randomCard);
    }
  }, [cards]);

  if (!cards) {
    return (
      <div>Something went wrong</div>
    )
  }

  const randomCardGenerator = () => {
    const randomCard = [...cards][Math.floor(Math.random() * cards.length)];

    setCurrentCard(randomCard);
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
    </div>
    </>
  )
}