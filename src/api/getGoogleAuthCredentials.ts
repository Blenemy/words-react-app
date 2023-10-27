import axios from "axios";
import { BASE_URL } from "../data/constants";
import Cookies from "js-cookie";

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
  const authResponse = await axios.post(
    BASE_URL + "/user/google_auth/",
    dataToSend
  );
  Cookies.set("token", authResponse.data.token, { expires: 1 });

  const userResponse = await axios.get(BASE_URL + "/user/profile/", {
    headers: {
      Authorization: `Bearer ${authResponse.data.token}`,
    },
  });

  return userResponse.data;
};
