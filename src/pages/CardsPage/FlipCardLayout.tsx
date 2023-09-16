import defaultImage from "../../assets/question-mark-2492009_1280.webp";
import { FlipCard } from "../../components/FlipCard/FlipCard";
import { CardFromServer } from "../../types/CardFromServer";
import firstFiller from "../../assets/imageFiller.png";
import firstFillerSecond from "../../assets/imageFillerSecond.png";
import firstFillerThird from "../../assets/imageFiller3.png";

type Props = {
  currentCard: CardFromServer | null;
};

export const FlipCardLayout: React.FC<Props> = ({ currentCard }) => {
  const additionalImages = currentCard?.additional_images;

  function properImage(index: number) {
    if (additionalImages && additionalImages[index]) {
      return additionalImages[index];
    }

    switch (index) {
      case 0:
        return firstFiller;
      case 1:
        return firstFillerSecond;
      case 2:
        return firstFillerThird;
      default:
        return defaultImage;
    }
  }

  return (
    <div className="flex gap-4 justify-center mb-8">
      <div className="flex flex-col gap-8 basis-1/3 justify-center">
        <div>
          <img
            src={properImage(0)}
            alt=""
            className="_img max-h-[230px] rounded-3xl"
          />
        </div>
        <div>
          <img
            src={properImage(1)}
            alt=""
            className="_img max-h-[230px] rounded-3xl"
          />
        </div>
      </div>
      <div className="flex-basis-1/3 flex-grow -mt-5">
        <div className="flex flex-col h-full relative">
          <p className="blured-image h-[113px] absolute w-full top-0 left-0 right-0 rounded-t-3xl text-3xl font-semibold text-primary flex items-center justify-center">
            {currentCard?.word}
          </p>
          <FlipCard card={currentCard} />
        </div>
      </div>
      <div className="flex flex-col gap-8 basis-1/3 justify-center">
        <div>
          <img
            src={properImage(2)}
            alt=""
            className="_img max-h-[230px] rounded-3xl"
          />
        </div>
        <div>
          <img
            src={properImage(3)}
            alt=""
            className="_img max-h-[230px] rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};
