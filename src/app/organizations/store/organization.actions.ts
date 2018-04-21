import { Action } from '@ngrx/store';
import { Organization } from '../organization.model';

export const TRY_DOWNLOAD_ORGANIZATIONS = '[Orgs] Try to Download Organizations';
export const STORE_ORGANIZATION_ARRAY = '[Orgs] Store Organizations';
export const ASSIGN_DETAIL_ID = '[Orgs] Store Detail ID'

export class StoreOrgArray implements Action {
  readonly type = STORE_ORGANIZATION_ARRAY;
  constructor(public payload: Organization[]){}
}

export class TryDownloadOrgs implements Action {
  readonly type = TRY_DOWNLOAD_ORGANIZATIONS;
}

export class AssignDetailID implements Action {
  readonly type = ASSIGN_DETAIL_ID;
  constructor(public payload: number){}
}


export type OrganizationActions =   StoreOrgArray |
                                    AssignDetailID |
                                    TryDownloadOrgs;
