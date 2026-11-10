'use client';
import BookDetails from '@/components/BookDetails/BookDetails';
import ErrorNotification from '@/components/ErrorNotification/ErrorNotification';
import Loader from '@/components/Loader/Loader';
import { getSingleBook } from '@/lib/api/booksApi';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export default function SingleBookClient() {
  const { id } = useParams<{ id: string }>();
  const { data, isError, isLoading } = useQuery({
    queryKey: ['singleBook', id],
    queryFn: () => getSingleBook(id),
    refetchOnMount: false,
  });

  return (
    <>
      {isError && <ErrorNotification />}
      {isLoading && <Loader />}
      {data && <BookDetails book={data} />}
    </>
  );
}
