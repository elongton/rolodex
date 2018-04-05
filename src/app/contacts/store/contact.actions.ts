import { Action } from '@ngrx/store';
import { Contact } from '../contact.model';

export const DOWNLOAD_CONTACTS = '[Contacts] Download Contacts';

export class SetContacts implements Action {
  readonly type = DOWNLOAD_CONTACTS;

  constructor(public payload: Contact[]){}
}

// export class StopLoading implements Action {
//   readonly type = STOP_LOADING;
// }

export type ContactActions = SetContacts;
