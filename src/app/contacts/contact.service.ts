import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable';
import { Contact } from './contact.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducer'
import * as UI from '../shared/ui.actions'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContactService {
  private contactsUrl = 'api/contacts';  // URL to web api

  constructor(private http: HttpClient,
              private store: Store<fromRoot.State>,) {}

  getContacts(): Observable<Contact[]>{
    this.store.dispatch(new UI.StartLoading())
    return this.http.get<Contact[]>(this.contactsUrl)
      .map((contactData => {
          this.store.dispatch(new UI.StopLoading())
          return contactData;
        })
      )//map
  }//getcontacts
  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactsUrl, contact, httpOptions)
  }

}
