import { useQuery } from '@tanstack/react-query';
import getContacts from '../../services/contactsApi';
import ContactsList from '../ContactsList/ContactsList';
import ErrorNotification from '../ErrorNotification/ErrorNotification';
import Loader from '../Loader/Loader';
import AddContactForm from '../AddContactForm/AddContactForm';

export default function Contacts() {
  const {
    data: contacts,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['contacts'],
    queryFn: getContacts,
  });
  return (
    <>
      <AddContactForm />
      {contacts && contacts.length > 0 && <ContactsList contacts={contacts} />}
      {isError && (
        <ErrorNotification message="Something went wrong during loading" />
      )}
      {isLoading && <Loader />}
    </>
  );
}
