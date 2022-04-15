import { Todo } from '../../interfaces';
import { TodosState } from './';

type TodosActionType =
  |{ type: '[Todos] - add new todo'; payload: Todo; }
  |{ type: '[Todos] - add delete a todo'; payload: { id: string }; }


export const todosReducer = ( state: TodosState, action: TodosActionType):TodosState => {

  switch ( action.type ) {
    case '[Todos] - add new todo':
      return {
        ...state,
        todos: [ ...state.todos, {...action.payload }]
      }

    case '[Todos] - add delete a todo':
      return {
        ...state,
        todos: state.todos.filter( todo => todo.id !== action.payload.id ),
      }

    default:
      return state;
  }
}