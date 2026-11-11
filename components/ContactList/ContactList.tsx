import Contact from '@/types/contacts';
import css from './ContactList.module.css';
import Link from 'next/link';

interface ContactListProps {
  contacts: Contact[];
}

export default function ContactList({ contacts }: ContactListProps) {
  return (
    <ul>
      {contacts.map(({ name, id }) => {
        return (
          <li key={id} className={css.contactsItem}>
            <Link href={`/contacts/${id}`}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
