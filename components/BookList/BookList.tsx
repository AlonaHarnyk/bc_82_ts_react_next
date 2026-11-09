import { Book } from "@/types/books";
import css from "./BookList.module.css";

interface BookListProps {
  books: Book[];
}

export default function BookList({ books }: BookListProps) {
  return (
    <ul>
      {books.map(({ author, title, year, description, id }) => {
        return (
          <li key={id} className={css.booksItem}>
            <p>{author}</p>
            <p>{title}</p>
            <p>{year}</p>
            <p>{description}</p>
          </li>
        );
      })}
    </ul>
  );
}
