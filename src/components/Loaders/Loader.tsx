import { BeatLoader } from "react-spinners";

/**
 * Компонент загрузки с анимацией.
 *
 * @returns {JSX.Element} - JSX элемент для отображения анимированной загрузки.
 */

export const Loader = (): JSX.Element => (
  <div className="flex w-full justify-center items-center">
    <BeatLoader size={15} color="#D63636" />
  </div>
);
