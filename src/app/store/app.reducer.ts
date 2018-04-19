import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUi from './ui/ui.reducer';
import * as fromContact from '../contacts/store/contact.reducer';
import * as fromOrg from '../organizations/store/organization.reducer';

export interface AppState {
  ui: fromUi.State,
  contact: fromContact.ContactState,
  organization: fromOrg.OrgState,
}

export const reducers: ActionReducerMap<AppState> = {
  ui: fromUi.uiReducer,
  contact: fromContact.contactReducer,
  organization: fromOrg.orgReducer,
};

//Define Slice Feature Selectors
export const getUiState = createFeatureSelector<fromUi.State>('ui');
export const getContactState = createFeatureSelector<fromContact.ContactState>('contact');
//created selectors

//Define Selectors
export const drawerState = createSelector(getUiState, fromUi.getIsDrawerOpen)
export const drawerApp = createSelector(getUiState, fromUi.getDrawerApp)
