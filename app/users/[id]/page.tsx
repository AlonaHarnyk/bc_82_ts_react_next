import { getUserById } from "@/lib/api/usersApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import SingleUserClientPage from "./SingleUserClient";

interface UserDetailsPageParams {
  params: Promise<{ id: string }>;
}

export default async function UserDetailsPage({
  params,
}: UserDetailsPageParams) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SingleUserClientPage />
    </HydrationBoundary>
  );
}
