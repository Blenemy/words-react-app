import Cookies from "js-cookie";
import { ROUTE_CARD_GAME, ROUTE_HOME } from "../../constants/routes";
import { useGetUserDecks } from "../../hooks/useGetUserDecks";
import { UserDeckList } from "./UserDeckList/UserDeckList";
import { NoResluts } from "../../components/NoResults/NoResluts";
import { GlobalLoader } from "../../components/Loaders/GlobalLoader";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { AddDeck } from "./ChangeDeck/AddDeck";

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
    <div className="p-14">
      <div className="mb-7">
        <Breadcrumbs
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
    </div>
  );
};
