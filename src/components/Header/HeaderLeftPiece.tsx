import {
  ROUTE_CARD_GAME,
  ROUTE_HOME,
  ROUTE_PROFILE,
} from "../../data/constants";
import cardLingoBlack from "../../assets/cardLingo.png";
import { HeaderLink } from "./HeaderLink";
import { Logo } from "../Logo/Logo";

/**
 * Компонент для отображения левой части хедера.
 *
 * @returns {JSX.Element} - JSX элемент для левой части хедера.
 */

export const HeaderLeftPiece = (): JSX.Element => {
  return (
    <div className="header__left-piece flex gap-7 items-center">
      <ul className="flex gap-20 items-center">
        <li>
          <HeaderLink route={ROUTE_HOME} title="Home" />
        </li>
        <li>
          <HeaderLink route={ROUTE_CARD_GAME} title="Play the Game" />
        </li>
        <li>
          <HeaderLink route={ROUTE_PROFILE} title="Personal Account" />
        </li>
        <li>
          <Logo image={cardLingoBlack} />
        </li>
      </ul>
    </div>
  );
};
