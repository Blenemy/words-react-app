import { DeckFromServer } from "../../../types/DeckFromServer";

type Props = {
  deck: DeckFromServer | null;
};

export const UserDeckPreview: React.FC<Props> = ({ deck }) => {
  if (!deck) {
    return null;
  }

  return (
    <div className="relative w-[424px] h-[220px] rounded-3xl">
      <img
        src={deck.preview![0]}
        alt="deck_preview"
        className="w-[424px] h-[220px] rounded-3xl object-cover"
      />
      <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black py-3 px-14 bg-violetStroke rounded-3xl blured-image font-['Roboto_flex'] text-3xl">
        {deck.title}
      </h3>
    </div>
  );
};
