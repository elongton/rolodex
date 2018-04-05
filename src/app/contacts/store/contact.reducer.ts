import { Action } from '@ngrx/store';
import { ContactActions, DOWNLOAD_CONTACTS, ADD_CONTACT } from './contact.actions';
import { Contact } from '../contact.model';

import * as fromRoot from '../../store/app.reducer';

export interface ContactState {
  contacts: Contact[];
};

const initialState: ContactState = {
  contacts: []
};

export function contactReducer(state = initialState, action: ContactActions) {
  switch (action.type) {
    case DOWNLOAD_CONTACTS:
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
