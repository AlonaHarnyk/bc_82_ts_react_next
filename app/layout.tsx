import Header from "@/components/Header/Header";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

interface RootLayoutProps {
  children: React.ReactNode;
  booksModal: React.ReactNode;
}

export default function RootLayout({ children, booksModal }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {children}
          {booksModal}
        </TanStackProvider>
      </body>
    </html>
  );
}
