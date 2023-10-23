import { useAppSelector } from "../../app/hooks";
import { HeaderAuthLinks } from "./HeaderAuthLinks";
import { UserAvatar } from "./UserAvatar";

export const HeaderRightPiece = () => {
  const { user, isLoading } = useAppSelector((state) => state.user);

  if (isLoading) return null;

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
