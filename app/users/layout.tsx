import UsersCategories from '@/components/UsersCategories/UsersCategories';

interface UsersLayoutProps {
  children: React.ReactNode;
}

export default function UsersLayout({ children }: UsersLayoutProps) {
  return (
    <div>
      <UsersCategories />
      {children}
    </div>
  );
}
