import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../../services/usersApi";
import type { User } from "../../types/user";
import Button from "../Button/Button";

interface UsersListProps {
  users: User[];
}

export default function UsersList({ users }: UsersListProps) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });

  return (
    <ul>
      {users.map(({ name, email, isOnline, id }) => {
        return (
          <li key={id}>
            <p>{name}</p>
            <p>{email}</p>
            <p>Is Online: {isOnline ? "Yes" : "No"}</p>
            <Button textContent="delet user" handleClick={() => mutate(id)} />
          </li>
        );
      })}
    </ul>
  );
}
