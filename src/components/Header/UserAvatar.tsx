import userDefault from "../../assets/user-acc.svg";
import { Link } from "react-router-dom";
import { ROUTE_PROFILE } from "../../data/constants";
import { HTMLAttributes } from "react";

/**
 * Компонент для отображения аватара пользователя.
 *
 * @param {string} userAvatar - URL-адрес изображения аватара пользователя.
 * @returns {JSX.Element} - JSX элемент для аватара пользователя.
 */
interface UserAvatarProps extends HTMLAttributes<HTMLAnchorElement> {
  userAvatar: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  userAvatar,
  ...props
}): JSX.Element => {
  const avatar = userAvatar || userDefault;

  return (
    <Link to={ROUTE_PROFILE} {...props}>
      <img
        src={avatar}
        alt="UserAvatar"
        className="header__img rounded-[50%] object-cover h-[36px] w-[36px]"
      />
    </Link>
  );
};
