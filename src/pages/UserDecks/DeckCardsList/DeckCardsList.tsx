import { DeckCard } from "../../../components/DeckCard/DeckCard";
import { CardFromServer } from "../../../types/CardFromServer";

interface DeckCardsListProps {
  deckId: string | undefined;
  deckCards: CardFromServer[];
}

export const DeckCardsList: React.FC<DeckCardsListProps> = ({
  deckId,
  deckCards,
}) => {
  return (
    <>
      {deckCards.map((card) => (
        <DeckCard card={card} deckId={deckId} key={card.id} />
      ))}
    </>
  );
};
