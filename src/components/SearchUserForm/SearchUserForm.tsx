interface SearchUserFormProps {
  onSearh: (query: string) => void;
}
export default function SearchUserForm({ onSearh }: SearchUserFormProps) {
  const handleSubmit = (data: FormData) => {
    const query = data.get('query') as string;
    if (query.trim().length > 0) {
      onSearh(query);
    }
  };
  return (
    <form action={handleSubmit}>
      <input type="text" name="query" id="searchId" />
      <button>Search</button>
    </form>
  );
}
