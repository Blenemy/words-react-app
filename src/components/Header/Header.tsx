import { useAppSelector } from '../../app/hooks';
import userDefault from '../../assets/user-acc.svg';
import { Link } from 'react-router-dom';
import './Header.scss';
import { ROUTE_AUTHORIZATION, ROUTE_CARD_GAME, ROUTE_HOME, ROUTE_PROFILE, ROUTE_REGISTRATION } from '../../data/constants';
import { Logo } from '../CustomLogo/Logo';
import cardLingoBlack from '../../images/cardLingo.png'

export const Header = () => {
  const { user } = useAppSelector(state => state.user);

  return (
    <header id='header' className="header font-semibold">
      <div className="container mx-auto my-0">
        <div className="header__content flex items-center justify-between h-[71px]">
          <div className="header__left-piece flex gap-7 items-center">
            <ul className='flex gap-20 items-center'>
              <li>
                <HeaderLink route={ROUTE_HOME} title='Home'/>
              </li>
              <li>
                <HeaderLink route={ROUTE_CARD_GAME} title='Play the Game'/>
              </li>
              <li>
                <HeaderLink route={ROUTE_PROFILE} title='Personal Account'/>
              </li>
              <li>
                <Logo image={cardLingoBlack}/>
              </li>
            </ul>
          </div>
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
                <Link className='flex items-center justify-center w-[175px] text-[20px] h-38px bg-[#181818] text-white mr-[-50px] rounded-xl cursor-pointer hover:text-primary hover:bg-white duration-300' to={ROUTE_AUTHORIZATION}>Log in</Link>
                <Link className='flex items-center justify-center w-[175px] text-[20px] h-38px bg-white text-[#181818] rounded-xl cursor-pointer hover:bg-primary hover:text-white duration-300' to={ROUTE_REGISTRATION}>Sign up</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

const HeaderLink = ({ route, title}: { route: string, title: string }) => {
  return (
    <Link 
      className='flex items-center justify-center cursor-pointer rounded-2xl bg-secondary h-[35px] text-primary hover:bg-lilackButton hover:text-violetStroke duration-300 text-[20px]' 
      to={route}
    >
      {title}
    </Link>
  )
}

