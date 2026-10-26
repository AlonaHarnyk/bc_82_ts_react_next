import { useState } from "react";
import { getUsers } from "../../services/usersApi";
import Button from "../Button/Button";
import type { User } from "../../types/users";
import UsersList from "../UsersList/usersList";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function showUsers() {
    try {
      setIsLoading(true);
      setIsError(false);
      const users = await getUsers();
      setUsers(users);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {users.length === 0 && (
        <Button textContent="Show users" handleClick={showUsers} />
      )}
      <UsersList users={users} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
    </>
  );
}

// Створити компонент App, в якому рендерити кнопку Show users, при натисканні на яку робити запит на бекенд за адресою https://6240d2109b450ae274385b44.mockapi.io/api/users і рендерити список користувачів. Кнопка Show users має зникнути після того, як список відрендериться.
