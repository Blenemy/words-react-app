import { HowDoesItWorkCard } from "./HowDoesItWorkCard";
import { Review } from "./Review";
import { ImageRow } from "./ImageRow";

/**
 * HowDoesItWork component for rendering the section explaining how it works.
 *
 * @returns {React.ReactElement} The rendered how it works section component.
 */

export const HowDoesItWork = (): React.ReactElement => {
  return (
    <section className="homepage-section-three bg-white relative">
      <div className="container mx-auto my-0">
        <div className="px-12 pb-36">
          <div className="flex flex-col items-center justify-center gap-6 relative top-[-50px] left-1/2 -translate-x-1/2 w-[420px] p-2 pt-4 mb-12 text-primary font-['Roboto_flex']' z-[101] bg-white rounded-t-[84px]">
            <h2 className="text-6xl font-['Magilio']">How</h2>
            <p className="font-['Roboto_flex'] w-[392px] h-[52px] bg-wave rounded-3xl flex justify-center items-center border-2 border-primary text-3xl font-medium -rotate-6 mb-5">
              Does it Work?
            </p>
            <p className="font-['Roboto_flex']">
              Learn new words effectively through interactive cards and images
              that tailor to your learning pace.
            </p>
          </div>
          <div className="text-primary flex gap-3 mb-8">
            <HowDoesItWorkCard
              text="Start by selecting a deck you'd like to play. You can choose one from default decks or add your own one. Note that a deck must contain a minimum of 3 cards to be playable."
              number="01."
            />
            <HowDoesItWorkCard
              text="Review interactive cards that feature 5 images describing a word. During the game, you can tap on the main image to view the word's English description."
              number="02."
            />
            <HowDoesItWorkCard
              text="Test your knowledge through quizzes and repetition to reinforce memory. Track your progress with charts in your personal dashboard."
              number="03."
            />
            <HowDoesItWorkCard
              text="The app adapts to your learning needs by presenting cards based on your performance. If you guess a word incorrectly, the app will bring it back for review. Additionally, if a word is no longer new to you, it will appear less frequently, ensuring you focus on areas that need improvement."
              number="04."
            />
          </div>
          <ImageRow />
          <Review />
        </div>
      </div>
    </section>
  );
};
