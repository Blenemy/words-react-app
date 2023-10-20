import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

export const ImageComponent = ({ src, hash }: any) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageIsLoaded(true);
    };

    img.src = src;
  }, [src]);

  return (
    <>
      <div style={{ display: imageIsLoaded ? "none" : "inline " }}>
        <Blurhash
          hash={hash ? hash : "LEHV6nWB2yk8pyo0adR*.7kCMdnj"}
          width="100%"
          height={230}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <div style={{ display: !imageIsLoaded ? "none" : "inline " }}>
        <img
          src={src}
          alt="description of the word"
          className="_img max-h-[230px] rounded-3xl"
        />
      </div>
    </>
  );
};
