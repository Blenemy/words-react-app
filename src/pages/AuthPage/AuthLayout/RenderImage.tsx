/**
 * Props for the RenderImage component.
 *
 * @interface
 * @property {string} src - The source URL of the image.
 * @property {string} [additionalClasses] - Additional CSS classes to apply to the image.
 * @returns {React.ReactElement} The rendered image component.
 */

interface RenderImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  additionalClasses?: string;
}

export const RenderImage: React.FC<RenderImageProps> = ({
  src,
  additionalClasses,
  ...props
}): JSX.Element => (
  <img
    src={src}
    alt="layout-img"
    className={`rounded-3xl h-full w-full ${additionalClasses || ""} `}
    {...props}
  />
);
