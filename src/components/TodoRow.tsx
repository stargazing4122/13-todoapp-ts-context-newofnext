import React, { FC, useContext } from 'react'
import { TodosContext } from '../context/todos'
import { Todo } from '../interfaces'

interface Props {
  todo: Todo
}
export const TodoRow: FC<Props> = ({ todo }) => {

  const { deleteTodo, toggleTodo } = useContext(TodosContext);

  const handleDeleteClick = () => {
    deleteTodo( todo.id );
  }
  const handleToggleClick = () => {
    toggleTodo( todo.id );
  }
  const handleUpdateClick = () => {
    
  }
  return (
    <tr>
      <td>{ todo.id }</td>
      <td>{ todo.title }</td>
      <td>{ todo.isDone? '✔️' : '❌'}</td>
      <td>
        <button
        type="button"
        className="btn btn-success"
        onClick={ handleToggleClick }
        >
          <i className="fa-solid fa-arrow-right-arrow-left"></i>
        </button>
        
        <button
        type="button"
        className="btn btn-info"
        onClick={ handleUpdateClick }
        >
          <i className="fa-solid fa-pen"></i>
        </button>

        <button
        type="button"
        className="btn btn-danger"
        onClick={ handleDeleteClick }
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </tr>
  )
}
