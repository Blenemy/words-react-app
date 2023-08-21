import { useState } from 'react';
// import bookImage from '../../images/book.jpg';
import './DeckCard.scss';
import cn from 'classnames';
import { useAppSelector } from '../../app/hooks';
// import catImage from './images/cat.jpg';
// import flowerImage from './images/flower.jpg';

export const DeckCard = () => {
  const [isActive, setActive] = useState<boolean>(false);
  const { cards } = useAppSelector(state => state.cards);

  if (!cards) {
    return;
  }

  const card = cards[5];

  const handleOnClick = () => {
    setActive(prev => !prev);
  }

  return (
    <div className='flex items-start justify-center'>
      <div className="deck-card middle text-black h-96 w-80" onClick={handleOnClick}>
      <div 
        className={cn('front', {
          'active-front': isActive,
        })}
      >
        <img src={card.image} alt="" className='h-full'/>
      </div>
      <div 
        className={cn('back', {
          'active-back': isActive,
        })}
      >
        <div className="back-content middle">
          <h2>{card.word}</h2>
          <span>{card.translation}</span>
        </div>
      </div>
    </div>
  </div>
  )
}