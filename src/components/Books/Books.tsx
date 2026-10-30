import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../../services/booksApi";
import BooksList from "../BooksList/BooksList";
import ErrorNotification from "../ErrorNotification/ErrorNotification";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
import { useState } from "react";
import SearchBooks from "../SearchBooks/SearchBooks";
import Pagination from "../Pagination/Pagination";
import AddBookForm from "../AddBookForm/AddBookForm";
import Button from "../Button/Button";

export default function Books() {
  const [description, setDescription] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const {
    data: books,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["books", searchQuery, currentPage],
    queryFn: () => getBooks(searchQuery, currentPage),
  });

  const openModal = (description: string) => {
    setDescription(description);
  };

  const closeModal = () => {
    setDescription("");
  };

  const searchBooks = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const changeCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  const openForm = () => {
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  return (
    <>
      <SearchBooks onSearch={searchBooks} />
      <Pagination
        totalPages={6}
        currentPage={currentPage}
        onPageChange={changeCurrentPage}
      />
      {books && books.length > 0 && (
        <BooksList onOpenModal={openModal} books={books} />
      )}

      {isLoading && <Loader />}
      {isError && <ErrorNotification message="Something went wrong" />}
      {description && description.length > 0 && (
        <Modal onClose={closeModal}>
          <p>{description}</p>
        </Modal>
      )}
      <Button textContent="Open form" handleClick={openForm} />
      {isFormVisible && <AddBookForm closeForm={closeForm} />}
    </>
  );
}
