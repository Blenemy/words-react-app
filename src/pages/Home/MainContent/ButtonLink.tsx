import { Link } from "react-router-dom";
import { ROUTE_CARD_GAME } from "../../../data/constants";

export const ButtonLink = ({ text }: { text: string }) => (
  <Link
    to={ROUTE_CARD_GAME}
    className="bg-lilackButton px-8 py-4 rounded-3xl text-[18px] w-[312px] h-[38px] flex items-center justify-center text-black border-black border-2 hover:bg-wave duration-300 font-medium"
  >
    {text}
  </Link>
);
