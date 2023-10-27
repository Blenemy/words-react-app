import axios from "axios";
import { BASE_URL } from "../data/constants";

export const getReviews = async () => {
  const response = await axios.get(BASE_URL + "/social/comments/");

  return response.data;
};
