import { CardFromServer } from "../../types/CardFromServer";

export const DeckCard = ({ card }: { card: CardFromServer }) => {
  return (
    <div className="flex flex-col text-black">
      <img
        src={card.image}
        alt="cardImage"
        className="h-[220px] w-full object-cover"
      />
      <h3>{card.word}</h3>
      <h3>{card.translation}</h3>
      <p>{card.description}</p>
    </div>
  );
};
