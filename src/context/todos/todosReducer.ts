import { Todo } from '../../interfaces';
import { TodosState } from './';

type TodosActionType =
  |{ type: '[Todos] - add new todo'; payload: Todo; }


export const todosReducer = ( state: TodosState, action: TodosActionType):TodosState => {

  switch ( action.type ) {
    case '[Todos] - add new todo':
      return {
        ...state,
        todos: [ ...state.todos, {...action.payload }]
      }

    default:
      return state;
  }
}