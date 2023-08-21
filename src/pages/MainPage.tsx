import { useEffect, useState } from 'react';
import { CardType } from '../types/CardType';
import cardsData from '../api/data.json';
import { Card } from '../Card';
// import { DeckCard } from '../components/DeckCard/DeckCard';

export const MainPage = () => {
  const [data, setData] = useState<CardType []>();
  const [currentCard, setCurrentCard] = useState<CardType>();

  useEffect(() => {
    setData(cardsData.words);

    if (cardsData.words && cardsData.words.length) {
      const randomCard
       = cardsData.words[Math.floor(Math.random() * cardsData.words.length)];

      setCurrentCard(randomCard);
    }
  }, []);

  if (!data) {
    return (
      <div>Something went wrong</div>
    );
  }

  const randomCardGenerator = () => {
    const randomCard = [...data][Math.floor(Math.random() * data.length)];

    setCurrentCard(randomCard);
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center h-full">
      {currentCard && (
        <Card
          key={currentCard?.nameEng}
          card={currentCard}
        />
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
    // <section>
    //   <DeckCard />
    // </section>
  );
};
