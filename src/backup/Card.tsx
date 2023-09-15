import { useState } from "react";
import cn from "classnames";
import appleImage from "../assets/cameo-apple-tree-1-jpg-webp.webp";
import bookImage from "../assets/book.jpg";
import catImage from "../assets/cat.jpg";
import doorImage from "../assets/door.jpg";
import eggImage from "../assets/egg.png";
import flowerImage from "../assets/flower.jpg";
import grapeImage from "../assets/red-green-grapes.webp";
import hatImage from "../assets/hat.jpg";
import islandImage from "../assets/island.jpg";
import jacketImg from "../assets/jacket.webp";
import questionMark from "../assets/question-mark-2492009_1280.webp";
import { CardType } from "../types/CardType";

const imageMap: { [key: string]: string } = {
  "cameo-apple-tree-1-jpg-webp.webp": appleImage,
  "book.jpg": bookImage,
  "cat.jpg": catImage,
  "door.jpg": doorImage,
  "flower.jpg": flowerImage,
  "red-green-grapes.webp": grapeImage,
  "hat.jpg": hatImage,
  "island.jpg": islandImage,
  "jacket.webp": jacketImg,
  "egg.png": eggImage,
};

type Props = {
  card: CardType;
};

export const Card: React.FC<Props> = ({ card }) => {
  const [isClicked, setClicked] = useState(false);

  const onCardClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <>
      <h1
        className="
        text-3xl font-serif text-yellow-600
        uppercase tracking-widest leading-loose"
      >
        {card.nameUrk}
      </h1>
      <div
        className="
          card relative w-80
          h-96 preserve-3d perspective
          group bg-customCard before:content-['']
          before:absolute before:top-[-2px] before:left-[-2px]
          before:right-[-2px] before:bottom-[-2px]
          before:bg-white before:z-[-1] after:content-['']
          after:absolute after:top-[-2px] after:left-[-2px]
          after:right-[-2px] after:bottom-[-2px]
          after:bg-white after:z-[-2]"
      >
        <div
          className={cn(
            "card__image-box",
            "relative",
            "cursor-pointer",
            "w-full",
            "h-full",
            "z-10",
            "origin-left",
            "preserve-3d",
            "bg-black",
            "duration-1000",
            {
              "-rotateY-180": isClicked,
            }
          )}
          onClick={onCardClick}
        >
          <img
            src={imageMap[card.image]}
            alt={card.description}
            className="
              card__img absolute
              top-0 left-0 w-full
              h-full object-cover
              preserve-3d backface-hidden
              rotateY-180"
          />
          <img
            src={questionMark}
            alt="Question Mark"
            className="
              card__img absolute top-0
              left-0 w-full h-full
              object-cover preserve-3d
              backface-hidden"
          />
        </div>
        <div
          className="
          card__details absolute top-0
          left-0 w-full h-full
          p-5 flex justify-center
          items-center font-bold bg-customCard"
        >
          <div
            className="
            card__content flex flex-col
            justify-center items-center text-center
            gap-4 leading-6"
          >
            <h2
              className="
              card__title text-3xl text-gray-300"
            >
              {card.nameEng}
            </h2>
            <p className="card__description text-red-400">{card.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
