import { useAppSelector } from "../../app/hooks";
import { HeaderAuthLink } from "./HeaderAuthLinks";
import { UserAvatar } from "./UserAvatar";

/**
 * Компонент для отображения правой части хедера.
 *
 * @returns {JSX.Element} - JSX элемент для правой части хедера.
 */
export const HeaderRightPiece = (): JSX.Element => {
  const { user } = useAppSelector((state) => state.user);

  if (user) {
    return (
      <div className="header__image">
        <UserAvatar userAvatar={user.avatar} />
      </div>
    );
  }

  return (
    <div className='flex font-["Roboto_flex"] font-medium'>
      <HeaderAuthLink variant="primary" />
      <HeaderAuthLink variant="secondary" />
    </div>
  );
};
