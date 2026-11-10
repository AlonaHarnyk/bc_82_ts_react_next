import { Book } from '@/types/books';
import axios from 'axios';

const booksApi = axios.create({
  baseURL: 'https://6971cf4a32c6bacb12c49096.mockapi.io',
});

export async function getBooks(): Promise<Book[]> {
  const { data } = await booksApi.get<Book[]>('/books');
  return data;
}

export async function getSingleBook(id: string): Promise<Book> {
  const { data } = await booksApi.get<Book>(`/books/${id}`);
  return data;
}
