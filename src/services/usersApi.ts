import axios from "axios";
import type { User } from "../types/users";

const usersApi = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});

export async function getUsers(): Promise<User[]> {
  const result = await usersApi.get<User[]>("/users");
  return result.data;
}
