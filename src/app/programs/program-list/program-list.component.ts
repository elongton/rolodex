import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../store/app.reducer';
import * as fromUI from '../../store/ui/ui.reducer';
import * as UI from '../../store/ui/ui.actions';
import * as PR from '../store/program.actions';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})

export class ProgramListComponent implements OnInit {

  isLoading: Observable<fromUI.State>;
  progListState = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['name',
                      'date',
                      'time',
                      'organization',
                      'primary_contacts',
                      'latest_rating',
                      'average_rating'];
  maxDate;
  constructor(private store: Store<fromRoot.AppState>) { }
  ngOnInit() {
    this.store.dispatch(new UI.ChangeHeaderTitle('Programs'))
    this.isLoading = this.store.select('ui')
    this.store.select(fromRoot.progListState)
      .subscribe(
        (result) => {
          this.progListState.data = result
          this.progListState.sort = this.sort;
        })
    this.store.select(fromRoot.progListState)
      .subscribe(progstate => { if (progstate.length == 0){this.getProgs();}})
    this.maxDate = new Date();
  }

  getProgs(){this.store.dispatch(new PR.TryDownloadPrograms())}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.progListState.filter = filterValue;
  }


  clickedARow(row){
    console.log(row)
    this.store.dispatch(new PR.AssignDetailID(row.id))
    this.store.dispatch(new UI.OpenDrawer())
    this.store.dispatch(new UI.ChangeDrawerApp('program_detail'))
  }



}
