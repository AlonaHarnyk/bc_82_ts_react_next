import css from './layout.module.css';

interface UsersLayoutProps {
  children: React.ReactNode;
  usersSideBar: React.ReactNode;
  usersModal: React.ReactNode;
}

export default function UsersLayout({
  children,
  usersSideBar,
  usersModal,
}: UsersLayoutProps) {
  return (
    <div>
      {usersSideBar}
      {children}
      {usersModal}
    </div>
  );
}
