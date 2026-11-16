import { getContactById } from "@/lib/api/contactsApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ContactModalClient from "./ContactsModalClient";

interface ContactsModalPageProps {
  params: Promise<{ id: string }>;
}

export default async function ContactsModalPage({
  params,
}: ContactsModalPageProps) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["contact", id],
    queryFn: () => getContactById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ContactModalClient />
    </HydrationBoundary>
  );
}
