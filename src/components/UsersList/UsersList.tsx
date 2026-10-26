import type { User } from "../../types/users";

interface UsersListProps {
  users: User[];
}

export default function UsersList({ users }: UsersListProps) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>Is Online: {user.isOnline ? "Yes" : "  No"}</p>
        </li>
      ))}
    </ul>
  );
}
