import { createContext } from 'react';


interface ContextProps {
  isModalOpen: boolean;
}


export const UIContext = createContext<ContextProps>({} as ContextProps);