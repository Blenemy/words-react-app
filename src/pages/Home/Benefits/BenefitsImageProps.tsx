import { HTMLAttributes } from "react";

interface BenefitsImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  classes: string;
}

export const BenefitsImage: React.FC<BenefitsImageProps> = ({
  src,
  classes,
}): JSX.Element => {
  return <img src={src} alt="benefits-filler" className={classes} />;
};
