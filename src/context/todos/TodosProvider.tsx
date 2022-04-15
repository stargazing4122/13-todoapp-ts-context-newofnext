import { FC, useEffect, useReducer } from 'react';

import { TodosContext, todosReducer } from './';
import { Todo } from '../../interfaces';


export interface TodosState {
  todos: Todo[];
}

const TODOS_INITIAL_STATE: TodosState = JSON.parse(localStorage.getItem('todos-context-next') as string) || {todos: []};


interface Props {
  children: React.ReactNode;
}


export const TodosProvider: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer( todosReducer, TODOS_INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem('todos-context-next', JSON.stringify( state ));
  }, [ state ])

  //methods
  const addNewTodo = ( todo: Todo ) => {
    dispatch({
      type: '[Todos] - add new todo',
      payload: todo,
    })
  };

  const deleteTodo = (todoId: string ) => {
    dispatch({
      type: '[Todos] - add delete a todo',
      payload: { id: todoId },
    })
  }

  return (
    <TodosContext.Provider value={{
      ...state,
      //methods
      addNewTodo,
      deleteTodo,
    }}>
      { children }
    </TodosContext.Provider>
  )
}