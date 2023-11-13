import image1 from "../../../assets/createAccountImage1.png";
import image2 from "../../../assets/createAccountImage2.png";
import image3 from "../../../assets/createAccountImage3.png";
import image4 from "../../../assets/createAccountImage4.png";
import image5 from "../../../assets/createAccountImage5.png";
import image6 from "../../../assets/createAccountImage6.png";
import { MotionContainer } from "../../../components/MotionContainer/MotionContainer";
import { RenderRowOfImages } from "./RenderRowOfImages/RenderRowOfImages";
import { WelcomeMessage } from "./WelcomeMessage/WelcomeMessage";

/**
 * Компонент AuthLayout для рендеринга макета аутентификации.
 *
 * @param {Object} props - Пропсы компонента.
 * @param {React.ReactNode} props.children - Дочерние компоненты для рендеринга внутри макета.
 * @returns {React.ReactElement} Отрендеренный компонент макета аутентификации.
 *
 */

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
}): React.ReactElement => {
  return (
    <MotionContainer elementType="section" classes="text-primary py-6">
      <div className="container mx-auto my-0">
        <div className="">
          <div className="flex gap-4">
            <div className="basis-1/2 flex flex-col">
              <div className="grid mb-5 grid-cols-custom12 grid-rows-custom12 gap-5">
                <RenderRowOfImages images={[image1, image2, image3]} />
                <WelcomeMessage />
              </div>
              <div className="flex gap-5">
                <RenderRowOfImages images={[image4, image5, image6]} />
              </div>
            </div>
            <div className="basis-1/2 flex flex-col items-center justify-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </MotionContainer>
  );
};
