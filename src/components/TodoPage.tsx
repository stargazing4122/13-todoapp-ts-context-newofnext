import React from 'react'
import { FormAddTodo } from './FormAddTodo'
import TodosTable from './TodosTable'
import { TodoModal } from './ui/TodoModal'

export const TodoPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <TodosTable />
        </div>
        <div className="col-4">
          <FormAddTodo />
        </div>
      </div>

      <TodoModal />
    </div>
  )
}
