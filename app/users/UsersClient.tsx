"use client";

import ErrorNotification from "@/components/ErrorNotification/ErrorNotification";
import Loader from "@/components/Loader/Loader";
import UserList from "@/components/UserList/UserList";
import { getUsers } from "@/lib/api/usersApi";
import { useQuery } from "@tanstack/react-query";

export default function UsersClient() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    refetchOnMount: false,
  });

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorNotification />}
      {data && data.length > 0 && <UserList users={data} />}
    </>
  );
}
