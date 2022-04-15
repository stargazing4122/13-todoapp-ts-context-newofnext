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
      <td>{ todo.isDone? '✔️' : '❌'}</td>
      <td>
        <button
        type="button"
        className="btn btn-success"
        onClick={ handleButtonClick }
        >
          <i className="fa-solid fa-arrow-right-arrow-left"></i>
        </button>
        
        <button
        type="button"
        className="btn btn-info"
        onClick={ handleButtonClick }
        >
          <i className="fa-solid fa-pen"></i>
        </button>

        <button
        type="button"
        className="btn btn-danger"
        onClick={ handleButtonClick }
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </tr>
  )
}
