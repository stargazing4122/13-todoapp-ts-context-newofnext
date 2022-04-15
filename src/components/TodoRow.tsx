import React, { FC, useContext } from 'react'
import { TodosContext } from '../context/todos'
import { Todo } from '../interfaces'

interface Props {
  todo: Todo
}
export const TodoRow: FC<Props> = ({ todo }) => {

  const { deleteTodo } = useContext(TodosContext);

  const handleButtonClick = () => {
    deleteTodo( todo.id );
  }
  return (
    <tr>
      <td>{ todo.id }</td>
      <td>{ todo.title }</td>
      <td>{ todo.isDone? 'Done' : 'Not done'}</td>
      <td>
        <button
        type="button"
        className="btn btn-danger"
        onClick={ handleButtonClick }
        >
          Delete
        </button>
      </td>
    </tr>
  )
}
