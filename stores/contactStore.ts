import { ContactData } from "@/types/contacts";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ContactStore {
  contactDraft: ContactData;
  setContactDraft: (contactDraft: ContactData) => void;
  clearContactDraft: () => void;
}

const initialContactDraft: ContactData = {
  name: "",
  city: "",
  sex: "",
  description: "",
};

export const useContactStore = create<ContactStore>()(
  persist(
    (set) => {
      return {
        contactDraft: initialContactDraft,
        setContactDraft: (contactDraft: ContactData) => {
          set({ contactDraft });
        },
        clearContactDraft: () => {
          set({ contactDraft: initialContactDraft });
        },
      };
    },
    {
      name: "contact",
      partialize: (store) => ({ contactDraft: store.contactDraft }),
    },
  ),
);
