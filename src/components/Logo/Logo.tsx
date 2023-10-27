import { ReactComponent as LogoPink } from "../../assets/pink-logo-animated-rectangle.svg";
import { ReactComponent as LogoViolet } from "../../assets/violet-logo-animated-rectangle.svg";
import { ReactComponent as LogoYellow } from "../../assets/yellow-logo-animated-rectangle.svg";

/**
 * Компонент логотипа с анимированными цветами.
 *
 * @param {string} image - Путь к изображению логотипа.
 * @returns {JSX.Element} - JSX элемент с логотипом и анимированными цветами.
 */
interface LogoProps {
  image: string;
}
export const Logo: React.FC<LogoProps> = ({ image }): JSX.Element => {
  return (
    <div className="relative h-6">
      <div>
        <img src={image} alt="HomePageLogo" className="relative z-10" />
      </div>
      <div className="changing-colors">
        <div className="svg-container-one">
          <LogoPink className="absolute right-[-10px] top-[-5px] red" />
        </div>
        <div className="svg-container-two">
          <LogoViolet className="absolute top-[-5px] left-0 z-[1]" />
        </div>
        <div className="svg-container-three">
          <LogoYellow className="absolute bottom-[-10px] left-[25%]" />
        </div>
      </div>
    </div>
  );
};
