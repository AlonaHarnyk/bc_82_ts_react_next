import { Book } from '@/types/books';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './EditBookForm.module.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBook } from '@/lib/api/booksApi';

const EditBooksFormSchema = Yup.object().shape({
  title: Yup.string().required(),
  author: Yup.string().required(),
  year: Yup.number().required(),
  description: Yup.string().required(),
});

interface EditBookFormProps {
  book: Book;
}

interface BooksValues {
  author: string;
  title: string;
  year: number;
  description: string;
}

export default function EditBookForm({ book }: EditBookFormProps) {
  const initialValues: BooksValues = {
    author: book.author,
    title: book.title,
    year: book.year,
    description: book.description,
  };

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['singleBook'] });
      queryClient.invalidateQueries({
        queryKey: ['books'],
        refetchType: 'all',
      });
    },
  });

  const handleSubmit = (values: BooksValues) => {
    mutate({ id: book.id, body: values });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={EditBooksFormSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Title
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="span" className={css.error} />
          </label>
          <label className={css.label}>
            Author
            <Field type="text" name="author" />
            <ErrorMessage
              name="author"
              component="span"
              className={css.error}
            />
          </label>
          <label className={css.label}>
            Year
            <Field type="number" name="year" />
            <ErrorMessage name="year" component="span" className={css.error} />
          </label>
          <label className={css.label}>
            Description
            <Field as="textarea" name="description" />
            <ErrorMessage
              name="description"
              component="span"
              className={css.error}
            />
          </label>
          <button>Save book</button>
        </Form>
      </Formik>
    </>
  );
}
