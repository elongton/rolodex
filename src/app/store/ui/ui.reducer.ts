import { Action } from '@ngrx/store';
import { UIActions,
         START_LOADING,
         STOP_LOADING,
         CHANGE_HEADER,
         CHANGE_DRAWER_APP} from './ui.actions';

export interface State {
  isLoading: boolean;
  headerString: string;
  drawerApp: string;
};

const initialState: State = {
  isLoading: false,
  headerString: '',
  drawerApp: ''
};

export function uiReducer(state = initialState, action: UIActions) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false
      };
    case CHANGE_HEADER:
      return {
        ...state,
        headerString: action.payload
      };
    case CHANGE_DRAWER_APP:
      return {
        ...state,
        drawerApp: action.payload
      };
    default: {
      return state;
    }
  }
}//uiReducer


// export const getIsLoadingState = (state: UiState) => state.isLoading;
// export const getHeaderState = (state: State) => state.headerString;
