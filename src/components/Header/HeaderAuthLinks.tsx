import { Link } from "react-router-dom";
import { ROUTE_AUTHORIZATION, ROUTE_REGISTRATION } from "../../data/constants";
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
        className="flex relative items-center justify-center w-[175px] text-[16px] h-[38px] bg-[#181818] text-white mr-[-30px] rounded-3xl cursor-pointer hover:text-primary z-10 hover:bg-white duration-300"
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
        className="flex relative  items-center justify-center w-[175px] text-[16px] h-[38px] bg-white text-[#181818] rounded-3xl cursor-pointer hover:bg-primary hover:text-white duration-300"
        to={ROUTE_AUTHORIZATION}
        {...props}
      >
        Log in
      </Link>
    </>
  );
};
