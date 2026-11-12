"use client";

import BookList from "@/components/BookList/BookList";
import ErrorNotification from "@/components/ErrorNotification/ErrorNotification";
import Loader from "@/components/Loader/Loader";
import { getBooks } from "@/lib/api/booksApi";
import { getBooksCategoriesParam } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function BooksFilterPageClient() {
  const { slug } = useParams<{ slug: string[] }>();
  const category = getBooksCategoriesParam(slug[0]);

  const {
    data: books,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["books", category],
    queryFn: () => getBooks(category),
    refetchOnMount: false,
  });

  return (
    <>
      {isError && <ErrorNotification />}
      {isLoading && <Loader />}
      {books && <BookList books={books} />}
    </>
  );
}
