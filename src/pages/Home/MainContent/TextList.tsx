/**
 * Компонент TextList в функциональном стиле, который отображает список слов в виде неупорядоченного списка.
 * @component
 * @param {TextListProps} props - Свойства, содержащие массив слов.
 * @returns {JSX.Element} Неупорядоченный список слов с определенным стилем.
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
