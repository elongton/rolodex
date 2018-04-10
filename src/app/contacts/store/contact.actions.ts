import { Action } from '@ngrx/store';
import { Contact } from '../contact.model';

export const TRY_DOWNLOAD_CONTACTS = '[Contacts] Try to Download Contacts';
export const STORE_CONTACT_ARRAY = '[Contacts] Store Contacts';
export const ADD_CONTACT = '[Contacts] Add Contact'
export const ASSIGN_DETAIL_ID = '[Contacts] Assign Detail View ID'



export class StoreContactArray implements Action {
  readonly type = STORE_CONTACT_ARRAY;
  constructor(public payload: Contact[]){}
}

export class AddContact implements Action {
  readonly type = ADD_CONTACT;
  constructor(public payload: Contact){}
}

export class AssignDetailID implements Action {
  readonly type = ASSIGN_DETAIL_ID;
  constructor(public payload: number){}
}

export class TryDownloadContacts implements Action {
  readonly type = TRY_DOWNLOAD_CONTACTS;
}


export type ContactActions =  StoreContactArray |
                              AddContact |
                              TryDownloadContacts |
                              AssignDetailID;
