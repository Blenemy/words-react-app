import { $host } from ".";

/**
 * Войти в систему, используя имя пользователя и пароль.
 *
 * @param {Object} credentials - Учетные данные пользователя.
 * @param {string} credentials.username - Имя пользователя.
 * @param {string} credentials.password - Пароль пользователя.
 * @returns {Promise<Object>} Промис, разрешающийся данными пользователя.
 */

export const loginUser = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const response = await $host.post("/user/login/", {
    username,
    password,
  });
  return response.data;
};
