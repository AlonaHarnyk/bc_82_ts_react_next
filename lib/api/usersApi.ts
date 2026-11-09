import { User } from "@/types/users";
import axios from "axios";

const booksApi = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});

export default async function getUsers(): Promise<User[]> {
  const { data } = await booksApi.get<User[]>("/users");
  return data;
}
