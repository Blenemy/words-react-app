import {
  ROUTE_CARD_GAME,
  ROUTE_HOME,
  ROUTE_PROFILE,
} from "../../data/constants";
import { Logo } from "../CustomLogo/Logo";
import cardLingoBlack from "../../assets/cardLingo.png";
import { HeaderLink } from "./HeaderLink";

export const HeaderLeftPiece = () => {
  return (
    <div className="header__left-piece flex gap-7 items-center">
      <ul className="flex gap-20 items-center">
        <HeaderLink route={ROUTE_HOME} title="Home" />
        <HeaderLink route={ROUTE_CARD_GAME} title="Play the Game" />
        <HeaderLink route={ROUTE_PROFILE} title="Personal Account" />
        <li>
          <Logo image={cardLingoBlack} />
        </li>
      </ul>
    </div>
  );
};
