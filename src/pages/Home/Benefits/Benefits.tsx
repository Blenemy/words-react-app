import image2 from "../../../assets/benefits-image2.png";
import image4 from "../../../assets/benefits-image4.png";
import { BenefitsCarousel } from "./BenefitsCarousel";
import { BenefitsContent } from "./BenefitsContent";
import { BenefitsImage } from "./BenefitsImageProps";

/**
 * Benefits component for rendering a section with benefits content.
 *
 * @returns {JSX.Element} The rendered benefits section component.
 */

export const Benefits = (): JSX.Element => {
  return (
    <section className="homepage-section-two bg-[#374151] min-h-screen">
      <div className="container mx-auto my-0">
        <div className="min-h-screen px-12 py-14 arrow-bg">
          <BenefitsCarousel />
          <div className="relative">
            <BenefitsImage
              src={image2}
              classes="absolute top-[-50px] left-[28%] z-1"
            />
            <BenefitsImage
              src={image4}
              classes="absolute top-[-75px] right-0 z-1"
            />
          </div>
          <BenefitsContent />
        </div>
      </div>
    </section>
  );
};
