import { getContacts } from '@/lib/api/contactsApi';
import { getCategoriesParam } from '@/lib/utils';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import ContactsPageClient from './ContactsPageClient';
import { Metadata } from 'next';

interface ContactsPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({
  params,
}: ContactsPageProps): Promise<Metadata> {
  const { slug } = await params;
  let category = '';
  switch (slug[0]) {
    case 'with-work':
      category = 'with work';
      break;
    case 'without-work':
      category = 'without work';
      break;
    default:
      category = 'all';
  }
  const title =
    category === 'all'
      ? `List of ${category} contacts.`
      : `List of contacts ${category}.`;
  const description = `Page with title of contact in the list of ${category} contacts`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: 'https://picsum.photos/200/300',
          alt: 'application alustration',
          width: 50,
          height: 50,
        },
      ],
    },
  };
}

export default async function ContactsPage({ params }: ContactsPageProps) {
  const { slug } = await params;
  const category = getCategoriesParam(slug[0]);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['contacts', category],
    queryFn: () => getContacts(category),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ContactsPageClient />
    </HydrationBoundary>
  );
}
