interface UsersLayoutProps {
  children: React.ReactNode;
  usersSideBar: React.ReactNode;
}

export default function UsersLayout({
  children,
  usersSideBar,
}: UsersLayoutProps) {
  return (
    <div>
      {usersSideBar}
      {children}
    </div>
  );
}
