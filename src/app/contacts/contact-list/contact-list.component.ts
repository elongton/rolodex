import { Component, OnInit } from '@angular/core';
import { HeaderManagementService } from '../../shared/header-management.service';
import { Contact } from '../contact.model';

import { DataStorageService } from '../../shared/datastorage.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private headerService: HeaderManagementService,
              private dataService: DataStorageService) { }

  ngOnInit() {
    this.headerService.pageTitle.next('Contacts');
    this.dataService.getContacts()
      .subscribe(
        (contacts: Contact[]) => console.log(contacts),
        (error) => console.log(error)
      );
  }



}
