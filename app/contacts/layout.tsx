interface ContactsLayoutProps {
  children: React.ReactNode;
  contactsSideBar: React.ReactNode;
}

export default function ContactsLayout({
  children,
  contactsSideBar,
}: ContactsLayoutProps) {
  return (
    <>
      {contactsSideBar}
      {children}
    </>
  );
}
