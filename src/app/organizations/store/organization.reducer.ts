import { Action } from '@ngrx/store';
import { OrganizationActions,
         TRY_DOWNLOAD_ORGANIZATIONS,
         STORE_ORGANIZATION_ARRAY,} from './organization.actions';
import { Organization } from '../organization.model';

import * as fromRoot from '../../store/app.reducer';

export interface OrgState {
  orgs: Organization[];
};
const initialState: OrgState = {
  orgs: [],
};

export function orgReducer(state = initialState, action: OrganizationActions) {
  switch (action.type) {
    case TRY_DOWNLOAD_ORGANIZATIONS: {
      return state
      };
    case STORE_ORGANIZATION_ARRAY:
      return {
        ...state,
        contacts: action.payload
      };
    default: {
      return state;
    }
  }
}


export const getOrgState = (state: OrgState) => state.orgs;
