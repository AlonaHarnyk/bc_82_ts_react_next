// Створити компонент App, в якому рендерити кнопку Show users,
// при натисканні на яку робити запит на бекенд за адресою
// https://6240d2109b450ae274385b44.mockapi.io/api/users і рендерити список користувачів.
// Кнопка Show users має зникнути після того, як список відрендериться

import axios from "axios";
import type { User } from "../types/users";

const usersApi = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});

export async function getUsers(): Promise<User[]> {
  const result = await usersApi.get<User[]>("/users");
  return result.data;
}
