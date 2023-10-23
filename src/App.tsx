import { Routes, Route, useLocation } from "react-router-dom";
import { UserAccountPage } from "./pages/UserAccount/UserAccountPage";
import {
  ROUTE_AUTHORIZATION,
  ROUTE_CARD_GAME,
  ROUTE_FLIP_CARD,
  ROUTE_HOME,
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
import { Registration } from "./pages/AuthPages/Signup/RegistrationPage";
import { Authorization } from "./pages/AuthPages/Login/AuthorizationPage";
import { UserDecksPage } from "./pages/UserDecks/UserDecksPage";
import { useFetchUser } from "./hooks/useFetchUser";
import { GlobalLoader } from "./components/Loaders/GlobalLoader";

function App() {
  const location = useLocation();
  const showHeader = ![ROUTE_REGISTRATION, ROUTE_AUTHORIZATION].includes(
    location.pathname
  );

  const { isLoading } = useFetchUser();

  return (
    <div className="App">
      {isLoading && <GlobalLoader />}
      <div className="wrapper flex flex-col text-white min-h-screen">
        {showHeader && <Header />}
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
        <Footer />
      </div>
    </div>
  );
}

export default App;
