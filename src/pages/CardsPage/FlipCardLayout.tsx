import defaultImage from "../../assets/question-mark-2492009_1280.webp";
import { FlipCard } from "../../components/FlipCard/FlipCard";
import { CardFromServer } from "../../types/CardFromServer";
import firstFiller from "../../assets/imageFiller.png";
import firstFillerSecond from "../../assets/imageFillerSecond.png";
import firstFillerThird from "../../assets/imageFiller3.png";
import { ImageComponent } from "../../components/ImageComponent/ImageComponent";

type Props = {
  currentCard: CardFromServer | null;
};

export const FlipCardLayout: React.FC<Props> = ({ currentCard }) => {
  const additionalImages: any = currentCard?.additional_images;

  function getImageAndHash(index: number) {
    if (additionalImages && additionalImages[index]) {
      return {
        image: additionalImages[index].image,
        hash: additionalImages[index].image_hash,
      };
    }

    const defaultImages = [
      firstFiller,
      firstFillerSecond,
      firstFillerThird,
      defaultImage,
    ];
    return {
      image: defaultImages[index] || defaultImages[defaultImages.length - 1],
      hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    };
  }

  return (
    <div className="flex gap-4 justify-center mb-8">
      <div className="flex flex-col gap-8 basis-1/3 justify-center">
        <ImageComponent imagePath={getImageAndHash(0)} />
        <ImageComponent imagePath={getImageAndHash(1)} />
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
        <ImageComponent imagePath={getImageAndHash(2)} />
        <ImageComponent imagePath={getImageAndHash(3)} />
      </div>
    </div>
  );
};
