import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from 'formik';
import css from './AddContactForm.module.css';
import * as Yup from 'yup';

type Hobbies = 'sport' | 'reading' | 'travelling';

const addContactValidatiomSchema = Yup.object().shape({
  name: Yup.string().required('This field is required'),
  number: Yup.string().required('This field is required'),
  hasWork: Yup.string().oneOf(['true', 'false']),
  city: Yup.string().required('This field is required'),
  job: Yup.string().required('This field is required'),
  hobbies: Yup.array().of(
    Yup.string().oneOf(['sport', 'reading', 'travelling'])
  ),
  email: Yup.string().email().required('This field is required'),
  sex: Yup.string().oneOf(['male', 'female']),
  description: Yup.string(),
});

interface FormValues {
  name: string;
  number: string;
  hasWork: 'true' | 'false'; //radio
  city: string;
  job: string;
  hobbies: Hobbies[]; // checkbox
  email: string;
  sex: 'male' | 'female'; // select
  description: string;
}

const initialValues: FormValues = {
  name: '',
  number: '',
  hasWork: 'false',
  city: '',
  job: '',
  hobbies: ['sport'],
  email: '',
  sex: 'male',
  description: '',
};

export default function AddContactForm() {
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addContactValidatiomSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
        <label>
          Number
          <Field type="phone" name="number" />
          <ErrorMessage name="number" component="span" className={css.error} />
        </label>
        <label>
          City
          <Field type="text" name="city" />
          <ErrorMessage name="city" component="span" className={css.error} />
        </label>
        <label>
          Job
          <Field type="text" name="job" />
          <ErrorMessage name="job" component="span" className={css.error} />
        </label>
        <label>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="span" className={css.error} />
        </label>
        <fieldset>
          <legend>Hobbies</legend>
          <label className={css.checboxLabel}>
            <Field type="checkbox" name="hobbies" value="sport" />
            Sport
          </label>
          <label className={css.checboxLabel}>
            <Field type="checkbox" name="hobbies" value="reading" />
            Reading
          </label>
          <label className={css.checboxLabel}>
            <Field type="checkbox" name="hobbies" value="travelling" />
            Travelling
          </label>
          <ErrorMessage name="hobbies" component="span" className={css.error} />
        </fieldset>
        <label>
          Sex
          <Field as="select" name="sex">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Field>
          <ErrorMessage name="sex" component="span" className={css.error} />
        </label>
        <fieldset>
          <legend>Has work</legend>
          <label className={css.checboxLabel}>
            <Field type="radio" name="hasWork" value="true" />
            Yes
          </label>
          <label className={css.checboxLabel}>
            <Field type="radio" name="hasWork" value="false" />
            No
          </label>
          <ErrorMessage name="hasWork" component="span" className={css.error} />
        </fieldset>
        <label>
          Description
          <Field as="textarea" name="description"></Field>
          <ErrorMessage
            name="description"
            component="span"
            className={css.error}
          />
        </label>
        <button type="submit">Save contact</button>
      </Form>
    </Formik>
  );
}
