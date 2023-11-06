import noResults from "../../assets/no-results.png";

/**
 * Компонент `NoResults` отображает сообщение, когда результаты поиска отсутствуют.
 * @component
 * @param {object} props - Свойства, переданные компоненту.
 * @param {string} props.highlightedText - Текст для выделения в сообщении об отсутствии результатов.
 *
 * @example
 */

interface NoResultsProps {
  highlightedText: string;
}

export const NoResluts: React.FC<NoResultsProps> = ({ highlightedText }) => {
  return (
    <div className="flex flex-col items-center justify-center text-primary mx-auto gap-6">
      <img src={noResults} alt="noResults" />
      <p className="text-4xl">Sorry! No results found yet :(</p>
      <p className="text-3xl">
        Consider adding <span className="text-red-600">{highlightedText}</span>{" "}
        to your list.
      </p>
    </div>
  );
};
