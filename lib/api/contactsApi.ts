import Contact from "@/types/contacts";
import axios from "axios";

const contactsApi = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});

export default async function getContacts(): Promise<Contact[]> {
  const { data } = await contactsApi.get<Contact[]>("/contacts");
  return data;
}
