import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/app.reducer'
import * as UI from '../../store/ui/ui.actions'
import * as OR from '../store/organization.actions'

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {

  orgList: any[]
  orgListState =  new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['name', 'contacts', 'website', 'programs_hosted', 'newsletter'];



  constructor(private store: Store<fromRoot.AppState>) { }


  ngOnInit() {
    this.store.dispatch(new UI.ChangeHeaderTitle('Organizations'))
    this.getOrgs();
    this.orgList = []
    this.orgListState.data = this.orgList
    this.orgListState.sort = this.sort;
  }

  getOrgs(){
    this.store.dispatch(new UI.StartLoading())
    this.store.dispatch(new OR.TryDownloadOrgs())
  }

  ngAfterViewInit() {}

}
