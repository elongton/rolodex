import { Action } from '@ngrx/store';
import { ProgramActions,
         TRY_DOWNLOAD_PROGRAMS,
         STORE_PROGRAM_ARRAY,} from './program.actions';
import { Program } from '../program.model';

import * as fromRoot from '../../store/app.reducer';

export interface ProgState {
  programs: Program[];
};
const initialState: ProgState = {
  programs: [],
};

export function progReducer(state = initialState, action: ProgramActions) {
  switch (action.type) {
    case TRY_DOWNLOAD_PROGRAMS: {
      return state
      };
    case STORE_PROGRAM_ARRAY:
      return {
        ...state,
        programs: action.payload
      };
    default: {
      return state;
    }
  }
}


export const getProgListState = (state: ProgState) => state.programs;
