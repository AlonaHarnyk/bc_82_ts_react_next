"use client";

import ContactList from "@/components/ContactList/ContactList";
import ErrorNotification from "@/components/ErrorNotification/ErrorNotification";
import Loader from "@/components/Loader/Loader";
import { getContacts } from "@/lib/api/contactsApi";
import { getCategoriesParam } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function ContactsPageClient() {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoriesParam(slug[0]);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["contacts", category],
    queryFn: () => getContacts(category),
    refetchOnMount: false,
  });

  return (
    <>
      {isError && <ErrorNotification />}
      {isLoading && <Loader />}
      {data && <ContactList contacts={data} />}
    </>
  );
}
