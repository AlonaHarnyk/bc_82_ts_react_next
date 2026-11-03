import axios from "axios";
import type { UpdateUserStatusData, User, UserData } from "../types/user";

const usersApi = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});

export async function getUsers(query: string): Promise<User[]> {
  const { data } = await usersApi.get<User[]>("/users", {
    params: {
      search: query,
    },
  });
  return data;
}

export async function createUser(userData: UserData): Promise<User> {
  const { data } = await usersApi.post<User>("/users", userData);
  return data;
}

export async function deleteUser(id: string): Promise<User> {
  const { data } = await usersApi.delete<User>(`/users/${id}`);
  return data;
}

export async function updateUser({
  id,
  isOnline,
}: UpdateUserStatusData): Promise<User> {
  const { data } = await usersApi.put<User>(`/users/${id}`, { isOnline });
  return data;
}
