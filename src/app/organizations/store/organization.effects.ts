import { Actions, Effect } from '@ngrx/effects'
import { Injectable } from '@angular/core';
import { Organization } from '../organization.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as UI from '../../store/ui/ui.actions'
import * as OrganizationActions from './organization.actions'
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
export class OrganizationEffects {
  private orgsUrl = 'api/organizations';  // URL to web api
  @Effect()
  downloadOrgs= this.actions$
    .ofType(OrganizationActions.TRY_DOWNLOAD_ORGANIZATIONS)
    .switchMap( () => {
      this.store.dispatch(new UI.StartLoading())
      console.log("got to the switchmap")
      return this.http.get<Organization[]>(this.orgsUrl).map((result)=>{console.log(result); return result;})
    })
    .mergeMap((orgList: Organization[]) => {
      return [
        {
          type: OrganizationActions.STORE_ORGANIZATION_ARRAY,
          payload: orgList
        },
        {
          type: UIActions.STOP_LOADING,
        }
      ];
    });


  constructor(private actions$: Actions, private http: HttpClient, private store: Store<fromRoot.AppState> ){}
}
