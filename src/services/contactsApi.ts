import axios from "axios";
import type Contact from "../types/contacts";

const contactsApi = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});

export async function getContacts(): Promise<Contact[]> {
  const { data } = await contactsApi.get<Contact[]>("/contacts");
  return data;
}

export async function deleteContact(id: string): Promise<Contact> {
  const { data } = await contactsApi.delete<Contact>(`/contacts/${id}`);
  return data;
}
