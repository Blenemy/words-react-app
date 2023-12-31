/**
 * Представляет предпросмотр колоды пользователя с функциональностью игры или выбора колоды.
 *
 * @param {UserDeckPreviewProps} props - Свойства компоненты UserDeckPreview.
 * @returns Элемент JSX, представляющий один предпросмотр колоды или null, если колода не предоставлена.
 */

import { ImageComponent } from "../../../../components/ImageComponent/ImageComponent";
import { DeckFromServer } from "../../../../types/DeckFromServer";

type UserDeckPreviewProps = {
  deck: DeckFromServer | null;
  handleSumbitDeck: (deck: number) => Promise<void>;
  redirectFunc: (deckId: number) => void;
};

export const UserDeckPreview: React.FC<UserDeckPreviewProps> = ({
  deck,
  handleSumbitDeck,
  redirectFunc,
}) => {
  if (!deck) {
    return null;
  }

  return (
    <div
      className="relative basis-1/2 h-[220px] rounded-3xl hover:cursor-pointer px-3 hover:scale-105 duration-300"
      onClick={() => redirectFunc(deck.id)}
    >
      <ImageComponent
        ImageBundlePath={{ image: deck.image, image_hash: deck.image_hash }}
      >
        <img
          src={deck.image}
          alt="cardImage"
          className="h-[230px] w-full object-cover rounded-3xl"
        />
      </ImageComponent>
      <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black py-3 px-14 rounded-3xl blured-image font-['Roboto_flex'] text-3xl backdrop">
        {deck.title}
      </h3>
      <button
        className="absolute top-0 right-3 text-black py-2 px-7 rounded-3xl blured-image font-['Roboto_flex'] text-xl hover:text-violetStroke duration-300"
        onClick={(event) => {
          event.stopPropagation();
          handleSumbitDeck(deck.id);
        }}
      >
        Play the deck
      </button>
    </div>
  );
};
