import { getSingleBook } from "@/lib/api/booksApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import BookSlotPageClient from "./BooksSlotPageClient";

interface BookSlotPageProps {
  params: Promise<{ id: string }>;
}

export default async function BookSlotPage({ params }: BookSlotPageProps) {
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["singleBook", id],
    queryFn: () => getSingleBook(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BookSlotPageClient />
    </HydrationBoundary>
  );
}
