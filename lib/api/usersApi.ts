import { User } from "@/types/users";
import axios from "axios";

const usersApi = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
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
