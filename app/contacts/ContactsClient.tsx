'use client';

import ContactList from '@/components/ContactList/ContactList';
import ErrorNotification from '@/components/ErrorNotification/ErrorNotification';
import Loader from '@/components/Loader/Loader';
import { getContacts } from '@/lib/api/contactsApi';
import { useQuery } from '@tanstack/react-query';

export default function ContactsClient() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['contacts'],
    queryFn: getContacts,
    refetchOnMount: false,
  });

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorNotification />}
      {data && data.length > 0 && <ContactList contacts={data} />}
    </>
  );
}
