import axios from "axios";
import { getToken, removeToken, removeUser } from "../utils/storage";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080/api"
});

apiClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    const status = err?.response?.status;
    if (status === 401) {
      removeToken();
      removeUser();
      // hard redirect to login
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export default apiClient;
