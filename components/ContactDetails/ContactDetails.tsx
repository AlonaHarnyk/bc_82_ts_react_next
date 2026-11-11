import Contact from '@/types/contacts';

interface ContactDetailsProps {
  contact: Contact;
}

export default function ContactDetails({ contact }: ContactDetailsProps) {
  return (
    <div>
      <h3>{contact.name}</h3>
      <p>{contact.city}</p>
      <p>{contact.job}</p>
    </div>
  );
}
