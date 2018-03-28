import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Contact } from './contact.model';

@Injectable()
export class ContactService {
  private contactsUrl = 'api/contacts';  // URL to web api

  constructor(private http: HttpClient,) {}

  getContacts (): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl)
  }

}
