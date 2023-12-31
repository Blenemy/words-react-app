import image1 from "../../../assets/frontpage-list-image1.png";
import image2 from "../../../assets/frontpage-list-image2.png";
import image3 from "../../../assets/frontpage-list-image3.png";
import image4 from "../../../assets/frontpage-list-image4.png";
import { TextList } from "./TextList/TextList";
import { ImageList } from "./ImageList/ImageList";
import { ButtonLink } from "./ButtonLink/ButtonLink";
import { useUpdateHeight } from "../../../hooks/useUpdateHight";

/**
 * Компонент MainContent служит в качестве основного раздела главной страницы.
 * Он использует пользовательский хук для установки высоты и отображает
 * набор компонентов, включая заголовок, подзаголовок, ButtonLink, TextList и ImageList.
 *
 * @returns {JSX.Element} Отрисованный главный раздел контента с динамическим стилем и содержанием.
 */

export const MainContent = () => {
  const { viewportHeight } = useUpdateHeight();

  const words = ["Learn", "Words", "Online", "Using", "Cards"];
  const images = [image1, image2, image3, image4];

  return (
    <section
      className={`homepage-section-one`}
      style={{ minHeight: viewportHeight }}
    >
      <div className="container mx-auto my-0">
        <div className="heart-bg h-full pt-20 pb-14">
          <div className="homepage__header flex gap-20 font-['Roboto_flex']">
            <div className="flex flex-col basis-1/2 gap-7">
              <h1 className="homepage__title text-[48px] tracking-wide font-bold leading-tight font-['Magilio']">
                <span className="text-primary text-[96px]">
                  Learn Ensligh Language{" "}
                </span>
                <br />
                <span className="text-violetStroke font-medium font-['Roboto_flex'] text-[32px]">
                  With Fun!
                </span>
              </h1>
              <p className="homepage__subtitle text-[24px] text-primary">
                Guess the word based on the image and description.
                <br />
                Improve your vocabulary and knowledge of the English language
                every day.
              </p>
              <div className="flex gap-4">
                <ButtonLink text="Get Started" />
              </div>
            </div>
            <div className="flex flex-col basis-1/2 gap-12">
              <div className="flex self-end">
                <TextList words={words} />
              </div>
              <div className="flex items-center justify-end gap-8">
                <ImageList images={images} />
                <div className="flex flex-col gap-2 text-primary">
                  <p>+ 10,43,100</p>
                  <p>PEOPLE CONNECT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
