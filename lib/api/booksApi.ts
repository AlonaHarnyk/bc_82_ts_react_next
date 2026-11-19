import { Book, BookData } from "@/types/books";
import axios from "axios";

const booksApi = axios.create({
  baseURL: "http://localhost:3000/api",
});

export async function getBooks(isRead?: boolean): Promise<Book[]> {
  const { data } = await booksApi.get<Book[]>("/books", {
    params: {
      isRead,
    },
  });
  return data;
}

export async function getSingleBook(id: string): Promise<Book> {
  const { data } = await booksApi.get<Book>(`/books/${id}`);
  return data;
}

interface UpdateBookParam {
  id: string;
  body: BookData;
}

export async function updateBook({ id, body }: UpdateBookParam): Promise<Book> {
  const { data } = await booksApi.put<Book>(`/books/${id}`, body);
  return data;
}

export async function createBook(bookData: BookData): Promise<Book> {
  const { data } = await booksApi.post<Book>("/books", bookData);
  return data;
}
