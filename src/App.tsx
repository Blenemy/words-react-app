import { Routes, Route } from 'react-router-dom';
import { UserAccountPage } from './pages/UserAccount/UserAccountPage';
import { useAppDispatch } from './app/hooks';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from "axios";
import { setUser } from './features/userSlice';
import { BASE_URL, ROUTE_ADD_CARD, ROUTE_AUTHORIZATION, ROUTE_BOOK_CARD, ROUTE_CARD_GAME, ROUTE_EDIT_PROFILE, ROUTE_FLIP_CARD, ROUTE_HOME, ROUTE_PROFILE, ROUTE_REGISTRATION, ROUTE_USER_DECKS } from './data/constants';
import { BookCardPage } from './pages/CardsPage/BookCardPage';
import { GamePage } from './pages/GamePage/GamePage';
import { AddCard } from './pages/CardsPage/AddCard/AddCard';
import { EditForm } from './pages/UserAccount/EditFormPage';
import { HomePage } from './pages/Home/HomePage';
import { Registration } from './pages/AuthForms/Signup/RegistrationPage';
import { Authorization } from './pages/AuthForms/Login/AuthorizationPage';
import { FlipCardPage } from './pages/CardsPage/FlipCardPage';
import { ChangeCard } from './pages/CardsPage/ChangeCard/ChangeCard';
import { AddDeck } from './pages/GamePage/AddDeck/AddDeck';
import { ChangeDeck } from './pages/GamePage/ChangeDeck/ChangeDeck';
import './App.scss';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function initializeApp() {
      const token = Cookies.get('token');

      if (token) {
        try {
          const response = await axios.get(BASE_URL + '/user/profile/', {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          dispatch(setUser(response.data));
        } catch (error) {
          console.log(`Error: ${error}`);
        }
      }
    }
    
    initializeApp();

  }, [dispatch]);

  return (
    <div className="App">
      <div className="wrapper flex flex-col text-white min-h-screen bg-primary">
        <main className="grid__main">
          <Routes>
            <Route path={ROUTE_HOME} element={<HomePage />}/>
            <Route path={ROUTE_CARD_GAME} element={<GamePage />}/>
            <Route path={ROUTE_REGISTRATION} element={<Registration />}/>
            <Route path={ROUTE_AUTHORIZATION} element={<Authorization />}/>
            <Route path={ROUTE_PROFILE} element={<UserAccountPage />}/>
            <Route path={ROUTE_EDIT_PROFILE} element={<EditForm />}/>
            <Route path={ROUTE_FLIP_CARD}>
              <Route index element={<FlipCardPage />} />
                <Route
                  path=":cardId"
                  element={<ChangeCard/>}
                />
            </Route>
            <Route path={ROUTE_BOOK_CARD} element={<BookCardPage />}/>
            <Route path={ROUTE_ADD_CARD} element={<AddCard />}/>
            <Route path={ROUTE_USER_DECKS}>
              <Route index element={<AddDeck />} />
                <Route
                  path=":deckId"
                  element={<ChangeDeck/>}
                />
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
