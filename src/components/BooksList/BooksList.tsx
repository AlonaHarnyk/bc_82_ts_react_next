import type { Book } from "../../types/book";
import Button from "../Button/Button";

interface BooksListProps {
  books: Book[];
}
export default function BooksList({ books }: BooksListProps) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.year}</p>
          <Button textContent="View description" />
        </li>
      ))}
    </ul>
  );
}
