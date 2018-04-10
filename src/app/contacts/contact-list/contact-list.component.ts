import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Contact } from '../contact.model';
import {Observable} from 'rxjs/Observable';
import { MatTableDataSource, MatSort } from '@angular/material';
import 'rxjs/add/operator/toPromise';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/app.reducer'
import * as fromUi from '../../store/ui/ui.reducer';
import * as UI from '../../store/ui/ui.actions'
import * as CT from '../store/contact.actions';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  isLoading: Observable<fromUi.State>
  contactListState =  new MatTableDataSource<Contact>();
  filteredString = [];
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['last_name', 'organization', 'phone', 'email'];

  constructor(private store: Store<fromRoot.AppState>){}


  ngOnInit() {
    this.store.dispatch(new UI.ChangeHeaderTitle('Contacts'))
    this.isLoading = this.store.select('ui')
    this.store.select('contact')
      .subscribe(contactstate => {
        this.contactListState.data = contactstate.contacts;
        this.contactListState.sort = this.sort;})
    this.getContacts();
    }


  getContacts(){
    this.store.dispatch(new UI.StartLoading())
    this.store.dispatch(new CT.TryDownloadContacts())
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.contactListState.filter = filterValue;
  }
  clickedARow(row){
    console.log(row)
    this.store.dispatch(new CT.AssignDetailID(row.id))
    this.store.dispatch(new UI.OpenDrawer(true))
    this.store.dispatch(new UI.ChangeDrawerApp('contact_detail'))
  }


}//export class ContactListComponent
