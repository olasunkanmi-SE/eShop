import { Action } from '@ngrx/store';
export enum uiActionTypes {
  startLoading = '[UI] Start Loading',
  stopLoading = '[UI] Stop Loading',
}

export class startLoading implements Action {
  readonly type = uiActionTypes.startLoading;
}

export class stopLoading implements Action {
  readonly type = uiActionTypes.stopLoading;
}

export type UIactions = startLoading | stopLoading;
