import { User, UserData } from "@/types/users";
import axios from "axios";

const usersApi = axios.create({
  baseURL: "http://localhost:3000/api",
});

export async function getUsers(isOnline?: boolean): Promise<User[]> {
  const { data } = await usersApi.get<User[]>("/users", {
    params: {
      isOnline,
    },
  });
  return data;
}

export async function getUserById(id: string): Promise<User> {
  const { data } = await usersApi.get<User>(`/users/${id}`);
  return data;
}

export async function createUser(userData: UserData): Promise<User> {
  const { data } = await usersApi.post<User>(`/users`, userData);
  return data;
}
