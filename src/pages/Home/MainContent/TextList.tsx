export const TextList = ({ words }: { words: string[] }) => (
  <ul className="flex text-primary animation-words">
    {words.map((word) => (
      <li key={word}>
        <p className="text-violetStroke flex justify-center items-center w-[95px] h-[32px] border-2 border-wave rounded-3xl ml-[-13px]">
          {word}
        </p>
      </li>
    ))}
  </ul>
);
