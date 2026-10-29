import axios from "axios";
import type Contact from "../types/contacts";

const contactsApi = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});

export default async function getContacts(): Promise<Contact[]> {
  const { data } = await contactsApi.get<Contact[]>("/contacts");
  return data;
}
