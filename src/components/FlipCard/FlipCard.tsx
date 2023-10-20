import cn from "classnames";
import React, { useState } from "react";
import { CardFromServer } from "../../types/CardFromServer";
import "./FlipCard.scss";
import { ImageComponent } from "../ImageComponent/ImageComponent";

type Props = {
  card: CardFromServer | null;
};
export const FlipCard: React.FC<Props> = React.memo(({ card }) => {
  const [isClicked, setClicked] = useState(false);

  const onCardClick = () => {
    setClicked((prev) => !prev);
  };

  if (!card) {
    return null;
  }

  return (
    <>
      <div className="flex items-start justify-center">
        <p className="blured-image h-[113px] absolute w-full top-0 left-0 right-0 rounded-t-3xl text-3xl font-semibold text-primary flex items-center justify-center z-20">
          {card?.word}
        </p>
        <div
          className="deck-card text-black h-full w-full "
          onClick={onCardClick}
          data-testid="flip-card"
        >
          <div
            className={cn("front h-full", {
              "active-front": isClicked,
            })}
          >
            <ImageComponent
              ImageBundlePath={{
                image: card?.image,
                image_hash: card?.image_hash,
              }}
              mainImage
            >
              <img
                src={card?.image}
                alt="main"
                className="h-full rounded-3xl"
                loading="lazy"
              />
            </ImageComponent>
          </div>
          <div
            className={cn(
              "back",
              "flex",
              "flex-col",
              "items-center",
              "justify-center",
              "rounded-3xl",
              {
                "active-back": isClicked,
              }
            )}
            style={{ backgroundColor: "#333", padding: "15px" }}
            data-testid="back-side"
          >
            <div className="back-content rounded-3xl ">
              <h2 className="text-2xl text-white">{card?.description}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});