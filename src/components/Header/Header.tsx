import "./Header.scss";
import { HeaderLeftPiece } from "./HeaderLeftPiece";
import { HeaderRightPiece } from "./HeaderRightPiece";

/**
 * Компонент для отображения хедера страницы.
 *
 * @returns {JSX.Element} - JSX элемент для хедера.
 */
export const Header = (): JSX.Element => {
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
