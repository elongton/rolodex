import { Action } from '@ngrx/store';
import { ContactActions, ADD_CONTACT, TRY_DOWNLOAD_CONTACTS, STORE_CONTACT_ARRAY} from './contact.actions';
import { Contact } from '../contact.model';

import * as fromRoot from '../../store/app.reducer';

export interface ContactState {
  contacts: Contact[];
  contactHttpState: boolean;
};

const initialState: ContactState = {
  contacts: [],
  contactHttpState: false
};

export function contactReducer(state = initialState, action: ContactActions) {
  switch (action.type) {
    case TRY_DOWNLOAD_CONTACTS: {
      return state
      };
    case STORE_CONTACT_ARRAY:
      return {
        ...state,
        contacts: action.payload
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    default: {
      return state;
    }
  }
}


export const getContactState = (state: ContactState) => state.contacts;
