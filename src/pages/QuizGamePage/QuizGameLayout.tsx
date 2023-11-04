import defaultImage from "../../assets/question-mark-2492009_1280.webp";
import { FlipCard } from "../../components/FlipCard/FlipCard";
import { CardFromServer } from "../../types/CardFromServer";
import firstFiller from "../../assets/imageFiller.png";
import firstFillerSecond from "../../assets/imageFillerSecond.png";
import firstFillerThird from "../../assets/imageFiller3.png";
import { ImageComponent } from "../../components/ImageComponent/ImageComponent";
import { DEFAULT_HASH_SRC } from "../../data/constants";
import { ImageBundlePath } from "../../types/ImageBundlePath";

/**
 * The FlipCardLayout component is responsible for laying out the flip card and additional
 * images on the page. It displays a word from the current card and additional images that
 * might come with the card or default filler images if no additional images are provided.
 *
 * @param {FlipCardLayoutProps} props - The props containing the current card information.
 * @returns {JSX.Element} - The component with the FlipCard and ImageComponent elements.
 */

type Props = {
  currentCard: CardFromServer | null;
};

export const FlipCardLayout: React.FC<Props> = ({ currentCard }) => {
  const additionalImages: ImageBundlePath[] | any =
    currentCard?.additional_images || [];

  function getImageAndHash(index: number) {
    if (additionalImages && additionalImages[index]) {
      return {
        image: additionalImages[index].image,
        image_hash: additionalImages[index].image_hash,
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
      image_hash: DEFAULT_HASH_SRC,
    };
  }

  return (
    <div className="flex gap-4 justify-center mb-8">
      <div className="flex flex-col gap-8 basis-1/3 justify-center">
        <ImageComponent ImageBundlePath={getImageAndHash(0)}>
          <img
            src={getImageAndHash(0).image}
            alt="description of the word"
            className="w-full h-full object-cover max-h-[230px] rounded-3xl min-h-[230px]"
          />
        </ImageComponent>
        <ImageComponent ImageBundlePath={getImageAndHash(1)}>
          <img
            src={getImageAndHash(1).image}
            alt="description of the word"
            className="w-full h-full object-cover max-h-[230px] rounded-3xl min-h-[230px]"
          />
        </ImageComponent>
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
        <ImageComponent ImageBundlePath={getImageAndHash(2)}>
          <img
            src={getImageAndHash(2).image}
            alt="description of the word"
            className="w-full h-full object-cover max-h-[230px] rounded-3xl min-h-[230px]"
          />
        </ImageComponent>
        <ImageComponent ImageBundlePath={getImageAndHash(3)}>
          <img
            src={getImageAndHash(3).image}
            alt="description of the word"
            className="w-full h-full object-cover max-h-[230px] rounded-3xl min-h-[230px]"
          />
        </ImageComponent>
      </div>
    </div>
  );
};
