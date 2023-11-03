import { NavigateFunction } from "react-router-dom";
import { handleSumbitDeck } from "../../../api/handleSubmitDeck";
import { DeckFromServer } from "../../../types/DeckFromServer";
import { StackOfDecks } from "../StackOfDecks/StackOfDecks";

/**
 * DefaultDecksList component for rendering a list of default decks for users.
 *
 * @param {Props} props - The component's props.
 * @param {NavigateFunction} props.navigateFunc - Function from react-router-dom to navigate between routes.
 * @param {DeckFromServer[]} props.defaultDecks - An array of deck objects fetched from the server.
 * @param {string|undefined} props.token - The authentication token of the logged-in user.
 * @returns {React.ReactElement} The rendered DefaultDecksList component.
 */

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
        <div key={deck.id} className="basis-1/3 min-h-[500px] px-6">
          <StackOfDecks
            frontImage={deck.image}
            onDeckClick={() => handleSumbitDeck(deck.id, token, navigateFunc)}
            deckTitle={deck.title}
          />
        </div>
      ))}
    </>
  );
};
