import { getUserById } from '@/lib/api/usersApi';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import UserModalClient from './UserModalClient';

interface UsersModalPageProps {
  params: Promise<{ id: string }>;
}

export default async function UsersModalPage({ params }: UsersModalPageProps) {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['user', id],
    queryFn: () => getUserById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserModalClient />
    </HydrationBoundary>
  );
}
