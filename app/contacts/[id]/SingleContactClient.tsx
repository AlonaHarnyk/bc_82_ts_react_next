"use client";

import ContactDetails from "@/components/ContactDetails/ContactDetails";
import ErrorNotification from "@/components/ErrorNotification/ErrorNotification";
import Loader from "@/components/Loader/Loader";
import { getContactById } from "@/lib/api/contactsApi";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import css from "./SingleContactClient.module.css";

export default function SingleContactClient() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const {
    data: contact,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["contact", id],
    queryFn: () => getContactById(id),
    refetchOnMount: false,
  });

  return (
    <>
      {contact && <ContactDetails contact={contact} />}
      {isError && <ErrorNotification />}
      {isLoading && <Loader />}
      <button className={css.btn} onClick={() => router.back()}>
        Back
      </button>
    </>
  );
}
