import noResults from "../../assets/no-results.png";

/**
 * `NoResluts` component displays a message when there are no search results.
 * @component
 * @param {object} props - Properties passed to the component.
 * @param {string} props.highlightedText - The text to highlight in the no results message.
 *
 * @example
 * <NoResluts highlightedText="example" />
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
