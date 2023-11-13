import { HTMLAttributes } from "react";

/**
 * Компонент BenefitsImage для отображения изображения с дополнительными классами CSS.
 *
 * @param {BenefitsImageProps} props - Свойства компонента.
 * @param {string} props.src - URL источника изображения.
 * @param {string} props.classes - Дополнительные классы CSS для применения к изображению.
 * @returns {JSX.Element} Отрисованный компонент изображения преимуществ.
 */

interface BenefitsImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  classes: string;
}

export const BenefitsImage: React.FC<BenefitsImageProps> = ({
  src,
  classes,
  ...props
}): JSX.Element => {
  return <img src={src} alt="benefits-filler" className={classes} {...props} />;
};
