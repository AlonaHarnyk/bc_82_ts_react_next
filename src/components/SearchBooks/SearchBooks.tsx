interface SearchBooksProps {
  onSearch: (query: string) => void;
}

export default function SearchBooks({ onSearch }: SearchBooksProps) {
  const handleSubmit = (data: FormData) => {
    const query = data.get('query') as string;
    if (query.trim().length === 0) {
      alert('Search text can not be empty');
      return;
    }
    onSearch(query);
  };
  return (
    <form action={handleSubmit}>
      <input type="text" name="query" />
      <button>Search</button>
    </form>
  );
}
