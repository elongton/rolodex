import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Organization } from '../organization.model'
import * as fromRoot from '../../store/app.reducer'
import * as UI from '../../store/ui/ui.actions'
import * as OR from '../store/organization.actions'

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {
  orgListState =  new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['name', 'contacts', 'website', 'programs_hosted', 'newsletter'];

  orgasm: Observable<Organization[]>


  constructor(private store: Store<fromRoot.AppState>) { }


  ngOnInit() {
    this.store.dispatch(new UI.ChangeHeaderTitle('Organizations'))
    this.getOrgs();
    this.orgasm = this.store.select(fromRoot.orgListState)
    this.orgListState.data = [];
    this.orgListState.sort = this.sort;
      // .subscribe(
      //   (result) => {
      //     this.orgListState.data = result
      //     this.orgListState.sort = this.sort;
      //   }
      // )

  }

  getOrgs(){
    this.store.dispatch(new OR.TryDownloadOrgs())
  }

  ngAfterViewInit() {}

}
