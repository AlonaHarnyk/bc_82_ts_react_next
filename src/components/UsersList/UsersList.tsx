import type { User } from "../../types/user";

interface UsersListProps {
  users: User[];
}

export default function UsersList({ users }: UsersListProps) {
  return (
    <ul>
      {users.map(({ name, email, isOnline, id }) => {
        return (
          <li key={id}>
            <p>{name}</p>
            <p>{email}</p>
            <p>Is Online: {isOnline ? "Yes" : "No"}</p>
          </li>
        );
      })}
    </ul>
  );
}
