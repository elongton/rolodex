import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable';
import { Contact } from '../contacts/contact.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducer'
import * as UI from './ui.actions'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HttpService {
  private contactsUrl = 'api/contacts';  // URL to web api

  constructor(private http: HttpClient,
              private store: Store<fromRoot.State>,) {}

  getContacts(){
    this.store.dispatch(new UI.StartLoading())
    return this.http.get<Contact[]>(this.contactsUrl)
      .subscribe(
            (contacts: Contact[]) => {
              this.store.dispatch(new UI.StopLoading())
              return contacts;
            },
            (error) => {console.log(error)}
        );
  }
  /** POST: add a new hero to the server */
  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactsUrl, contact, httpOptions)
  }

}
