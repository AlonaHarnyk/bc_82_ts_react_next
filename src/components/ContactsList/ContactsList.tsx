import type Contact from "../../types/contacts";

interface ContactsListProps {
  contacts: Contact[];
}

export default function ContactsList({ contacts }: ContactsListProps) {
  return (
    <ul>
      {contacts.map(({ name, email, id }) => {
        return (
          <li key={id}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
          </li>
        );
      })}
    </ul>
  );
}
