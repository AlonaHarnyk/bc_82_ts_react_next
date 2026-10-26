import { useState } from 'react';
import { getUsers } from '../../services/usersApi';
import Button from '../Button/Button';
import type { User } from '../../types/users';
import UsersList from '../UsersList/UsersList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import AddUserForm from '../AddUserForm/AddUserForm';

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

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

  function onAddUserClick() {
    setIsFormVisible(true);
  }

  function hideAddUserForm() {
    setIsFormVisible(false);
  }

  return (
    <>
      {users.length === 0 && (
        <Button textContent="Show users" handleClick={showUsers} />
      )}
      <UsersList users={users} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {isFormVisible ? (
        <AddUserForm onFormSummit={hideAddUserForm} />
      ) : (
        <Button textContent="Add User" handleClick={onAddUserClick} />
      )}
    </>
  );
}

// Cтворити форму додавання користувача (форма має містити
// 2 текстових інпути - для введення імені та пошти). Форма має відкриватись по кнопці Add user,
// яка має рендеритись під списком юзерів (за уиови, що останній відрендерений).
// Коли форма відкрита, кнопка Add user має зникнути. При сабміті форми дані мають
// виводитись в консоль, форма зникати, натомість повертатись кнопка Add user.
