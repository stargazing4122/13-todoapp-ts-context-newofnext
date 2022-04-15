import { createContext } from 'react';


interface ContextProps {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}


export const UIContext = createContext<ContextProps>({} as ContextProps);