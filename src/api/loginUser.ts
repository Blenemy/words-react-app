import axios from "axios";
import { BASE_URL } from "../data/constants";

/**
 * Log in to the system using a username and password.
 *
 * @param {Object} credentials - User credentials.
 * @param {string} credentials.username - Username.
 * @param {string} credentials.password - User password.
 * @returns {Promise<Object>} Promise resolving to user data.
 */

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
