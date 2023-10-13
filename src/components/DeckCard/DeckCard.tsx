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
        className="flex flex-col text-black hover:cursor-pointer"
        onClick={() => handleShowModal(true)}
      >
        <img
          src={card.image}
          alt="cardImage"
          className="h-[220px] w-full object-cover"
        />
        <h3>{card.word}</h3>
        <h3>{card.translation}</h3>
        <p>{card.description}</p>
      </div>
      <Modal
        showModal={showModal}
        handleShowModal={() => handleShowModal(false)}
        card={card}
      />
    </>
  );
};
