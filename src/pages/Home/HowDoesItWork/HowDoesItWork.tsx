import { HowDoesItWorkCard } from "./HowDoesItWorkCard";
import arrowWhite from "../../../assets/arrow-white.svg";
import yellowReact from "../../../assets/howitworks-react-yellow.svg";
import pinkRect from "../../../assets/howitworks-react-pink.svg";
import waveRect from "../../../assets/howitworks-react-wave.svg";
import { Review } from "./Review";

export const HowDoesItWork = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 circle-border w-[420px] p-2 pt-4 mb-12 text-primary font-['Roboto_flex']'">
        <h2 className="text-6xl font-['Magilio']">How</h2>
        <p className="font-['Roboto_flex'] w-[392px] h-[52px] bg-wave rounded-3xl flex justify-center items-center border-2 border-primary text-3xl font-medium -rotate-6 mb-5">
          Does it Work?
        </p>
        <p className="font-['Roboto_flex']">
          It works by presenting language concepts on interactive to your
          learning pace.
        </p>
      </div>
      <div className="text-primary flex gap-3 mb-8">
        <HowDoesItWorkCard
          text="Start by selecting a language or topic you want to study."
          number="01."
        />
        <HowDoesItWorkCard
          text="Review interactive cards that introduce new words, phrases and concepts."
          number="02."
        />
        <HowDoesItWorkCard
          text="Test your knowledge through quizzes and repetition to reinforce memory."
          number="03."
        />
        <HowDoesItWorkCard
          text="aThe app adapts, presenting cards based on your performance, ensuring you facus on areas that need improvement."
          number="04."
        />
      </div>
      <ImageRow />
      <Review />
    </>
  );
};

const ImageRow = () => (
  <div className="mb-10">
    <div>
      <img src={arrowWhite} alt="Descriptive alt for arrow white" />
      <div className="flex justify-between w-1/2">
        <img src={yellowReact} alt="Descriptive alt for yellow react" />
        <img src={pinkRect} alt="Descriptive alt for pink rectangle" />
        <img src={waveRect} alt="Descriptive alt for wave rectangle" />
      </div>
    </div>
  </div>
);
