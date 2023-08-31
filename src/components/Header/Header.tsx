import { useAppSelector } from '../../app/hooks';
import userDefault from '../../assets/user-acc.svg';
import { Link } from 'react-router-dom';
import './Header.scss';
import { ROUTE_AUTHORIZATION, ROUTE_CARD_GAME, ROUTE_HOME, ROUTE_PROFILE, ROUTE_REGISTRATION } from '../../data/constants';
import { Logo } from '../CustomLogo/Logo';

export const Header = () => {
  const { user } = useAppSelector(state => state.user);

  return (
    <header className="header col-start-1 col-span-12 mb-16">
      <div className="header__content flex items-center justify-between">
        <div className="header__left-piece flex gap-7 items-center">
          <ul className='flex gap-10'>
            <li>
              <Link className='flex items-center justify-center cursor-pointer px-2 py-1 rounded-2xl bg-secondary h-[35px] text-primary hover:bg-lilackButton hover:text-violetStroke duration-300' to={ROUTE_HOME}>Home</Link>
            </li>
            <li>
              <Link className='flex items-center justify-center cursor-pointer px-2 py-1 rounded-2xl bg-secondary h-[35px] text-primary hover:bg-lilackButton hover:text-violetStroke duration-300' to={ROUTE_CARD_GAME}>Play the Game</Link>
            </li>
            <li>
              <Link className='flex items-center justify-center cursor-pointer px-2 py-1 rounded-2xl bg-secondary h-[35px] text-primary hover:bg-lilackButton hover:text-violetStroke duration-300' to={ROUTE_PROFILE}>Personal Account</Link>
            </li>
          </ul>
        </div>
        <Logo />
        <div className="header__right-piece">
          {user ? (
            <div className="header__image">
              {user.avatar ? (
                <Link to={ROUTE_PROFILE}>
                  <img src={user.avatar} alt='UserAvatar' className="header__img rounded-[50%] object-cover h-[36px] w-[36px]" />
                </Link>
                
              ) : (
                <Link to={ROUTE_PROFILE}>
                  <img src={userDefault} alt='UserAvatar' className="header__img rounded-[50%] object-cover h-[36px] w-[36px]" />
                </Link>
              )}
            </div>
          ) : (
            <div className='flex'>
              <Link className='w-[175px] text-[20px] block h-38px bg-[#181818] text-white mr-[-50px]  text-center rounded-xl cursor-pointer hover:text-primary hover:bg-white duration-300' to={ROUTE_AUTHORIZATION}>Sign in</Link>
              <Link className='w-[175px] text-[20px] block h-38px bg-white text-[#181818] text-center rounded-xl cursor-pointer hover:bg-primary hover:text-white duration-300' to={ROUTE_REGISTRATION}>Sign up</Link>
            </div>
          )}
          
        </div>
      </div>
    </header>
  )
}

