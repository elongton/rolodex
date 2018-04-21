import { Action } from '@ngrx/store';
import { OrganizationActions,
         TRY_DOWNLOAD_ORGANIZATIONS,
         ASSIGN_DETAIL_ID,
         STORE_ORGANIZATION_ARRAY,} from './organization.actions';
import { Organization } from '../organization.model';

import * as fromRoot from '../../store/app.reducer';

export interface OrgState {
  orgs: Organization[];
  detailViewID: number;
};
const initialState: OrgState = {
  orgs: [],
  detailViewID: null,
};

export function orgReducer(state = initialState, action: OrganizationActions) {
  switch (action.type) {
    case TRY_DOWNLOAD_ORGANIZATIONS: {
      return state
      };
    case STORE_ORGANIZATION_ARRAY:
      return {
        ...state,
        orgs: action.payload
      };
    case ASSIGN_DETAIL_ID:
      return {
        ...state,
        detailViewID: action.payload
      };
    default: {
      return state;
    }
  }
}


export const getOrgListState = (state: OrgState) => state.orgs;
