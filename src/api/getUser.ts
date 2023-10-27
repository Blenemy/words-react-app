import axios from "axios";
import { BASE_URL } from "../data/constants";

/**
 * Получить информацию о пользователе.
 *
 * @param {string | undefined} token - Токен пользователя.
 * @returns {Promise<any>} - Обещание с данными пользователя.
 */

export const getUser = async (token: string | undefined) => {
  const response = await axios.get(BASE_URL + "/user/profile/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
