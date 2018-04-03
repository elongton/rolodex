import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { HeaderManagementService } from '../../shared/header-management.service';
import { Contact } from '../contact.model';
import {Observable} from 'rxjs/Observable';
import { HttpService } from '../../shared/http.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import 'rxjs/add/operator/toPromise';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer'
import * as UI from '../../shared/ui.actions'


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  // contacts: Contact[];
  dataSource;
  isLoading: Observable<boolean>;
  filteredString = [];
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['last_name', 'organization', 'phone', 'email'];

  constructor(private headerService: HeaderManagementService,
              private http: HttpService,
              private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.isLoading = this.store.select(fromRoot.getIsLoading);
    this.headerService.pageTitle.next('Contacts');
    this.http.getContacts()
      // .subscribe(
      //   (contacts) => {
      //     console.log(contacts)
      //     this.dataSource = new MatTableDataSource(contacts);
      //     this.dataSource.sort = this.sort;
      //   });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  clickedARow(row){
    console.log(row)
  }


}//export class ContactListComponent
