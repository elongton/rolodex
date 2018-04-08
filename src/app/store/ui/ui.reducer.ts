import { Action } from '@ngrx/store';
import { UIActions, START_LOADING, STOP_LOADING, CHANGE_HEADER } from './ui.actions';

export interface State {
  isLoading: boolean;
  headerString: string;
};

const initialState: State = {
  isLoading: false,
  headerString: ''
};

export function uiReducer(state = initialState, action: UIActions) {
  switch (action.type) {
    case START_LOADING:
      return {
        isLoading: true
      };
    case STOP_LOADING:
      return {
        isLoading: false
      };
    case CHANGE_HEADER:
      return {
        headerString: action.payload
      };
    default: {
      return state;
    }
  }
}//uiReducer


export const getIsLoadingState = (state: State) => state.isLoading;
export const getHeaderState = (state: State) => state.headerString;
