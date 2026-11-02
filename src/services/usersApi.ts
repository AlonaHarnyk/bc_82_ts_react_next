import axios from "axios";
import type { User, UserData } from "../types/user";

const usersApi = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});

export async function getUsers(): Promise<User[]> {
  const { data } = await usersApi.get<User[]>("/users");
  return data;
}

export async function createUser(userData: UserData): Promise<User> {
  const { data } = await usersApi.post<User>("/users", userData);
  return data;
}
