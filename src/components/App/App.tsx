import { useEffect, useState } from 'react';
import { getBooks } from '../../services/booksApi';
import type { Book } from '../../types/book';
import BooksList from '../BooksList/BooksList';
import Loader from '../Loader/loader';
import ErrorNotification from '../ErrorNotification/ErrorNotification';

export default function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchBooks() {
      try {
        setIsError(false);
        setIsLoading(true);
        const books = await getBooks();
        setBooks(books);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBooks();
  }, []);

  return (
    <>
      <BooksList books={books} />
      {isLoading && <Loader />}
      {isError && <ErrorNotification message="Something went wrong" />}
    </>
  );
}

// На підставі отриманих даних відрендерити список книг.
// Кожен елемент списку має містити інформацію про назву книги, автора, рік видання.
