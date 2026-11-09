import Contact from "@/types/contacts";
import css from "./ContactList.module.css";

interface ContactListProps {
  contacts: Contact[];
}

export default function ContactList({ contacts }: ContactListProps) {
  return (
    <ul>
      {contacts.map(({ name, email, id }) => {
        return (
          <li key={id} className={css.contactsItem}>
            <p>{name}</p>
            <p>{email}</p>
          </li>
        );
      })}
    </ul>
  );
}
