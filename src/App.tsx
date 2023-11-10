import { Routes, Route } from "react-router-dom";
import { UserAccountPage } from "./pages/UserAccount/UserAccountPage";
import {
  ROUTE_AUTHORIZATION,
  ROUTE_CARD_GAME,
  ROUTE_FLIP_CARD,
  ROUTE_GAME_OVER,
  ROUTE_HOME,
  ROUTE_NOT_AVAILABLE,
  ROUTE_PROFILE,
  ROUTE_REGISTRATION,
  ROUTE_USER_DECKS,
} from "./constants/routes";
import { GamePage } from "./pages/GamePage/GamePage";
import { HomePage } from "./pages/Home/HomePage";
import { ChangeDeck } from "./pages/UserDecks/ChangeDeck/ChangeDeck";
import "./App.scss";
import { UserDecksPage } from "./pages/UserDecks/UserDecksPage";
import { GlobalLoader } from "./components/Loaders/GlobalLoader";
import { AuthorizationForm } from "./pages/AuthPage/Login/AuthorizationForm";
import { RegistrationForm } from "./pages/AuthPage/Signup/RegistrationForm";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { NotAvailable } from "./components/NotAvailable/NotAvailable";
import { useFetchUser } from "./hooks/useFetchUser";
import { QuizGamePage } from "./pages/QuizGamePage/QuizGamePage";
import { NotFound } from "./components/404/NotFound";
import { Layout } from "./components/Layout/Layout";
import { GameOver } from "./components/GameOver/GameOver";

function App() {
  const { isLoading } = useFetchUser();

  if (isLoading) {
    return <GlobalLoader />;
  }

  return (
    <div className="App">
      <div className="wrapper flex flex-col text-white min-h-screen  overflow-x-hidden">
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTE_HOME} element={<HomePage />} />
            <Route path={ROUTE_CARD_GAME} element={<GamePage />} />

            <Route path={ROUTE_PROFILE} element={<UserAccountPage />} />
            <Route path={ROUTE_FLIP_CARD}>
              <Route index element={<QuizGamePage />} />
            </Route>
            <Route path={ROUTE_USER_DECKS}>
              <Route index element={<UserDecksPage />} />
              <Route path=":deckId" element={<ChangeDeck />} />
            </Route>
          </Route>
          <Route path={ROUTE_NOT_AVAILABLE} element={<NotAvailable />} />
          <Route path={ROUTE_GAME_OVER} element={<GameOver />} />
          <Route
            path={ROUTE_REGISTRATION}
            element={
              <AuthPage
                FormComponent={RegistrationForm}
                googleMessage="Already Have an account?"
                route={ROUTE_AUTHORIZATION}
                link="Sign in"
              />
            }
          />
          <Route
            path={ROUTE_AUTHORIZATION}
            element={
              <AuthPage
                FormComponent={AuthorizationForm}
                googleMessage="Don`t have an account?"
                route={ROUTE_REGISTRATION}
                link="Create the account"
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
