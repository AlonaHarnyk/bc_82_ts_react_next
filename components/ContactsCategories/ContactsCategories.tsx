import Link from "next/link";
import css from "./ContactsCategories.module.css";

export default function ContactsCategories() {
  return (
    <ul className={css.categoriesList}>
      <li>
        <Link className={css.link} href={`/contacts/filter/all`}>
          All
        </Link>
      </li>
      <li>
        <Link className={css.link} href={`/contacts/filter/with-work`}>
          With work
        </Link>
      </li>
      <li>
        <Link className={css.link} href={`/contacts/filter/without-work`}>
          Without work
        </Link>
      </li>
    </ul>
  );
}
