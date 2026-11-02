import { Field, Form, Formik } from 'formik';
import type { Book } from '../../types/book';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateBook } from '../../services/booksApi';

interface UpdateBookFormProps {
  book: Book;
}

export default function UpdateBookForm({ book }: UpdateBookFormProps) {
  const initialValues = {
    title: book.title,
    author: book.author,
    year: book.year,
    description: book.description,
  };

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updateBook,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['books'],
      });
    },
  });

  const handleSubmit = (values: BookData) => {
    mutate({ ...values, id: book.id });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label>
          Title
          <Field name="title" type="text" />
        </label>
        <label>
          Author
          <Field name="author" type="text" />
        </label>
        <label>
          Year
          <Field name="year" type="number" />
        </label>
        <label>
          Description
          <Field as="textarea" name="description" type="text" />
        </label>
        <button type="submit">Update book</button>
      </Form>
    </Formik>
  );
}
