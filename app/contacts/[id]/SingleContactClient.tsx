'use client';

import ContactDetails from '@/components/ContactDetails/ContactDetails';
import ErrorNotification from '@/components/ErrorNotification/ErrorNotification';
import Loader from '@/components/Loader/Loader';
import { getContactById } from '@/lib/api/contactsApi';
import { useQuery } from '@tanstack/react-query';
import { isReactCompilerRequired } from 'next/dist/build/swc/generated-native';
import { useParams } from 'next/navigation';

export default function SingleContactClient() {
  const { id } = useParams<{ id: string }>();
  const {
    data: contact,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['contact', id],
    queryFn: () => getContactById(id),
    refetchOnMount: false,
  });

  return (
    <>
      {contact && <ContactDetails contact={contact} />}
      {isError && <ErrorNotification />}
      {isLoading && <Loader />}
    </>
  );
}
