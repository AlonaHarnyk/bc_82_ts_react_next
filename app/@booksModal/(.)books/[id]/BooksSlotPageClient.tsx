'use client';
import BookDetails from '@/components/BookDetails/BookDetails';
import ErrorNotification from '@/components/ErrorNotification/ErrorNotification';
import Loader from '@/components/Loader/Loader';
import Modal from '@/components/Modal/Modal';
import { getSingleBook } from '@/lib/api/booksApi';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export default function BookSlotPageClient() {
  const { id } = useParams<{ id: string }>();

  const {
    data: book,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['singleBook', id],
    queryFn: () => getSingleBook(id),
    refetchOnMount: false,
  });

  return (
    <Modal>
      {isError && <ErrorNotification />}
      {isLoading && <Loader />}
      {book && <BookDetails book={book} />}
    </Modal>
  );
}
