import React, { FC } from 'react'
import { Todo } from '../interfaces'

interface Props {
  todo: Todo
}
export const TodoRow: FC<Props> = ({ todo }) => {
  return (
    <tr>
      <td>{ todo.id }</td>
      <td>{ todo.title }</td>
      <td>{ todo.isDone? 'Done' : 'Not done'}</td>
      <td>
        <button
        type="button"
        className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  )
}
