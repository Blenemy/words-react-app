import { Benefits } from "./Benefits/Benefits";
import { MainContent } from "./MainContent/MainContent";
import { HowDoesItWork } from "./HowDoesItWork/HowDoesItWork";

/**
 * Компонент HomePage для отображения основного контента домашней страницы.
 *
 * @returns {React.ReactElement} Отрисованный компонент HomePage.
 */

export const HomePage = () => {
  return (
    <>
      <MainContent />
      <Benefits />
      <HowDoesItWork />
    </>
  );
};
