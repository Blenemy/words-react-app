import { Benefits } from "./Benefits/Benefits";
import { MainContent } from "./MainContent/MainContent";
import { HowDoesItWork } from "./HowDoesItWork/HowDoesItWork";

/**
 * HomePage component for rendering the main content of the home page.
 *
 * @returns {React.ReactElement} The rendered HomePage component.
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
