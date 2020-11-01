
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromProduct from './product/product.reducer';
import * as fromUi from './ui/ui.reducer';
export interface AppState {
  product: fromProduct.productState;
  ui: fromUi.UIstate;
}

export const AppReducers: ActionReducerMap<AppState> = {
  product: fromProduct.productReducer,
  ui: fromUi.UIreducer,
};

//Create selector for UI

export const getUiState = createFeatureSelector<fromUi.UIstate>('ui');
export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading);
