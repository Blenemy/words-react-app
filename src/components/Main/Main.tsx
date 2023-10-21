import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/Home/HomePage";
import {
  ROUTE_AUTHORIZATION,
  ROUTE_CARD_GAME,
  ROUTE_FLIP_CARD,
  ROUTE_HOME,
  ROUTE_PROFILE,
  ROUTE_REGISTRATION,
  ROUTE_USER_DECKS,
} from "../../data/constants";
import { GamePage } from "../../pages/GamePage/GamePage";
import { Registration } from "../../pages/AuthPages/Signup/RegistrationPage";
import { Authorization } from "../../pages/AuthPages/Login/AuthorizationPage";
import { UserAccountPage } from "../../pages/UserAccount/UserAccountPage";
import { FlipCardPage } from "../../pages/CardsPage/FlipCardPage";
import { UserDecksPage } from "../../pages/UserDecks/UserDecksPage";
import { ChangeDeck } from "../../pages/UserDecks/ChangeDeck/ChangeDeck";
import { useGetUser } from "../../hooks/useGetUser";

export const Main = () => {
  useGetUser();

  return (
    <main className="grid__main min-h-screen grow">
      <Routes>
        <Route path={ROUTE_HOME} element={<HomePage />} />
        <Route path={ROUTE_CARD_GAME} element={<GamePage />} />
        <Route path={ROUTE_REGISTRATION} element={<Registration />} />
        <Route path={ROUTE_AUTHORIZATION} element={<Authorization />} />
        <Route path={ROUTE_PROFILE} element={<UserAccountPage />} />
        <Route path={ROUTE_FLIP_CARD}>
          <Route index element={<FlipCardPage />} />
        </Route>
        <Route path={ROUTE_USER_DECKS}>
          <Route index element={<UserDecksPage />} />
          <Route path=":deckId" element={<ChangeDeck />} />
        </Route>
      </Routes>
    </main>
  );
};
