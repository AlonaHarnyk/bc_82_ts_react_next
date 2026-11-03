import { ErrorMessage, Field, Form, Formik } from 'formik';
import type { Book } from '../../types/book';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateBook } from '../../services/booksApi';
import css from './UpdateBookForm.module.css';
import * as Yup from 'yup';

const updateBookFormSchema = Yup.object().shape({
  author: Yup.string().min(2, 'minimum 2 symbols').required('Is required'),
  title: Yup.string().min(5, 'minimum 5 symbols').required('Is required'),
  year: Yup.number().required('Is required'),
  description: Yup.string().required('Is required'),
});

interface UpdateBookFormProps {
  book: Book;
  onCloseForm: () => void;
}

interface FormValues {
  author: string;
  title: string;
  year: number;
  description: string;
}

export default function UpdateBookForm({
  book,
  onCloseForm,
}: UpdateBookFormProps) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updateBook,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['books'],
      });
      onCloseForm();
    },
    onError: () => console.log('Update error'),
  });

  const initialValues = {
    title: book.title,
    author: book.author,
    year: book.year,
    description: book.description,
  };

  const handleSubmit = (values: FormValues) => {
    mutate({ ...values, id: book.id });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={updateBookFormSchema}
    >
      <Form>
        <label>
          Title
          <Field name="title" type="text" />
          <ErrorMessage name="title" component="span" className={css.error} />
        </label>
        <label>
          Author
          <Field name="author" type="text" />
          <ErrorMessage name="author" component="span" className={css.error} />
        </label>
        <label>
          Year
          <Field name="year" type="number" />
          <ErrorMessage name="year" component="span" className={css.error} />
        </label>
        <label>
          Description
          <Field
            as="textarea"
            name="description"
            type="text"
            className={css.error}
          />
          <ErrorMessage
            name="description"
            component="span"
            className={css.error}
          />
        </label>
        <button type="submit">Update book</button>
      </Form>
    </Formik>
  );
}
