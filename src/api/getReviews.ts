import { $host } from ".";

/**
 * Получить отзывы с сервера.
 *
 * @returns {Promise} Промис, который разрешается данными отзывов.
 */

export const getReviews = async () => {
  const response = await $host.get("/social/comments/");

  return response.data;
};
