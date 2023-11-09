import axios from "axios";
import { BASE_URL } from "../constants/routes";

/**
 * Обновить карточку на сервере.
 *
 * @param {number} cardId - Идентификатор карточки для обновления.
 * @param {any} dataToSend - Данные для отправки при обновлении.
 * @param {string | undefined} token - Токен авторизации пользователя.
 * @returns {Promise<any>} Промис, который разрешается обновленными данными карточки.
 */

export const updateCard = async (
  cardId: number,
  dataToSend: any,
  token: string | undefined
) => {
  const response = await axios.patch(
    `${BASE_URL}/study/cards/${cardId}/`,
    dataToSend,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
