import { useState } from "react";
import { CardFromServer } from "../../types/CardFromServer";
import { Modal } from "../Modal/Modal";

export const DeckCard = ({ card }: { card: CardFromServer }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (payload: boolean) => {
    setShowModal(payload);
  };

  return (
    <>
      <div
        className="flex flex-col text-black hover:cursor-pointer relative"
        onClick={() => handleShowModal(true)}
      >
        <img
          src={card.image}
          alt="cardImage"
          className="h-[220px] w-full object-cover"
        />
        <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black py-3 px-14 rounded-3xl blured-image font-['Roboto_flex'] text-3xl">
          {card.word}
        </h3>
      </div>
      <Modal
        showModal={showModal}
        handleShowModal={() => handleShowModal(false)}
        card={card}
      />
    </>
  );
};
