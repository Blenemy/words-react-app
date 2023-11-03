/**
 * TextList Functional Component renders a list of words as an unordered list.
 * @component
 * @param {TextListProps} props - Props containing array of words.
 * @returns {JSX.Element} An unordered list of words with specific styling.
 */

interface TextListProps {
  words: string[];
}

export const TextList: React.FC<TextListProps> = ({ words }) => (
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
