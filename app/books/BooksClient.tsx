"use client";
import BookList from "@/components/BookList/BookList";
import ErrorNotification from "@/components/ErrorNotification/ErrorNotification";
import Loader from "@/components/Loader/Loader";
import { getBooks } from "@/lib/api/booksApi";
import { useQuery } from "@tanstack/react-query";

export default function BooksClient() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
    refetchOnMount: false,
  });

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorNotification />}
      {data && data.length > 0 && <BookList books={data} />}
    </>
  );
}
