import { User } from "@/types/users";
import css from "./UserList.module.css";

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  return (
    <ul>
      {users.map(({ name, email, id }) => (
        <li key={id} className={css.userItem}>
          <p>{name}</p>
          <p>{email}</p>
        </li>
      ))}
    </ul>
  );
}
