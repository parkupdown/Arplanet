import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "../store/authStore";

const createDefaultHttp = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3060",
      "Access-Control-Allow-Credentials": true,
    },
    withCredentials: true,
    ...config,
  });
  return axiosInstance;
};

export const http = createDefaultHttp();
export const httpAuth = createDefaultHttp({
  headers: { Authorization: getToken() ? getToken() : undefined },
});
httpAuth.interceptors.request.use(
  (config) => {
    const headerAuthorization = config.headers.Authorization;
    if (!headerAuthorization) {
      config.headers.Authorization = getToken();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          return Promise.resolve({ data: [] });
        case 401:
          window.location.href = "/";
          return alert("권한이 없습니다.");
        default:
          break;
      }
    }
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          return Promise.resolve({ data: [] });
        default:
          break;
      }
    } else {
      console.error("No response received from server");
    }
    return Promise.reject(error);
  }
);
