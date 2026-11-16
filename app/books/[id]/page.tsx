import { getSingleBook } from '@/lib/api/booksApi';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import SingleBookClient from './SingleBookClient';
import { Metadata } from 'next';

interface SingleBookProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: SingleBookProps): Promise<Metadata> {
  const { id } = await params;
  const book = await getSingleBook(id);
  return {
    title: `Book: ${book.title}`,
    description: book.description,
    openGraph: {
      title: book.title,
      description: book.description,
      images: [
        {
          url: 'https://picsum.photos/200/300',
          alt: 'application alustration',
          width: 50,
          height: 50,
        },
      ],
    },
  };
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
