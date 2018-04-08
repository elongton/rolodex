import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { HeaderManagementService } from '../../shared/header-management.service';
import { Contact } from '../contact.model';
import {Observable} from 'rxjs/Observable';
import { ContactService } from '../contact.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import 'rxjs/add/operator/toPromise';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/app.reducer'
import * as UI from '../../shared/ui.actions'


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  isLoading: Observable<boolean>
  contactListState =  new MatTableDataSource<Contact>();
  filteredString = [];
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['last_name', 'organization', 'phone', 'email'];

  constructor(private headerService: HeaderManagementService,
              private contactService: ContactService,
              private store: Store<fromRoot.State>){}


  ngOnInit() {
    this.headerService.pageTitle.next('Contacts');
    this.isLoading = this.store.select(fromRoot.isLoading);
    this.store.select(fromRoot.contactState)
      .subscribe(contactstate => {
        this.contactListState.data = contactstate;
        this.contactListState.sort = this.sort;})
    this.getContacts();
    }


  getContacts(){
    this.contactService.downloadContacts();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.contactListState.filter = filterValue;
  }
  clickedARow(row){
    console.log(row)
  }


}//export class ContactListComponent


// this.httpService.getContacts()
//   .subscribe(
//     (contacts) => {
//       // console.log(contacts)
//       this.dataSource = new MatTableDataSource(contacts);
//       this.dataSource.sort = this.sort;
//     });
