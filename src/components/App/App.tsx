import { useEffect, useState } from "react";
import { getBooks } from "../../services/booksApi";
import type { Book } from "../../types/book";
import BooksList from "../BooksList/BooksList";
import ErrorNotification from "../ErrorNotification/ErrorNotification";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";

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

  const openModal = (description: string) => {};

  return (
    <>
      <BooksList books={books} />
      {isLoading && <Loader />}
      {isError && <ErrorNotification message="Something went wrong" />}
      <Modal>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quod?
        </p>
      </Modal>
    </>
  );
}

// До кожного елемента списку додати кнопку View description, при натисканні на яку має відкриватись модальне вікно з описом, яка має закриватись кпопкою Close, клавішею Esc, а також клікои по бекдропу
