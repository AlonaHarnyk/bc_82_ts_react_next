import { getContacts } from "@/lib/api/contactsApi";
import { getCategoriesParam } from "@/lib/utils";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ContactsPageClient from "./ContactsPageClient";

interface ContactsPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function ContactsPage({ params }: ContactsPageProps) {
  const { slug } = await params;
  const category = getCategoriesParam(slug[0]);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["contacts", category],
    queryFn: () => getContacts(category),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ContactsPageClient />
    </HydrationBoundary>
  );
}
