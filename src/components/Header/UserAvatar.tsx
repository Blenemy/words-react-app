import userDefault from '../../assets/user-acc.svg';
import { Link } from 'react-router-dom';
import { ROUTE_PROFILE } from '../../data/constants';

export const UserAvatar = ({ userAvatar }: { userAvatar: string; }) => {
  const avatar = userAvatar || userDefault;

  return (
    <Link to={ROUTE_PROFILE}>
      <img src={avatar} alt='UserAvatar' className="header__img rounded-[50%] object-cover h-[36px] w-[36px]" />
    </Link>
  );
};
