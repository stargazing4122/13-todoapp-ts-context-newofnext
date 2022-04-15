import { createContext } from 'react';

import { Todo } from '../../interfaces';


interface ContextProps {
  todos: Todo[];
}

export const TodosContext = createContext<ContextProps>({} as ContextProps);
