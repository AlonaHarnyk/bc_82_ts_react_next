import type { Book } from '../../types/book';

interface BooksListProps {
  books: Book[];
}
export default function BooksList({ books }: BooksListProps) {
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.year}</p>
        </li>
      ))}
    </ul>
  );
}
