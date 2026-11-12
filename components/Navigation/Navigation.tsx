import Link from "next/link";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <ul className={css.navList}>
        <li>
          <Link href="/contacts/filter/all">Contacts</Link>
        </li>
        <li>
          <Link href="/books/filter/all">Books</Link>
        </li>
        <li>
          <Link href="/users/filter/all">Users</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
