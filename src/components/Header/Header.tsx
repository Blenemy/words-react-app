import { useAppSelector } from '../../app/hooks';
import './Header.scss';
import { HeaderLeftPiece } from './HeaderLeftPiece';
import { HeaderRightPiece } from './HeaderRightPiece';

export const Header = () => {
  const { user } = useAppSelector(state => state.user);

  return (
    <header id='header' className="header font-semibold">
      <div className="container mx-auto my-0">
        <div className="header__content flex items-center justify-between h-[71px]">
          <HeaderLeftPiece />
          <HeaderRightPiece user={user} />
        </div>
      </div>
    </header>
  );
};
