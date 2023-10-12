import { DeckFromServer } from "../../../types/DeckFromServer";

type Props = {
  deck: DeckFromServer | null;
  handleSumbitDeck: (deck: number) => Promise<void>;
  redirectFunc: (deckId: number) => void;
};

export const UserDeckPreview: React.FC<Props> = ({
  deck,
  handleSumbitDeck,
  redirectFunc,
}) => {
  if (!deck) {
    return null;
  }

  return (
    <div
      className="relative w-[424px] h-[220px] rounded-3xl hover:cursor-pointer"
      onClick={() => redirectFunc(deck.id)}
    >
      <img
        src={deck.preview![0]}
        alt="deck_preview"
        className="w-[424px] h-[220px] rounded-3xl object-cover"
      />
      <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black py-3 px-14 rounded-3xl blured-image font-['Roboto_flex'] text-3xl">
        {deck.title}
      </h3>
      <button
        className="absolute top-0 right-0 text-black py-2 px-7 rounded-3xl blured-image font-['Roboto_flex'] text-xl hover:text-violetStroke duration-300"
        onClick={() => handleSumbitDeck(deck.id)}
      >
        Play the deck
      </button>
    </div>
  );
};
