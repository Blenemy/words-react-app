import { NavigateFunction } from "react-router-dom";
import { handleSumbitDeck } from "../../../api/handleSubmitDeck";
import { DeckFromServer } from "../../../types/DeckFromServer";
import { StackOfDecks } from "../StackOfDecks/StackOfDecks";

type Props = {
  navigateFunc: NavigateFunction;
  defaultDecks: DeckFromServer[];
  token: string | undefined;
};

export const DefaultDecksList: React.FC<Props> = ({
  defaultDecks,
  token,
  navigateFunc,
}) => {
  return (
    <>
      {defaultDecks?.map((deck) => (
        <div key={deck.id} className="basis-1/3">
          <StackOfDecks
            frontImage={deck.preview![0]}
            onDeckClick={() => handleSumbitDeck(deck.id, token, navigateFunc)}
            deckTitle={deck.title}
          />
        </div>
      ))}
    </>
  );
};
