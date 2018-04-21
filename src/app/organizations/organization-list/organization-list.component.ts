import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Organization } from '../organization.model'
import * as fromRoot from '../../store/app.reducer'
import * as fromUi from '../../store/ui/ui.reducer';
import * as UI from '../../store/ui/ui.actions'
import * as OR from '../store/organization.actions'

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {
  isLoading: Observable<fromUi.State>
  orgListState =  new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['name',
                      'contacts',
                      'website',
                      'programs_hosted',
                      'newsletter'];

  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new UI.ChangeHeaderTitle('Organizations'))
    this.isLoading = this.store.select('ui')
    this.store.select(fromRoot.orgListState)
      .subscribe(
        (result) => {
          this.orgListState.data = result
          this.orgListState.sort = this.sort;
        }
      )
    this.store.select(fromRoot.orgListState)
      .subscribe(orgstate => { if (orgstate.length == 0){this.getOrgs();}})
  }
  getOrgs(){this.store.dispatch(new OR.TryDownloadOrgs())}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.orgListState.filter = filterValue;
  }


  clickedARow(row){
    console.log(row)
  }

  ngAfterViewInit() {}

}
