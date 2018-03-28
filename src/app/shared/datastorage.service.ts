import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

import { Contact } from '../contacts/contact.model';
//make sure you inject the contact service

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient) {}

  storeContact() {
    return this.httpClient.put('path_to_json', 'body')
  }

    getContacts() {
      return this.httpClient.get<Contact[]>('http://localhost:4200/assets/contacts.json')
        .map(
          (contacts) => {return contacts}
        )
    }

    putContact() {
      return this.httpClient.put('http://localhost:4200/assets/contacts.json', 'this is a test')
    }

}
