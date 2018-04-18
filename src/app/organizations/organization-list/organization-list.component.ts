import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/app.reducer'
import * as UI from '../../store/ui/ui.actions'


@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {

  constructor(private store: Store<fromRoot.AppState>) { }

  orgList: any[]
  orgListState =  new MatTableDataSource();
  displayedColumns = ['name', 'contacts', 'website', 'programs_hosted', 'newsletter'];
  ngOnInit() {
    this.store.dispatch(new UI.ChangeHeaderTitle('Organizations'))
    this.orgList = [
      {name: 'Demco',
       contacts: ['Bob', 'Sally', 'Cheryl', 'David'],
       website: 'demcosoftware.com',
       programs_hosted: 5,
       newsletter: true,
      }]
    this.orgListState.data = this.orgList
  }

  ngAfterViewInit() {}

}
