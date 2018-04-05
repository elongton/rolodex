import { Action } from '@ngrx/store';
import { ContactActions, DOWNLOAD_CONTACTS } from './contact.actions';
import { Contact } from '../contact.model';

import * as fromRoot from '../../app.reducer';

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
    default: {
      return state;
    }
  }
}


export const downloadContacts = (state: ContactState) => state.contacts;
