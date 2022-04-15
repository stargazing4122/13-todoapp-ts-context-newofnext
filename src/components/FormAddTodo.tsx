import React, { FormEvent, useContext } from 'react';
import { TodosContext } from '../context/todos';

import { useForm } from '../hooks/useForm'
import { Todo } from '../interfaces';


interface FormData {
  title: string,
}
const initialForm: FormData = {
  title: '',
}

export const FormAddTodo = () => {

  // hoooks
  const { formValues, handleInputChange } = useForm( initialForm )
  const { title } = formValues;

  const { addNewTodo } = useContext(TodosContext)

  // functions
  const handleFormSubmit = ( e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: ( new Date().getTime()).toString(),
      title,
      isDone: false,
    }
    addNewTodo( newTodo );
  }

  return (
    <div>
      <h3>Add new Todo:</h3>
      <form onSubmit={ handleFormSubmit }>
        <input 
          type="text" 
          className="form-control mb-3"
          placeholder="input a todo ..."
          name="title"
          value={ title }
          onChange={ handleInputChange }
        />
        <input 
          className="btn btn-info mb-3" 
          type="submit" 
          value="Add" 
        />
      </form>
    </div>
  )
}
