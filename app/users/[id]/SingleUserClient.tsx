"use client";

import ErrorNotification from "@/components/ErrorNotification/ErrorNotification";
import Loader from "@/components/Loader/Loader";
import UserDetails from "@/components/UserDetails/UserDetails";
import { getUserById } from "@/lib/api/usersApi";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import css from "./SingleUserClint.module.css";

export default function SingleUserClientPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const {
    data: user,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
    refetchOnMount: false,
  });

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorNotification />}
      {user && <UserDetails user={user} />}
      <button className={css.btn} onClick={() => router.back()}>
        Back
      </button>
    </>
  );
}
