import { FC, useReducer } from 'react';

import { TodosContext, todosReducer } from './';
import { Todo } from '../../interfaces';


export interface TodosState {
  todos: Todo[];
}

const TODOS_INITIAL_STATE: TodosState = {
  todos: [{
    id: (new Date().getTime()).toString(),
    title: 'Learn the basic of programming',
    isDone: false,
  }],
}

interface Props {
  children: React.ReactNode;
}


export const TodosProvider: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer( todosReducer, TODOS_INITIAL_STATE);

  //methods
  const addNewTodo = ( todo: Todo ) => {
    dispatch({
      type: '[Todos] - add new todo',
      payload: todo,
    })
  }

  return (
    <TodosContext.Provider value={{
      ...state,
      //methods
      addNewTodo,
    }}>
      { children }
    </TodosContext.Provider>
  )
}