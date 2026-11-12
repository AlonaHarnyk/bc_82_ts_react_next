import { getBooks } from "@/lib/api/booksApi";
import { getBooksCategoriesParam } from "@/lib/utils";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import BooksFilterPageClient from "./BooksFilterPageClient";

interface BooksFilterPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function BooksFilterPage({
  params,
}: BooksFilterPageProps) {
  const { slug } = await params;
  const category = getBooksCategoriesParam(slug[0]);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["books", category],
    queryFn: () => getBooks(category),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BooksFilterPageClient />
    </HydrationBoundary>
  );
}
