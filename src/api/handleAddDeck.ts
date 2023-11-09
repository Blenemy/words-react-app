import { $host } from ".";

/**
 * Добавить колоду.
 *
 * @param {Object} formData - Данные для создания колоды.
 * @param {string | undefined} token - Токен пользователя.
 * @returns {Promise<any>} - Обещание с данными созданной колоды.
 */

export const handleAddDeck = async (
  formData: any,
  token: string | undefined
) => {
  const dataToSend = {
    title: formData.name,
    image: formData.image,
  };

  const response = await $host.post("/study/decks/", dataToSend, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
