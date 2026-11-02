import axios from 'axios';
import type { Book, BookData } from '../types/book';

const booksApi = axios.create({
  baseURL: 'https://6971cf4a32c6bacb12c49096.mockapi.io',
});

export async function getBooks(
  query: string,
  currentPage: number
): Promise<Book[]> {
  const { data } = await booksApi.get<Book[]>('/books', {
    params: {
      search: query,
      limit: 5,
      page: currentPage,
    },
  });
  return data;
}

export async function addBook(bookData: BookData): Promise<Book> {
  const { data } = await booksApi.post<Book>('/books', bookData);
  return data;
}

export async function deleteBook(id: string): Promise<Book> {
  const { data } = await booksApi.delete<Book>(`/books/${id}`);
  return data;
}

export async function updateBook({ id, ...bookData }: Book): Promise<Book> {
  const { data } = await booksApi.put<Book>(`/books/${id}`, bookData);
  return data;
}
