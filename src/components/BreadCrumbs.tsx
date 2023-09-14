import { Link } from "react-router-dom";
import arrowDecorator from "../images/gamePageVector.svg";
import { ROUTE_USER_DECKS } from "../data/constants";

export const BreadCrumbs = () => {
  return (
    <Link
      className="text-primary inline-flex gap-4 items-center"
      to={ROUTE_USER_DECKS}
    >
      <img src={arrowDecorator} alt="arrowBack" />
      <span>My Decks</span>
    </Link>
  );
};
