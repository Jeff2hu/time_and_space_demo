import { AlertType } from "@/type/component/alertType";
import { create } from "zustand";

interface AlertStore {
  alert: AlertType;
  setAlert: (alert: AlertType) => void;
  clearAlert: () => void;
}

const useAlertStore = create<AlertStore>((set) => ({
  alert: {
    open: false,
    message: "",
  },
  setAlert: (alert: AlertType) => set({ alert }),
  clearAlert: () => set({ alert: { open: false, message: "" } }),
}));

export default useAlertStore;
