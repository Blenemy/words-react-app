import Cookies from "js-cookie";
import { $host } from ".";

/**
 * Получить авторизационные данные пользователя с использованием токена Google.
 *
 * @param {string | undefined} googleCredential - Токен Google.
 * @returns {Promise<any>} - Обещание с данными пользователя.
 */

export const getGoogleAuthCredentials = async (
  googleCrenedtial: string | undefined
) => {
  const dataToSend = {
    token: googleCrenedtial,
  };
  const authResponse = await $host.post("/user/google_auth/", dataToSend);
  Cookies.set("token", authResponse.data.token, { expires: 1 });

  const userResponse = await $host.get("/user/profile/", {
    headers: {
      Authorization: `Bearer ${authResponse.data.token}`,
    },
  });

  return userResponse.data;
};
