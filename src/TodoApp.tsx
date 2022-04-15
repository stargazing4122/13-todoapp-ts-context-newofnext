import React from 'react'
import { TodoPage } from './components/TodoPage'
import { TodosProvider } from './context/todos/';
import { UIProvider } from './context/ui/';

export const TodoApp = () => {
  return (
    <>
      <TodosProvider>
        <UIProvider>
          <TodoPage />
        </UIProvider>
      </TodosProvider>
    </>
  )
}
