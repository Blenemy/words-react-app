import "./HomePage.scss";
import { Benefits } from "./Benefits/Benefits";
import { MainContent } from "./MainContent/MainContent";
import { HowDoesItWork } from "./HowDoesItWork/HowDoesItWork";

export const HomePage = () => {
  return (
    <>
      <MainContent />
      <Benefits />
      <HowDoesItWork />
    </>
  );
};
