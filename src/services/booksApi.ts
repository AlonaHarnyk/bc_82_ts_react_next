import axios from 'axios';
import type { Book } from '../types/book';

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
