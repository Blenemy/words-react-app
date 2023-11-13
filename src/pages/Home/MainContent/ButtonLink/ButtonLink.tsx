import { Link } from "react-router-dom";
import { ROUTE_CARD_GAME } from "../../../../constants/routes";
import { HTMLAttributes } from "react";

/**
 * Компонент ButtonLink для отображения стилизованной ссылочной кнопки.
 *
 * @param {ButtonLinkProps} props - Свойства компонента.
 * @param {string} props.text - Текст, отображаемый внутри кнопки.
 * @returns {React.ReactElement} Отрисованный компонент ButtonLink.
 */

interface ButtonLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  text: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ text, ...props }) => (
  <Link
    to={ROUTE_CARD_GAME}
    className="bg-lilackButton px-8 py-4 rounded-3xl text-[18px] w-[312px] h-[38px] flex items-center justify-center text-black border-black border-2 hover:bg-wave duration-300 font-medium"
    {...props}
  >
    {text}
  </Link>
);
