import getUsers from "@/lib/api/usersApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import UsersClient from "./UsersClient";

export default async function Users() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UsersClient />
    </HydrationBoundary>
  );
}
