import { getBooks } from "@/lib/api/booksApi";
import { getBooksCategoriesParam } from "@/lib/utils";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import BooksFilterPageClient from "./BooksFilterPageClient";
import { describe } from "node:test";
import { Metadata } from "next";

interface BooksFilterPageProps {
  params: Promise<{ slug: string[] }>;
}

export const generateMetadata = async ({
  params,
}: BooksFilterPageProps): Promise<Metadata> => {
  const { slug } = await params;

  // let title = '';

  // if (slug[0] === 'All') {
  //   title = 'List of all books'
  // } else {
  //   title = `List of ${slug[0]} books`
  // }

  const title =
    slug[0] === "All" ? "List of all books" : `List of ${slug[0]} books`;

  const description =
    slug[0] === "All"
      ? "Page with title of every book in the list of all books"
      : `Page with title of ${slug[0]} book in the list of ${slug[0]} books`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: "https://picsum.photos/200/300",
          alt: "application alustration",
          width: 50,
          height: 50,
        },
      ],
    },
  };
};
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
