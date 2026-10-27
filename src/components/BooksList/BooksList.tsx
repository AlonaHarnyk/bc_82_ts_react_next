import type { Book } from "../../types/book";
import Button from "../Button/Button";

interface BooksListProps {
  books: Book[];
  onOpenModal: (description: string) => void;
}
export default function BooksList({ books, onOpenModal }: BooksListProps) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.year}</p>
          <Button
            handleClick={() => onOpenModal(book.description)}
            textContent="View description"
          />
        </li>
      ))}
    </ul>
  );
}
