import arrowWhite from "../../../assets/arrow-white.svg";
import yellowReact from "../../../assets/howitworks-react-yellow.svg";
import pinkRect from "../../../assets/howitworks-react-pink.svg";
import waveRect from "../../../assets/howitworks-react-wave.svg";

/**
 * ImageRow component for rendering a row of images.
 *
 * @returns {React.ReactElement} The rendered image row component.
 */

export const ImageRow = (): React.ReactElement => (
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
