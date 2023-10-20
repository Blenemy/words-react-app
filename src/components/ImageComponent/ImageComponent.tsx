import { ReactNode, useEffect, useRef, useState } from "react";
import { Blurhash } from "react-blurhash";

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

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setTimeout(() => {
        setImageIsLoaded(true);
      }, 1000);
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
      >
        <Blurhash
          hash={ImageBundlePath.image_hash}
          width="100%"
          height={mainImage ? 524 : 230}
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
