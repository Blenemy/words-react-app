import image1 from "../../../assets/benefits-image1.png";
import image3 from "../../../assets/benefits-image3.png";
import { BenefitsContentBlock } from "./BenefitsContentBlock";
import { BenefitsImage } from "./BenefitsImageProps";

/**
 * Компонент BenefitsContent для отображения раздела с контентом преимуществ.
 *
 * @returns {JSX.Element} Отрисованный компонент раздела с контентом преимуществ.
 */

export const BenefitsContent = (): JSX.Element => {
  return (
    <div className="font-['Roboto_flex']'">
      <div className="flex gap-6">
        <BenefitsContentBlock
          title="It`s Realistic"
          text="The card-based learning approach mirrors real-life scenarios, ensuring a genuine and practical learning experiance."
        />
        <BenefitsContentBlock
          title="It`s Simple"
          text="The app interface is simple and intuitive. Just press a few buttons, and you`re done!"
        />
        <BenefitsContentBlock
          title="Saved time"
          text="No need to spend hours finding different variations of cards.Add your card right away!"
        />
      </div>
      <div className="flex relative w-full h-full">
        <BenefitsImage src={image1} classes="absolute top-[-25px] left-0 z-1" />
        <BenefitsImage
          src={image3}
          classes="absolute top-[-25px] left-[63%] z-1"
        />
      </div>
    </div>
  );
};
