import { Action } from '@ngrx/store';
import { Organization } from '../organization.model';

export const TRY_DOWNLOAD_ORGANIZATIONS = '[Orgs] Try to Download Organizations';
export const STORE_ORGANIZATION_ARRAY = '[Orgs] Store Organizations';


export class StoreOrgArray implements Action {
  readonly type = STORE_ORGANIZATION_ARRAY;
  constructor(public payload: Organization[]){}
}

export class TryDownloadOrgs implements Action {
  readonly type = TRY_DOWNLOAD_ORGANIZATIONS;
}

export type OrganizationActions =   StoreOrgArray |
                                    TryDownloadOrgs;
