import { Link } from "react-router-dom";
import user from '../../images/user-acc.svg';
import game from '../../images/game.svg';
import home from '../../images/Home-simple-door.svg';
import userAcc from '../../images/User.svg';
import arrowDown from '../../images/arrow-down.svg';
import arrowUp from '../../images/arrow-up.svg';
import './Navigation.css';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCollapsed } from "../../features/submenuSlice";
import { ROUTE_AUTHORIZATION, ROUTE_CARD_GAME, ROUTE_HOME, ROUTE_PROFILE, ROUTE_REGISTRATION } from "../../constants/constants";

export const Navigation = () => {
  const dispatch = useAppDispatch();
  const { isCollapsed } = useAppSelector(state => state.isCollapsed)

  const toggleList = () => {
    dispatch(setCollapsed(!isCollapsed))
  }

  return (
    <>
      <div className="navigation__content px-4 py-4 font-['Inter var'] text-[18px] tracking-[-2%] text-[#f5f5f5]">
        <ul className="navigation__list flex flex-col gap-10">
          <li className="navigation__item flex flex-nowrap items-center gap-2 hover:opacity-80 cursor-pointer duration-300">
            <img src={home} width={'24px'} height={'24px'} alt="" className="navigation__img" />
            <Link to={ROUTE_HOME} className="navigation__link">Home</Link>
          </li>
          <li className="navigation__item flex flex-nowrap items-center gap-2 hover:opacity-80 cursor-pointer duration-300">
            <img src={userAcc} width={'24px'} height={'24px'} alt="" className="navigation__img" />
            <Link to={ROUTE_PROFILE} className="navigation__link">Personal Account</Link>
          </li>
          <li className="navigation__item flex flex-nowrap items-center gap-2 hover:opacity-80 cursor-pointer duration-300">
            <img src={game} width={'24px'} height={'24px'} alt="" className="navigation__img" />
            <Link to={ROUTE_CARD_GAME} className="navigation__link">Play the Game</Link>
          </li>
          <li className="navigation__item flex flex-col">
            <div className="flex flex-nowrap items-center gap-2 mb-3 cursor-pointer" onClick={toggleList}>
              <img src={user} width={'24px'} height={'24px'} alt="userImage" className="navigation__img" />
              <p className="navigation__link hover:opacity-80  duration-300">Authorization</p>
              <img src={isCollapsed ? arrowUp : arrowDown} width={'24px'} height={'24px'} alt="" className="navigation__img ml-auto" />
            </div>
            {isCollapsed && (
              <ul className="pl-12 flex flex-col gap-3">
                <li>
                  <Link 
                    to={ROUTE_AUTHORIZATION}
                    className="hover:opacity-80 cursor-pointer duration-300"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link 
                    to={ROUTE_REGISTRATION}
                    className="hover:opacity-80 cursor-pointer duration-300"
                  >
                    Sign up
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
  </>
  )
}