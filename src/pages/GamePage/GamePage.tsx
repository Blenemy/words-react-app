import { ROUTE_USER_DECKS } from "../../data/constants";
import Cookies from "js-cookie";
import { StackOfDecks } from "./StackOfDecks/StackOfDecks";
import { BreadCrumbs } from "../../components/BreakCrumbs/BreadCrumbs";
import { handleSumbitDeck } from "../../api/handleSubmitDeck";
import { useGamePageDecks } from "../../hooks/useGamePageDecks";

export const GamePage = () => {
  const token = Cookies.get("token");

  console.log("gamePage render");

  const { defaultDecks, navigate } = useGamePageDecks(token);

  return (
    <div className="min-h-screen font-['Roboto_flex']">
      <div className="container mx-auto my-0">
        <div className="py-14">
          <div className="mb-8">
            <BreadCrumbs text={"My Decks"} route={ROUTE_USER_DECKS} />
          </div>
          <div className="mb-16">
            <div className="flex gap-3 items-center justify-between">
              <h2 className="basis-3/4 text-[22px] bg-primary rounded-[30px] px-12 py-2">
                Choose a deck you want to play. The harder you choose, the
                harder the words will be!
              </h2>
              <h2
                className="basis-1/4 rounded-[30px] px-12 py-3 text-[22px]"
                style={{ backgroundColor: "rgba(133, 96, 191, 0.65)" }}
              >
                Please choose a deck!
              </h2>
            </div>
          </div>
          <div className="flex gap-6 relative">
            {defaultDecks?.map((deck) => (
              <div key={deck.id} className="basis-1/3">
                <StackOfDecks
                  frontImage={deck.preview![0]}
                  onDeckClick={() => handleSumbitDeck(deck.id, token, navigate)}
                  deckTitle={deck.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
