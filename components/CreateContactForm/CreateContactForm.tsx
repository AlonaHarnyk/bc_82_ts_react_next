"use client";

import { useContactStore } from "@/stores/contactStore";
import css from "./CreateContactForm.module.css";

export default function CreateContactForm() {
  // const { contactDraft, setContactDraft, clearContactDraft } =
  //   useContactStore();
  const contactDraft = useContactStore((s) => s.contactDraft);
  const setContactDraft = useContactStore((s) => s.setContactDraft);
  const clearContactDraft = useContactStore((s) => s.clearContactDraft);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setContactDraft({ ...contactDraft, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearContactDraft();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          value={contactDraft.name}
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        City
        <input
          type="string"
          name="city"
          value={contactDraft.city}
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        Sex
        <select name="sex" value={contactDraft.sex} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label className={css.label}>
        Description
        <textarea
          name="description"
          value={contactDraft.description}
          onChange={handleChange}
        ></textarea>
      </label>
      <button type="submit">Create contact</button>
    </form>
  );
}
