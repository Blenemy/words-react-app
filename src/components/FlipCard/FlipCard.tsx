import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import { CardFromServer } from '../../types/CardFromServer';
import './FlipCard.scss';

type Props = {
  card: CardFromServer
}
export const FlipCard: React.FC<Props> = React.memo(({ card }) => {
  const [isClicked, setClicked] = useState(false);
  const [disableTransition, setDisableTransition] = useState(false);

  useEffect(() => {
    setDisableTransition(true);
    setClicked(false);
  }, [card]);

  const onCardClick = () => {
    setDisableTransition(false);
    setClicked(prev => !prev);
  };

  return (
    <>
      <h1 className="
          text-3xl font-serif text-yellow-600
          uppercase tracking-widest leading-loose"
        >
          {card.translation}
      </h1>
      <div className='flex items-start justify-center h-96'>
        <div 
          className="deck-card middle text-black h-96 w-80" onClick={onCardClick}>
          <div 
            className={cn('front', {
              'active-front': isClicked,
              'no-transition': disableTransition,
            })}
          >
            <img src={card?.image} alt="" className='h-full'/>
          </div>
          <div 
            className={cn('back', {
              'active-back': isClicked,
              'no-transition': disableTransition,
            })}
          >
            <div className="back-content middle">
              <h2>{card?.word}</h2>
              <span>{card?.translation}</span>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}) 