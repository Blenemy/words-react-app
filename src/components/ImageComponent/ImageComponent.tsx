import { ReactNode, useEffect, useRef, useState } from "react";
import { Blurhash } from "react-blurhash";
import { DEFAULT_HASH_SRC } from "../../data/constants";

export type ImageBundlePath = {
  image: string;
  image_hash: string;
};

type Props = {
  ImageBundlePath: ImageBundlePath;
  children: ReactNode;
  mainImage?: boolean;
};

export const ImageComponent: React.FC<Props> = ({
  ImageBundlePath,
  children,
  mainImage = false,
}) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const blurhashRef = useRef<HTMLDivElement>(null);

  console.log(ImageBundlePath);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setTimeout(() => {
        setImageIsLoaded(true);
      }, 200);
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
