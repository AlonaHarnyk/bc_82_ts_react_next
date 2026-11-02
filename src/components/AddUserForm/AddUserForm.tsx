import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./AddUserForm.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../../services/usersApi";

interface FormValues {
  name: string;
  email: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
};

const formValuesSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Minimum length is 2 characters")
    .required("Is required"),
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Is required"),
});

export default function AddUserForm() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });

  function handleSubmit(
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) {
    mutate({ ...values, isOnline: false });
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
        <label htmlFor={`name-${id}`}>Username:</label>
        <Field name="name" id={`name-${id}`} />
        <ErrorMessage name="name" component="span" className={css.error} />

        <label htmlFor={`email-${id}`}>Email:</label>
        <Field name="email" id={`email-${id}`} />
        <ErrorMessage name="email" component="span" className={css.error} />
        <button type="submit">Create user</button>
      </Form>
    </Formik>
  );
}
