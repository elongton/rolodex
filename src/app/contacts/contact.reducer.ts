import { Action } from '@ngrx/store';
import { ContactActionsgit  } from './contact.actions';
import { Contact } from './contact.model';


export interface State {
  contacts: Contact[];
};

const initialState: State = {
  contacts: []
};

export function contactReducer(state = initialState, action: UIActions) {
  switch (action.type) {
    case START_LOADING:
      return {
        isLoading: true
      };
    case STOP_LOADING:
      return {
        isLoading: false
      };
    default: {
      return state;
    }
  }
}


export const getIsLoading = (state: State) => state.isLoading;
