import { Routes, Route, useLocation } from "react-router-dom";
import { UserAccountPage } from "./pages/UserAccount/UserAccountPage";
import {
  ROUTE_AUTHORIZATION,
  ROUTE_CARD_GAME,
  ROUTE_FLIP_CARD,
  ROUTE_HOME,
  ROUTE_NOT_AVAILABLE,
  ROUTE_PROFILE,
  ROUTE_REGISTRATION,
  ROUTE_USER_DECKS,
} from "./data/constants";
import { GamePage } from "./pages/GamePage/GamePage";
import { HomePage } from "./pages/Home/HomePage";
import { FlipCardPage } from "./pages/QuizGamePage/QuizGamePage";
import { ChangeDeck } from "./pages/UserDecks/ChangeDeck/ChangeDeck";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { UserDecksPage } from "./pages/UserDecks/UserDecksPage";
import { GlobalLoader } from "./components/Loaders/GlobalLoader";
import { AuthorizationForm } from "./pages/AuthPage/Login/AuthorizationForm";
import { RegistrationForm } from "./pages/AuthPage/Signup/RegistrationForm";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { NotAvailable } from "./components/NotAvailable/NotAvailable";
import { useFetchUser } from "./hooks/useFetchUser";

function App() {
  const location = useLocation();
  const showHeaderAndFooter = location.pathname !== ROUTE_NOT_AVAILABLE;
  const { isLoading } = useFetchUser();

  return (
    <div className="App">
      {isLoading ? (
        <GlobalLoader />
      ) : (
        <div className="wrapper flex flex-col text-white min-h-screen  overflow-x-hidden">
          {showHeaderAndFooter && <Header />}
          <main className="grid__main min-h-screen grow">
            <Routes>
              <Route path={ROUTE_HOME} element={<HomePage />} />
              <Route path={ROUTE_CARD_GAME} element={<GamePage />} />
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
              <Route path={ROUTE_PROFILE} element={<UserAccountPage />} />
              <Route path={ROUTE_FLIP_CARD}>
                <Route index element={<FlipCardPage />} />
              </Route>
              <Route path={ROUTE_USER_DECKS}>
                <Route index element={<UserDecksPage />} />
                <Route path=":deckId" element={<ChangeDeck />} />
              </Route>
              <Route path={ROUTE_NOT_AVAILABLE} element={<NotAvailable />} />
            </Routes>
          </main>
          {showHeaderAndFooter && <Footer />}
        </div>
      )}
    </div>
  );
}

export default App;
