import UserList from "@/components/UserList/UserList";
import getUsers from "@/lib/api/usersApi";

export default async function Users() {
  const users = await getUsers();

  return <UserList users={users} />;
}
