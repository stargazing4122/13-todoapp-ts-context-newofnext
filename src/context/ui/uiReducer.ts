import { UIState } from './';

type UIActionType =
  |{ type: '[UI] - Open Modal'; }


export const uiReducer = ( state: UIState, action: UIActionType):UIState => {

  switch ( action.type ) {
    case '[UI] - Open Modal':
      return {
        ...state,
      }

    default:
      return state;
  }
}