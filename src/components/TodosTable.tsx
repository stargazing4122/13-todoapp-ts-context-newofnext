import React, { useContext } from 'react'
import { TodosContext } from '../context/todos'
import { TodoRow } from './TodoRow'

const TodosTable = () => {
  const { todos } = useContext(TodosContext);
  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Done</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          todos.map( todo => (
            <TodoRow key={ todo.id } todo={ todo }/>
          ))
        }
      </tbody>
    </table>
  )
}

export default TodosTable
