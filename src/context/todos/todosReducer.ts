import { Todo } from '../../interfaces';
import { TodosState } from './';

type TodosActionType =
  |{ type: '[Todos] - add new todo'; payload: Todo; }
  |{ type: '[Todos] - add delete todo'; payload: { id: string }; }
  |{ type: '[Todos] - add toggle todo'; payload: { id: string }; }


export const todosReducer = ( state: TodosState, action: TodosActionType):TodosState => {

  switch ( action.type ) {
    case '[Todos] - add new todo':
      return {
        ...state,
        todos: [ ...state.todos, {...action.payload }]
      }

    case '[Todos] - add delete todo':
      return {
        ...state,
        todos: state.todos.filter( todo => todo.id !== action.payload.id ),
      }

    case '[Todos] - add toggle todo':
      return {
        ...state,
        todos: state.todos.map( todo => (
          todo.id === action.payload.id
            ? {...todo, isDone: !todo.isDone }
            : todo
        ))
      }

    default:
      return state;
  }
}