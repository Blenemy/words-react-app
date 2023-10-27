export const ImageList = ({ images }: { images: string[] }) => (
  <ul className="flex px-4 py-2 bg-[rgba(255,255,254,0.24)] w-fit rounded-3xl">
    {images.map((img, idx) => (
      <li key={`${img}-${idx}`} className={idx !== 0 ? "ml-[-10px]" : ""}>
        <img src={img} alt={`Front Page ${idx + 1}`} />
      </li>
    ))}
  </ul>
);
