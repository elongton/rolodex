import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderManagementService } from '../../shared/header-management.service';
import { Contact } from '../contact.model';
import {Observable} from 'rxjs/Observable';

import { DataStorageService } from '../../shared/datastorage.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

  data: Contact[];
  filteredString = [];
  myobserver = this.dataService.getContacts().subscribe(
                  (contacts: Contact[]) => this.data = contacts,
                  (error) => console.log(error)
                );

  constructor(private headerService: HeaderManagementService,
              private dataService: DataStorageService) { }

  ngOnInit() {
    this.headerService.pageTitle.next('Contacts');
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
