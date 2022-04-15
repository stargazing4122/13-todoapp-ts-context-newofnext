import React, { FC, useReducer } from 'react';

import { UIContext, uiReducer } from './';


export interface UIState {
  isModalOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isModalOpen: false,
}

interface Props {
  children: React.ReactNode;
}


export const UIProvider: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer( uiReducer, UI_INITIAL_STATE);

  //methods
  //...

  return (
    <UIContext.Provider value={{
      ...state,
      //methods
      //...
    }}>
      { children }
    </UIContext.Provider>
  )
}