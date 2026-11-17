import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserStoreData {
  name: string;
  email: string;
}

const initialUserStoreData: UserStoreData = {
  name: '',
  email: '',
};

interface UserStore {
  userDraft: UserStoreData;
  setUserDraft: (data: UserStoreData) => void;
  clearUserDraft: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    set => {
      return {
        userDraft: initialUserStoreData,
        setUserDraft: draft => set({ userDraft: draft }),
        clearUserDraft: () => set({ userDraft: initialUserStoreData }),
      };
    },
    {
      name: 'user',
      partialize: store => ({ userDraft: store.userDraft }),
    }
  )
);
