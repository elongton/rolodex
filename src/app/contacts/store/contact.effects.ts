import { Actions, Effect } from '@ngrx/effects'
import { Injectable } from '@angular/core';
import { Contact } from '../contact.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as ContactActions from './contact.actions'
import * as UIActions from '../../store/ui/ui.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContactEffects {
  private contactsUrl = 'api/contacts';  // URL to web api
  @Effect()
  downloadContacts = this.actions$
    .ofType(ContactActions.TRY_DOWNLOAD_CONTACTS)
    .switchMap( () => {
      return this.http.get<Contact[]>(this.contactsUrl)
    })
    .mergeMap((contacts: Contact[]) => {
      return [
        {
          type: ContactActions.STORE_CONTACT_ARRAY,
          payload: contacts
        },
        {
          type: UIActions.STOP_LOADING,
        }
      ];
    });

  @Effect()
  addContact = this.actions$
    .ofType(ContactActions.ADD_CONTACT)
    .map((action: ContactActions.AddContact) => {
      return action.payload;
    })
    .switchMap((contact: Contact) => {
      return this.http.post<Contact>(this.contactsUrl, contact, httpOptions)
    })
    .mergeMap(response => {
      return [
        {
          type: ContactActions.ASSIGN_DETAIL_ID,
          payload: response.id
        },
        {
          type: UIActions.CHANGE_DRAWER_APP,
          payload: 'contact_detail'
        },
      ]
    });

  @Effect()
  updateContact = this.actions$
    .ofType(ContactActions.UPDATE_CONTACT)
    .map((action: ContactActions.UpdateContact) => {
      return action.payload;
    })
    .switchMap((result) => {
      const mycontact = {...result.updatedContact, id: result.id}
      return this.http.put<Contact>(this.contactsUrl, mycontact, httpOptions)
    })
    .map(() => {
      return {type: UIActions.STOP_LOADING};
    });

  constructor(private actions$: Actions, private http: HttpClient){
  }

}
