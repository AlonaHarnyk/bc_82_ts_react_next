import { getUsers } from "@/lib/api/usersApi";
import { getUsersCategoriesParam } from "@/lib/utils";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";
import UsersFilterPageClient from "./UsersFilterPageClient";

interface UsersFilterPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({
  params,
}: UsersFilterPageProps): Promise<Metadata> {
  const { slug } = await params;
  let category = "";
  switch (slug[0]) {
    case "is-online":
      category = "online";
      break;
    case "is-offline":
      category = "offline";
      break;

    default:
      category = "all";
      break;
  }

  return {
    title: `Page of ${category} users`,
    description: `List of ${category} users`,
    openGraph: {
      title: `Page of ${category} users`,
      description: `List of ${category} users`,
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

export default async function UsersFilterPage({
  params,
}: UsersFilterPageProps) {
  const { slug } = await params;

  const category = getUsersCategoriesParam(slug[0]);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["users", category],
    queryFn: () => getUsers(category),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UsersFilterPageClient />
    </HydrationBoundary>
  );
}
