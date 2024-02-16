import { UserData } from "@/type/account/userType";
import { create } from "zustand";

interface UserStore {
  user: UserData | null;
  setUser: (userData: UserData) => void;
  clearUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (userData: UserData) => set({ user: userData }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
