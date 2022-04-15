import { Todo } from '../../interfaces';
import { TodosState } from './';

type TodosActionType =
  |{ type: '[Todos] - add new todo'; payload: Todo; }
  |{ type: '[Todos] - add delete todo'; payload: { id: string }; }
  |{ type: '[Todos] - add toggle todo'; payload: { id: string }; }
  |{ type: '[Todos] - add update todo'; payload: Todo; }
  |{ type: '[Todos] - set edit todo'; payload: Todo; }
  |{ type: '[Todos] - clean edit todo'; }


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
    
    case '[Todos] - add update todo':
      return {
        ...state,
        todos: state.todos.map( todo => (
          todo.id === action.payload.id
            ? { ...action.payload }
            : todo
        )),
      }
    
    case '[Todos] - set edit todo':
      return {
        ...state,
        editTodo: {...action.payload},
      }
    
    case '[Todos] - clean edit todo':
      return {
        ...state,
        editTodo: null,
      }

    default:
      return state;
  }
}