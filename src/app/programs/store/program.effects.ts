import { Actions, Effect } from '@ngrx/effects'
import { Injectable } from '@angular/core';
import { Program } from '../program.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as UI from '../../store/ui/ui.actions'
import * as ProgramActions from './program.actions'
import * as UIActions from '../../store/ui/ui.actions';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/app.reducer'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


//////////////RETRIEVE///////////
@Injectable()
export class ProgramEffects {
  private progsUrl = 'api/programs';  // URL to web api
  @Effect()
  downloadProgs= this.actions$
    .ofType(ProgramActions.TRY_DOWNLOAD_PROGRAMS)
    .switchMap( () => {
      this.store.dispatch(new UI.StartLoading())
      return this.http.get<Program[]>(this.progsUrl)
    })
    .mergeMap((progList: Program[]) => {
      return [
        {
          type: ProgramActions.STORE_PROGRAM_ARRAY,
          payload: progList
        },
        {
          type: UIActions.STOP_LOADING,
        }
      ];
    });


  constructor(private actions$: Actions, private http: HttpClient, private store: Store<fromRoot.AppState> ){}
}
