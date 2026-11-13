interface BooksLayoutProps {
  children: React.ReactNode;
  booksSideBar: React.ReactNode;
}

export default function BooksLayout({
  children,
  booksSideBar,
}: BooksLayoutProps) {
  return (
    <>
      {booksSideBar}
      {children}
    </>
  );
}
