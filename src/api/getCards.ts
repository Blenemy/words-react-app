import { $host } from ".";

/**
 * Получить следующую карту для изучения из указаной колоды.
 *
 * @param {number} deckId - Идентификатор колоды.
 * @param {any} dataToSend - Данные для отправки на сервер.
 * @param {string} token - Токен авторизации.
 * @returns {Promise<any>} - Обещание с данными следующей карты.
 */

export const getNextCard = async (
  deckId: number,
  dataToSend: any,
  token: string
) => {
  const response = await $host.post(`/study/learn/${deckId}/`, dataToSend, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

/**
 * Получить первую карту для изучения из указанной колоды.
 *
 * @param {number} deckId - Идентификатор колоды.
 * @param {string} token - Токен авторизации.
 * @returns {Promise<any>} - Обещание с данными первой карты.
 */

export const getFirstCard = async (deckId: number, token: string) => {
  const response = await $host.get(`/study/learn/${deckId}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
