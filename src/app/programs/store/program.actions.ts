import { Action } from '@ngrx/store';
import { Program } from '../program.model';

export const TRY_DOWNLOAD_PROGRAMS = '[Progs] Try to Download Programs';
export const STORE_PROGRAM_ARRAY = '[Progs] Store Programs';


export class StoreProgramArray implements Action {
  readonly type = STORE_PROGRAM_ARRAY;
  constructor(public payload: Program[]){}
}

export class TryDownloadPrograms implements Action {
  readonly type = TRY_DOWNLOAD_PROGRAMS;
}

export type ProgramActions =   StoreProgramArray |
                               TryDownloadPrograms;
