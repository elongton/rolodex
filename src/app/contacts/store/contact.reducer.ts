import { Action } from '@ngrx/store';
import { ContactActions,
         ADD_CONTACT,
         UPDATE_CONTACT,
         TRY_DOWNLOAD_CONTACTS,
         STORE_CONTACT_ARRAY,
         ASSIGN_DETAIL_ID,} from './contact.actions';
import { Contact } from '../contact.model';

import * as fromRoot from '../../store/app.reducer';

export interface ContactState {
  contacts: Contact[];
  contactHttpState: boolean;
  detailViewID: number;
};

const initialState: ContactState = {
  contacts: [],
  contactHttpState: false,
  detailViewID: 2,
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
    case ASSIGN_DETAIL_ID:
      return {
        ...state,
        detailViewID: action.payload
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }



    case UPDATE_CONTACT:
      const updatedContact = {...action.payload.updatedContact, id: action.payload.id}
      const contacts = [...state.contacts]
      const contactToUpdate = contacts.find(x => x.id == action.payload.id)
      const contactIndex = contacts.indexOf(contactToUpdate)
      contacts[contactIndex] = updatedContact;
      return {
        ...state,
        contacts: contacts
      }






    default: {
      return state;
    }
  }
}


export const getContactState = (state: ContactState) => state.contacts;
