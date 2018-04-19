import { Actions, Effect } from '@ngrx/effects'
import { Injectable } from '@angular/core';
import { Organization } from '../organization.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as OrganizationActions from './organization.actions'
import * as UIActions from '../../store/ui/ui.actions';
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
      return this.http.get<Organization[]>(this.orgsUrl)
    })
    .mergeMap((contacts: Organization[]) => {
      return [
        {
          type: OrganizationActions.STORE_ORGANIZATION_ARRAY,
          payload: contacts
        },
        {
          type: UIActions.STOP_LOADING,
        }
      ];
    });


  constructor(private actions$: Actions, private http: HttpClient){}
}
