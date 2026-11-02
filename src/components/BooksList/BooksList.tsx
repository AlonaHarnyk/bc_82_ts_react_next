import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Book } from '../../types/book';
import Button from '../Button/Button';
import { deleteBook } from '../../services/booksApi';
import UpdateBookForm from '../UpdateBookForm/UpdateBookForm';

interface BooksListProps {
  books: Book[];
  onOpenModal: (description: string) => void;
}

export default function BooksList({ books, onOpenModal }: BooksListProps) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteBook,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['books'],
      });
    },
  });

  const onDelete = (id: string) => {
    mutate(id);
  };

  return (
    <ul>
      {books.map(({ id, title, author, year, description }) => (
        <li key={id}>
          <h3>{title}</h3>
          <p>{author}</p>
          <p>{year}</p>
          <Button
            handleClick={() => onOpenModal(description)}
            textContent="View description"
          />
          <Button textContent="Delete book" handleClick={() => onDelete(id)} />
          <Button textContent="Update book" handleClick={} />
          {/* <UpdateBookForm /> */}
        </li>
      ))}
    </ul>
  );
}
