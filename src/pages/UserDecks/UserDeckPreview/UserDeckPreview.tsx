import { ImageComponent } from "../../../components/ImageComponent/ImageComponent";
import { DeckFromServer } from "../../../types/DeckFromServer";

/**
 * Represents a preview of a user's deck with functionality to play or select the deck.
 *
 * @param {UserDeckPreviewProps} props - The props for the UserDeckPreview component.
 * @returns A JSX element representing a single deck preview or null if the deck is not provided.
 */

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
