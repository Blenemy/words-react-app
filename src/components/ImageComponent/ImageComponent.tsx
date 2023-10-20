import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

export const ImageComponent = ({ imagePath }: any) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageIsLoaded(true);
    };

    img.src = imagePath.image;
  }, [imagePath.image]);

  return (
    <>
      <div style={{ display: imageIsLoaded ? "none" : "inline " }}>
        <Blurhash
          hash={imagePath.hash}
          width="100%"
          height={230}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <div style={{ display: !imageIsLoaded ? "none" : "inline " }}>
        <img
          src={imagePath.image}
          alt="description of the word"
          className="_img max-h-[230px] rounded-3xl min-h-[230px]"
        />
      </div>
    </>
  );
};
