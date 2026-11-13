import Header from "@/components/Header/Header";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {children}
        </TanStackProvider>
      </body>
    </html>
  );
}
