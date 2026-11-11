import { getSingleBook } from '@/lib/api/booksApi';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import EditBookClient from './EditBookClient';

interface EditBookPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditBookPage({ params }: EditBookPageProps) {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['singleBook', id],
    queryFn: () => getSingleBook(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EditBookClient />
    </HydrationBoundary>
  );
}
