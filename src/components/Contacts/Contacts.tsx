import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { getContacts, type Order } from "../../services/contactsApi";
import ContactsList from "../ContactsList/ContactsList";
import ContactsSearchForm from "../ContactsSearchForm/ContactsSearchForm";
import ErrorNotification from "../ErrorNotification/ErrorNotification";
import Loader from "../Loader/Loader";
import SortNameSelect from "../SortNameSelect/SortNameSelect";

export default function Contacts() {
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState<Order>("asc");

  const {
    data: contacts,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["contacts", query, order],
    queryFn: () => getContacts(query, order),
  });

  // const onSearch = (query: string) => {
  //   setQuery(query);
  // };

  const onSearchDebounced = useDebouncedCallback(setQuery, 1000);

  const onSort = (query: Order) => {
    setOrder(query);
  };

  return (
    <>
      {/* <AddContactForm /> */}
      <ContactsSearchForm query={query} onSearch={onSearchDebounced} />
      <SortNameSelect order={order} onSort={onSort} />
      {contacts && contacts.length > 0 && <ContactsList contacts={contacts} />}
      {isError && (
        <ErrorNotification message="Something went wrong during loading" />
      )}
      {isLoading && <Loader />}
    </>
  );
}
