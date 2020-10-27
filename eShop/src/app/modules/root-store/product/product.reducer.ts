import { ActionReducerMap } from '@ngrx/store';
export interface productState {}
export function productReducer(
  state: productState,
  action
): ActionReducerMap<productState> {
  return state;
}
