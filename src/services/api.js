import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  //baseURL: "http://10.1.1.200:3333"
  baseURL: "http://177.73.49.241:3333",
  headers: {'Access-Control-Allow-Origin': '*'}
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;