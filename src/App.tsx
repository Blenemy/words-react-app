import { Routes, Route } from 'react-router-dom';
import { Registration } from './components/AuthForm/Registration';
import { UserAccountPage } from './pages/UserAccountPage';
import { HomePage } from './pages/HomePage';
import { Navigation } from './components/Navigation/Navigation';
import { Header } from './components/Header/Header';
import { Authorization } from './components/AuthForm/Authorization';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { EditForm } from './components/EditForm/EditForm';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from "axios";
import { setUser } from './features/userSlice';
import { setCards } from './features/cardsSlice';
import { BASE_URL, ROUTE_ADD_CARD, ROUTE_AUTHORIZATION, ROUTE_BOOK_CARD, ROUTE_CARD_GAME, ROUTE_CHANGE_CARD, ROUTE_EDIT_PROFILE, ROUTE_FLIP_CARD, ROUTE_HOME, ROUTE_PROFILE, ROUTE_REGISTRATION } from './constants/constants';
import { FlipCardPage } from './pages/FlipCardPage';
import { BookCardPage } from './pages/BookCardPage';
import { GamePage } from './pages/GamePage';
import { AddCard } from './components/AddCard/AddCard';
import { ChangeCard } from './components/ChangeCard/ChangeCard';

function App() {
  const { opened } = useAppSelector(state => state.burger);
  const { cards } = useAppSelector(state => state.cards);
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

  useEffect(() => {
    async function getCards() {
      try {
        const response = await axios.get(`${BASE_URL}/study/cards/`);

        dispatch(setCards(response.data));
        
      } catch (error) {
        
      }
    }
    getCards();
  }, [dispatch]);


  console.log(cards);
    
  return (
    <div className="App">
      <div className="wrapper flex flex-col text-white min-h-screen bg-[#060714]">
        <Header />
        <div className="grid h-full grow grid-cols-[250px_1fr]">
          <nav 
            className={cn('grid__nav', 'h-full', 'bg-[#11121F]', 'navigation', 'col-start-1', 'duration-500', {
              '-translate-x-full': !opened
            })}
          >
            <Navigation />
          </nav>
          <main className="grid__main col-start-2 grow">
            <Routes>
              <Route path={ROUTE_HOME} element={<HomePage />}/>
              <Route path={ROUTE_CARD_GAME} element={<GamePage />}/>
              <Route path={ROUTE_REGISTRATION} element={<Registration />}/>
              <Route path={ROUTE_AUTHORIZATION} element={<Authorization />}/>
              <Route path={ROUTE_PROFILE} element={<UserAccountPage />}/>
              <Route path={ROUTE_EDIT_PROFILE} element={<EditForm />}/>
              <Route path={ROUTE_FLIP_CARD} element={<FlipCardPage />}/>
              <Route path={ROUTE_BOOK_CARD} element={<BookCardPage />}/>
              <Route path={ROUTE_ADD_CARD} element={<AddCard />}/>
              <Route path={ROUTE_CHANGE_CARD} element={<ChangeCard />}/>
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
