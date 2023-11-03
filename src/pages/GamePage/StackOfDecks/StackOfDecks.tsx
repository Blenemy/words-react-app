import titleDecorator from "../../../assets/gamePageDecksDecorator.png";

/**
 * StackOfDecks component for rendering a visual stack of decks.
 *
 * @param {Props} props - The component's props.
 * @param {string|undefined} props.frontImage - The image that represents the front of the deck.
 * @param {() => void} props.onDeckClick - A callback function triggered upon clicking the deck.
 * @param {string} props.deckTitle - The title of the deck.
 * @returns {React.ReactElement} The rendered StackOfDecks component.
 */

type Props = {
  frontImage: string | undefined;
  onDeckClick: () => void;
  deckTitle: string;
};

export const StackOfDecks: React.FC<Props> = ({
  frontImage,
  onDeckClick,
  deckTitle,
}) => {
  if (!frontImage) {
    return;
  }

  return (
    <>
      <div className="relative flex items-center justify-center">
        <h3 className="text-primary mb-20 title-decorator text-center w-[182px]">
          {deckTitle}
        </h3>
        <img
          src={titleDecorator}
          alt=""
          className="absolute left-1/2 top-[-20px] -translate-x-1/2"
        />
      </div>
      <div
        className="stack relative hover:scale-105 duration-300"
        onClick={onDeckClick}
      >
        <div className="w-full h-[329px] absolute rounded-3xl bg-primary min-h-[40%] items-center justify-center text-[10rem] duration-300 cursor-pointer z-10 text-primary" />
        <div className="w-full h-[329px] absolute rounded-3xl bg-secondary min-h-[40%] items-center justify-center text-[10rem] duration-300 cursor-pointer z-10 text-primary translate-y-2" />
        <img
          src={frontImage}
          alt="Description"
          className="w-full h-[329px] absolute rounded-3xl min-h-[40%] items-center justify-center text-[10rem] duration-300 cursor-pointer z-10 text-primary translate-y-4"
        />
      </div>
    </>
  );
};
