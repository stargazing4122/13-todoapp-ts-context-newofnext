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
  const openModal = () => {
    dispatch({
      type: '[UI] - Open Modal',
    })
  }

  const closeModal = () => {
    dispatch({
      type: '[UI] - Close Modal',
    })
  }

  return (
    <UIContext.Provider value={{
      ...state,
      //methods
      openModal,
      closeModal,
    }}>
      { children }
    </UIContext.Provider>
  )
}