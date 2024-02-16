import axios, { AxiosError } from "axios";

const baseURL = import.meta.env.VITE_APP_API_URL;

export const API = axios.create({ baseURL });

export const errorHandle = (setAlert: Function) =>
  API.interceptors.response.use(
    (response) => response,
    (error: AxiosError<any, any>) => {
      console.log(error);
      setAlert({
        open: true,
        message: error?.response?.data.message || "Something went wrong",
      });
      return Promise.reject(error);
    }
  );
