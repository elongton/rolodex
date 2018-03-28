import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Contact } from './contact.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ContactService {
  private contactsUrl = 'api/contacts';  // URL to web api

  constructor(private http: HttpClient,) {}

  getContacts (): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl)
  }

  /** POST: add a new hero to the server */
  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactsUrl, contact, httpOptions)
  }

}
