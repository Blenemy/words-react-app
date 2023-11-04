import { DeckCard } from "../../../components/DeckCard/DeckCard";
import { CardFromServer } from "../../../types/CardFromServer";

/**
 * Renders a list of cards belonging to a specific deck.
 *
 * @param {DeckCardsListProps} props - The props for the DeckCardsList component.
 * @returns A list of DeckCard components.
 */

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
