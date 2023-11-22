import { $host } from ".";

/**
 * Получить отзывы с сервера.
 *
 * @returns {Promise} Промис, который разрешается данными отзывов.
 */

export interface FeedbackType {
  rating: number;
  message: string;
}

export const getReviews = async () => {
  const response = await $host.get("/social/comments/");

  return response.data;
};

export const postReview = async (dataToSend: FeedbackType, token: string) => {
  const response = await $host.post("/social/comments/", dataToSend, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};
