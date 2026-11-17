'use client';
import css from './CreateUserForm.module.css';

export default function CreateUserForm() {
  return (
    <form className={css.form}>
      <label className={css.label}>
        Name
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <button>Create user</button>
    </form>
  );
}
