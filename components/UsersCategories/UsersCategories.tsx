import Link from 'next/link';
import css from './UsersCategories.module.css';

export default function UsersCategories() {
  return (
    <ul className={css.list}>
      <li>
        <Link href="/users/filter/all" className={css.link}>
          All
        </Link>
      </li>
      <li>
        <Link href="/users/filter/is-online" className={css.link}>
          Is online
        </Link>
      </li>
      <li>
        <Link href="/users/filter/is-offline" className={css.link}>
          Is offline
        </Link>
      </li>
    </ul>
  );
}
