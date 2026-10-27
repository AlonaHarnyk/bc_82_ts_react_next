import { useEffect, useState } from "react";
import { getBooks } from "../../services/booksApi";
import type { Book } from "../../types/book";
import BooksList from "../BooksList/BooksList";
import ErrorNotification from "../ErrorNotification/ErrorNotification";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
import Users from "../Users/Users";

export default function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState("");

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

  const openModal = (description: string) => {
    setDescription(description);
  };

  const closeModal = () => {
    setDescription("");
  };

  return (
    <>
      {/* <BooksList onOpenModal={openModal} books={books} />
      {isLoading && <Loader />}
      {isError && <ErrorNotification message="Something went wrong" />}
      {description && description.length > 0 && (
        <Modal onClose={closeModal}>
          <p>{description}</p>
        </Modal>
      )} */}
      <Users />
    </>
  );
}

// До кожного елемента списку додати кнопку View description, при натисканні на яку має відкриватись модальне вікно з описом, яка має закриватись кпопкою Close, клавішею Esc, а також клікои по бекдропу
