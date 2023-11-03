import { Link } from "react-router-dom";
import { ROUTE_CARD_GAME } from "../../../data/constants";
import { HTMLAttributes } from "react";

/**
 * ButtonLink component for rendering a styled link button.
 *
 * @param {ButtonLinkProps} props - The component's props.
 * @param {string} props.text - The text to display inside the button.
 * @returns {React.ReactElement} The rendered ButtonLink component.
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
