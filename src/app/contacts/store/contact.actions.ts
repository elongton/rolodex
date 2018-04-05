import { Action } from '@ngrx/store';
import { Contact } from '../contact.model';

export const DOWNLOAD_CONTACTS = '[Contacts] Download Contacts';
export const ADD_CONTACT = '[Contacts] Add Contact'


export class DownloadContacts implements Action {
  readonly type = DOWNLOAD_CONTACTS;
  constructor(public payload: Contact[]){}
}

export class AddContact implements Action {
  readonly type = ADD_CONTACT;
  constructor(public payload: Contact){}
}


export type ContactActions = DownloadContacts | AddContact;
