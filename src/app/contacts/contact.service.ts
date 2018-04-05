import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable';
import { Contact } from './contact.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '../store/app.reducer'
import * as UI from '../shared/ui.actions'
import * as CT from '../contacts/store/contact.actions';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContactService {
  private contactsUrl = 'api/contacts';  // URL to web api

  constructor(private http: HttpClient,
              private store: Store<fromRoot.State>,) {}

  downloadContacts(){
    this.store.dispatch(new UI.StartLoading())
    this.http.get<Contact[]>(this.contactsUrl)
      .subscribe((contactData => {
          this.store.dispatch(new CT.DownloadContacts(contactData))
          this.store.dispatch(new UI.StopLoading())
        })
      )//map
  }//getcontacts





  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactsUrl, contact, httpOptions)
  }

}
