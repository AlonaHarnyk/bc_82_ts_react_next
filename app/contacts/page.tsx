import getContacts from "@/lib/api/contactsApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ContactsClient from "./ContactsClient";

export default async function Contacts() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ContactsClient />
    </HydrationBoundary>
  );
}
