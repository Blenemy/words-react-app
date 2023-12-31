import { useState } from "react";
import { CardFromServer } from "../../types/CardFromServer";
import { ImageComponent } from "../ImageComponent/ImageComponent";
import { UpdateCardWindow } from "../../pages/UserDecks/UserCardsPage/AddCard/UpdateUserCard";

/**
 * Компонент для отображения карточки колоды.
 *
 * @param {CardFromServer} card - Объект карточки из сервера.
 * @returns {JSX.Element} - JSX элемент для отображения карточки колоды.
 */
interface DeckCardProps {
  card: CardFromServer;
  deckId: string | undefined;
}

export const DeckCard: React.FC<DeckCardProps> = ({
  card,
  deckId,
}): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (payload: boolean) => {
    setShowModal(payload);
  };

  return (
    <div className="basis-1/3 px-2">
      <div
        className="flex flex-col text-black hover:cursor-pointer relative"
        onClick={() => handleShowModal(true)}
      >
        <ImageComponent
          ImageBundlePath={{ image: card.image, image_hash: card.image_hash }}
        >
          <img
            src={card.image}
            alt="cardImage"
            className="h-[230px] w-full object-cover rounded-3xl"
          />
        </ImageComponent>
        <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black py-3 px-14 rounded-3xl blured-image font-['Roboto_flex'] text-3xl">
          {card.word}
        </h3>
      </div>
      <UpdateCardWindow
        showModal={showModal}
        handleShowModal={() => handleShowModal(false)}
        card={card}
        deckId={deckId}
      />
    </div>
  );
};
