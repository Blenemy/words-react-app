import { RenderImage } from "../RenderImage/RenderImage";

/**
 * Компонент RenderRowOfImages для отрисовки ряда изображений.
 *
 * @param {RenderRowOfImagesProps} props - Пропсы компонента.
 * @returns {JSX.Element} Отрендеренный компонент ряда изображений.
 */

interface GridClasses {
  [key: number]: string;
}

const gridClasses: GridClasses = {
  0: "row-start-item-0 col-start-item-0 row-end-item-0 col-end-item-0 flex-auto",
  1: "row-start-item-1 col-start-item-1 row-end-item-1 col-end-item-1 flex-auto",
  2: "row-start-item-2 col-start-item-2 row-end-item-2 col-end-item-2 flex-auto",
};

interface RenderRowOfImagesProps {
  images: string[];
}

export const RenderRowOfImages: React.FC<RenderRowOfImagesProps> = ({
  images,
}): JSX.Element => {
  return (
    <>
      {images.map((image, index) => (
        <div key={`${image}-${index}`} className={gridClasses[index]}>
          <RenderImage src={image} />
        </div>
      ))}
    </>
  );
};
