import axios from "axios";
import { BASE_URL } from "../constants/routes";

/**
 * Получить отзывы с сервера.
 *
 * @returns {Promise} Промис, который разрешается данными отзывов.
 */

export const getReviews = async () => {
  const response = await axios.get(BASE_URL + "/social/comments/");

  return response.data;
};
