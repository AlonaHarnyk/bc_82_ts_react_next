import Header from '@/components/Header/Header';
import './globals.css';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import css from './layout.module.css';

interface RootLayoutProps {
  children: React.ReactNode;
  booksModal: React.ReactNode;
}

export default function RootLayout({ children, booksModal }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <div className={css.container}>
            <Header />
            {children}
            {booksModal}
          </div>
        </TanStackProvider>
      </body>
    </html>
  );
}
