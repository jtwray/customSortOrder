import axios from "axios";

export const userAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
