import { $host } from ".";

/**
 * Получить информацию о пользователе.
 *
 * @param {string | undefined} token - Токен пользователя.
 * @returns {Promise<any>} - Обещание с данными пользователя.
 */

export const getUser = async (token: string | undefined) => {
  const response = await $host.get("/user/profile/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
