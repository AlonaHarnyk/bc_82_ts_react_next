import { Contact } from "@/types/contacts";
import axios from "axios";

const contactsApi = axios.create({
  baseURL: "http://localhost:3000/api",
});

export async function getContacts(hasWork?: boolean): Promise<Contact[]> {
  const { data } = await contactsApi.get<Contact[]>("/contacts", {
    params: {
      hasWork,
    },
  });
  return data;
}

export async function getContactById(id: string): Promise<Contact> {
  const { data } = await contactsApi.get<Contact>(`/contacts/${id}`);
  return data;
}
