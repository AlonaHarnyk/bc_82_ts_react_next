import css from "./CreateBook.module.css";
// import { createBook } from "@/lib/api/booksApi";

export default function CreateBook() {
  return (
    <form className={css.form}>
      <label className={css.label}>
        Author
        <input type="text" name="author" />
      </label>
      <label className={css.label}>
        Title
        <input type="text" name="title" />
      </label>
      <label className={css.label}>
        Year
        <input type="number" name="year" />
      </label>
      <label className={css.label}>
        Description
        <textarea name="description" />
      </label>
      <button type="submit">Create book</button>
    </form>
  );
}
