import axios from "axios";
import { BASE_URL } from "../data/constants";

/**
 * Добавить карточку в колоду.
 *
 * @param {Object} dataToSend - Данные для отправки.
 * @param {string | undefined} token - Токен пользователя.
 * @returns {Promise<any>} - Обещание с данными добавленной карточки.
 */

export const handleAddCard = async (
  dataToSend: Object,
  token: string | undefined
) => {
  const response = await axios.post(BASE_URL + "/study/cards/", dataToSend, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
