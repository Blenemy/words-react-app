import { $host } from ".";

/**
 * Получить информацию о колоде по её идентификатору.
 *
 * @param {string | undefined} deckId - Идентификатор колоды.
 * @param {string | undefined} token - Токен авторизации.
 * @returns {Promise<any>} - Обещание с данными о колоде.
 */

export const getDeckInfo = async (
  deckId: string | undefined,
  token: string | undefined
) => {
  const response = await $host.get(`/study/decks/${deckId}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

/**
 * Получить список колод.
 *
 * @param {string | undefined} token - Токен авторизации.
 * @returns {Promise<any>} - Обещание с данными списка колод.
 */

export const getDecks = async (token: string | undefined) => {
  const response = await $host.get("/study/decks/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
