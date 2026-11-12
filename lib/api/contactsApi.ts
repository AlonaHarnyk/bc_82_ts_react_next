import Contact from "@/types/contacts";
import axios from "axios";

const contactsApi = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
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
