import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUi from './ui/ui.reducer';
import * as fromContact from '../contacts/store/contact.reducer';
import * as fromOrg from '../organizations/store/organization.reducer';
import * as fromProg from '../programs/store/program.reducer';

export interface AppState {
  ui: fromUi.State,
  contact: fromContact.ContactState,
  organization: fromOrg.OrgState,
  program: fromProg.ProgState,
}

export const reducers: ActionReducerMap<AppState> = {
  ui: fromUi.uiReducer,
  contact: fromContact.contactReducer,
  organization: fromOrg.orgReducer,
  program: fromProg.progReducer
};

//Define Slice Feature Selectors
export const getUiState = createFeatureSelector<fromUi.State>('ui');
export const getContactState = createFeatureSelector<fromContact.ContactState>('contact');
export const getOrgState = createFeatureSelector<fromOrg.OrgState>('organization');
export const getProgState = createFeatureSelector<fromProg.ProgState>('program');
//created selectors

//Define Selectors

//ui stuff
export const drawerState = createSelector(getUiState, fromUi.getIsDrawerOpen)
export const drawerApp = createSelector(getUiState, fromUi.getDrawerApp)

//org stuff
export const orgListState = createSelector(getOrgState, fromOrg.getOrgListState)

//program stuff
export const progListState = createSelector(getProgState, fromProg.getProgListState)
