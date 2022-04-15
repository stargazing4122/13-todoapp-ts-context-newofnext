import { UIState } from './';

type UIActionType =
  |{ type: '[UI] - Open Modal'; }
  |{ type: '[UI] - Close Modal'; }


export const uiReducer = ( state: UIState, action: UIActionType):UIState => {

  switch ( action.type ) {
    case '[UI] - Open Modal':
      return {
        ...state,
        isModalOpen: true,
      }

    case '[UI] - Close Modal':
      return {
        ...state,
        isModalOpen: false,
      }

    default:
      return state;
  }
}