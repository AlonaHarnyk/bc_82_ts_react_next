import { getContactById } from '@/lib/api/contactsApi';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import SingleContactClient from './SingleContactClient';

interface ContactDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function ContactDetailsPage({
  params,
}: ContactDetailsPageProps) {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['contact', id],
    queryFn: () => getContactById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SingleContactClient />
    </HydrationBoundary>
  );
}
