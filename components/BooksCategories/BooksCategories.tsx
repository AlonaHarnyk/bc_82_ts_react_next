import Link from "next/link";
import css from "./BooksCategories.module.css";

export default function BooksCategories() {
  return (
    <ul className={css.list}>
      <li>
        <Link className={css.link} href="/books/filter/all">
          All
        </Link>
      </li>
      <li>
        <Link className={css.link} href="/books/filter/read">
          Read
        </Link>
      </li>
      <li>
        <Link className={css.link} href="/books/filter/unread">
          Unread
        </Link>
      </li>
    </ul>
  );
}
