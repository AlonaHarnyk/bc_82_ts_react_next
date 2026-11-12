"use client";

import ErrorNotification from "@/components/ErrorNotification/ErrorNotification";
import Loader from "@/components/Loader/Loader";
import UserList from "@/components/UserList/UserList";
import { getUsers } from "@/lib/api/usersApi";
import { getUsersCategoriesParam } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function UsersFilterPageClient() {
  const { slug } = useParams<{ slug: string[] }>();

  const category = getUsersCategoriesParam(slug[0]);

  const {
    data: users,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["users", category],
    queryFn: () => getUsers(category),
    refetchOnMount: false,
  });

  return (
    <>
      {isError && <ErrorNotification />}
      {isLoading && <Loader />}
      {users && <UserList users={users} />}
    </>
  );
}
