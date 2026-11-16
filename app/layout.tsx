import Header from "@/components/Header/Header";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import css from "./layout.module.css";
import { Metadata } from "next";

interface RootLayoutProps {
  children: React.ReactNode;
  booksModal: React.ReactNode;
}

export const metadata: Metadata = {
  title: "GOIT Practice",
  description: "A training website for practicing frontend development.",

  openGraph: {
    title: "GOIT Practice",
    description: "A training website for practicing frontend development.",
    images: [
      {
        url: "https://picsum.photos/200/300",
        alt: "application alustration",
        width: 50,
        height: 50,
      },
    ],
  },
};

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
