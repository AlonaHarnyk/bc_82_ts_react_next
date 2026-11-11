'use client';

import EditBookForm from '@/components/EditBookForm/EditBookForm';
import ErrorNotification from '@/components/ErrorNotification/ErrorNotification';
import Loader from '@/components/Loader/Loader';
import { getSingleBook } from '@/lib/api/booksApi';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export default function EditBookClient() {
  const { id } = useParams<{ id: string }>();
  const {
    data: book,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['singleBook', id],
    queryFn: () => getSingleBook(id),
    refetchOnMount: false,
  });

  return (
    <>
      {isError && <ErrorNotification />}
      {isLoading && <Loader />}
      {book && <EditBookForm book={book} />}
    </>
  );
}
