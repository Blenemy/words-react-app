import { Routes, Route, useLocation } from "react-router-dom";
import { UserAccountPage } from "./pages/UserAccount/UserAccountPage";
import { useAppDispatch } from "./app/hooks";
import Cookies from "js-cookie";
import { setUser } from "./features/userSlice";
import {
  ROUTE_AUTHORIZATION,
  ROUTE_BOOK_CARD,
  ROUTE_CARD_GAME,
  ROUTE_FLIP_CARD,
  ROUTE_HOME,
  ROUTE_PROFILE,
  ROUTE_REGISTRATION,
  ROUTE_USER_DECKS,
} from "./data/constants";
import { BookCardPage } from "./backup/BookCardPage";
import { GamePage } from "./pages/GamePage/GamePage";
import { HomePage } from "./pages/Home/HomePage";
import { FlipCardPage } from "./pages/CardsPage/FlipCardPage";
import { ChangeDeck } from "./pages/UserDecks/ChangeDeck/ChangeDeck";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { useQuery } from "@tanstack/react-query";
import { Registration } from "./pages/AuthPages/Signup/RegistrationPage";
import { Authorization } from "./pages/AuthPages/Login/AuthorizationPage";
import { UserDecksPage } from "./pages/UserDecks/UserDecksPage";
import { getuser } from "./api/getUser";

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const showHeader = ![ROUTE_REGISTRATION, ROUTE_AUTHORIZATION].includes(
    location.pathname
  );
  const token = Cookies.get("token");

  useQuery({
    queryFn: () => getuser(token),
    queryKey: ["user"],
    onSuccess: (payload) => {
      dispatch(setUser(payload));
    },
  });

  return (
    <div className="App">
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
            <Route path={ROUTE_BOOK_CARD} element={<BookCardPage />} />
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