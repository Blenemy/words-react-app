import { DeckCard } from "../../../components/DeckCard/DeckCard";
import { CardFromServer } from "../../../types/CardFromServer";

/**
 * Отображает список карточек, принадлежащих конкретной колоде.
 *
 * @param {DeckCardsListProps} props - Свойства компоненты DeckCardsList.
 * @returns Список компонентов DeckCard.
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
