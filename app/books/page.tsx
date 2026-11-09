import BookList from "@/components/BookList/BookList";
import getBooks from "@/lib/api/booksApi";

export default async function Books() {
  const books = await getBooks();

  return <BookList books={books} />;
}
