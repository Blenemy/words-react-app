import { UserFromServer } from '../../types/UserFromServer';
import { HeaderAuthLinks } from './HeaderAuthLinks';
import { UserAvatar } from './UserAvatar';

export const HeaderRightPiece = ({ user }: { user: UserFromServer | null; }) => {
  if (user) {
    return (
      <div className="header__image">
        <UserAvatar userAvatar={user.avatar} />
      </div>
    );
  }

  return (
    <div className='flex font-["Roboto_flex"] font-medium'>
      <HeaderAuthLinks />
    </div>
  );
};
