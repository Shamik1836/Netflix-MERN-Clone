import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://netflix-12.herokuapp.com/api/",
});
