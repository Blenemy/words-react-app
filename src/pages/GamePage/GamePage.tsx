import { MotionContainer } from "../../components/MotionContainer/MotionContainer";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar";
import { ROUTE_USER_DECKS } from "../../constants/routes";
import { useGamePageDecks } from "../../hooks/useGamePageDecks";
import { DefaultDecksList } from "./DefaultDecksList/DefaultDecksList";

/**
 * Компонент GamePage для рендеринга главной страницы игры, позволяющий пользователям выбирать и играть с колодами.
 *
 * @returns {React.ReactElement} Отрендеренный компонент GamePage.
 */

export const GamePage = () => {
  const { defaultDecks, navigate, token } = useGamePageDecks();

  return (
    <MotionContainer classes="min-h-screen font-['Roboto_flex']">
      <div className="container mx-auto my-0">
        <div className="py-14">
          <div className="mb-8">
            <NavigationBar
              crumbs={[{ text: "Go to my decks", path: ROUTE_USER_DECKS }]}
              current="Game Page"
            />
          </div>
          <div className="mb-16">
            <div className="flex gap-3 items-center justify-between">
              <h2 className="basis-3/4 text-[22px] bg-primary rounded-[30px] px-12 py-2">
                Choose a deck you want to play. The harder you choose, the
                harder the words will be!
              </h2>
              <h2 className="basis-1/4 rounded-[30px] px-12 py-3 text-[22px] bg-[#8560BFA6]">
                Please choose a deck!
              </h2>
            </div>
          </div>
          <div className="flex relative flex-wrap mx-[-24px]">
            <DefaultDecksList
              defaultDecks={defaultDecks}
              navigateFunc={navigate}
              token={token}
            />
          </div>
        </div>
      </div>
    </MotionContainer>
  );
};
