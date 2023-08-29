import React from 'react';
import image1 from '../../images/debilitate.jpg';
import image2 from '../../images/delight.jpg';
import image3 from '../../images/enervate.jpg';
import image4 from '../../images/versatile.jpg';
import image5 from '../../images/spontaneous.webp';
import image6 from '../../images/jealous.jpg';
import image7 from '../../images/Ash_Tree_-_geograph.org.uk_-_590710.jpg';
import image8 from '../../images/homepage-bolide-card.jpg';
import image9 from '../../images/6a00d8347d063969e201b7c8836685970b-800wi.jpg';

const decks = {
  hard: [image1, image2, image3],
  medium: [image4, image5, image6],
  easy: [image7, image8, image9]
};

export const StackOfDecks = ({ deck }: { deck: 'hard' | 'medium' | 'easy' }) => {
  const deckOfImages = decks[deck];

  return (
    <div className="stack flex gap-8 relative items-center justify-center mb-8">
      {deckOfImages.map((card, index) => (
        <div key={`${card}-${index}`} className='stack__card h-[250px] w-[180px] bg-slate-600'>
          <img src={card} alt="" className="test" />
        </div>
      ))}
    </div>
  )
};
