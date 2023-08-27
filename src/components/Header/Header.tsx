import burgerIconOpen from '../../assets/menu_open.svg';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import burgerIcon from '../../assets/menu.svg';
import userDefault from '../../assets/user-acc.svg';
import { setOpened } from '../../features/burgerSlice';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const dispatch = useAppDispatch();
  const { opened } = useAppSelector(state => state.burger);
  const { user } = useAppSelector(state => state.user);
  const location = useLocation();

  return (
    <header className="header bg-[#11121F] col-start-1 col-span-12">
      <div className="header__content flex items-center justify-between px-7 py-4 border-b-black border-b-2">
        <div className="header__left-piece flex gap-7 items-center">
          <div 
            className="header__burger cursor-pointer"
            onClick={() => dispatch(setOpened(!opened))}
          >
            <img 
              src={opened ? burgerIconOpen : burgerIcon} 
              alt='burgerIcon' 
              width={'32px'} 
              height={'32px'} 
              className="header__burger-img" />
          </div>
          <div className="header__bread-crumbs"
        >
          {location.pathname.slice(1)}
        </div>
        </div>
        <div className="header__right-piece">
          <div className="header__image">
            {user?.avatar ? (
              <img src={user.avatar} alt='UserAvatar' className="header__img rounded-[50%] object-cover h-[36px] w-[36px]" />
            ) : (
              <img src={userDefault} alt='UserAvatar' className="header__img rounded-[50%] object-cover h-[36px] w-[36px]" />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}