import { useEffect, useState } from "react";
import getUsers from "../../services/usersApi";
import type { User } from "../../types/user";
import Button from "../Button/Button";
import UsersList from "../UsersList/UsersList";

export default function Users() {
  const [isUsersVisible, setIsUsersVisible] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const users = await getUsers();
      setUsers(users);
    }

    if (isUsersVisible) {
      fetchUsers();
    }
  }, [isUsersVisible]);

  return (
    <>
      <Button
        handleClick={() => setIsUsersVisible(!isUsersVisible)}
        textContent={isUsersVisible ? "Hide users" : "Show users"}
      />
      {isUsersVisible && <UsersList users={users} />}
    </>
  );
}
