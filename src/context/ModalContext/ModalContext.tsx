import { Context, ReactNode, createContext } from "react";

type ModalContextType = {
  unsetModal: () => void;
  setModal: (modal: ReactNode) => void;
};

export const ModalContext: Context<ModalContextType | undefined> =
  createContext<ModalContextType | undefined>(undefined);
