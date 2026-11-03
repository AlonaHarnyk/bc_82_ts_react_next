import { useState } from "react";
import { getUsers } from "../../services/usersApi";
import Button from "../Button/Button";
import UsersList from "../UsersList/UsersList";
import { useQuery } from "@tanstack/react-query";
import ErrorNotification from "../ErrorNotification/ErrorNotification";
import Loader from "../Loader/Loader";
import AddUserForm from "../AddUserForm/AddUserForm";
import UserSearchForm from "../UserSearchForm/UserSearchForm";
import { useDebounce, useDebouncedCallback } from "use-debounce";

export default function Users() {
  const [isUsersVisible, setIsUsersVisible] = useState(false);
  const [query, setQuery] = useState("");

  const {
    data: users,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["users", query],
    queryFn: () => getUsers(query),
    enabled: isUsersVisible,
  });

  const onUserSearchDebounce = useDebouncedCallback(setQuery, 2000);

  return (
    <>
      <AddUserForm />
      <Button
        handleClick={() => setIsUsersVisible(!isUsersVisible)}
        textContent={isUsersVisible ? "Hide users" : "Show users"}
      />
      {isUsersVisible && users && users.length > 0 && (
        <>
          <UserSearchForm query={query} onUserSearch={onUserSearchDebounce} />
          <UsersList users={users} />
        </>
      )}
      {isError && (
        <ErrorNotification message="Something went wrong during loading" />
      )}
      {isLoading && <Loader />}
    </>
  );
}
