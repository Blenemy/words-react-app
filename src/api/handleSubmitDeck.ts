import { NavigateFunction } from "react-router-dom";
import { BASE_URL, ROUTE_FLIP_CARD } from "../constants/routes";
import axios from "axios";

/**
 * Отправить колоду на изучение.
 *
 * @param {number} deck - Идентификатор колоды.
 * @param {string | undefined} token - Токен пользователя.
 * @param {NavigateFunction} navigate - Функция навигации для перехода на другую страницу.
 */

export const handleSumbitDeck = async (
  deck: number,
  token: string | undefined,
  navigate: NavigateFunction
) => {
  try {
    const response = await axios.post(
      BASE_URL + `/study/add_deck/${deck}/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 201) {
      navigate(ROUTE_FLIP_CARD, { state: { deckId: deck, isDefault: true } });
    }
  } catch (error) {
    console.log(error);
  }
};
