import { createContext } from 'react';

import { Todo } from '../../interfaces';


interface ContextProps {
  todos: Todo[];
  addNewTodo: (todo: Todo) => void;
}

export const TodosContext = createContext<ContextProps>({} as ContextProps);
