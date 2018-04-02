import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { HeaderManagementService } from '../../shared/header-management.service';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

import {Observable} from 'rxjs/Observable';

import { DataStorageService } from '../../shared/datastorage.service';
import { MatTableDataSource, MatSort } from '@angular/material';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

  // contacts: Contact[];
  dataSource;
  filteredString = [];
  myobserver;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['last_name', 'organization', 'phone', 'email'];

  constructor(private headerService: HeaderManagementService,
              private dataService: DataStorageService,
              private contactService: ContactService) { }

  ngOnInit() {
    this.headerService.pageTitle.next('Contacts');
    this.getContacts();


  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  getContacts(){
    this.myobserver = this.contactService.getContacts().subscribe(
                    (contacts: Contact[]) => {
                      this.dataSource = new MatTableDataSource(contacts);
                      this.dataSource.sort = this.sort;
                    },
                    (error) => {console.log(error)}
                  );
  }//getContacts


  ngOnDestroy(){
    this.myobserver.unsubscribe();
  }




}//export class ContactListComponent
