import { v4 as uuidv4 } from "uuid";

/**
 * ImageList Functional Component renders a list of images.
 * @component
 * @param {ImageListProps} props - Props containing array of image strings.
 * @returns {JSX.Element} A formatted unordered list of images.
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
