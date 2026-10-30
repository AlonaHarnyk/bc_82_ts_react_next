import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./AddUserForm.module.css";

interface FormValues {
  username: string;
  email: string;
}

const initialValues: FormValues = {
  username: "",
  email: "",
};

const formValuesSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Minimum length is 2 characters")
    .required("Is required"),
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Is required"),
});

export default function AddUserForm() {
  function handleSubmit(
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) {
    console.log(values);
    actions.resetForm();
  }

  const id = useId();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={formValuesSchema}
    >
      <Form>
        <label htmlFor={`username-${id}`}>Username:</label>
        <Field name="username" id={`username-${id}`} />
        <ErrorMessage name="username" component="span" className={css.error} />

        <label htmlFor={`email-${id}`}>Email:</label>
        <Field name="email" id={`email-${id}`} />
        <ErrorMessage name="email" component="span" className={css.error} />
        <button type="submit">Create user</button>
      </Form>
    </Formik>
  );
}
