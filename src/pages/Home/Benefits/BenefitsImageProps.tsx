import { HTMLAttributes } from "react";

/**
 * BenefitsImage component for rendering an image with additional classes.
 *
 * @param {BenefitsImageProps} props - The component's props.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.classes - Additional CSS classes to apply to the image.
 * @returns {JSX.Element} The rendered benefits image component.
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
