interface ImageProps {
  src: string;
  additionalClasses?: string;
}

export const RenderImage: React.FC<ImageProps> = ({
  src,
  additionalClasses,
}) => (
  <img
    src={src}
    alt="layout-img"
    className={`rounded-3xl h-full w-full ${additionalClasses || ""} `}
  />
);
