import axios from "axios";
import { BASE_URL } from "../data/constants";

export const getUserProfile = async (token: string) => {
  const response = await axios.get(BASE_URL + "/user/profile/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
