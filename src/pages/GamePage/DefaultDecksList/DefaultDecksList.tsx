import { NavigateFunction, useNavigate } from "react-router-dom";
import { handleSumbitDeck } from "../../../api/handleSubmitDeck";
import { DeckFromServer } from "../../../types/DeckFromServer";
import { StackOfDecks } from "../StackOfDecks/StackOfDecks";
import { memo } from "react";

/**
 * Компонент DefaultDecksList для отображения списка стандартных колод для пользователей.
 *
 * @param {Props} props - Пропсы компонента.
 * @param {NavigateFunction} props.navigateFunc - Функция из react-router-dom для навигации между маршрутами.
 * @param {DeckFromServer[]} props.defaultDecks - Массив объектов колод, полученных с сервера.
 * @param {string|undefined} props.token - Токен аутентификации залогиненного пользователя.
 * @returns {React.ReactElement} Отрендеренный компонент DefaultDecksList.
 */

type Props = {
  navigateFunc: NavigateFunction;
  defaultDecks: DeckFromServer[];
  token: string | undefined;
};

export const DefaultDecksList: React.FC<Props> = memo(
  ({ defaultDecks, token }) => {
    const navigate = useNavigate();

    return (
      <>
        {defaultDecks?.map((deck) => (
          <div key={deck.id} className="basis-1/3 min-h-[500px] px-6">
            <StackOfDecks
              onDeckClick={() => handleSumbitDeck(deck.id, token, navigate)}
              deck={deck}
            />
          </div>
        ))}
      </>
    );
  }
);
