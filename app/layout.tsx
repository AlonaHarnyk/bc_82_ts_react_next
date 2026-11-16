import Header from "@/components/Header/Header";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import css from "./layout.module.css";
import { Metadata } from "next";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  variable: "--roboto-font",
  weight: ["400", "700"],
  subsets: ["latin"],
});

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
      <body className={roboto.variable}>
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
