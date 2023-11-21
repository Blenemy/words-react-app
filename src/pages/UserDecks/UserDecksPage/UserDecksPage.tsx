import Cookies from "js-cookie";
import { GlobalLoader } from "../../../components/Loaders/GlobalLoader";
import { useGetUserDecks } from "../../../hooks/useGetUserDecks";
import { NavigationBar } from "../../../components/NavigationBar/NavigationBar";
import { ROUTE_CARD_GAME, ROUTE_HOME } from "../../../constants/routes";
import { UserDeckList } from "./UserDeckList/UserDeckList";
import { NoResluts } from "../../../components/NoResults/NoResluts";
import { AddDeck } from "./AddDeck/AddDeck";
import { MotionContainer } from "../../../components/MotionContainer/MotionContainer";

/**
 * Компонент UserDecksPage для отображения колод пользователя и добавления новых.
 *
 * @returns Компонент UserDecksPage.
 */

export const UserDecksPage = () => {
  const token = Cookies.get("token");

  const { userDecks, isLoading } = useGetUserDecks(token);

  if (isLoading) {
    return <GlobalLoader />;
  }

  return (
    <MotionContainer classes="p-14">
      <div className="mb-7">
        <NavigationBar
          crumbs={[
            { text: "Home", path: ROUTE_HOME },
            { text: "Back to game page", path: ROUTE_CARD_GAME },
          ]}
          current="Your decks"
        />
      </div>

      <div className="flex gap-32">
        <div className="flex flex-wrap mx-[-24px] gap-y-6 basis-2/3">
          {!!userDecks?.length ? (
            <UserDeckList decks={userDecks} />
          ) : (
            <NoResluts highlightedText="a new custom deck" />
          )}
        </div>
        <AddDeck />
      </div>
    </MotionContainer>
  );
};
