import { getSingleBook } from '@/lib/api/booksApi';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import SingleBookClient from './SingleBookClient';

interface SingleBookProps {
  params: Promise<{ id: string }>;
}
export default async function SingleBookPage({ params }: SingleBookProps) {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['singleBook', id],
    queryFn: () => getSingleBook(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SingleBookClient />
    </HydrationBoundary>
  );
}
