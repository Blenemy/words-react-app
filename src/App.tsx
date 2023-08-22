import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
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
import { ROUTE_AUTHORIZATION, ROUTE_CARD_GAME, ROUTE_EDIT_PROFILE, ROUTE_HOME, ROUTE_PROFILE, ROUTE_REGISTRATION } from './constants/constants';

function App() {
  const { opened } = useAppSelector(state => state.burger);
  const { cards } = useAppSelector(state => state.cards);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function initializeApp() {
      const token = Cookies.get('token');

      if (token) {
        try {
          const response = await axios.get('http://159.65.119.170:8000/user/profile/', {
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
        const response = await axios.get('http://159.65.119.170:8000/study/cards/');

        dispatch(setCards(response.data));
        
      } catch (error) {
        
      }
    }
    getCards();
  }, [dispatch]);

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
              <Route path={ROUTE_CARD_GAME} element={<MainPage />} />
              <Route path={ROUTE_REGISTRATION} element={<Registration />}/>
              <Route path={ROUTE_AUTHORIZATION} element={<Authorization />}/>
              <Route path={ROUTE_PROFILE} element={<UserAccountPage />}/>
              <Route path={ROUTE_EDIT_PROFILE} element={<EditForm />}/>
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
