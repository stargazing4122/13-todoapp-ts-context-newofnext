import { TodosState } from './';

type TodosActionType =
  |{ type: '[Todos] - add new todo'; }


export const todosReducer = ( state: TodosState, action: TodosActionType):TodosState => {

  switch ( action.type ) {
    case '[Todos] - add new todo':
      return {
        ...state,
      }

    default:
      return state;
  }
}