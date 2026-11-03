interface UserSearchFormProps {
  query: string;
  onUserSearch: (query: string) => void;
}

function UserSearchForm({ query, onUserSearch }: UserSearchFormProps) {
  return (
    <input
      defaultValue={query}
      onChange={(e) => onUserSearch(e.target.value)}
      type="text"
    />
  );
}

export default UserSearchForm;
