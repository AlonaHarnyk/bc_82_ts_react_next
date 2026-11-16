import { getContactById } from "@/lib/api/contactsApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import SingleContactClient from "./SingleContactClient";
import { Metadata } from "next";

interface ContactDetailsPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ContactDetailsPageProps): Promise<Metadata> {
  const { id } = await params;
  const contact = await getContactById(id);

  return {
    title: contact.name,
    description: `Info about ${contact.name}: ${contact.description}`,
    openGraph: {
      title: contact.name,
      description: `Info about ${contact.name}: ${contact.description}`,
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

export default async function ContactDetailsPage({
  params,
}: ContactDetailsPageProps) {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["contact", id],
    queryFn: () => getContactById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SingleContactClient />
    </HydrationBoundary>
  );
}
