interface ContactsLayoutProps {
  children: React.ReactNode;
  contactsSideBar: React.ReactNode;
  contactsModal: React.ReactNode;
}

export default function ContactsLayout({
  children,
  contactsSideBar,
  contactsModal,
}: ContactsLayoutProps) {
  return (
    <>
      {contactsSideBar}
      {children}
      {contactsModal}
    </>
  );
}
