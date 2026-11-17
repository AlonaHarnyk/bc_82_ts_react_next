"use client";

import { useBookStore } from "@/stores/bookStore";
import css from "./CreateBookForm.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBook } from "@/lib/api/booksApi";
import { useRouter } from "next/navigation";

export default function CreateBookForm() {
  const { draft, setDraft, clearDraft } = useBookStore();

  const router = useRouter();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      clearDraft();
      router.push("/books/filter/all");
    },
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setDraft({ ...draft, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    mutate({ ...draft, year: Number(draft.year) });
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <label className={css.label}>
        Author
        <input
          type="text"
          name="author"
          value={draft.author}
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        Title
        <input
          type="text"
          name="title"
          value={draft.title}
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        Year
        <input
          type="number"
          name="year"
          value={draft.year}
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        Description
        <textarea
          name="description"
          value={draft.description}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Create book</button>
    </form>
  );
}
