import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import { CardFromServer } from '../../types/CardFromServer';
import './FlipCard.scss';

type Props = {
  card: CardFromServer | null,
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
      <div className='flex items-start justify-center'>
      <p className='blured-image h-[113px] absolute w-full top-0 left-0 right-0 rounded-t-3xl text-3xl font-semibold text-primary flex items-center justify-center z-20'>{card?.word}</p>
        <div 
          className="deck-card text-black h-full w-full " onClick={onCardClick}>
          <div 
            className={cn('front', {
              'active-front': isClicked,
              'no-transition': disableTransition,
            })}
          >
            <img src={card?.image} alt="" className='h-full rounded-3xl'/>
          </div>
          <div 
            className={cn('back', 'flex', 'flex-col', 'items-center', 'justify-center', 'rounded-3xl', {
              'active-back': isClicked,
              'no-transition': disableTransition,
            })}
            style={{ background: `url(${card?.image}) center / cover no-repeat` }}
          >
            <div className="back-content rounded-3xl ">
              <h2 className='text-2xl'>{card?.description}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}) 