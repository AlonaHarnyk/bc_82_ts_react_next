import { getUserById } from "@/lib/api/usersApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";
import SingleUserClientPage from "./SingleUserClient";

interface UserDetailsPageParams {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: UserDetailsPageParams): Promise<Metadata> {
  const { id } = await params;
  const user = await getUserById(id);

  return {
    title: user.name,
    description: `Info about ${user.name}`,
    openGraph: {
      title: user.name,
      description: `Info about ${user.name}`,
      images: [
        {
          url: "https://picsum.photos/200/300",
          alt: "application illustration",
          width: 50,
          height: 50,
        },
      ],
    },
  };
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
