import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderManagementService } from '../../shared/header-management.service';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

import {Observable} from 'rxjs/Observable';

import { DataStorageService } from '../../shared/datastorage.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

  contacts: Contact[];
  filteredString = [];
  myobserver;

  constructor(private headerService: HeaderManagementService,
              private dataService: DataStorageService,
              private contactService: ContactService) { }

  ngOnInit() {
    this.headerService.pageTitle.next('Contacts');
    this.getContacts();
  }

  getContacts(){
    this.myobserver = this.contactService.getContacts().subscribe(
                    (contacts: Contact[]) => {this.contacts = contacts;},
                    (error) => console.log(error)
                  );
  }

  addContact(){
    this.dataService.putContact()
    .subscribe(res => {console.log(res);},
               err => {console.log("Error occured");}
               );
       }
  ngOnDestroy(){
    this.myobserver.unsubscribe();
  }

}//export class ContactListComponent
