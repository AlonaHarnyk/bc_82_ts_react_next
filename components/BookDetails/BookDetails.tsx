import { Book } from '@/types/books';

interface BookDetailsProps {
  book: Book;
}

export default function BookDetails({ book }: BookDetailsProps) {
  const { title, author, year, description } = book;
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{year}</p>
      <p>{description}</p>
    </div>
  );
}
