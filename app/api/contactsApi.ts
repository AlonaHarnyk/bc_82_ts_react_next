import axios, { AxiosError } from "axios";

export type ApiError = AxiosError<{ error: string }>;

export const contactsApi = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});
