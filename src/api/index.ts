import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export { $host };
