import { Action } from '@ngrx/store';
import { Program } from '../program.model';

export const TRY_DOWNLOAD_PROGRAMS = '[Progs] Try to Download Programs';
export const STORE_PROGRAM_ARRAY = '[Progs] Store Programs';
export const ASSIGN_DETAIL_ID = '[Progs] Assign Detail ID'

export class StoreProgramArray implements Action {
  readonly type = STORE_PROGRAM_ARRAY;
  constructor(public payload: Program[]){}
}

export class TryDownloadPrograms implements Action {
  readonly type = TRY_DOWNLOAD_PROGRAMS;
}

export class AssignDetailID implements Action {
  readonly type = ASSIGN_DETAIL_ID;
  constructor(public payload: number){}
}


export type ProgramActions =   StoreProgramArray |
                               AssignDetailID |
                               TryDownloadPrograms;
