import { User } from "@/types/users";

interface UserDetailsProps {
  user: User;
}

export default function UserDetails({ user }: UserDetailsProps) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>Is Online: {user.isOnline ? "Yes" : "No"}</p>
    </div>
  );
}
