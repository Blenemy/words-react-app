import { $host } from ".";

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
  const response = await $host.post("/study/cards/", dataToSend, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
