import { Link } from "react-router-dom";
import {
  ROUTE_AUTHORIZATION,
  ROUTE_REGISTRATION,
} from "../../constants/routes";
import { HTMLAttributes } from "react";

/**
 * Компонент для отображения ссылки аутентификации в хедере.
 *
 * @param {string} variant - Вариант ссылки: "primary" (Sign up) или "secondary" (Log in).
 * @returns {JSX.Element} - JSX элемент для ссылки аутентификации.
 */

interface HeaderAuthLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  variant: "primary" | "secondary";
}

export const HeaderAuthLink: React.FC<HeaderAuthLinkProps> = ({
  variant,
  ...props
}): JSX.Element => {
  if (variant === "primary") {
    return (
      <Link
        className="flex relative items-center justify-center w-[175px] text-[16px] h-[38px] bg-[#285192] mr-[-30px] rounded-3xl cursor-pointe z-10 duration-300 text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-[#3061af] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#3061af] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#3061af] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        to={ROUTE_REGISTRATION}
        {...props}
      >
        Sign up
      </Link>
    );
  }
  return (
    <>
      <Link
        className="flex relative  items-center justify-center w-[175px] text-[16px] h-[38px] bg-[#54B4D3] text-white rounded-3xl cursor-pointer duration-300 shadow-[0_4px_9px_-4px_#cbcbcb] hover:bg-[#34a4ca] focus:bg-[#d9e4f3] focus:outline-none focus:ring-0 active:bg-[#34a4ca] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        to={ROUTE_AUTHORIZATION}
        {...props}
      >
        Log in
      </Link>
    </>
  );
};
