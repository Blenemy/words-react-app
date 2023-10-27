import { Link } from "react-router-dom";
import arrowDecorator from "../../assets/gamePageVector.svg";
import { HTMLAttributes } from "react";

/**
 * Компонент для хлебных крошек.
 *
 * @param {string} text - Текст для отображения в крошках.
 * @param {string} route - URL-адрес для навигации по клику.
 * @returns {JSX.Element} - Возвращает JSX элемент с тегом "a" (ссылкой).
 */

interface BreadCrumbsProps extends HTMLAttributes<HTMLAnchorElement> {
  text: string;
  route: string;
}

export const BreadCrumbs: React.FC<BreadCrumbsProps> = ({
  text,
  route,
  ...props
}): JSX.Element => {
  return (
    <Link
      className="text-primary inline-flex gap-4 items-center"
      to={route}
      {...props}
    >
      <img src={arrowDecorator} alt="arrowBack" />
      <span data-testid={"BreadCrumbsSpan"}>{text}</span>
    </Link>
  );
};
