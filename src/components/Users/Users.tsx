import { useState } from "react";
import getUsers from "../../services/usersApi";
import Button from "../Button/Button";
import UsersList from "../UsersList/UsersList";
import { useQuery } from "@tanstack/react-query";
import ErrorNotification from "../ErrorNotification/ErrorNotification";
import Loader from "../Loader/Loader";
import AddUserForm from "../AddUserForm/AddUserForm";

export default function Users() {
  const [isUsersVisible, setIsUsersVisible] = useState(false);

  const {
    data: users,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["Users"],
    queryFn: getUsers,
    enabled: isUsersVisible,
  });

  return (
    <>
      <AddUserForm />
      <Button
        handleClick={() => setIsUsersVisible(!isUsersVisible)}
        textContent={isUsersVisible ? "Hide users" : "Show users"}
      />
      {isUsersVisible && users && users.length > 0 && (
        <UsersList users={users} />
      )}
      {isError && (
        <ErrorNotification message="Something went wrong during loading" />
      )}
      {isLoading && <Loader />}
    </>
  );
}
