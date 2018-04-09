import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUi from './ui/ui.reducer';
import * as fromContact from '../contacts/store/contact.reducer';

export interface AppState {
  ui: fromUi.State,
  contact: fromContact.ContactState
}

export const reducers: ActionReducerMap<AppState> = {
  ui: fromUi.uiReducer,
  contact: fromContact.contactReducer
};


// export const getUiState = createFeatureSelector<fromUi.State>('ui');
// export const getContactState = createFeatureSelector<fromContact.ContactState>('contact');
//created selectors
// export const isLoading = createSelector(getUiState, fromUi.getIsLoadingState);
// export const headerTitle = createSelector(getUiState, fromUi.getHeaderState);
// export const contactState = createSelector(getContactState, fromContact.getContactState);