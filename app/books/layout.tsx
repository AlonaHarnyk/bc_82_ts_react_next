import BooksCategories from "@/components/BooksCategories/BooksCategories";

interface BooksLayoutProps {
  children: React.ReactNode;
}

export default function BooksLayout({ children }: BooksLayoutProps) {
  return (
    <>
      <BooksCategories />
      {children}
    </>
  );
}
