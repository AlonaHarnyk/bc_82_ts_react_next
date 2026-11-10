import { Book } from '@/types/books';
import css from './BookList.module.css';
import Link from 'next/link';

interface BookListProps {
  books: Book[];
}

export default function BookList({ books }: BookListProps) {
  return (
    <ul>
      {books.map(({ author, title, year, description, id }) => {
        return (
          <li key={id} className={css.booksItem}>
            <Link href={`/books/${id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
