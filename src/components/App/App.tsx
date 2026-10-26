import { useState } from "react";
import { getUsers } from "../../services/usersApi";
import Button from "../Button/Button";
import type { User } from "../../types/users";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  async function showUsers() {
    const users = await getUsers();
    setUsers(users);
  }
  return <Button textContent="Show users" handleClick={showUsers} />;
}
