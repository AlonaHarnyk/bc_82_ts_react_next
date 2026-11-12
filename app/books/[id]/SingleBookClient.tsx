"use client";
import css from "./SingleBookClient.module.css";
import BookDetails from "@/components/BookDetails/BookDetails";
import ErrorNotification from "@/components/ErrorNotification/ErrorNotification";
import Loader from "@/components/Loader/Loader";
import { getSingleBook } from "@/lib/api/booksApi";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function SingleBookClient() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["singleBook", id],
    queryFn: () => getSingleBook(id),
    refetchOnMount: false,
  });

  return (
    <>
      {isError && <ErrorNotification />}
      {isLoading && <Loader />}
      {data && <BookDetails book={data} />}
      <Link href={`/books/${id}/edit`} className={css.link}>
        Edit book
      </Link>
      <button className={css.btn} onClick={() => router.back()}>
        Back
      </button>
    </>
  );
}
