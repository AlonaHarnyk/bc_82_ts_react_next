interface SearchBooksProps {
  query: string;
  onSearch: (query: string) => void;
}

export default function SearchBooks({ query, onSearch }: SearchBooksProps) {
  return (
    <input
      defaultValue={query}
      type="text"
      name="query"
      onChange={e => onSearch(e.target.value)}
    />
  );
}
