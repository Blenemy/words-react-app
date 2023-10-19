import axios from "axios";
import { BASE_URL } from "../data/constants";

export const loginUser = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const response = await axios.post(BASE_URL + "/user/login/", {
    username,
    password,
  });
  return response.data;
};
