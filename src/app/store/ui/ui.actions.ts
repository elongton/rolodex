import { Action } from '@ngrx/store';

export const START_LOADING = '[UI] Start Loading';
export const STOP_LOADING = '[UI] Stop Loading';
export const CHANGE_HEADER = '[UI] Change Header'
export const CHANGE_DRAWER_APP = '[UI] Change Drawer APP'
export const OPEN_DRAWER = '[UI] Open the Drawer'
export const CLOSE_DRAWER = '[UI] Close the Drawer'
export const EDITING_ITEM = '[UI] Editing either Contact, Org, or Program'


export class StartLoading implements Action {
  readonly type = START_LOADING;
}

export class StopLoading implements Action {
  readonly type = STOP_LOADING;
}
export class ChangeHeaderTitle implements Action {
  readonly type = CHANGE_HEADER;
  constructor(public payload: string){}
}

export class ChangeDrawerApp implements Action {
  readonly type = CHANGE_DRAWER_APP;
  constructor(public payload: string){}
}

export class OpenDrawer implements Action {
  readonly type = OPEN_DRAWER;
}
export class CloseDrawer implements Action {
  readonly type = CLOSE_DRAWER;
}

export class EditingItem implements Action {
  readonly type = EDITING_ITEM;
  constructor(public payload: boolean){}
}





export type UIActions = StartLoading |
                        StopLoading |
                        ChangeHeaderTitle |
                        ChangeDrawerApp |
                        EditingItem |
                        CloseDrawer |
                        OpenDrawer ;
