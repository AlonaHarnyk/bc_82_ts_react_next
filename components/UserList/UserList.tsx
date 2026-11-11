import { User } from "@/types/users";
import css from "./UserList.module.css";
import Link from "next/link";

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  return (
    <ul>
      {users.map(({ name, id }) => (
        <li key={id} className={css.userItem}>
          <Link href={`/users/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}
