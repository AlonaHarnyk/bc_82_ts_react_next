import { getUsers } from '@/lib/api/usersApi';
import { getUsersCategoriesParam } from '@/lib/utils';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import UsersFilterPageClient from './UsersFilterPageClient';

interface UsersFilterPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function UsersFilterPage({
  params,
}: UsersFilterPageProps) {
  const { slug } = await params;

  const category = getUsersCategoriesParam(slug[0]);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['users', category],
    queryFn: () => getUsers(category),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UsersFilterPageClient />
    </HydrationBoundary>
  );
}
