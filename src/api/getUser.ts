import axios from "axios";
import { BASE_URL } from "../data/constants";

export const getuser = async (token: string | undefined) => {
  const response = await axios.get(BASE_URL + "/user/profile/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
