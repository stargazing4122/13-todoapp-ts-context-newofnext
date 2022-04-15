import React from 'react'
import { TodoPage } from './components/TodoPage'
import { TodosProvider } from './context/todos/';

export const TodoApp = () => {
  return (
    <>
      <TodosProvider>
        <TodoPage />
      </TodosProvider>
    </>
  )
}
