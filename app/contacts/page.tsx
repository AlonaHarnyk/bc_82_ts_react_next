import ContactList from "@/components/ContactList/ContactList";
import getContacts from "@/lib/api/contactsApi";

export default async function Contacts() {
  const contacts = await getContacts();

  return <ContactList contacts={contacts} />;
}
