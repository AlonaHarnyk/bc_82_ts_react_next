import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../../services/booksApi";
import BooksList from "../BooksList/BooksList";
import ErrorNotification from "../ErrorNotification/ErrorNotification";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
import { useState } from "react";

export default function Books() {
  const [description, setDescription] = useState("");

  const {
    data: books,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  const openModal = (description: string) => {
    setDescription(description);
  };

  const closeModal = () => {
    setDescription("");
  };

  return (
    <>
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
    </>
  );
}
