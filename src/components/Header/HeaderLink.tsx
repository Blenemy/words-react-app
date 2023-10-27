import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

/**
 * Компонент для отображения ссылки в хедере.
 *
 * @param {string} route - URL-адрес, на который ссылается ссылка.
 * @param {string} title - Текст ссылки.
 * @returns {JSX.Element} - JSX элемент для ссылки в хедере.
 */

interface HeaderLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  route: string;
  title: string;
}

export const HeaderLink: React.FC<HeaderLinkProps> = ({
  route,
  title,
  ...props
}): JSX.Element => {
  return (
    <Link
      className="flex items-center justify-center cursor-pointer rounded-2xl bg-secondary h-[35px] text-primary hover:bg-lilackButton hover:text-violetStroke duration-300 text-[20px] p-2"
      to={route}
      {...props}
    >
      {title}
    </Link>
  );
};
