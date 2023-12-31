import { ReactNode, useEffect, useRef, useState } from "react";
import { Blurhash } from "react-blurhash";
import { ImageBundlePath } from "../../types/ImageBundlePath";
import { DEFAULT_HASH_SRC } from "./image_hash_set_default";

/**
 * Компонент для отображения изображения с возможностью использования Blurhash.
 *
 * @param {ImageBundlePath} ImageBundlePath - Объект с путями к изображению и его хэшу для Blurhash.
 * @param {ReactNode} children - Дочерние элементы компонента.
 * @param {boolean} mainImage - Флаг, указывающий, является ли изображение основным.
 * @returns {JSX.Element} - JSX элемент для изображения.
 */

type ImageComponentProps = {
  ImageBundlePath: ImageBundlePath;
  children: ReactNode;
  mainImage?: boolean;
};

export const ImageComponent: React.FC<ImageComponentProps> = ({
  ImageBundlePath,
  children,
  mainImage = false,
}): JSX.Element => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const blurhashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      setImageIsLoaded(true);
    };

    img.src = ImageBundlePath.image;
  }, [ImageBundlePath.image]);

  useEffect(() => {
    if (blurhashRef.current) {
      const canvasElement = blurhashRef.current.querySelector("canvas");
      if (canvasElement) {
        canvasElement.classList.add("rounded-3xl");
      }
    }
  }, []);

  return (
    <>
      <div
        style={{ display: imageIsLoaded ? "none" : "inline" }}
        ref={blurhashRef}
        className={`${!mainImage && "h-[230px]"}`}
      >
        <Blurhash
          hash={ImageBundlePath.image_hash || DEFAULT_HASH_SRC}
          width="100%"
          height={mainImage ? 512 : 230}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <div style={{ display: !imageIsLoaded ? "none" : "inline" }}>
        {children}
      </div>
    </>
  );
};
