/**
 * Пропсы для компонента RenderImage.
 *
 * @interface
 * @property {string} src - URL-источник изображения.
 * @property {string} [additionalClasses] - Дополнительные CSS-классы, применяемые к изображению.
 * @returns {React.ReactElement} Отрендеренный компонент изображения.
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
