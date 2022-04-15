import { createContext } from 'react';

import { Todo } from '../../interfaces';


interface ContextProps {
  todos: Todo[];
  editTodo: Todo | null;
  //methods
  addNewTodo: (todo: Todo) => void;
  deleteTodo: (todoId: string) => void;
  updateTodo: (newTodo: Todo) => void;
  toggleTodo: (todoId: string) => void;
  setEditTodo: (todo: Todo) => void;
  cleanEditTodo: () => void;
}

export const TodosContext = createContext<ContextProps>({} as ContextProps);
