import { v4 as uuidv4 } from "uuid";

/**
 * Компонент ImageList в функциональном стиле, который отображает список изображений.
 * @component
 * @param {ImageListProps} props - Свойства, содержащие массив строк с изображениями.
 * @returns {JSX.Element} Отформатированный неупорядоченный список изображений.
 */

interface ImageListProps {
  images: string[];
}

export const ImageList: React.FC<ImageListProps> = ({ images }) => (
  <ul className="flex px-4 py-2 bg-[rgba(255,255,254,0.24)] w-fit rounded-3xl">
    {images.map((img, idx) => (
      <li key={uuidv4()} className={idx !== 0 ? "ml-[-10px]" : ""}>
        <img src={img} alt={`Front Page ${idx + 1}`} />
      </li>
    ))}
  </ul>
);
