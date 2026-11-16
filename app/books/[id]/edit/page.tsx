import { getSingleBook } from "@/lib/api/booksApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import EditBookClient from "./EditBookClient";
import { Metadata } from "next";

interface EditBookPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: EditBookPageProps): Promise<Metadata> {
  const { id } = await params;
  const book = await getSingleBook(id);

  return {
    title: `Page for editing of ${book.title}`,
    description: `Page for editing author, title, year and description fields of book  ${book.title}`,
    openGraph: {
      title: `Page for editing of ${book.title}`,
      description: `Page for editing author, title, year and description fields of book  ${book.title}`,
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
}

export default async function EditBookPage({ params }: EditBookPageProps) {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["singleBook", id],
    queryFn: () => getSingleBook(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EditBookClient />
    </HydrationBoundary>
  );
}
