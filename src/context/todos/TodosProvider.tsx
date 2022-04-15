import { FC, useEffect, useReducer } from 'react';

import { TodosContext, todosReducer } from './';
import { Todo } from '../../interfaces';


export interface TodosState {
  todos: Todo[];
  editTodo: Todo | null;
}

const TODOS_INITIAL_STATE: TodosState = 
  JSON.parse(localStorage.getItem('todos-context-next') as string) || 
  {
    todos: [],
    editTodo: null,
  };


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

  const deleteTodo = ( todoId: string ) => {
    dispatch({
      type: '[Todos] - add delete todo',
      payload: { id: todoId },
    })
  }

  const updateTodo = ( newTodo: Todo) => {
    dispatch({
      type: '[Todos] - add update todo',
      payload: newTodo,
    })
  }

  const toggleTodo = ( todoId: string ) => {
    dispatch({
      type: '[Todos] - add toggle todo',
      payload: { id: todoId },
    })
  }

  const setEditTodo = ( todo: Todo) => {
    dispatch({
      type: '[Todos] - set edit todo',
      payload: todo,
    })
  }

  const cleanEditTodo = () => {
    dispatch({
      type: '[Todos] - clean edit todo',
    })
  }

  return (
    <TodosContext.Provider value={{
      ...state,
      //methods
      addNewTodo,
      deleteTodo,
      updateTodo,
      toggleTodo,
      setEditTodo,
      cleanEditTodo,
    }}>
      { children }
    </TodosContext.Provider>
  )
}