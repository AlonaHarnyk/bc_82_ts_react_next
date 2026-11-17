import { create } from "zustand";

interface BookStoreData {
  author: string;
  title: string;
  year: string;
  description: string;
}

interface BookStore {
  draft: BookStoreData;
  setDraft: (draft: BookStoreData) => void;
  clearDraft: () => void;
}

const initialBookDraft: BookStoreData = {
  author: "",
  title: "",
  year: "",
  description: "",
};

export const useBookStore = create<BookStore>()((set) => {
  return {
    draft: initialBookDraft,
    setDraft: (draft) => {
      set(() => ({ draft }));
    },
    clearDraft: () => {
      set(() => ({ draft: initialBookDraft }));
    },
  };
});
