import burgerIconOpen from '../../images/menu_open.svg';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import burgerIcon from '../../images/menu.svg';
import userImageDefault from '../../images/user-acc.svg'
import { setOpened } from '../../features/burgerSlice';

export const Header = () => {
  const dispatch = useAppDispatch();
  const { opened } = useAppSelector(state => state.burger);
  const { user } = useAppSelector(state => state.user);

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
          Dashboard
        </div>
        </div>
        <div className="header__right-piece">
          <div className="header__image">
            {user ? (
              <img src={user.avatar} alt='UserAvatat' className="header__img rounded-[50%] object-cover h-[36px] w-[36px]" />
            ) : (
              <img src={userImageDefault} alt='UserAvatat' className="header__img rounded-[50%] object-cover h-[36px] w-[36px]" />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}