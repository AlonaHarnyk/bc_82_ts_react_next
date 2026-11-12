import ContactsCategories from "@/components/ContactsCategories/ContactsCategories";

interface ContactsLayoutProps {
  children: React.ReactNode;
}

export default function ContactsLayout({ children }: ContactsLayoutProps) {
  return (
    <>
      <ContactsCategories />
      {children}
    </>
  );
}
