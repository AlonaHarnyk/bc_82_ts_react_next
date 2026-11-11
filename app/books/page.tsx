import BookList from '@/components/BookList/BookList';
import { getBooks } from '@/lib/api/booksApi';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import BooksClient from './BooksClient';

export default async function Books() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['books'],
    queryFn: getBooks,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BooksClient />
    </HydrationBoundary>
  );
}
