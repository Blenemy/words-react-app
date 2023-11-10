import { Benefits } from "./Benefits/Benefits";
import { MainContent } from "./MainContent/MainContent";
import { HowDoesItWork } from "./HowDoesItWork/HowDoesItWork";
import { MotionContainer } from "../../components/MotionContainer/MotionContainer";

/**
 * Компонент HomePage для отображения основного контента домашней страницы.
 *
 * @returns {React.ReactElement} Отрисованный компонент HomePage.
 */

export const HomePage = () => {
  return (
    <MotionContainer>
      <MainContent />
      <Benefits />
      <HowDoesItWork />
    </MotionContainer>
  );
};
