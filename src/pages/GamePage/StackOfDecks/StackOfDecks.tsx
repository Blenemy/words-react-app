import titleDecorator from "../../../assets/gamePageDecksDecorator.png";
import { DeckFromServer } from "../../../types/DeckFromServer";

/**
 * Компонент StackOfDecks для визуального отображения стопки колод.
 *
 * @param {Props} props - Пропсы компонента.
 * @param {string|undefined} props.frontImage - Изображение, представляющее лицевую сторону колоды.
 * @param {() => void} props.onDeckClick - Функция обратного вызова, активируемая при клике на колоду.
 * @param {string} props.deckTitle - Название колоды.
 * @returns {React.ReactElement} Отрендеренный компонент StackOfDecks.
 */

interface StackOfDecksProps {
  onDeckClick: () => void;
  deck: DeckFromServer;
}

export const StackOfDecks: React.FC<StackOfDecksProps> = ({
  onDeckClick,
  deck,
}) => {
  if (!deck.image) {
    return;
  }

  return (
    <>
      <div className="relative flex items-center justify-center">
        <h3 className="text-primary mb-20 title-decorator text-center w-[182px]">
          {deck.title}
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
          src={deck.image}
          alt="Description"
          className="w-full h-[329px] absolute rounded-3xl min-h-[40%] items-center justify-center text-[10rem] duration-300 cursor-pointer z-10 text-primary translate-y-4"
        />
      </div>
    </>
  );
};
