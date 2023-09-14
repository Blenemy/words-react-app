import { RenderImage } from "./RenderImage";

export const RenderRowOfImages = ({ images }: { images: string[] }) => {
  return (
    <>
      {images.map((image, index) => (
        <div id={`item-${index}`} key={`${image}-${index}`}>
          <RenderImage src={image} />
        </div>
      ))}
    </>
  );
};
