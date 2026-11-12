import { Book } from "@/types/books";
import axios from "axios";

const booksApi = axios.create({
  baseURL: "https://6971cf4a32c6bacb12c49096.mockapi.io",
});

interface UpdateBookBody {
  author: string;
  title: string;
  year: number;
  description: string;
}

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
  body: UpdateBookBody;
}

export async function updateBook({ id, body }: UpdateBookParam): Promise<Book> {
  const { data } = await booksApi.put<Book>(`/books/${id}`, body);
  return data;
}
