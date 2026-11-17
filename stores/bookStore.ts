import { create } from "zustand";
import { persist } from "zustand/middleware";

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

export const useBookStore = create<BookStore>()(
  persist(
    (set) => {
      return {
        draft: initialBookDraft,
        setDraft: (draft) => {
          set({ draft });
        },
        clearDraft: () => {
          set({ draft: initialBookDraft });
        },
      };
    },
    {
      name: "book",
      partialize: (store) => ({ draft: store.draft }),
    },
  ),
);
