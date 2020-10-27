import { ActionReducerMap } from '@ngrx/store';
import * as fromProduct from '../root-store/product/product.reducer';
export interface AppState {
  product: fromProduct.productState;
}

export const AppReducers: ActionReducerMap<AppState> = {
  product: fromProduct.productReducer,
};
