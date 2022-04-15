import React from 'react'
import { TodoRow } from './TodoRow'

const TodosTable = () => {
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
        <TodoRow />
      </tbody>
    </table>
  )
}

export default TodosTable
