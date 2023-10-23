import "./Header.scss";
import { HeaderLeftPiece } from "./HeaderLeftPiece";
import { HeaderRightPiece } from "./HeaderRightPiece";

export const Header = () => {
  return (
    <header id="header" className="header font-semibold">
      <div className="container mx-auto my-0">
        <div className="header__content flex items-center justify-between h-[71px]">
          <HeaderLeftPiece />
          <HeaderRightPiece />
        </div>
      </div>
    </header>
  );
};
