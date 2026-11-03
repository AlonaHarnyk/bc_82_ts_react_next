interface ContactsSearchFormProps {
  query: string;
  onSearch: (query: string) => void;
}

export default function ContactsSearchForm({
  query,
  onSearch,
}: ContactsSearchFormProps) {
  return (
    <input
      type="text"
      defaultValue={query}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
